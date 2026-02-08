document.addEventListener('DOMContentLoaded', (event) => {
    let currentFact = "Welcome to VisitPaul.com!";
    let recentFacts = [];
    const maxRecentFacts = 35;

    const facts = [
        "Paul spent many hours creating and hosting this site...",
        "My uncle thought I was a genius for putting PB into my cereal."
    ]; // Example facts

    function getUniqueFact() {
        let randomIndex;
        let potentialFact;

        if (facts.length === 0) {
            return "Welcome to VisitPaul.com!";
        }

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
            message = message + " | Welcome to VisitPaul.com!"; // Default message for smaller screens
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
