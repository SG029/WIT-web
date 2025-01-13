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
// Variables for cursor size and position
// const cursor = document.getElementById('cursor');
let cursorSize = 25;  // Default cursor size

// Update cursor position based on mouse movement
document.addEventListener('mousemove', (e) => {
  const x = e.clientX - cursorSize / 2; // Center the cursor
  const y = e.clientY - cursorSize / 2;
  
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});

// Change cursor size when hovering over an h1 tag
const headings = document.querySelectorAll('h1');

headings.forEach((heading) => {
  heading.addEventListener('mouseenter', () => {
    cursorSize = 130; // Increase cursor size when hovering over h1
    cursor.style.width = `${cursorSize}px`;
    cursor.style.height = `${cursorSize}px`;
  });

  heading.addEventListener('mouseleave', () => {
    cursorSize = 25; // Reset cursor size
    cursor.style.width = `${cursorSize}px`;
    cursor.style.height = `${cursorSize}px`;
  });
});


const headingss = document.querySelectorAll('h2');

headingss.forEach((heading) => {
  heading.addEventListener('mouseenter', () => {
    cursorSize = 100; // Increase cursor size when hovering over h1
    cursor.style.width = `${cursorSize}px`;
    cursor.style.height = `${cursorSize}px`;
  });

  heading.addEventListener('mouseleave', () => {
    cursorSize = 25; // Reset cursor size
    cursor.style.width = `${cursorSize}px`;
    cursor.style.height = `${cursorSize}px`;
  });
});

// var clutter = "";

// document.querySelector(".about-us-content>p").textContent.split("").forEach(function(dets) {
//   clutter += `<span>${dets}</span>`;
// });

// document.querySelector(".about-us-content>p").innerHTML = clutter;

// gsap.to(".about-us-content>p>span", {
//   scrollTrigger: {
//     trigger: ".about-us-content>p>span",
//     start: "top bottom", // First value is for element, second is for the screen
//     end: "bottom top",
//     scroller: "#main",
//     scrub: 0.1,
//     markers:true,
//   },
//   stagger: 0.01,
//   color: "#fff",
// });
