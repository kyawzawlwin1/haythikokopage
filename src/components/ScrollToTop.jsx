import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 💡 စာမျက်နှာ လမ်းကြောင်း ပြောင်းလဲသွားတိုင်း Window ရဲ့ Scroll ကို အပေါ်ဆုံး (0,0) ဆီသို့ တွန်းပို့ပေးသည်
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;