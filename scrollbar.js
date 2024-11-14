document.addEventListener('DOMContentLoaded', (event) => {
    let currentFact = "Welcome to VisitPaul.com!";
    let recentFacts = [];
    const maxRecentFacts = 4;

const facts = [
    "Truth isn’t a place; it’s a journey.",
    "Dare to ask: What haven’t I thought of yet?",
    "Perspective: It’s not what you see, it’s how you see.",
    "What if knowing less is just the beginning?",
    "Step outside yourself- view it all differently!",
];

function getUniqueFact() {
    let randomIndex;
    let potentialFact;

    do {
        randomIndex = Math.floor(Math.random() * facts.length);
        potentialFact = facts[randomIndex];
    } while (recentFacts.includes(potentialFact));

    recentFacts.push(potentialFact);
    if (recentFacts.length > maxRecentFacts) {
        recentFacts.shift();
    }

    return potentialFact;
}

function changeFact() {
    currentFact = getUniqueFact();
    updateDisplay(); // Update the display after changing the fact
}

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString(); // e.g., '12:35:19 PM'
    adjustMessageForWidth(timeString);
}

function adjustMessageForWidth(timeString) {
    const viewportWidth = window.innerWidth;
    let message = "Current time: " + timeString;

    if (viewportWidth >= 670) {
        message += " | " + currentFact;
    } else {
        message =  message + " | Thanks for visiting!"; // Default message for smaller screens
    }

    document.getElementById('factBar').textContent = message;
}


function updateDisplay() {
    updateTime(); // Update the time
}

// Update the fact every 15 seconds
setInterval(changeFact, 15000);

// Update the time every second
setInterval(updateTime, 1000);

// Initial setup
updateDisplay();
changeFact();
});