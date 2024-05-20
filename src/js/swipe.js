import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
Swiper.use([Pagination]);

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  autoplay: {
    delay: 3000,
  },
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
