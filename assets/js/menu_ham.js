$(document).ready(function() {
$('.clickzone').hide();
  $(document).delegate('.open', 'click', function(event){
    $(this).addClass('oppenned');
    $('.clickzone').show();
    $('.open').css("cssText", "opacity: 1.0 !important;");
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
