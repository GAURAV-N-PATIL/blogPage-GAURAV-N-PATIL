function setTheme(themeName) {
    const themeLink = document.getElementById("theme-style");
    themeLink.href = `themes/${themeName}.css`;
    localStorage.setItem("selectedTheme", themeName);
}
window.onload = function () {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
        setTheme(savedTheme);
    }
};
