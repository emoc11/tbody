<?php include("header.php"); ?>

<section class="current-collection onerow">
	
	<div class="col6">
		<div class="onerow">
			
			<div class="picture col6">
				<img src="img/t_shirt_1.png" alt="T-shirt du jour">
			</div>
			
			<div class="content col5">

				<h2>Le t-shirt d'aujourd'hui</h2>
				
				<div class="infos-wrapper tshirt-infos">
					<h3 class="name">Artificial artifice</h3>
					<div class="old-price">30 €</div>
					<div class="price">20 €</div>
					<div class="countdown countdown-selection">
						<div class="countdown__message">Plus qu' <span class="countdown__time">1 heure</span> seulement</div>
						<button class="btn filled-button countdown__btn">Acheter maintenant !</button>
					</div>
				</div>
			</div>

		</div>
	</div>

	<div class="col6">
		<div class="onerow">
				
			<div class="tshirt-carousel-wrapper col6">
				<div class="tshirt-carousel">
					<img src="img/t_shirt_1.png" alt="T-shirt du jour">
					<img src="img/t_shirt_2.png" alt="T-shirt du jour">
					<img src="img/t_shirt_1.png" alt="T-shirt du jour">
				</div>
				<div class="carousel-navigation prev"></div>
				<div class="carousel-navigation next"></div>
			</div>
			
			<div class="content col5">
				<h2>Collection-T</h2>

				<div class="infos-wrapper collection-infos">
					<ul>
						<li class="name">Nom de mon t-shirt 1</li>
						<li class="name">Nom de mon t-shirt 2</li>
						<li class="name">Nom de mon t-shirt 3</li>
						<li class="name">Nom de mon t-shirt 4</li>
						<li class="name">Nom de mon t-shirt 5</li>
					</ul>

					<div class="price price-collection">125 €</div>

					<div class="countdown countdown-collection">
						<div class="countdown__message">Plus qu' <span class="countdown__time">4 jours et 3 heures</span> seulement</div>
						<button class="btn filled-button countdown__btn">Acheter maintenant !</button>
					</div>

				</div>
			</div>

		</div>
	</div>

</section>

<section class="presentation">
	
	<div class="presentation__header"><h2>T_BODY</h2></div>

	<div class="presentation__content">

		<p class="presentation__text">
			On appelle Lipsum un texte qui, en l'absence du texte définitif, sert de substitut aux futurs contenus lors de la production de maquettes pour les publications ou sites Web. Le terme Lipsum est issu de la contraction du plus connu de ce type de texte "Lorem ipsum".
		</p>

		<a href="#" class="presentation__cta btn empty-button">Créer VOTRE t-shirt !</a>

	</div>

</section>

<section class="ranking">

		<div class="onerow">
		
			<div class="tshirt col2">
				<img src="img/t_shirt_1.png" alt="t-shirt 1">
				<div class="tshirt--votes">
					<span class="extra-bold green">201</span> <span class="regular">votes</span>
				</div> 
			</div>

			<div class="tshirt col2">
				<img src="img/t_shirt_1.png" alt="t-shirt 1">
				<div class="tshirt--votes">
					<span class="extra-bold green">201</span> <span class="regular">votes</span>
				</div> 
			</div>

			<div class="tshirt col2">
				<img src="img/t_shirt_1.png" alt="t-shirt 1">
				<div class="tshirt--votes">
					<span class="extra-bold green">201</span> <span class="regular">votes</span>
				</div> 
			</div>

			<div class="tshirt col2">
				<img src="img/t_shirt_1.png" alt="t-shirt 1">
				<div class="tshirt--votes">
					<span class="extra-bold green">201</span> <span class="regular">votes</span>
				</div> 
			</div>

			<div class="tshirt col2">
				<img src="img/t_shirt_1.png" alt="t-shirt 1">
				<div class="tshirt--votes">
					<span class="extra-bold green">201</span> <span class="regular">votes</span>
				</div> 
			</div>

			<div class="ranking-cta--wrapper col2">
				<a href="#" class="btn filled-button">Regardez et votez !</a>
			</div>

		</div>

</section>

<script src="js/jquery-1.11.1.min.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/home.js"></script>

<?php include("footer.php"); ?>