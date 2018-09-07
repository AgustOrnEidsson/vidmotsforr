a=Snap(150,187);
g=Snap(150,187);
u=Snap(150,187);
s=Snap(150,187);
t=Snap(150,187);

function run(){
	var patha=a.path("M100 -12,50")
	patha.animate({d:"M5,90 l30,-80 30,80 M20,50 l30,0"},500)

	var pathg=g.path("M37 -12,50")
	pathg.animate({d:"M60,10 C-10,0 -10,100 60,90 l0,-40 -20,0"},1000)

	var pathu=u.path("M50 -12,50")
	pathu.animate({d:"M5,10 C0,120 70,120 70,10"},1500)

	var paths=s.path("M0 -12,50")
	paths.animate({d:"M70 30 A20 20 0 1 0 50 50 A20 20 0 1 1 30 70"},2000)

	var patht=t.path("M67 -12,50")
	patht.animate({d:"M5,5 l50,0 -25,0 0,85"},2500)
}

setInterval(run, 2600);