import { useEffect, useState } from 'react';

const AnimatedText = ({
  texts,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseTime = 1200,
  className = '',
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    // ⌨️ Typing
    if (!isDeleting && displayText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, typingSpeed);
    }

    // ⌫ Deleting
    else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length - 1));
      }, deletingSpeed);
    }

    // ⏸ Pause before delete
    else if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    }

    // 🔁 Move to next word (IMPORTANT FIX)
    else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 200);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`inline-block text-primary glow-text ${className}`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default AnimatedText;
