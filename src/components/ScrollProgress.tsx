import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setScrollPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-[0%] z-[9999]"
        style={{ scaleX: scrollYProgress }}
      />
      {scrollPercent > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-8 right-8 z-[9999] bg-accent text-accent-content w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm shadow-lg"
        >
          {scrollPercent}%
        </motion.div>
      )}
    </>
  );
};
