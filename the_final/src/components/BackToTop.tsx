import { useState } from "react";
import "../sass/main.scss"; 

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div
      className={`back-to-top-button rounded-[50%] ${
        isVisible ? "visible" : "invisible"
      }`}
      onClick={scrollToTop}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" />
      </svg>
    </div>
  );
};

export default BackToTop;
