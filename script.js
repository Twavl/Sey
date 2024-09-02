// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Enhanced fade-in effect for content sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.content').forEach((section) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    observer.observe(section);
});

// Smooth dynamic header color change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    const maxScroll = 100;
    const opacity = Math.min(0.9, 0.8 + (scrollPosition / maxScroll) * 0.1);
    
    header.style.backgroundColor = `rgba(10, 10, 10, ${opacity})`;
    header.style.transition = 'background-color 0.3s ease';
});

// Improved pulsating effect for the main heading
const mainHeading = document.querySelector('h1');
let pulseInterval;

const startPulse = () => {
    mainHeading.classList.add('pulse');
    pulseInterval = setInterval(() => {
        mainHeading.classList.remove('pulse');
        setTimeout(() => mainHeading.classList.add('pulse'), 50);
    }, 3000);
};

const stopPulse = () => {
    clearInterval(pulseInterval);
    mainHeading.classList.remove('pulse');
};

startPulse();
mainHeading.addEventListener('mouseover', stopPulse);
mainHeading.addEventListener('mouseout', startPulse);

// Add this to your CSS:
// .pulse {
//     animation: pulse 1.5s cubic-bezier(0.25, 0.1, 0.25, 1);
// }
// @keyframes pulse {
//     0% { transform: scale(1); }
//     50% { transform: scale(1.05); }
//     100% { transform: scale(1); }
// }

// Enhanced interactive hover effect for list items
document.querySelectorAll('ul li').forEach((item) => {
    item.style.transition = 'transform 0.3s ease, color 0.3s ease';
    item.addEventListener('mouseover', () => {
        item.style.transform = 'translateX(10px) scale(1.05)';
        item.style.color = '#007bff'; // Change to your preferred highlight color
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'translateX(0) scale(1)';
        item.style.color = ''; // Reset to original color
    });
});
