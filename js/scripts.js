$(document).ready(function(){
$ ('.bxslider').bxSlider({
       mode: 'horizontal',
       auto: true,

	});

});

var prices = $ (".prices").attr("data_value");
var i=0;

function adcart () {
	i++;
	document.getElementById("price").innerHTML="Total: " +" Ksh "+ + i * prices;

}

$("button").click(function(){
	document.getElementById("select").innerHTML="Cart " + " " + i ;
}); 










