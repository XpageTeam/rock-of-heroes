import {Swiper, Navigation, Keyboard} from "swiper/js/swiper.esm";
import domReady from "./xpage/ready";
import App from './xpage/core';

Swiper.use([Navigation, Keyboard]);

domReady(() => {
	for (const sliderContainer of App.elementsGetter(".peoples"))
		new Swiper(sliderContainer.querySelector(".p-slider") as HTMLElement, {
			loop: true,
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
			slidesPerView: 1,
			spaceBetween: 20,
			navigation: {
				prevEl: sliderContainer.querySelector(".swiper-button-prev") as HTMLElement,
				nextEl: sliderContainer.querySelector(".swiper-button-next") as HTMLElement
			},
			breakpoints: {
				1300: {
					spaceBetween: 43,
					slidesPerView: 4
				},
				1100: {
					spaceBetween: 20,
					slidesPerView: 4
				},
				800: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				660: {
					spaceBetween: 20,
					slidesPerView: 2
				}
			}
		});
});