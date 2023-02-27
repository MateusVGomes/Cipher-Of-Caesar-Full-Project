
const traduzirRadio = document.getElementById("traduzirCifra");

const escreverRadio = document.getElementById("escreverCifra")

const chaveInput = document.getElementById('chave');

const cifraInput = document.getElementById('cifra');

const translateButton = document.getElementById('submit');

let sentenca;

let chave;

traduzirRadio.addEventListener('change', function () {



    if (traduzirRadio.checked == true) {

        sentenca = 'traduzir';



    }

});

escreverRadio.addEventListener('change', function () {

    if (escreverRadio.checked == true) {

        sentenca = 'escrever';


    }

});

chaveInput.addEventListener('change', function () {

    chave = chaveInput.value;


});
translateButton.addEventListener('click', () => {
    console.log(chave);
    let cifrinha = cifraInput.value;
    prepareCipher(sentenca, chave, cifrinha);

})


function prepareCipher(sentenca, chave, cifra) {
    chave = +chave;
    sentenca === undefined ? alert("Você precisa marcar se quer traduzir ou escrever") :
        chave === undefined ? alert("você precisa escrever a chave") :
            cifraInput.value === '' ? alert('Você precisa digitar a cifra') : sentenca === 'traduzir' ? translateCipher(chave, cifra) : writeCipher(chave, cifra);

}

function translateCipher(chave, cifra) {

    cifra = cifra.toUpperCase();

    let translated = "", actual;
   
    chave = chave % 26;

    for (let i = 0; i < cifra.length; i++) {

        actual = convertLetterToAsc(cifra.charAt(i));

        if (actual - chave < 65) {

            if (actual >= 33 && actual <= 64) {

                translated += convertAscToLetter(actual);

            }
            else {
                translated += convertAscToLetter(actual + chave);
            }
        }
        else {

            translated += convertAscToLetter(actual - chave);

        }
    }

    return alert(translated.replaceAll("-", " "));

}

function writeCipher(chave, cifra) {

    cifra = cifra.toUpperCase();
    console.log(cifra);
    let translated = "", actual;
    chave = chave % 26;



    for (let i = 0; i < cifra.length; i++) {



        actual = convertLetterToAsc(cifra.charAt(i));

        if (actual + chave > 90) {

            if (actual > 90) {
                translated += convertAscToLetter(actual);
                console.log(translated);
            }
            else {
                console.log('aqui')
                translated += convertAscToLetter(actual - chave);
            }
        }
        else {
            translated += convertAscToLetter(actual + chave);
        }
    }
    return alert(translated.replaceAll("-", " "));

}

function convertLetterToAsc(letter) {

    return letter.charCodeAt(0)

}
function convertAscToLetter(asc) {

    return String.fromCharCode(asc);

}