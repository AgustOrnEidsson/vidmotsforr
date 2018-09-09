//notaði Snap.svg til að gera stafina
//tek fram stærð stafsins (x,y)
a=Snap(150,187);
g=Snap(150,187);
u=Snap(150,187);
s=Snap(150,187);
t=Snap(150,187);

//bý til functionið run
function run(){
	//bý til byrjunar stað fyrir stafinn A
	//þetta gefur errors en skaðar ekkert framistöðuna
	var patha=a.path("M100 -12,50")
	//svo animate-a ég þetta þannig þetta verður að stafnum A eftir 0,5 sek
	patha.animate({d:"M5,90 l30,-80 30,80 M20,50 l30,0"},500)
	//og endurtek
	var pathg=g.path("M37 -12,50")
	pathg.animate({d:"M60,10 C-10,0 -10,100 60,90 l0,-40 -20,0"},1000)

	var pathu=u.path("M50 -12,50")
	pathu.animate({d:"M5,10 C0,120 70,120 70,10"},1500)

	var paths=s.path("M0 -12,50")
	paths.animate({d:"M70 30 A20 20 0 1 0 50 50 A20 20 0 1 1 30 70"},2000)

	var patht=t.path("M67 -12,50")
	patht.animate({d:"M5,5 l50,0 -25,0 0,85"},2500)
}


//kalla í functionið run
run();

//þar sem ég fann ekki leið til að láta notandan gera einhvað með stafina bætti ég við línu sem stækkar og
//snýst 90gráður niður og verður tíu sinnum stærri þegar hoverað er yfir hana, þetta gerði ég með css