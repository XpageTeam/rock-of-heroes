import {Swiper, Pagination, EffectFade, Autoplay} from "swiper/js/swiper.esm";
import domReady from "./xpage/ready";

Swiper.use([Pagination, EffectFade, Autoplay]);

domReady(() => {
	new Swiper(".bq-slider__slider", {
		effect: "fade",
		autoplay: {
			delay: 2000
		},
		pagination: {
			el: ".bq-slider__slider-pagination .swiper-pagination",
			type: "bullets",
			clickable: true,
		}
	});
});