// Adiciona o ano atual para o copyright no footer
$('#year').text(new Date().getFullYear());

// Inicia scrollspy do bootstrap
$('body').scrollspy({
    target: '#main-nav',
});

// Smoth Scrolling
$("#main-nav a").on('click', function (event) {

    if (this.hash !== "") {

        event.preventDefault();
        const hash = this.hash;

        $('html, body').animate({

            scrollTop: $(hash).offset().top

        }, 800, function () {

            window.location.hash = hash;

        });

    }

});
