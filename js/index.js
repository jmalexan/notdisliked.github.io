window.onload = function() {
    var title = document.getElementById('mainBarTitle');
    var projects = document.getElementById("mainBarProjects");
    var about = document.getElementById("mainBarAbout");
    title.onmouseenter = function() {
        anime.remove("#mainBarTitle");
        anime({
            targets: "#mainBarTitle",
            fontSize: '18px'
        });
    };
    title.onmouseout = function() {
        anime.remove("#mainBarTitle");
        anime({
            targets: "#mainBarTitle",
            fontSize: '16px'
        });
    };
    projects.onmouseenter = function() {
        anime.remove("#mainBarProjects");
        anime({
            targets: "#mainBarProjects",
            fontSize: '18px'
        });
    };
    projects.onmouseout = function() {
        anime.remove("#mainBarProjects");
        anime({
            targets: "#mainBarProjects",
            fontSize: '16px'
        });
    };
    about.onmouseenter = function() {
        anime.remove("#mainBarAbout");
        anime({
            targets: "#mainBarAbout",
            fontSize: '18px'
        });
    };
    about.onmouseout = function() {
        anime.remove("#mainBarAbout");
        anime({
            targets: "#mainBarAbout",
            fontSize: '16px'
        });
    };
};
