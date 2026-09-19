const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');

function applyTheme(theme) {
    root.dataset.theme = theme;

    const darkMode = theme === "dark";
    const nextMode = darkMode ? "light" : "dark";

    themeToggle.setAttribute("aria-pressed", darkMode);
    themeToggle.setAttribute("aria-label", `Switch to ${nextMode} mode`);
    themeToggle.setAttribute("title", `Switch to ${nextMode} mode`);
    themeColor.setAttribute("content", darkMode ? "#0b0d10" : "#f4f1ea");
}

const savedTheme = localStorage.getItem("portfolio-theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

applyTheme(savedTheme || systemTheme);

themeToggle.addEventListener("click", function () {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
});

document.getElementById("year").textContent = new Date().getFullYear();
