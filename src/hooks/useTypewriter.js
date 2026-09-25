import { useState, useEffect, useRef } from "react";

function useTypewriter(texts) {
  const [display, setDisplay] = useState("");

  const state = useRef({
    ri: 0,
    ci: 0,
    del: false,
  });

  useEffect(() => {
    let timer;

    const step = () => {
      const { ri, ci, del } = state.current;

      const txt = texts[ri];

      if (!del) {
        const next = ci + 1;

        setDisplay(txt.slice(0, next));

        state.current.ci = next;

        if (next >= txt.length) {
          timer = setTimeout(() => {
            state.current.del = true;

            step();
          }, 1900);
        } else {
          timer = setTimeout(step, 62);
        }
      } else {
        const next = ci - 1;

        setDisplay(txt.slice(0, next));

        state.current.ci = next;

        if (next === 0) {
          state.current.del = false;

          state.current.ri =
            (ri + 1) % texts.length;

          timer = setTimeout(step, 320);
        } else {
          timer = setTimeout(step, 38);
        }
      }
    };

    step();

    return () => clearTimeout(timer);
  }, [texts]);

  return display;
}

export default useTypewriter;