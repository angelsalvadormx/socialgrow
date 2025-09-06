import { useEffect, useState } from "react";

function useIsSafari() {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isSafariBrowser =
      ua.includes("safari") && !ua.includes("chrome") && !ua.includes("android");
    setIsSafari(isSafariBrowser);
  }, []);

  return isSafari;
}

export default useIsSafari