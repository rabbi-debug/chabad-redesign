(function() {
    const isDev = new URLSearchParams(window.location.search).has('dev');

    if (isDev) {
        console.log("Chabad Redesign: Dev Mode Active.");

        // 1. Activate CSS
        document.body.classList.add('dev-active');
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://rabbi-debug.github.io/chabad-redesign/styles.css';
        document.head.appendChild(link);

        // 2. Run your Image Injection Logic
        injectHomeBanner();
    }

    function injectHomeBanner() {
        // Only run on the homepage
        const isHomePage = window.location.pathname === "/" || window.location.pathname === "/default.asp";
        if (!isHomePage) return;

        const containers = document.querySelectorAll('.bottom_padding');
        const searchString = "vibrant hub of Jewish life";

        for (let i = 0; i < containers.length; i++) {
            if (containers[i].textContent.toLowerCase().includes(searchString.toLowerCase())) {
                
                // Inject the banner
                containers[i].innerHTML = `
                    <div style="width: 100%; text-align: center;">
                        <a href="https://www.chabadwhiteplains.com/7281250" style="text-decoration: none; display: block;">
                            <img 
                                src="https://chabadwhiteplains.com/media/images/1361/sPQI13616978.png" 
                                alt="Chabad White Plains" 
                                style="width: 100%; height: auto; display: block; border-radius: 4px; border: 0; margin: 0 auto;"
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
