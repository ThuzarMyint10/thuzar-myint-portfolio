import { useEffect } from "react";

import { SECTIONS } from "../constants/sections";

function useActiveSection(setActive) {
  useEffect(() => {
    const onScroll = () => {
      const activationPoint = 120;

      for (const id of SECTIONS) {
        const el =
          document.getElementById(id);

        if (el) {
          const r =
            el.getBoundingClientRect();

          if (
            r.top <= activationPoint &&
            r.bottom >= activationPoint
          ) {
            setActive(id);

            break;
          }
        }
      }
    };

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );
      window.removeEventListener("resize", onScroll);
    };
  }, [setActive]);
}

export default useActiveSection;