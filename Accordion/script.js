jQuery = $
    (function ($) {
        $(document).ready(function () {
            $("#accordion p:not(:first)").hide();
            $("#accordion h4").click(function() {
                $(this).next('p').slideToggle(200)
                       .siblings("p:visible").slideUp(200);     
            })

        });
    });
(jQuery); 