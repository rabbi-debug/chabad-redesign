(function() {
    // 1. Check if the URL has ?dev=true
    const isDev = new URLSearchParams(window.location.search).has('dev');

    if (isDev) {
        console.log("Chabad Redesign: Dev Mode Active.");

        // 2. Add a special class to the body so our CSS knows to turn on
        document.body.classList.add('dev-active');

        // 3. Inject our CSS file from GitHub
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'github.com/rabbi-debug/chabad-redesign';
        document.head.appendChild(link);

        // 4. Example: Change the site title just to prove it works
        const siteTitle = document.querySelector('h1');
        if (siteTitle) {
            siteTitle.innerText = "New Homepage Concept";
        }
    }
})();
