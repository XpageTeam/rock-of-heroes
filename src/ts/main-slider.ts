import {Swiper, Pagination, EffectFade} from "swiper/js/swiper.esm";
import domReady from "./xpage/ready";

Swiper.use([Pagination, EffectFade]);

domReady(() => {
    new Swiper(".main-slider", {
        effect: "fade",
        pagination: {
            el: ".main-slider__pagination .swiper-pagination",
            type: "bullets",
            clickable: true,
        }
    });
});