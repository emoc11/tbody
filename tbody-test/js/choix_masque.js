var $liste  = $('.selection-option--masque'),
    $canvas = $('#canvas');

$liste.on('change', function(){

   $canvas.removeClass().addClass($(this).val());

})