import {Swiper, Navigation, Keyboard} from "swiper/js/swiper.esm";
import domReady from "./xpage/ready";
import App from './xpage/core';

Swiper.use([Navigation, Keyboard]);

domReady(() => {
	for (const sliderContainer of App.elementsGetter(".news"))
		new Swiper(sliderContainer.querySelector(".news-slider") as HTMLElement, {
			loop: true,
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
			navigation: {
				prevEl: sliderContainer.querySelector(".swiper-button-prev") as HTMLElement,
				nextEl: sliderContainer.querySelector(".swiper-button-next") as HTMLElement
			}
		});
});