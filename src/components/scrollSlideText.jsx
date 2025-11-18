import { useEffect, useRef, useState } from "react";
import styles from "./Bendi.module.css";

export default function ScrollSlideText({
  children,
  closedPadding = "0.5rem 1rem",
  openPadding = "3rem 1rem",
  className = ""
}) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.7;
      setIsOpen(rect.top < triggerPoint && rect.bottom > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.text} ${isOpen ? styles.open : ""} ${className}`}
      style={{
        "--closed-padding": closedPadding,
        "--open-padding": openPadding,
      }}
    >
      {children}
    </div>
  );
}
