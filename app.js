var s = Snap("#svg");
// Lets create big circle in the middle:
var bigCircle = s.circle(150, 150, 100);
// By default its black, lets change its attributes
bigCircle.attr({
    fill: "#bada55",
    stroke: "#000",
    strokeWidth: 5
});
var smallCircle = s.circle(100, 150, 70);
// Lets put this small circle and another one into a group:
var discs = s.group(smallCircle, s.circle(200, 150, 70));
// Now we can change attributes for the whole group
discs.attr({
    fill: "#fff"
});
// Now more interesting stuff
// Lets assign this group as a mask for our big circle
bigCircle.attr({
    mask: discs
});
smallCircle.animate({r: 50}, 1000).loop();