var delayInMilliseconds = 2000; //2 second delay
window.onload = function() {

	var element1 = document.querySelectorAll('div.j83agx80.cbu4d94t.buofh1pr')[19]; // locates right panel
	var element2 = document.querySelectorAll('div.j83agx80.cbu4d94t.buofh1pr')[0];  // locates left panel
	var element3 = document.querySelector('div.tn7ubyq0.d2edcug0.rq0escxv');        // locates stories
	var element4 = document.querySelectorAll('div.sjgh65i0')[1];                    // locates 'rooms' bar in center
	var element5 = document.querySelectorAll('div.isi1j7uv.qwnj5y1i.pmk7jnqg.fpf4h9qb.gsapk3bl.nr3idzxk.cur7e4n5.ocebsr1h')[0] // locates "view all stories" button
	var element6 = document.querySelectorAll('div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.bp9cbjyn.owycx6da.btwxx1t3.hv4rvrfc.dati1w0a.pybr56ya.dlv3wnog.rl04r1d5.enqfppq2.muag1w35')[0] // locetes sub element of 'rooms' bar 
setTimeout(function() {
	element1.parentElement.removeChild(element1);
	element2.parentElement.removeChild(element2); 
  	element3.parentElement.removeChild(element3);
 	element4.parentElement.removeChild(element4);
	element5.parentElement.removeChild(element5);	
	element6.parentElement.removeChild(element6);	
			}, delayInMilliseconds)
			   };
