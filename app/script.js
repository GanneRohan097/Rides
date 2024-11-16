// Simulated database for demo purposes
const users = [];

// Show registration form
function showRegistration() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
}

// Show login form
function showLogin() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
}

// Handle user registration
function register(event) {
    event.preventDefault();
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;

    const userExists = users.some(user => user.username === username);
    if (userExists) {
        alert("Username already taken!");
        return;
    }

    users.push({ username, password });
    alert("Registration successful! Please login.");
    showLogin();
}

// Handle user login
function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    document.getElementById("login-form").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("user-name").textContent = username || "Guest";
}

// Show transport options
function showTransportOptions() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("transport-selection").style.display = "block";
}

// Select a ride and show the Book Now button
let selectedRide = null;
function selectRide(rideType, cost) {
    selectedRide = { rideType, cost };
    document.getElementById("book-btn").style.display = "block";
}

// Handle booking and start live tracking
function bookRide() {
    if (selectedRide) {
        alert(`You have selected: ${selectedRide.rideType} - ₹${selectedRide.cost}`);
        document.getElementById("transport-selection").style.display = "none";
        document.getElementById("live-tracking").style.display = "block";
        startLiveTracking();
    }
}

// Simulate live tracking by updating the distance every second
let distance = 5; // starting distance in km
function startLiveTracking() {
    const distanceElement = document.getElementById("distance");
    const interval = setInterval(() => {
        if (distance <= 0.1) {
            clearInterval(interval);
            alert("Driver has arrived!");
        } else {
            distance -= 0.1;
            distanceElement.textContent = distance.toFixed(1);
        }
    }, 1000);
}

// Handle logout
function logout() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

// End the ride and go back to the dashboard
function endRide() {
    distance = 5; // reset distance
    document.getElementById("live-tracking").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
}
// Display the review and report form after the ride is completed
function endRide() {
    distance = 5; // reset distance
    document.getElementById("live-tracking").style.display = "none";
    document.getElementById("review-form").style.display = "block";  // Show review form
}

// Handle report submission
function submitReport(event) {
    event.preventDefault();

    const report = {
        noSafety: document.getElementById("no-safety").checked,
        recklessDriving: document.getElementById("reckless-driving").checked,
        badBehavior: document.getElementById("bad-behavior").checked,
        highPrices: document.getElementById("high-prices").checked,
        comment: document.getElementById("user-comment").value,
    };

    console.log("Report Submitted:", report);

    alert("Your report has been submitted. Thank you for your feedback!");
    // Reset and go back to dashboard
    document.getElementById("review-form").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
}

