import { useEffect } from "react";

function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");

            e.target
              .querySelectorAll(".bar-fill")
              .forEach((b) =>
                b.classList.add("animated")
              );
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document
      .querySelectorAll(".reveal")
      .forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);
}

export default useScrollReveal;