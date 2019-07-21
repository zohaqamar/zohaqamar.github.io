var count = 0;
var max   = 0;

$('.svg-bar-chart svg rect').each(function(index, item) {
  var val   = $( item ).data('val');
      count = count + 1;
  max   = ( val > max ) ? val : max;
}).each(function(index, item) {
  
  var width  = ( 1 / count ) * 100;
  var x      = index * width;
  
  var height = ( $( item ).data('val') / max ) * 100;
  var y      = 100 - height;
  
  $( item ).attr('x', x + '%').attr('width', width + '%').attr('y', y + '%').attr('height', height + '%');
  
});