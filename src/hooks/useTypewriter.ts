import { useState, useEffect } from 'react';

interface TypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  loop?: boolean;
}

export const useTypewriter = ({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
  loop = true,
}: TypewriterOptions) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false);
          setIsDeleting(true);
          return;
        }

        if (!isDeleting) {
          // Typing
          if (text.length < currentWord.length) {
            setText(currentWord.slice(0, text.length + 1));
          } else {
            // Finished typing, pause before deleting
            setIsPaused(true);
          }
        } else {
          // Deleting
          if (text.length > 0) {
            setText(currentWord.slice(0, text.length - 1));
          } else {
            // Finished deleting, move to next word
            setIsDeleting(false);
            if (loop || wordIndex < words.length - 1) {
              setWordIndex((prev) => (prev + 1) % words.length);
            }
          }
        }
      },
      isPaused ? delayBetweenWords : isDeleting ? deleteSpeed : typeSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    isPaused,
    wordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    delayBetweenWords,
    loop,
  ]);

  return text;
};
