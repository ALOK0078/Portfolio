
import { useState, useEffect } from 'react';

interface TypingEffectProps {
  texts: string[];
  speed?: number;
  delay?: number;
  className?: string;
  isDark: boolean;
}

const TypingEffect = ({ texts, speed = 100, delay = 2000, className = "", isDark }: TypingEffectProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      const targetText = texts[currentTextIndex];
      if (currentText.length < targetText.length) {
        timeout = setTimeout(() => {
          setCurrentText(targetText.slice(0, currentText.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delay);
      }
    } else {
      timeout = setTimeout(() => {
        setCurrentText('');
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isTyping, texts, speed, delay]);

  return (
    <span className={`${className} ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingEffect;
