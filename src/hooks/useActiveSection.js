import { useEffect } from "react";

import { SECTIONS } from "../constants/sections";

function useActiveSection(setActive) {
  useEffect(() => {
    const onScroll = () => {
      for (const id of SECTIONS) {
        const el =
          document.getElementById(id);

        if (el) {
          const r =
            el.getBoundingClientRect();

          if (
            r.top <= 90 &&
            r.bottom >= 90
          ) {
            setActive(id);

            break;
          }
        }
      }
    };

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        onScroll
      );
  }, [setActive]);
}

export default useActiveSection;