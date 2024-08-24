document.addEventListener("DOMContentLoaded", function() {
    const particleContainer = document.querySelector(".particles");

    function createParticle() {
        const particle = document.createElement("div");
        particle.className = "particle";
        particleContainer.appendChild(particle);

        // Randomize position and size
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 5 + 2; // Size of particles
        const duration = Math.random() * 5 + 2; // Animation duration

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = Math.random(); // Random opacity

        // Create keyframes dynamically
        const animationName = `particleAnimation${Math.random().toString(36).substring(7)}`;
        const keyframes = `
            @keyframes ${animationName} {
                0% { transform: translateY(0); opacity: ${Math.random()}; }
                100% { transform: translateY(-${Math.random() * 200}px); opacity: 0; }
            }
        `;
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = keyframes;
        document.head.appendChild(styleSheet);

        particle.style.animation = `${animationName} ${duration}s linear infinite`;
    }

    function generateParticles() {
        // Clear existing particles
        particleContainer.innerHTML = '';

        // Generate particles based on window size
        const numParticles = Math.floor(window.innerWidth * window.innerHeight / 10000); // Adjust density
        for (let i = 0; i < numParticles; i++) {
            createParticle();
        }
    }

    // Generate particles on load and resize
    generateParticles();
    window.addEventListener('resize', generateParticles);
});
