
const traduzirRadio = document.getElementById("traduzirCifra");

const escreverRadio = document.getElementById("escreverCifra")

const chaveInput = document.getElementById('chave');

const cifraInput = document.getElementById('cifra');

const translateButton = document.getElementById('submit');

let sentenca;

let chave;

traduzirRadio.addEventListener('change', function () {

    

    if (traduzirRadio.checked == true) {

        sentenca = 'traduiz';

        alert(sentenca);

    }

});

escreverRadio.addEventListener('change', function () {

    if (escreverRadio.checked == true) {

        sentenca = 'escrever';

        alert(sentenca);

    }

});

chaveInput.addEventListener('change', function () {

 chave = chaveInput.value;

});
translateButton.addEventListener('click', () => {
    console.log(chave); 
    let cifrinha=cifraInput.value;
    prepareCipher(sentenca,chave,cifrinha);

})


function prepareCipher(sentenca,chave,cifra) {
  sentenca===undefined?alert("Você precisa marcar se quer traduzir ou escrever"):
  chave===undefined?alert("você precisa escrever a chave"):
  cifraInput.value===''?alert('Você precisa digitar a cifra'):alert('ta')

}