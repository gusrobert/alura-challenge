
function encryptText() 
{
    let inputText = document.getElementById("input_text").value;

    inputText = inputText.toLowerCase();
    
    let textArray = inputText.split("");

    let cryptedText = '';

    textArray.forEach(character => {
        switch (character) {
            case 'e':
                cryptedText = cryptedText + 'enter';
                break;

            case 'i':
                cryptedText = cryptedText+'imes';
                break;

            case 'a':
                cryptedText = cryptedText+"ai";
                break;

            case 'o':
                cryptedText = cryptedText+'ober';
                break;

            case 'u':
                cryptedText = cryptedText+'ufat';
                break
        
            default:
                cryptedText = cryptedText+character;
                break;
        }
    });

    showResult(cryptedText);
}

function decryptText() 
{
    let inputText = document.getElementById("input_text").value;


    const keywords = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    const keys = Object.keys(keywords).sort((a, b) => b.length - a.length);

    let decryptedText = inputText;
    for (let key of keys) {
        const value = keywords[key];
        const regex = new RegExp(key, 'g');
        decryptedText = decryptedText.replace(regex, value);
    }

    showResult(decryptedText);
}

function showResult(text) {
    document.getElementById("content__crypt__no_text").style.display = "none";
    document.getElementById("content__crypt__result_text").style.display = "flex";


    let resultText = document.getElementById("content__crypt__text_result")
    resultText.innerHTML = text;
}
