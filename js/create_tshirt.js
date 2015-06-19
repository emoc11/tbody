(function($){

    $(function(){

        /************************************************************************************************

                                        CREATION DU CANVAS

        ************************************************************************************************/

        // Graphics settings
        var settings ={};
        settings.displayWidth = 260;
        settings.displayHeight = 390;
        settings.Transparence = Math.floor(Math.random() * 1)-1;
        settings.Taille = Math.floor(Math.random() * 10)+1;
        settings.maxIncrement = 1;
        settings.Nombres = Math.floor(Math.random() * 500)+1;
        settings.triangleAlpha = .1;
        settings.distanceActiveMouse = .01;
        settings.mouseActivated = false;
        settings.stopAnimation = false;

        settings.Rouge = Math.floor(Math.random() * 256);
        settings.Vert = Math.floor(Math.random() * 256);
        settings.Bleu = Math.floor(Math.random() * 256);

        // Mouse position
        var mousePosition = {
            x: 0,
            y: 0
        };

        var displaySizeSquared = settings.displayWidth * settings.displayHeight;

        // Init canvas
        var canvas = document.getElementById('canvas');
        canvas.width = settings.displayWidth;
        canvas.height = settings.displayHeight;
        var ctx = canvas.getContext("2d");


        // Fonction pour lancer l'animation
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

        // Position de l'agent
        var position = {
            x: Math.random()*settings.displayWidth,
            y: Math.random()*settings.displayHeight,
            update: function(){
                this.x = Math.random()*settings.displayWidth;
                this.y = Math.random()*settings.displayHeight;
            }
        }


        // Fonction pour créer l'agent
        function createAgent() {

            // Objet AGENT
            var agent = {}

            agent.x = position.x;
            agent.xIncrement = (Math.random() * 2 - 1) * settings.maxIncrement;
            agent.saveXIncr = agent.xIncrement;

            agent.y = position.y;
            agent.yIncrement = (Math.random() * 2 - 1) * settings.maxIncrement;
            agent.saveYIncr = agent.yIncrement;
            

            agent.update = function(distanceToMouseSquared) {

                // Dessiner l'agent
                ctx.fillStyle = "rgb("+ settings.Rouge +", "+ settings.Vert +", "+ settings.Bleu +")"; //-- NOIR
                ctx.fillRect(agent.x, agent.y, settings.Taille, settings.Taille); // Taille fixe

                // var mouseOnAgent = distanceToMouseSquared / displaySizeSquared;

                agent.x += agent.xIncrement;
                agent.y += agent.yIncrement;

                if(agent.x >= settings.displayWidth || agent.x <= 0){

                    agent.xIncrement = - agent.xIncrement;
                    agent.saveXIncr = agent.xIncrement;

                } else if( agent.y >= settings.displayHeight || agent.y <= 0 ) {

                    agent.yIncrement = - agent.yIncrement;
                    agent.saveYIncr = agent.yIncrement;

                }
            };

            // return the new object
            return agent;
        }

        // Création de l'agent
        var myAgent = [];

        for (var i = 0; i < settings.Nombres; i++) {

            if( i % 5 == 0)
                position.update()

            myAgent.push(createAgent());
        }

        // Boucle et déplace l'agent
        function step() {

            // Efface écran
            if(!settings.stopAnimation){

                ctx.fillStyle = "rgba(0, 0, 0, "+settings.Transparence+")";
                ctx.fillRect(0, 0, settings.displayWidth, settings.displayHeight);


                // Dessiner les agents
                myAgent.forEach(function(a) {

                    if(settings.mouseActivated) {
                        var distanceToMouseSquared = (a.x - mousePosition.x) * (a.x - mousePosition.x) + (a.y - mousePosition.y) * (a.y - mousePosition.y);
                    }

                    // Mise à jour 
                    a.update(distanceToMouseSquared);

                });
            }

            // Boucler dès que possible


            requestAnimationFrame(step);
        }

        // Initialiser le canvas avec un fond blanc
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fillRect(0, 0, settings.displayWidth, settings.displayHeight);

        // Lancer l'animation dès que possible
        requestAnimationFrame(step);

        // Press 's' to save canvas as jpg
        $("body").keydown(function(event) {
            if (event.which === 83) {
                raster(canvas, "myFile", "jpeg");
            }
        });

        // Init the Graphical User Interace (GUI)
        // We use the dat.gui library, which manages properties of specfific objets of your code
        var gui = new dat.GUI();
        gui.add(settings, "Transparence", 0, 1); // Register the property 'refreshAlpha' of the 'settings' object, taking values between 0 and 1. The initial value is the value given to the property at the beginning of this code
        gui.add(settings, "Taille", 1, 10);
        var numAgentController = gui.add(settings, "Nombres", 10, 500);
        // gui.add(settings, "mouseActivated", false, true);
        // var stopAnimation = gui.add(settings, "stopAnimation", false, true);
        var Rouge = gui.add(settings, "Rouge", 0, 256);
        var Vert = gui.add(settings, "Vert", 0, 256);
        var Bleu = gui.add(settings, "Bleu", 0, 256);


        Rouge.onChange(function(value){
            settings.Rouge =  Math.floor(value);
        });

        Vert.onChange(function(value){
            settings.Vert =  Math.floor(value);
        });

        Bleu.onChange(function(value){
            settings.Bleu =  Math.floor(value);
        });

        // Listen to the changes of the numAgentController
        numAgentController.onChange(function(value) {
            var numAgentsToAdd = value - myAgent.length;
            if (numAgentsToAdd > 0) {

                for (var i = 0; i < numAgentsToAdd; i++) {

                    if( i % 5 == 0)
                        position.update()

                    myAgent.push(createAgent());
                }
            } else {
                numAgentsToAdd = -numAgentsToAdd; // number numAgentsToAdd to negative or equal to 0. We need it positive or equal to 0
                myAgent.splice(0, numAgentsToAdd); // remove a number numAgentsToAdd at the beginning of the agent array. If this number is 0, nothing happens
            }
        });

        // track mouse position
        var cvs = $("body");
        cvs.mousemove(function(e) {
            var offset = cvs.offset();
            mousePosition.x = e.clientX - offset.left;
            mousePosition.y = e.clientY - offset.top;
        });


        /************************************************************************************************

                                        ENREGISTREMENT DU CANVAS

        ************************************************************************************************/


        // Stoper ou non l'animation dans le canvas

        var $stopAnim  = $("#design-pause"),
            $playAnim  = $("#design-play");


        function changeAnimation() {

            settings.stopAnimation = !settings.stopAnimation;

            $stopAnim.toggleClass('btn-save--active btn-save--inactive');
            $playAnim.toggleClass('btn-save--active btn-save--inactive');

        }

        $stopAnim.on('click', function() { 

            var nb_prop = $('.proposition').length;

            if (nb_prop < 6 && !settings.stopAnimation){
                changeAnimation(); 
                createProposition();
            }
        });

        $playAnim.on('click', function(e) { 
            if (settings.stopAnimation)
                changeAnimation(); 
        });


        $("body").keydown(function(event) {
            
            if (event.which === 32) { 

                if($(".pop-up").is(":hidden")){

                    if(settings.stopAnimation){
                        $playAnim.trigger('click');
                    }else{
                        $stopAnim.trigger('click');
                    }

                }

                if(!($(".tshirt__name").is(":focus"))){
                    event.preventDefault();
                }

            }

        });

        // $(".pop-up").on("click", function(e){

        //     console.log($(e.target));

        //     var target = $(e.target);

        //     if((target != $(".pop-up__form")){
        //         $(".pop_up").fadeOut();
        //     }
        // });


        // Créer/supprimer/sauver(sélectionner) la proposition;

        var propositions, nb_prop;

        function init(){

    /*        propositions = localStorage.getItem("propositions") || {};

            console.log(propositions);

            if($.isEmptyObject(propositions)){
                propositions.prop = [];
                nb_prop = 0;
            }else{
                $(".propositions-none-wrapper").remove();
                nb_prop = propositions.prop.length;
            }*/

        }

        // Ajout d'une proposition 

        function createProposition() {

            var width         = settings.displayWidth,
                height        = settings.displayHeight,
                type          = "jpeg",
                $propositions = $(".propositions .onerow");

            // Création du canvas
            var $image = Canvas2Image.convertToImage(canvas, width, height, type),
                prop_src = $($image).attr("src");

    /*        // Informations sur la proposition (id + src de l'image liée) 
            var proposition = {
                "prop_id"  : nb_prop,
                "prop_src" : $($image).attr("src")
            };*/

            // propositions.prop.push(proposition);

            // On stocke les données dans le local storage
            // localStorage.setItem("propositions", propositions);

            // On ajoute la proposition dans la liste 
            var $proposition = $('<div class="proposition col2"><a class="proposition__visu"><div class="proposition__overlay"></div></a><a class="delete">Supprimer</a>');

            $proposition.find('.proposition__visu').append($image);

            if( $(".propositions-none-wrapper").length > 0)
                $(".propositions-none-wrapper").css("display","none");

            $propositions.append($proposition);
            $(".propositions .proposition").last().animate({"opacity": 1});

        }

        // Suppression d'une création

        function deleteProposition(e){

            var $proposition = $(e.currentTarget).parent(".proposition");

            $.when( $proposition.animate({"opacity": 0}) ).then(function(){

                $proposition.remove();

                var nb_prop = $('.proposition').length;

                // Réaffichage de l'encadré pointillé "vos créations" si aucune création dans la liste
                if(nb_prop == 0)
                    $(".propositions-none-wrapper").css("display","block");
            });

        }

       /* $('body').on('mouseover', '.proposition__visu', function(e){
            
            var visuOver = $(e.target);

            $(".proposition__visu").each(function(){
                if($(this)!=visuOver)
                    $(this).find("img").stop().animate({"opacity":"0.4"}, 200, "linear");
            });

        });

        $('body').on('mouseout', '.proposition', function(e){
            
            var $propositions = $(".proposition");

            $propositions.each(function(){
                $(this).find("img").stop().animate({"opacity":"1"}, 200, "linear");
            });

        });*/

        $('body').on('click', '.delete', function(e){
            deleteProposition(e);
        });

        // Soumission d'une création

        $('body').on('click', '.proposition__visu', function(e){
            
            var $proposition = $(e.currentTarget).parent(".proposition"),
                src = $proposition.find("img").attr("src"),
                $inputPictureHidden = $("#tshirt-visu-data");
                $formImg = $(".pop-up__form .tshirt__visu").attr("src", src);

            $inputPictureHidden.val(src);

            $(".pop-up").fadeIn();

        });

        $('.pop_up__close').on('click', function(){
            $(".pop-up").fadeOut();
        });


        // Lancement de la page   
        init();

    });

})(jQuery);