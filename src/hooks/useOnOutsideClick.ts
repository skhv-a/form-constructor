import { MutableRefObject, useEffect } from "react";

const useOnOutsideClick = (
  ref: MutableRefObject<HTMLElement | null>,
  onOutsideClick: (e: MouseEvent) => void
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onOutsideClick(e);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, onOutsideClick]);
};

export default useOnOutsideClick;
