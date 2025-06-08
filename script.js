document.querySelectorAll('.mailbutton').forEach((button) => {
  const strength = 10; 

  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotationX = -y / strength; // Negative for inverse wobble
    const rotationY = x / strength;

    button.style.transform = `translate(${x / strength}px, ${y / strength}px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  });

  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translate(0, 0) rotateX(0) rotateY(0)';
  });
});

const cursor = document.querySelector('.cursor');
let cursorSize = 25;

// Animate cursor with GSAP
document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    duration: 0.5,
    x: e.clientX - cursorSize / 2,
    y: e.clientY - cursorSize / 2,
    ease: "power2.out"
  });
});

// Animate cursor size for h1 elements
const headings = document.querySelectorAll('h1');

headings.forEach((heading) => {
  heading.addEventListener('mouseenter', () => {
    gsap.to(cursor, {
      duration: 0.3,
      width: 130,
      height: 130,
      ease: "back.out"
    });
    cursorSize = 130;
  });

  heading.addEventListener('mouseleave', () => {
    gsap.to(cursor, {
      duration: 0.3,
      width: 25,
      height: 25,
      ease: "back.out"
    });
    cursorSize = 25;
  });
});

// Animate cursor size for h2 elements
const headingss = document.querySelectorAll('h2');

headingss.forEach((heading) => {
  heading.addEventListener('mouseenter', () => {
    gsap.to(cursor, {
      duration: 0.3,
      width: 100,
      height: 100,
      ease: "back.out"
    });
    cursorSize = 100;
  });

  heading.addEventListener('mouseleave', () => {
    gsap.to(cursor, {
      duration: 0.3,
      width: 25,
      height: 25,
      ease: "back.out"
    });
    cursorSize = 25;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const loaderScreen = document.getElementById("loaderScreen");
  const mainContentWrapper = document.getElementById("mainContentWrapper");
  const progressBar = document.getElementById("progressBar");

  let progress = 0;
  const interval = setInterval(() => {
    progress += 5; // Increment progress
    progressBar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      // Hide loader and start scrolling up
      setTimeout(() => {
        loaderScreen.style.transition = "transform 0.5s ease-in-out";
        loaderScreen.style.transform = "translateY(-100%)"; // Scroll up
        mainContentWrapper.style.display = "block"; // Reveal content
      }, 200); // Delay to ensure progress bar finishes
    }
  }, 100); // Adjust the interval speed (100ms)
});