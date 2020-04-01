import { useEffect } from "react";

function useBackgroundColor(color) {
  useEffect(() => {
    document.body.style.backgroundColor = color;

    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, [color]);
}

export default useBackgroundColor;
