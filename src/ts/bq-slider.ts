import {Swiper, Pagination, EffectFade} from "swiper/js/swiper.esm";
import domReady from "./xpage/ready";

Swiper.use([Pagination, EffectFade]);

domReady(() => {
	new Swiper(".bq-slider__slider", {
		effect: "fade",
		pagination: {
			el: ".bq-slider__slider-pagination .swiper-pagination",
			type: "bullets",
			clickable: true,
		}
	});
});