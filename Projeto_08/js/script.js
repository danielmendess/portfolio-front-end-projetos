$(function() {

    //menu mobile

    $('.mobile').on('click', function() {

        $(this).find('ul').slideToggle();

    });

    //botão que define o preço da pesquisa da página venda.html

    var currentValue = 0;
    var isDrag = false;

    $('.pointer-barra').on('mousedown', function() {
        isDrag = true;
    });

    $(document).on('mouseup', function() {
        isDrag = false;
        enableTextSelecttion();
    });

    $('.barra-preco').on('mousemove', function(e) {

        if(isDrag) {
            
            disableTextSelection();

            var elBase = $(this);
            var mouseX = e.pageX - elBase.offset().left;
            var preco_atual = 0;
            var preco_maximo = 70000;
            
            if (mouseX < 0) mouseX = 0;
            if (mouseX > elBase.width()) mouseX = elBase.width();

            $('.pointer-barra').css('left', (mouseX - 13) + 'px');
            currentValue = (mouseX / elBase.width()) * 100;
            $('.barra-preco-fill').css('width', currentValue + '%');

            preco_atual = (currentValue / 100) * preco_maximo;
            //aqui
            preco_atual = formatarPreco(preco_atual);
            //aqui
            $('.preco_pesquisa').html('R$'+ preco_atual);
        
        }

        function disableTextSelection() {
            $('body').css('-webkit-user-select', 'none');
            $('body').css('-moz-user-select', 'none');
            $('body').css('-ms-user-select', 'none');
            $('body').css('-o-user-select', 'none');
            $('body').css('user-select', 'none');
        }

        function enableTextSelecttion() {
            $('body').css('-webkit-user-select', 'auto');
            $('body').css('-moz-user-select', 'auto');
            $('body').css('-ms-user-select', 'auto');
            $('body').css('-o-user-select', 'auto');
            $('body').css('user-select', 'auto');
        }

    });

    

});