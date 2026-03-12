(function() {
    /**
     * 1. CONFIGURATION & CONSTANTS
     */
    const isDev = new URLSearchParams(window.location.search).has('dev');
    const baseUrl = 'https://rabbi-debug.github.io/chabad-redesign/';
    
    // We use a "cache buster" for the CSS so changes show up instantly for you
    const cssVersion = isDev ? Date.now() : '1.0.0'; 

    /**
     * 2. ASSET LOADING
     * We load the CSS for everyone so the banner looks good for all visitors.
     */
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${baseUrl}styles.css?v=${cssVersion}`;
    document.head.appendChild(link);

    /**
     * 3. GLOBAL EXECUTIONS
     * These functions run for EVERY visitor to the site.
     */
    injectHomeBanner();

    /**
     * 4. DEVELOPMENT-ONLY EXECUTIONS
     * These only run if you add ?dev=true to your URL.
     */
    if (isDev) {
        console.log("Chabad Redesign: Dev Mode Active.");
        document.body.classList.add('dev-active');
        
        // Add any experimental logic here (e.g., testing a new popup)
        // changeFooterColorToGold(); 
    }

    /**
     * FUNCTION: injectHomeBanner
     * Locates the 'vibrant hub' text and replaces it with the custom image.
     */
    function injectHomeBanner() {
        // Only run on the actual homepage
        const isHomePage = window.location.pathname === "/" || window.location.pathname === "/default.asp";
        if (!isHomePage) return;

        const containers = document.querySelectorAll('.bottom_padding');
        const searchString = "vibrant hub of Jewish life";

        for (let i = 0; i < containers.length; i++) {
            if (containers[i].textContent.toLowerCase().includes(searchString.toLowerCase())) {
                
                containers[i].innerHTML = `
                    <div class="custom-home-banner-container">
                        <a href="https://www.chabadwhiteplains.com/7281250" class="custom-home-banner-link">
                            <img 
                                src="https://chabadwhiteplains.com/media/images/1361/sPQI13616978.png" 
                                alt="Chabad White Plains" 
                                class="custom-home-banner-img"
                            />
                        </a>
                    </div>
                `;
                console.log("Banner successfully injected.");
                break; 
            }
        }
    }

})();
