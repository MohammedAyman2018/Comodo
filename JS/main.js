//hover nav-list
$(document).ready(function () {
    $('[data-target="two"]').hover(function () {
        $('#two').fadeToggle()
    });
    $('[data-target="one"]').hover(function () {
        $('#one').fadeToggle()
    });
});

// gallery
$(".fa-eye").click(function (e) {
    
    //get the clicked overlay
    let clicked =e.target;
    //get the image belowe the overlay number and src
    number = $(clicked).next().attr('number');
    let src = $(clicked).next().attr('src');
    //change modal img to the clicked one
    modalimg = $(".modalImg").attr({
        "src" : src
    });
    
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});