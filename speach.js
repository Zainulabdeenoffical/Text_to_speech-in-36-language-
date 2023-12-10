function audio(){
    let message = document.getElementById("text-to-speech").value;
    let select_lang = document.querySelector("#language select");
    select_lang = select_lang.options[select_lang.selectedIndex].value;
    let speak = new SpeechSynthesisUtterance()
     speak.text = message;
        speak.volume = 1;
        speak.pitch = 1;
        speak.rate = 1;

     switch(select_lang){
     case "1":
     speak.lang = "ar-SA"
     break;
     case "2":
     speak.lang = "zh-CN"
     break;
     case "3":
     speak.lang = "zh-HK"
     break;
     case "4":
     speak.lang = "zh-TW"
     break;
     case "5":
     speak.lang = "cs-CZ"
     break;
     case "6":
     speak.lang = "da-DK"
     break;
     case "7":
     speak.lang = "nl-BE"
     break;
     case "8":
     speak.lang = "nl-NL"
     break;
     case "9":
     speak.lang = "en-AU"
     break;
     case "10":
     speak.lang = "en-ZA"
     break;
     case "11":
     speak.lang = "en-GB"
     break;
     case "12":
     speak.lang = "en-US"
     break;
     case "13":
     speak.lang = "fi-FI"
     break;
     case "14":
     speak.lang = "fr-CA"
     break;
     case "15":
     speak.lang = "fr-FR"
     break;
     case "16":
     speak.lang = "de-DE"
     break;
     case "17":
     speak.lang = "el-GR"
     break;
     case "18":
     speak.lang = "hi-IN"
     break;
     case "19":
     speak.lang = "hu-HU"
     break;
     case "20":
     speak.lang = "id-ID"
     break;
     case "21":
     speak.lang = "it-IT"
     break;
     case "22":
     speak.lang = "ja-JP"
     break;
     case "23":
     speak.lang = "ko-KR"
     break;
     case "24":
     speak.lang = "no-NO"
     break;
     case "25":
     speak.lang = "pl-PL"
     break;
     case "26":
     speak.lang = "pt-BR"
     break;
     case "27":
     speak.lang = "pt-PT"
     break;
     case "28":
    speak.lang = "ro-RO"
        break;
        case "29":
     speak.lang = "ru-RU"
     break;
     case "30":
     speak.lang = "sk-SK"
     break;
     case "31":
     speak.lang = "es-MX"
     break;
     case "32":
     speak.lang = "es-ES"
     break;
     case "33":
     speak.lang = "sv-SE"
     break;
     case "34":
     speak.lang = "th-TH"
     break;
     case "35":
     speak.lang = "tr-TR"
     break;
     default:
        speak.lang = "en-US";
        break;
}
window.speechSynthesis.speak(speak);
}
