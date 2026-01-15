import { useEffect, useRef } from "react";
import styles from './HorizontalScrollSection.module.css'

export default function HorizontalScrollSection({children, className=""}) {
  const ref = useRef(null);
  const touchStartY = useRef(0);

  useEffect(() => {
    const el = ref.current;

    /* ---------- DESKTOP WHEEL ---------- */
    const onWheel = (e) => {
      const canScroll =
        el.scrollWidth > el.clientWidth &&
        !(
          (el.scrollLeft === 0 && e.deltaY < 0) ||
          (el.scrollLeft + el.clientWidth >= el.scrollWidth && e.deltaY > 0)
        );

      if (!canScroll) return;

      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    /* ---------- MOBILE TOUCH ---------- */
    const onTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY.current - currentY;

      const canScroll =
        el.scrollWidth > el.clientWidth &&
        !(
          (el.scrollLeft === 0 && deltaY < 0) ||
          (el.scrollLeft + el.clientWidth >= el.scrollWidth && deltaY > 0)
        );

      if (!canScroll) return;

      e.preventDefault();
      el.scrollLeft += deltaY;
      touchStartY.current = currentY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <section ref={ref} className={`${styles.horizontalJack} ${className}`}>
      {children}
    </section>
  );
}
