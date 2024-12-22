<script type="text/javascript">
    (function () {
        const CACHE_KEY = 'site_cache';
        const EXPIRY_KEY = 'cache_expiry';
        const VERSION_KEY = 'site_version';
        const MAX_CACHE_DAYS = 15;

        const CURRENT_VERSION = '2024-12-22';

        function isCacheValid() {
            const expiry = localStorage.getItem(EXPIRY_KEY);
            const cachedVersion = localStorage.getItem(VERSION_KEY);

            if (!expiry || !cachedVersion) return false;

            const now = new Date().getTime();
            return now <= parseInt(expiry) && cachedVersion === CURRENT_VERSION;
        }

        function cacheWebsite() {
            const content = document.documentElement.outerHTML;
            const expiry = new Date().getTime() + MAX_CACHE_DAYS * 24 * 60 * 60 * 1000;
            localStorage.setItem(CACHE_KEY, content);
            localStorage.setItem(EXPIRY_KEY, expiry);
            localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
        }

        function loadCache() {
            const cachedContent = localStorage.getItem(CACHE_KEY);
            if (cachedContent) {
                document.open();
                document.write(cachedContent);
                document.close();
            }
        }

        if (isCacheValid()) {
            loadCache();
        } else {
            cacheWebsite();
        }
    })();
</script>
