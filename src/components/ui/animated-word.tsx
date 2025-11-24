'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedWordProps {
  words: string[];
  className?: string;
  delay?: number;
}

const fonts = [
  'font-sans', // Inter (base)
  'font-mono', // Monospace
  'font-serif', // Serif
  'font-sans', // Back to Inter
];

export function AnimatedWord({ words, className = '', delay = 0 }: AnimatedWordProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    // Start the animation after the delay
    const startTimeout = setTimeout(() => {
      // Word rotation interval (4 seconds)
      const wordInterval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, 4000);

      return () => clearInterval(wordInterval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [words.length, delay]);

  useEffect(() => {
    // Font shuffle during transition
    let fontShuffleInterval: NodeJS.Timeout;

    // Start font shuffle slightly before word change
    const shuffleTimeout = setTimeout(() => {
      let shuffleCount = 0;
      fontShuffleInterval = setInterval(() => {
        setFontIndex((prev) => (prev + 1) % fonts.length);
        shuffleCount++;

        // Stop shuffling after going through all fonts
        if (shuffleCount >= fonts.length) {
          clearInterval(fontShuffleInterval);
          setFontIndex(0); // Reset to base font
        }
      }, 150); // 150ms per font change
    }, delay + 3500); // Start shuffle 500ms before word change

    return () => {
      clearTimeout(shuffleTimeout);
      if (fontShuffleInterval) clearInterval(fontShuffleInterval);
    };
  }, [currentIndex, delay]);

  return (
    <span className={`inline-block align-baseline ${className}`}>
      <span className="inline-block overflow-hidden relative" style={{ verticalAlign: 'baseline' }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={`${words[currentIndex]}-${currentIndex}`}
            initial={{
              y: '100%',
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: '-100%',
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1], // Custom easing for slot machine effect
              opacity: { duration: 0.3 },
            }}
            className={`inline-block ${fonts[fontIndex]} transition-all duration-150`}
            style={{ display: 'inline-block' }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
