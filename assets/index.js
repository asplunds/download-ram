const docLoaded = new Promise(resolve => document.addEventListener("DOMContentLoaded", resolve));

;(async () => {

    await docLoaded;

    window.addEventListener("scroll", e => {
        document.body.classList[window.scrollY ? "add" : "remove"]("scrolled-top")
    
        const infoBoxes = [...document.querySelectorAll(".parallax")];

        for (info of infoBoxes) {
            const { top } = info.getBoundingClientRect(info);
            const windowHeight = window.innerHeight;
            
            const parallax = top / windowHeight;
            const rotation = parallax - 0.5;

            info.style.setProperty("--percentage", rotation);
            
            const parallaxShown = parallax > 0.1 && parallax < 0.7;
            const parallaxReveals = info.querySelectorAll(".parallax-reveal");

            if (info.classList.contains("parallax-reveal")) {
                info.classList[parallaxShown ? "add" : "remove"]("parallax-shown");
                info.classList[!parallaxShown ? "add" : "remove"]("parallax-hidden");
            }
            
        }
    
    });



})();