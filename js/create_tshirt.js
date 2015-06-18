$(function(){


    /****************************************************************************************************

                                            GENERATION DU CANVAS


    ****************************************************************************************************/

    // Graphics settings
    var settings ={};
    settings.displayWidth = 200;
    settings.displayHeight = 250;
    settings.backgroundAlpha = 0.02;
    settings.agentSize = 2;
    settings.maxIncrement = 1;
    settings.nbAgents = 10;
    settings.triangleAlpha = .1;
    settings.distanceActiveMouse = .01;
    settings.mouseActivated = false;
    settings.stopAnimation = false;

    settings.colorR = Math.floor(Math.random() * 256);
    settings.colorV = Math.floor(Math.random() * 256);
    settings.colorB = Math.floor(Math.random() * 256);

    // Mouse position
    var mousePosition = {
        x: 0,
        y: 0
    };

    // var displaySizeSquared = settings.displaySize * settings.displaySize;

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
        agent.xIncrement = (Math.random() * 3 - 1) * settings.maxIncrement;
        agent.saveXIncr = agent.xIncrement;

        agent.y = position.y;
        agent.yIncrement = (Math.random() * 2 - 1) * settings.maxIncrement;
        agent.saveYIncr = agent.yIncrement;
        

        agent.update = function(distanceToMouseSquared) {

            // Dessiner l'agent
            ctx.fillStyle = "rgb("+ settings.colorR +", "+ settings.colorV +", "+ settings.colorB +")"; //-- NOIR
            ctx.fillRect(agent.x, agent.y, settings.agentSize, settings.agentSize); // Taille fixe

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

    for (var i = 0; i < settings.nbAgents; i++) {

        if( i % 5 == 0)
            position.update()

        myAgent.push(createAgent());
    }

    // Boucle et déplace l'agent
    function step() {

        // Efface écran
        if(!settings.stopAnimation){

            // ctx.fillStyle = "rgba(255, 255, 255, "+settings.backgroundAlpha+")";
            ctx.fillStyle = "rgba(0, 0, 0, "+settings.backgroundAlpha+")";
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
    gui.add(settings, "backgroundAlpha", 0, 1); // Register the property 'refreshAlpha' of the 'settings' object, taking values between 0 and 1. The initial value is the value given to the property at the beginning of this code
    // gui.add(settings, "triangleAlpha", 0, 1);
    gui.add(settings, "distanceActiveMouse", 0, 1);
    gui.add(settings, "agentSize", 1, 100);
    gui.add(settings, "mouseActivated", false, true);
    // var stopAnimation = gui.add(settings, "stopAnimation", false, true);
    var colorR = gui.add(settings, "colorR", 0, 256);
    var colorV = gui.add(settings, "colorV", 0, 256);
    var colorB = gui.add(settings, "colorB", 0, 256);
    var numAgentController = gui.add(settings, "nbAgents", 1, 100);


    colorR.onChange(function(value){
        settings.colorR =  Math.floor(value);
    });

    colorV.onChange(function(value){
        settings.colorV =  Math.floor(value);
    });

    colorB.onChange(function(value){
        settings.colorB =  Math.floor(value);
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

    // Stoper ou non l'animation 

    var $stopAnim = $("#stop-animation");

    $stopAnim.on('change', function(){
        settings.stopAnimation =  $(this).is(':checked')
    })

    $("body").keydown(function(event) {
 
        if (event.which === 32) { 

            settings.stopAnimation = !settings.stopAnimation;

            $stopAnim.prop('checked', settings.stopAnimation);

        }
    });

    // track mouse position
    var cvs = $("body");
    cvs.mousemove(function(e) {
        var offset = cvs.offset();
        mousePosition.x = e.clientX - offset.left;
        mousePosition.y = e.clientY - offset.top;
    });







    /****************************************************************************************************

                                            SAUVEGARDE DE L'IMAGE


    ****************************************************************************************************/
    
    
    
});