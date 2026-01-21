import { useEffect, useRef, useCallback } from 'react';

const FloatingDots = ({
  count = 140, // 🎯 Professional density
  color = 'rgba(96,165,250,0.6)',
  glowColor = 'rgba(96,165,250,0.85)', // ✨ richer glow
  minRadius = 0.2,
  maxRadius = 0.55,
  minSpeed = 0.6,
  maxSpeed = 1.6,
  className = 'absolute inset-0',
}) => {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const animationRef = useRef(null);
  const viewSizeRef = useRef({ width: 0, height: 0 });

  // 🔹 Initialize dots
  const initDots = useCallback(
    (width, height) =>
      Array.from({ length: count }, () => {
        const radius = Math.random() * (maxRadius - minRadius) + minRadius;

        const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius,
          speed,
          opacity: Math.random() * 0.4 + 0.4, // 🔥 brighter core
        };
      }),
    [count, maxRadius, minRadius, maxSpeed, minSpeed]
  );

  // 🎨 Draw dots with premium glow
  const drawDots = useCallback(
    (ctx, dots, width, height) => {
      ctx.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);

        ctx.fillStyle = color.replace(/[\d.]+\)$/g, `${dot.opacity})`);

        ctx.shadowBlur = dot.radius * (8 + dot.opacity * 4); // ✨ alive glow
        ctx.shadowColor = glowColor;

        ctx.fill();
      });
    },
    [color, glowColor]
  );

  // ⬆️ Bottom → Top movement
  const updateDots = (dots, width, height) =>
    dots.map((dot) => {
      const nextY = dot.y - dot.speed;

      if (nextY < -dot.radius * 2) {
        return {
          ...dot,
          x: Math.random() * width,
          y: height + dot.radius,
        };
      }

      return { ...dot, y: nextY };
    });

  // 📐 Resize handling (Hi-DPI safe)
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

  // ▶️ Animation loop
  useEffect(() => {
    const animate = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const { width, height } = viewSizeRef.current;

      dotsRef.current = updateDots(dotsRef.current, width, height);
      drawDots(ctx, dotsRef.current, width, height);

      animationRef.current = requestAnimationFrame(animate);
    };

    handleResize();
    animationRef.current = requestAnimationFrame(animate);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [drawDots, handleResize]);

  return <canvas ref={canvasRef} className={`absolute inset-0 pointer-events-none ${className}`} />;
};

export default FloatingDots;
