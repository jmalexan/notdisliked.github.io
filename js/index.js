var linkGrowAnim = anime({
    targets: link,
    fontSize: '24px'
});

var linkAnimateGrow = function(link) {
    linkGrowAnim.play();
};

var linkAnimateShrink = function(link) {
    linkGrowAnim.reverse();
};
