jQuery(document).ready(function ($) {
    $('.superwheel').superWheel({
        slices: [
            {
                text: '20% OFF',
                message: 'You win 20% off',
                value: 1
            }, {
                text: 'No luck',
                message: 'You have No luck today',
                value: 0
            }, {
                text: '30% OFF',
                message: 'You win 30% off',
                value: 1
            }, {
                text: 'Lose',
                message: 'You Lose :(',
                value: 0
            }, {
                text: '40% OFF',
                message: 'You win 40% off',
                value: 1
            }, {
                text: 'Nothing',
                message: 'You get Nothing :(',
                value: 0
            }
        ],
        selector: 'value'
    });
});
