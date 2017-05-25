window.onload = function() {
    var kps = 15;
    var mspk = (1 / kps) * 1000;
    var signature = document.getElementById("signature");
    var signatureFinalText = signature.innerHTML
    signature.innerHTML = ">_"
    anime({
        duration: signatureFinalText.length * mspk,
        easing: 'linear',
        update: function(anim) {
            signature.innerHTML = ">" + signatureFinalText.substr(0, Math.floor(signatureFinalText.length * (anim.progress / 100))) + "_"
        }
    });
};
