export const setVh = () => {
    const vh = window.innerHeight * 0.01;
    console.log("setVh", vh);
    document.documentElement.style.setProperty("--vh", `${vh}px`);
};
  