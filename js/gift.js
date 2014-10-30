    $(document).ready(function() {
        var $buy = $(".buy").show();  
        var $gift = $(".gift").hide();
            $cbs = $('input[name="checkgift"]').click(function() {
                $gift.toggle();
                $buy.toggle();

                
            });
    
    });