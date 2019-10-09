// La barra de arriba va bajando, hasta que llega al texto...y aparece la barra encima del texto
$(document).ready(function(){
    // Cambio estilo barra Nav (navegación). Cuando modifique el scroll se moverá
    $(window).on("scroll", function(){
        var positionParagraph = $("#primera").offset();
        var positionDocument = $(window).scrollTop();
        // console.log(position.top);
        if (positionDocument > positionParagraph.top - 60) {
            $('nav').removeClass('white');
            $('.burger').removeClass('white');
        } else {
            $('nav').addClass('white');
            $('.burger').addClass('white');
        }
    });
    
    // Menú lateral para que al hacer click aparezca el "open" añadido en CSS
    $('.burger').click(function() {
        $('.burger').toggleClass('open');
        $('aside').toggleClass('open');
    });
});