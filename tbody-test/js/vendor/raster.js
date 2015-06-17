// Raster.js
// Saves a canvas as an high-quality jpg or a png.
// Uses canvas.toDataUrl(), the html 5 download attribute
// and a custom click event to trigger the download
// (source: http://techslides.com/html5-download-attribute-with-javascript/).



(function (window, $) {

    raster = function(canvas, filename, type) {

        var extension;

        if (type === "image/jpeg" || type === "jpeg" || type === "jpg") {
            extension = ".jpg";
            type = "image/jpeg";
        } else if (type === "image/png" || type === "png") {
            extension = ".png";
            type = "image/png";
        } else {
            extension = ".jpg";
            type = "image/jpg";
        }

        var dataUrl = canvas.toDataURL(type, 1.0); // 1.0 quality setting is for image/jpeg only
        $("body").append('<a type="' + type + '" class="raster-save-link" href="' + dataUrl + '" download="' + filename + extension +'"></a>');
        $(".raster-save-link").each(function() {
            var clickEvent = window.document.createEvent("MouseEvent"); // create an event that will work
            clickEvent.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            $(this).get(0).dispatchEvent(clickEvent); // dispatch event on dom object
        }).remove();

    };

    this.raster = raster;

}(this, jQuery));