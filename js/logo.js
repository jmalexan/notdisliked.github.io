var addUnderscore = function(text) {
    anime({
        duration: 800,
        complete: function() {
            text.innerHTML = text.innerHTML + "_"
            removeUnderscore(text)
        }
    })
}

var removeUnderscore = function(text) {
    anime({
        duration: 800,
        complete: function() {
            text.innerHTML = text.innerHTML.substr(0, text.innerHTML.length - 1)
            addUnderscore(text)
        }
    })
}

window.onload = function() {
    var kps = 15;
    var mspk = (1 / kps) * 1000;
    var text = document.getElementById('text');

    var textFinalText = "GREATERTHANBLANK";
    removeUnderscore(text)
    setTimeout(function() {
        console.log("test")
        anime({
            duration: textFinalText.length * mspk,
            easing: 'linear',
            update: function(anim) {
                var underscore = false;
                if (text.innerHTML.substr(text.innerHTML.length - 1, 1) == "_") {
                    underscore = true;
                }
                text.innerHTML = ">" + textFinalText.substr(0, Math.floor(textFinalText.length * (anim.progress / 100)));
                if (underscore) {
                    text.innerHTML += "_";
                }
            }
        })
    }, 3000)
};
