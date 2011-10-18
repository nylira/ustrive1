$('a.compose').click(function (){
  $('#composition-form').toggleClass('visible');
});

$('#folders').tabs({ fx: { height: 'toggle', opacity: 'toggle' } });
