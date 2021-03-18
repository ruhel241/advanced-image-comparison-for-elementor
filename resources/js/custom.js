(function($) {
    
    const AICImageComparison = function( $scope, $ ) {
        
        if( 'undefined' == typeof $scope ) {
            return;
        }

        var aicImageComparison =  $('.aic-image-container');

        aicImageComparison.each(function() {
            var sectionId = '#' + $(this).attr('id');

            $(sectionId).twentytwenty({
                default_offset_pct: $(this).data('offset'), 
                orientation:  $(this).data('orientation'),
                before_label: $(this).data('before_label'),
                after_label:  $(this).data('after_label'),
                no_overlay: $(this).data('overlay') == "yes" ? false : true,
                click_to_move: $(this).data('click_to_move') == "yes" ? true : false,
                move_slider_on_hover: $(this).data('onhover') == "yes" ? true : false,
            });
        });
    }
   
    $( window ).on( 'elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/aic-image-comparison.default', AICImageComparison );
    });

})( jQuery );

