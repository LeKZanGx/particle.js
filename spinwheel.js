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
	$('.superwheel').superWheel('onStart',function(results,spinCount,now){
  console.log(results);
});
  
  
// On Step event
$('.superwheel').superWheel('onStep',function(results,slicePercent,circlePercent){
  console.log('Spin Current Slice');
  console.log(results);
});
  
  
// On Progress event
$('.superwheel').superWheel('onProgress',function(slicePercent,circlePercent){
  console.log('Spin Progress');
  console.log(slicePercent);
});
  
  
// On Complete event
$('.superwheel').superWheel('onComplete',function(results,spinCount,now){
  console.log('Spin Completed');
  console.log(results);
});
  
// On Fail Event
$('.superwheel').superWheel('onFail',function(results,spinCount,now){
  log('Spin Failed, Something wrong in wheel settings');
  log(results);
});
});
$(document).on('click', '.spin-button' ,function(e){
	
  // By default the slice key (value) is captured from wheel parameter "selector"
  // Start spin and select random winner from slices Where value is "0"
  $('.superwheel').superWheel('start', 0);
  
});
