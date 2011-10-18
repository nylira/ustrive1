$('a.compose').click(function (){
  $('#composition-form').toggleClass('visible');
});
$('span.more').click(function (){
  $('ul.more').toggleClass('visible');
});

$('#folders').tabs({ fx: { height: 'toggle', opacity: 'toggle' } });

$('textarea.elastic').elastic();
