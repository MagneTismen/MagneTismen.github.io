$( document ).ready(function() {

$( ".cross" ).hide();
$( ".nav" ).hide();
$( ".hamburger" ).click(function() {
$( ".nav" ).slideToggle( "medium", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".nav" ).slideToggle( "medium", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});