function setTheme(theme) {
    document.getElementById("theme-style").href = `style-${theme}.css`;
}

window.onload = () => {
    setTheme("Arcane"); // default theme
};
