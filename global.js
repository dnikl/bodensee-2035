const scrollTopButton = document.querySelector(".scroll-top");

if (scrollTopButton) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let footerVisible = false;
  const updateScrollTopButton = () => {
    const visible = window.scrollY > Math.max(500, window.innerHeight * 0.75) && !footerVisible;
    scrollTopButton.hidden = false;
    scrollTopButton.classList.toggle("is-visible", visible);
    scrollTopButton.setAttribute("aria-hidden", String(!visible));
    scrollTopButton.tabIndex = visible ? 0 : -1;
  };

  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "auto" : "smooth" });
  });

  window.addEventListener("scroll", updateScrollTopButton, { passive: true });
  const footer = document.querySelector("footer");
  if (footer && "IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      footerVisible = entry.isIntersecting;
      updateScrollTopButton();
    }).observe(footer);
  }
  updateScrollTopButton();
}
