"use client";
import { useState, useEffect, useCallback, useRef } from "react";

const SLIDES = ["s1","s2","s3","s4","s5","s6","s7","s8","s9","s10","s11","s12","s13","s14"];

export function useSlide() {
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(0);

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = SLIDES.indexOf(e.target.id);
            if (idx !== -1) {
              setCurrent(idx);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    SLIDES.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const goPage = useCallback((dir: number) => {
    let next: number;
    if (dir === 1 && currentRef.current === SLIDES.length - 1) {
      next = 0;
    } else {
      next = Math.max(0, Math.min(SLIDES.length - 1, currentRef.current + dir));
    }
    setCurrent(next);
    document.getElementById(SLIDES[next])?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return { current, total: SLIDES.length, goPage };
}
