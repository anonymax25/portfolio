import { useRef, useEffect, useState } from 'react';

interface TiltOptions {
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  reset?: boolean;
}

export const useTilt = (options: TiltOptions = {}) => {
  const { maxTilt = 15, perspective = 1000, scale = 1.05, speed = 400, reset = true } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState({});

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;

      const tiltX = -percentY * maxTilt;
      const tiltY = percentX * maxTilt;

      setTiltStyle({
        transform: `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: `transform ${speed}ms ease-out`,
      });
    };

    const handleMouseLeave = () => {
      if (reset) {
        setTiltStyle({
          transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: `transform ${speed}ms ease-out`,
        });
      }
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt, perspective, scale, speed, reset]);

  return { ref, style: tiltStyle };
};
