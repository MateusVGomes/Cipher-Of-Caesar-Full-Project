
const traduzirRadio = document.getElementById("traduzirCifra");

const escreverRadio = document.getElementById("escreverCifra")

const chaveInput = document.getElementById('chave');

traduzirRadio.addEventListener('change', function () {

    var sentenca;

    if (traduzirRadio.checked == true) {

        sentenca = 'traduiz';

        alert(sentenca);

    }

    else if (escreverRadio.checked == true) {

        sentenca = 'escrever';

        alert(sentenca);

    }
    
});

escreverRadio.addEventListener('change', function () {

    var sentenca;

    if (escreverRadio.checked == true) {

        sentenca = 'escrever';

        alert(sentenca);

    }
    
});

chaveInput.addEventListener('change', function () {
   
    const chave=chaveInput.value;

});


