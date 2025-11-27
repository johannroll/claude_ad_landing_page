'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedWordProps {
  words: string[];
  className?: string;
  animatedClassName?: string;
  delay?: number;
}

export function AnimatedWord({ words, className = '', animatedClassName = '', delay = 0 }: AnimatedWordProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  // Calculate approximate width based on longest word
  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), '');
  const approximateWidth = `${longestWord.length * 0.6}em`;

  useEffect(() => {
    // Start the animation after the delay
    const startTimeout = setTimeout(() => {
      // Mark as animated in when we start the interval
      setHasAnimatedIn(true);

      // Word rotation interval (3 seconds)
      const wordInterval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, 3000);

      return () => clearInterval(wordInterval);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
    };
  }, [words.length, delay]);

  // Determine which className to use based on whether we've animated in
  const isFirstWord = currentIndex === 0 && !hasAnimatedIn;
  const wordClassName = isFirstWord ? className : animatedClassName;

  return (
    <span
      className="inline-block overflow-hidden relative"
      style={{
        verticalAlign: 'baseline',
        minWidth: approximateWidth,
        height: '1em',
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentIndex}
          initial={
            hasAnimatedIn
              ? {
                  y: '100%',
                  opacity: 0,
                }
              : {
                  y: 0,
                  opacity: 1,
                }
          }
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: '-100%',
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className={`block text-center leading-[inherit] ${wordClassName}`}
          style={{
            minWidth: approximateWidth,
            height: '1em',
            willChange: 'transform',
          }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
