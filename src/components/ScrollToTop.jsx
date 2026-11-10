import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 💡 it always stick to top when page jumping
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;