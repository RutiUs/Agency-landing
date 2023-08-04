const themeSwitchers = document.querySelectorAll('.change-theme');

themeSwitchers.forEach(switchers => {
    switchers.addEventListener('click', function() {
        applyTheme(this.dataset.theme);
        localStorage.setItem('theme', this.dataset.theme);
    })
});

function applyTheme(themeName) {
    let themeUrl = `css/theme-${themeName}.css`;
    document.querySelector('[title="theme"]').setAttribute("href", themeUrl);
}

let activeTheme = localStorage.getItem('theme');

if(activeTheme === null) {
    applyTheme("light");
} else {
    activeTheme(activeTheme);
};