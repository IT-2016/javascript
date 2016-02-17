<!DOCTYPE html>
<html>
<head>
	<title>Exo jQuery</title>
</head>
<body>
	http://codepen.io/anon/pen/yewwEO
	<div>
		<span class="red">Je veux être ecrit en rouge</span>
		<br>
		<span class="red">Je veux être aussi gros qu'un H1 et je veux pas être rouge</span>
	</div>
	<h1 id="hulk">Je m'appelle Hulk, je veux être sur fond VERT</h1>
	<span data-name="Clark Kent">Je veux changer de texte</span>
	<ul>
		<li class="first">Je suis prems</li>
		<li>Center</li>
		<li>Center</li>
		<li>Center</li>
		<li class="last">Je veux être premier</li>
	</ul>
	<div height=50 width=50 style="background-color:pink;">Je veux être animé comme tu le souhaites</div>
	<hr class="InvisibleMAN" style="height:50px" >
	<div id="terrain" class="bord">
		<div>
			<div>
				<p>Régle du jeu, trouve la span en partant du bords de terrain ($("#terrain").) et change le texte en "Touché c'est toi le chat"</p>
				<h1>Trouve la span : <span>Cible</span></h1>
			</div>
		</div>
	</div>
	<h2> Clone moi !!! </h2>
	<div id="ZoneDeClonage">
		<span> Place le clone avant ce message </span>
	</div>

	<h3 class="kill">Kill me (Traduction : Supprime moi)</h3>
	<h3 class="kill kid">Don't kill a kid (Traduction : Ne pas tuer l'enfant)<h3>

	<span id="compteur">0</span>
	<button>Appuie sur moi pour ajouter 1 au compteur</button>
	<button>Appuie sur moi pour multiplier par 2 le compteur (Event disponnible 1 fois)</button>
	<button>Appuie sur moi pour diviser par 2 le compteur (Event disponnible 3 fois)</button>

	<p>Changer la couleur de la div identifiant ArcEnCiel toutes les secondes aléatoirement</p>
	<div id='arcEnCiel' style="height:100px; width:100px;"></div>


	<br><br><br><br><br><br><br><br><br><br><br>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
	<script>
		$(".red:first-child").css('color', 'yellow');
		var fontSizeH1 = $("h1").css('font-size');
		$(".red:last-child").wrap('<h1>');
		$("#hulk").css('background-color', 'green');
		$("[data-name='Clark Kent']").text("Superman");
		$(".InvisibleMAN").hide();
		$("ul li.last").prependTo('ul');			//appendTo
		//$('ul').prepend($("ul li.last"));			//append
		//$('ul li.first').before($("ul li.last"));	//after
		$("div[width=50]").animate({
				opacity: 0.25,
				left: "+=50",
				height: "toggle"
			}, 15000
		);
		$("#terrain").find("span").text("Touché");
		$('h2').clone().prependTo("#ZoneDeClonage");		
		$(".kill:not(.kid)").remove();

		$("#compteur").next().click(function(){
			var compt = parseInt($("#compteur").text());
			$("#compteur").text(compt + 1);
		});

		var typeEvent = 'click';
		
		$("#compteur").next().next().one(typeEvent, function(){
			var compt = parseInt($("#compteur").text());
			$("#compteur").text(compt * 2);
			
		});

		var count = 0;
		$("#compteur").next().next().next().on(typeEvent, function(){
			var compt = parseInt($("#compteur").text());
			$("#compteur").text(compt / 2);
			count++;
			if(count == 3){
				$("#compteur").next().next().next().off(typeEvent);
			}
		});

		function arcEnCiel(){
			var R = Math.round(Math.random() * 256);
			var G = Math.round(Math.random() * 256);
			var B = Math.round(Math.random() * 256);
			$("#arcEnCiel").css('background-color',"rgb("+R+","+G+","+B+")");
		}
		
		setInterval(arcEnCiel, 10);
	</script>
</body>
</html>
