import React, { useEffect, useRef, useState } from "react";

const TypingText = ({ text = "", speed = 50 }) => {
  const [index, setIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const ref = useRef(null);

  // 🔍 Detectar si el componente está visible
  useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
          observer.disconnect(); // Solo una vez
        }
      },
      {
        threshold: 0.4, // Empieza cuando el 40% del elemento esté visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
      observerRefValue = ref.current;
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, []);

  // ✍️ Efecto de escritura una vez visible
  useEffect(() => {
    if (!startTyping || index >= text.length) return;

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [startTyping, index, text, speed]);

  return (
    <p ref={ref}>
      {text.slice(0, index)}
      <span className="cursor">|</span>
    </p>
  );
};

export default TypingText;
