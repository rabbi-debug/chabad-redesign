(function() {
    const isDev = new URLSearchParams(window.location.search).has('dev');

    if (isDev) {
        console.log("Chabad Redesign: Dev Mode Active.");

        document.body.classList.add('dev-active');
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://rabbi-debug.github.io/chabad-redesign/styles.css';
        document.head.appendChild(link);

        // Run the injection
        injectHomeBanner();
    }

    function injectHomeBanner() {
        const isHomePage = window.location.pathname === "/" || window.location.pathname === "/default.asp";
        if (!isHomePage) return;

        const containers = document.querySelectorAll('.bottom_padding');
        const searchString = "vibrant hub of Jewish life";

        for (let i = 0; i < containers.length; i++) {
            // Check if this specific container has the text
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
                break; // This must be INSIDE the 'if' which is INSIDE the 'for'
            }
        }
    }
})();
