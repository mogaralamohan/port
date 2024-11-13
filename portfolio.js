window.addEventListener("load", () => {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        mainContent.style.display = 'block';
        loader.style.display = 'none';
    });
});

// Project click interaction (scale & shadow effect)
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        project.classList.toggle('clicked');
    });
});

// Gesture control for brightness based on device tilt
window.addEventListener('deviceorientation', (event) => {
    const x = event.gamma; // left-to-right tilt in degrees

    if (x > 10) {
        document.body.style.filter = "brightness(0.7)";
    } else if (x < -10) {
        document.body.style.filter = "brightness(1.3)";
    } else {
        document.body.style.filter = "brightness(1)";
    }
});

// Scroll animation (fade-in for projects when they come into view)
const projects = document.querySelectorAll('.project');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.5 });

projects.forEach(project => {
    observer.observe(project);
});

// Touch interaction for fireworks effect on tapping a project
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('touchstart', () => {
        confetti({
            spread: 90,
            angle: 45,
            particleCount: 100,
            origin: { x: 0.5, y: 0.5 }
        });
    });
});
