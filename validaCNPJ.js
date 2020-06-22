function validaCNPJ(str) {
    var mult, i, soma, dv, dvInformado;
    var digito = new Array(13);

    if(str=='00.000.000/0000-00') {
        return false
    }
    
    // Retira os dígitos formatadores de CNPJ '.', '/' e '-', caso existam.
    if(str.length > 0) {
        while ((str.indexOf('.') != -1) || (str.indexOf('-') != -1)) {
            if (str.indexOf('.') != -1) {
                aux = str.indexOf('.');
                str = str.substr(0, aux) + str.substr(aux+1, str.length-1);
            }
            if (str.indexOf('-') != -1) {
                aux = str.indexOf('-');
                str = str.substr(0, aux) + str.substr(aux+1, str.length-1);
            }
            if (str.indexOf('/') != -1) {
                aux = str.indexOf('/');
                str = str.substr(0, aux) + str.substr(aux+1, str.length-1);
            }
        } // while
    } // if

    // retira do numero informando os dois ultimos digitos
    dvInformado= str.substr(12,2);
    // desmembra o numero do cnpj no array digito.
    for (i=0;i<=11;i++) {
        digito[i]= str.substr(i,1);
    }
    // calcula o valor do 13 dígito de verifica��o
    mult = 5;
    soma=0;
    for (i=0;i<=3;i++) {
        soma=soma + (digito[i] * mult);
        mult--;
    }
    mult = 9;
    for (i=4;i<=11;i++) {
        soma=soma + (digito[i] * mult);
        mult--;
    }
    digito[12]=soma%11;
    if (digito[12]<2) {
        digito[12]=0;
    } else {
        digito[12] = 11-digito[12];
    }
    // calcula o valor do 14 digito verificador
    mult = 6;
    soma=0;
    for (i=0;i<=4;i++) {
        soma=soma + (digito[i] * mult);
        mult--;
    }
    mult = 9;
    for (i=5;i<=12;i++) {
        soma=soma + (digito[i] * mult);
        mult--;
    }
    digito[13]=soma%11;
    if (digito[13]<2) {
        digito[13]=0;
    } else {
        digito[13] = 11 - digito[13];
    }
    // verifica se o digito calculado eh igual ao informado
    dv = (digito[12]) + '' + digito[13];
    if (dv != dvInformado) {
        return false
    } else {
        return true;
    }
}
