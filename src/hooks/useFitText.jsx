import { useEffect, useRef } from "react";

function debounce(fn, delay = 100) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

function fitTextWidth(el, minFontSize = 1, maxFontSize = 300) {
  if (!el) return;

  el.style.whiteSpace = "nowrap";

  const containerWidth = el.clientWidth;
  let precision = 0.01;
  let fontSize;

  while (maxFontSize - minFontSize > precision) {
    fontSize = (minFontSize + maxFontSize) / 2;
    el.style.fontSize = fontSize + "px";
    const currentWidth = el.scrollWidth;

    if (currentWidth > containerWidth) {
      maxFontSize = fontSize;
    } else {
      minFontSize = fontSize;
    }
  }

  el.style.fontSize = minFontSize + "px";
}

function useFitText(deps = []) {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const applyFit = () => fitTextWidth(element);

    // Wait until fonts are ready, like your original
    document.fonts.ready.then(() => {
      applyFit();
    });

    const handleResize = debounce(applyFit, 100);
    window.addEventListener("resize", handleResize);

    // Run once initially
    applyFit();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, deps);

  return ref;
}

export default useFitText;
