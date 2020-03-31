import "./main-slider";
import "./bq-slider";
import "./peoples-slider";
import "./news-slider";
import "./forms";
import domReady from "./xpage/ready";
// import App from './xpage/core';
import MobileMenu from './xpage/mobileMenu';

domReady(() => {
	document.body.classList.remove("loading");
	document.body.classList.add("loaded");

	// App.each('.ms-decor path', (el: SVGPathElement) => {
	// 	el.style.strokeDasharray = el.getTotalLength()+', '+ el.getTotalLength()
	// 	el.style.strokeDashoffset = el.getTotalLength().toString()
	// })

	const menu = new MobileMenu({
		burger: ".head__burger",
        menu: ".mobile-menu__cont",
        menuActiveClass: "js__opened",
        bodyActiveClass: "js__menu-open",
        ignoreWarnings: false,
        fixBody: true,
        media: "(max-width: 1000px)"
	})
});