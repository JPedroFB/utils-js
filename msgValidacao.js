
/*
	Função genérica para mensagem de validação para campos input
	O método não faz a validação, apenas exibe a mensagem.

	Exemplo de chamada: onkeyup="msgValidacao(validaCNPJ($(this)[0].value),$(this),' nome do campo ')"

	O método validaCNPJ() retorna um boolean 
	
*/
function msgValidacao(value,input,tipo){
	input.next().text('')
	if(value){
		input.css({"border":"solid 1px green"})
	}else{
		input.css({"border":"solid 1px red"})
		input.next().text('* '+tipo+' inválido.').css({"color":"red"})
	}
}