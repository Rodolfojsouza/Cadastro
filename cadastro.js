$(document).ready(function(){
  $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
	$('.cep').mask('00000-000');
	$('.phone_with_ddd').mask('(00) 00000-0000');
	$('.email').keypress(function(){
	validaemail($(this));
	}).blur(function(){validaemail($(this))
	})
})

function validaemail(campo){
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	$("body").find("label.erro").remove();
	if (!re.test($(campo).val())){
	$(campo).after('<label class="erro">digite um e-mail válido.</label>')
	}
}