$('h1').css('font-size', '18px');

$('h1').css('background-color', 'rgb(157,194,132)');

$('h1').css('text-align', 'center');

$('h1').css('color', 'white');

$('h1').css('width', '300px');

$('ul').css('list-style-type', 'none');

$('ul').css('color', 'rgb(244,181,94)');

$('button').css('border-color', 'rgb(157,194,132)')

$('button').css('border-width', '2px')

$('input').css('border-color', 'rgb(157,194,132)')

$('input').css('border-width', '2px')

var inp;

$('#btn').click(function() {
inp = $('#textfield').val();
$('ul').append('<li>' + inp + '</li>')
});




