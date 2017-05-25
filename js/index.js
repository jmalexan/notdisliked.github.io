window.onload = function() {
    var kps = 15;
    var mspk = (1 / kps) * 1000;
    var title = document.getElementById('mainBarTitle');
    var projects = document.getElementById("mainBarProjects");
    var about = document.getElementById("mainBarAbout");
    var signature = document.getElementById("signature");
    var titleFinalText = title.innerHTML
    var projectsFinalText = projects.innerHTML
    var aboutFinalText = about.innerHTML
    title.innerHTML = ">_"
    projects.innerHTML = ">_"
    about.innerHTML = ">_"
    anime({
        duration: titleFinalText.length * mspk,
        easing: 'linear',
        update: function(anim) {
            title.innerHTML = ">" + titleFinalText.substr(0, Math.floor(titleFinalText.length * (anim.progress / 100))) + "_"
        },
        complete: function(anim) {
            anime({
                duration: projectsFinalText.length * mspk,
                easing: 'linear',
                update: function(anim) {
                    projects.innerHTML = ">" + projectsFinalText.substr(0, Math.floor(projectsFinalText.length * (anim.progress / 100))) + "_"
                },
                complete: function(anim) {
                    anime({
                        duration: aboutFinalText.length * mspk,
                        easing: 'linear',
                        update: function(anim) {
                            about.innerHTML = ">" + aboutFinalText.substr(0, Math.floor(aboutFinalText.length * (anim.progress / 100))) + "_"
                        }
                    });
                }
            });
        }
    });
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
