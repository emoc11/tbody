<?php include("header.php"); ?>
	
<section>

	<div class="category-infos">

		<h1 class="category-infos__name">Collection : <span class="bold">Couleur</span></h1>
		<div class="category-infos__description">
			On appelle Lipsum un texte qui, en l'absence du texte définitif, sert de substitut aux futurs .
		</div>

	</div>

</section>


<section class="tshirt-design">

	<div class="onerow">

		<div class="col6">
			<div class="tshirt-design__render">
	            <canvas class="tshirt__canvas" id="canvas"></canvas>
				<img src="images/tee_shirt.svg" class="tshirt__bg">
	        </div>
		</div>

		<div class="col6 tshirt-design__rules">

			<div class="rules__intro">Changez les différents paramètres ci-dessous pour créer votre propre t-shirt, et appuyez sur "espace" pour l'enregistrer !</div>

			<div class="rules__list">

				<!-- <form>

					<div class="rules__item">
						<span class="rule__name">Opacité</span>
						<input class="rule__tool rule__opacity" type="number">
					</div>
					<div class="rules__item">
						<span class="rule__name">Taille des agents</span>
						<input class="rule__tool rule__opacity" type="number">
					</div>
					<div class="rules__item">
						<span class="rule__name">Rouge</span>
						<input class="rule__tool rule__opacity" type="number">
					</div>
					<div class="rules__item">
						<span class="rule__name">Vert</span>
						<input class="rule__tool rule__opacity" type="number">
					</div>
					<div class="rules__item">
						<span class="rule__name">Bleu</span>
						<input class="rule__tool rule__opacity" type="number">
					</div>

				</form> -->
			</div>

			<div class="rules__save">
				<button class="btn-save btn-save--active" id="design-pause">Pause</button>
				<button class="btn-save btn-save--inactive" id="design-play">Jouer</button>
			</div>

		</div>

	</div>

</section>

<section class="propositions">

	<div class="onerow">

		<div class="propositions-none-wrapper col2">
			<div class="propositions-none">
				Vos propositions !
			</div>
		</div>

	</div>
	
</section>

<div class="pop-up">

	<div class="pop-up__form">

		<div class="pop_up__close"></div>
	
		<form action="#">
				
				<img class="tshirt__visu" src="" alt="Votre création">

                <input id="tshirt-visu-data" type="hidden" name="tee-picture" />

                <input class="tshirt__name" type="text" name="tee-title" placeholder="Donnez un nom à votre création !"/>

				<input class="btn filled-button tshirt__submit" type="submit" value="Soumettre">
		</form>

	</div>

	<div class="pop-up__overlay"></div>

</div>

<script src="js/jquery-1.11.1.min.js"></script>
<script src="js/datgui.js"></script>
<script src="js/canvas2image.js"></script>
<script src="js/create_tshirt.js"></script>

<?php include("footer.php"); ?>
