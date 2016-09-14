$(document).ready(function(event){

    $(".form-open-menu").click(function(event){
        event.preventDefault();
        var that=$(this);
        $(this).closest(".side-bar-form").children("form").slideToggle('slow', function(event){
            if ($(this).is(':visible')){
                that.html('Close panel<i class="fa fa-chevron-up fa-lg"></i>');
            }else{
                that.html('Open panel<i class="fa fa-chevron-down fa-lg"></i>');
            }
        });
    });



    $(".kind-checkbox").click(function(event){
        $(this).closest(".check-box").children(".sub-check").toggleClass("hide");
    });

    $("#price-select").change(function(event){
        $("#price-select-value").html($(this).val());
    });


    $('.slide-photos').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });

    $('.sale-block_width').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true
    });


    $('.slide-prod').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".fancybox").fancybox();

    $(".mobile-search").click(function(event){
        $(".mobile-dropdown-search").toggleClass("display_none");
        $(".close-symbol").toggleClass("display-mobile-none");
    });

    $(".mobile-cart").click(function(event){
        $(".mobile-dropdown-cart").toggleClass("display_none");
        $(".close-symbol").toggleClass("display-mobile-none");
    });

    $(".mobile-key").click(function(event){
        $(".mobile-dropdown-key").toggleClass("display_none");
        $(".close-symbol").toggleClass("display-mobile-none");
    });


    $(".mobile-bar").click(function(event){
        $(".mobile-dropdown-bar").toggleClass("display_none");
        $(".close-symbol").toggleClass("display-mobile-none");
    });

});