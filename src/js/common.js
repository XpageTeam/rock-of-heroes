import $ from "jquery";
import is from "is_js";

window.jQuery = $
window.$ = $
// window.is = is

require("./jquery.fancybox.js");

document.addEventListener("DOMContentLoaded", function(){
	$(".fancybox").fancybox({
		trapFocus: false,
		touch: false,
		buttons: ["fullscreen", "close", "thumbs"],
		image: {
			preload: true,
		},
		transitionEffect: "slide",
	});

	if (is.mac() || is.ios())
        $(".h-menu__link[href*='#']").click(function(e){
            e.preventDefault();

            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, 300)
        });
});

