import { useEffect, useRef, useCallback } from 'react';

const FloatingDots = ({
  count = 380,
  color = 'rgba(96,165,250,0.6)',
  glowColor = 'rgba(96,165,250,0.8)',
  minRadius = 0.15,
  maxRadius = 0.6,
  minSpeed = 0.7,
  maxSpeed = 1.8,
  className = 'absolute inset-0',
}) => {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const animationRef = useRef(null);
  const viewSizeRef = useRef({ width: 0, height: 0 });

  const initDots = useCallback(
    (width, height) => {
      const dots = [];
      for (let i = 0; i < count; i++) {
        const radius = Math.random() * (maxRadius - minRadius) + minRadius + 0.5;

        const speed = (Math.random() * (maxSpeed - minSpeed) + minSpeed) * 10;

        dots.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius, // 🔥 3× size
          speed, // 🔥 3× speed
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
      return dots;
    },
    [count, maxRadius, minRadius, maxSpeed, minSpeed]
  );

  const drawDots = useCallback(
    (ctx, dots, width, height) => {
      ctx.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = color.replace(/[\d.]+\)$/g, `${dot.opacity})`);
        ctx.shadowBlur = dot.radius * 8;
        ctx.shadowColor = glowColor;
        ctx.fill();
      });
    },
    [color, glowColor]
  );

  const updateDots = (dots, width, height) =>
    dots.map((dot) => {
      const nextY = dot.y + dot.speed; // ⬇️ move down

      // if dot goes BELOW the screen
      if (nextY > height + dot.radius * 2) {
        return {
          ...dot,
          x: Math.random() * width,
          y: -dot.radius, // respawn at TOP
        };
      }

      return { ...dot, y: nextY };
    });

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const { width, height } = parent.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    viewSizeRef.current = { width, height };
    dotsRef.current = initDots(width, height);
  }, [initDots]);

  useEffect(() => {
    const frame = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const { width, height } = viewSizeRef.current;
      dotsRef.current = updateDots(dotsRef.current, width, height);
      drawDots(ctx, dotsRef.current, width, height);

      animationRef.current = requestAnimationFrame(frame);
    };

    handleResize();
    animationRef.current = requestAnimationFrame(frame);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [drawDots, handleResize]);

  return <canvas ref={canvasRef} className={`absolute inset-0 pointer-events-none ${className}`} />;
};

export default FloatingDots;
