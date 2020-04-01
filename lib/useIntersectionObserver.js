import { useEffect } from "react";

export const useIntersectionObserver = ({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = "0px"
}) => {
  useEffect(() => {
    if (!root) {
      return;
    }

    const observer = new IntersectionObserver(onIntersect, {
      root: root.current,
      rootMargin,
      threshold
    });

    if (!target) {
      return;
    }

    observer.observe(target.current);

    // Let's clean up after ourselves.
    return () => {
      observer.unobserve(target.current);
    };
  });
};
