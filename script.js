function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Locomotive Scroll with native scrollbar
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
        lerp: .1, // Smoothness factor
        multiplier: 1, // Scroll speed
        class: "is-reveal",
        scrollbarContainer: true, // Allow native scrollbar
    });

    // Update ScrollTrigger when Locomotive Scroll moves
    locoScroll.on("scroll", ScrollTrigger.update);

    // Connect Locomotive Scroll to ScrollTrigger
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        pinType: document.querySelector(".main").style.transform
            ? "transform"
            : "fixed",
    });

    // Refresh Locomotive Scroll and ScrollTrigger
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
init();
