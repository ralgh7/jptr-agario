// Edited version of the file for offline compatibility.
(function () {
    "use strict";

    // Helper functions
    function byId(id) { return document.getElementById(id); }
    function byClass(clss, parent) { return (parent || document).getElementsByClassName(clss); }

    // Placeholder for WebSocket functionality (disabled for offline use)
    var ws = null; // WebSocket disabled

    function wsCleanup() {
        // Clean up WebSocket (disabled for offline)
        console.log("WebSocket cleanup called (offline mode).");
    }

    function wsInit(url) {
        console.log("WebSocket initialization skipped (offline mode).");
    }

    function wsSend(data) {
        console.log("Attempted to send data over WebSocket (offline mode):", data);
    }

    function wsMessage(data) {
        console.log("Simulated WebSocket message received (offline mode):", data);
    }

    // Mock data for offline leaderboard and game interactions
    var mockLeaderboard = [
        { me: true, name: "Player1" },
        { me: false, name: "Player2" },
        { me: false, name: "Player3" }
    ];

    var leaderboard = Object.create({
        type: "ffa", // Free-for-all leaderboard type
        items: mockLeaderboard,
        canvas: document.createElement("canvas"),
        draw: function () {
            // Mock drawing leaderboard
            console.log("Drawing mock leaderboard (offline mode).", this.items);
        }
    });

    // Simulate game entities for offline play
    var mockCells = Object.create({
        mine: [1],
        byId: {
            1: { id: 1, x: 100, y: 100, s: 20, name: "Player1", color: "#ff0000" }
        },
        list: [{ id: 1, x: 100, y: 100, s: 20, name: "Player1", color: "#ff0000" }]
    });

    // Function to simulate leaderboard drawing
    function drawLeaderboard() {
        leaderboard.draw();
    }

    // Simulated game loop
    function gameReset() {
        console.log("Game reset (offline mode). Mock data reloaded.");
    }

    function drawGame() {
        console.log("Drawing game (offline mode).");
        drawLeaderboard(); // Mock leaderboard drawing
        // Additional offline game logic can be simulated here
        window.requestAnimationFrame(drawGame);
    }

    // Mock initialization
    function initOfflineGame() {
        console.log("Initializing offline game mode...");
        gameReset();
        drawGame();
    }

    // Initialization for offline use
    window.onload = function () {
        initOfflineGame();
    };

    console.log("Game modified for offline use. Remote assets need to be replaced.");
})();
