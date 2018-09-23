$(function () {

    atualizarPlacar();

    $('.area').on('click', function() {

        if( $(this).find('img').length == 0 ) {

            if(vez == 'o') {
                $(this).html('<img src="o.png" style="height: 50px">');
                $(this).attr('data-marcado', 'o');
                vez = 'x';
            } else {
                $(this).html('<img src="x.png" style="height: 50px">');
                $(this).attr('data-marcado', 'x');
                vez = 'o';
            }

            atualizarPlacar();

            verificarCampeao();
        }
    });


});