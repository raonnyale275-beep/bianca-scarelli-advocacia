import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Direction = "left" | "right" | "up" | "down";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: ElementType;
}

const offsetClasses: Record<Direction, string> = {
  left: "-translate-x-12",
  right: "translate-x-12",
  up: "translate-y-10",
  down: "-translate-y-10",
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [delay]);

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `opacity-0 ${offsetClasses[direction]}`
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
