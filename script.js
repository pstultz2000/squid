document.addEventListener('DOMContentLoaded', () => {
    const squidContainer = document.getElementById('squid-container');
    const bubbleContainer = document.getElementById('bubble-container');
    const squidsAscii = ['くコ:彡', 'く=:彡', 'くC:彡']; // Add more variations of squid ASCII art here
    
    function getRandomSquidAscii() {
        return squidsAscii[Math.floor(Math.random() * squidsAscii.length)];
    }
    
    function spawnSquid() {
        const squid = document.createElement('div');
        squid.className = 'squid';
        squid.textContent = getRandomSquidAscii();
        
        const randomLeft = Math.random() * window.innerWidth;
        squid.style.left = `${randomLeft}px`;

        const randomDuration = 5 + Math.random() * 5; // Duration between 5 to 10 seconds
        squid.style.animationDuration = `${randomDuration}s`;

        // Randomly decide if the squid should be mirrored
        if (Math.random() > 0.5) {
            squid.classList.add('mirror');
        }

        squidContainer.appendChild(squid);

        // Remove the squid after it finishes its animation
        squid.addEventListener('animationend', () => {
            squidContainer.removeChild(squid);
        });
    }

    function spawnBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        const randomLeft = Math.random() * window.innerWidth;
        const randomSize = 5 + Math.random() * 10; // Size between 5px to 15px
        const randomDuration = 3 + Math.random() * 7; // Duration between 3 to 10 seconds
        
        bubble.style.left = `${randomLeft}px`;
        bubble.style.width = `${randomSize}px`;
        bubble.style.height = `${randomSize}px`;
        bubble.style.animationDuration = `${randomDuration}s`;

        bubbleContainer.appendChild(bubble);

        // Remove the bubble after it finishes its animation
        bubble.addEventListener('animationend', () => {
            bubbleContainer.removeChild(bubble);
        });
    }

    // Spawn a squid every 2 seconds
    setInterval(spawnSquid, 2000);

    // Spawn bubbles every 1 second
    setInterval(spawnBubble, 1000);
});
