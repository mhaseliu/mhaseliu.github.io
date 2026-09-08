(function () {
    const root = document.documentElement;
    const button = document.querySelector(".theme-toggle");
    const savedTheme = localStorage.getItem("mhl-theme");

    if (savedTheme === "dark") {
        root.dataset.theme = "dark";
    }

    function updateButton() {
        if (!button) return;
        const dark = root.dataset.theme === "dark";
        button.textContent = dark ? "☀" : "◐";
        button.setAttribute("aria-label", dark ? "Use light theme" : "Use dark theme");
        button.title = dark ? "Use light theme" : "Use dark theme";
    }

    if (button) {
        updateButton();
        button.addEventListener("click", function () {
            const dark = root.dataset.theme === "dark";
            if (dark) {
                delete root.dataset.theme;
                localStorage.setItem("mhl-theme", "light");
            } else {
                root.dataset.theme = "dark";
                localStorage.setItem("mhl-theme", "dark");
            }
            updateButton();
        });
    }

    const nav = document.querySelector(".sidebar-container");
    const navToggle = document.querySelector(".nav-toggle");

    if (nav && navToggle) {
        navToggle.addEventListener("click", function () {
            const open = nav.classList.toggle("is-open");
            navToggle.setAttribute("aria-expanded", String(open));
            navToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("is-open");
                navToggle.setAttribute("aria-expanded", "false");
                navToggle.setAttribute("aria-label", "Open navigation");
            });
        });
    }
})();
