(function ($) {
    'use strict';

    $(document).ready(function () {
        var answers = [];

        $('#rootwizard').bootstrapWizard({
            nextSelector: '.wizard .btn-next',
            previousSelector: '.wizard .btn-prev',

            onTabClick: function (tab, navigation, index) {

            },

            onNext: function (tab, navigation, index) {

            }
        });

        $('.variants').each(function () {
            var $item = $(this).find('.variant-item');
            var count = 0;

            $item.click(function () {
                var $variantText = $(this).find(".variant-caption");
                var $self = $(this);
                count++;

                if (count == 1) {
                    $self.addClass('selected');

                    if ($self.hasClass('selected')) {
                        answers.push($.trim($variantText.html()));
                        console.log(answers);
                        return true;
                    }
                }
                return false;
            });
        });
    });

}(jQuery));