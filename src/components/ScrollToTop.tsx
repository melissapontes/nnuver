import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to the element smoothly with header offset
    if (hash) {
      const id = hash.replace("#", "");
      // Wait for the DOM to paint the new route before querying the element
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          const headerOffset = 80; // compensate sticky header height
          const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      });
      return;
    }

    // No hash: default to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}

