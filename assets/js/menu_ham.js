$(document).ready(function() {
$('.clickzone').hide();
  $(document).delegate('.open', 'click', function(event){
    $(this).addClass('oppenned');
    $('.clickzone').show();
    event.stopPropagation();
  })
  $(document).delegate('body', 'click', function(event) {
    $('.open').removeClass('oppenned');
    $('.clickzone').hide();
  })
  $(document).delegate('.clickzone', 'click', function(event){
    $('.open').removeClass('oppenned');
    $('.clickzone').hide();
    event.stopPropagation();
  });
});
