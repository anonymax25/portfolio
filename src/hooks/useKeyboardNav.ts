import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useKeyboardNav = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Skip if user is typing in an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }

      // Navigation shortcuts (Alt + Number)
      if (e.altKey && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
        switch (e.key) {
          case '1':
            e.preventDefault();
            navigate('/');
            break;
          case '2':
            e.preventDefault();
            navigate('/skills');
            break;
          case '3':
            e.preventDefault();
            navigate('/portfolio');
            break;
          case '4':
            e.preventDefault();
            navigate('/contact');
            break;
          case 'h':
            e.preventDefault();
            navigate('/');
            break;
          case 's':
            e.preventDefault();
            navigate('/skills');
            break;
          case 'p':
            e.preventDefault();
            navigate('/portfolio');
            break;
          case 'c':
            e.preventDefault();
            navigate('/contact');
            break;
        }
      }

      // Scroll shortcuts
      if (!e.altKey && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
        switch (e.key) {
          case 'Home':
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
          case 'End':
            e.preventDefault();
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            break;
        }
      }

      // Arrow key navigation (Shift + Arrow)
      if (e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey) {
        switch (e.key) {
          case 'ArrowLeft':
            e.preventDefault();
            window.history.back();
            break;
          case 'ArrowRight':
            e.preventDefault();
            window.history.forward();
            break;
          case 'ArrowUp':
            e.preventDefault();
            window.scrollBy({ top: -300, behavior: 'smooth' });
            break;
          case 'ArrowDown':
            e.preventDefault();
            window.scrollBy({ top: 300, behavior: 'smooth' });
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);
};
