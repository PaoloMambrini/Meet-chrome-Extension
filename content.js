/*
document.addEventListener('DOMContentLoaded', function(){
  document.querySelector(".btn").addEventListener("click", Funzione1, false)
  function Funzione1(){
      *.querySelector('.SDkEP').style.background = "red"
  }
}, false)
*/

chrome.runtime.onMessage.addListener(function (colore){
  cambia_tema(colore)


})

function cambia_tema(colore){
  let color=""
  switch (colore) {
    case "red":
      color = "#cb3234"
      break;
    case "green":
      color = "#77DD77"
      break;
    case "blue":
      color = "#0066ff"
      break;
     case "purple":
       color = "#8f00ff"
       break;
     case "pink":
        color = "#ff80ff"
        break;
      case "orange":
        color = "#ff8c1a"
        break;


    default:
}

  console.log(color)

  const newDiv = document.createElement("style");
  newDiv.setAttribute("class", "css_extension")
  const newContent = ".Gt6sbf:not(:disabled){background: "+color+"} .nJcgFc.FTMc0c, .CdgDHf.FTMc0c, .P9KVBf .nJcgFc.FTMc0c, .P9KVBf .CdgDHf.FTMc0c{background-color:"+color+"} .NKaD6.u3bW4e:not(.RDPZE), .NKaD6:hover:not(.RDPZE){background: "+color+"} .IisKdb{background: "+color+"} .IisKdb{background: "+color+"} .Y5sE8d{background: "+color+"} .e19J0b{background: "+color+"} .ZYf3qb:not(.RDPZE) .snByac{color: "+color+"} .UQuaGc{color: "+color+"} .UMrnmb-XPtOyb-OWXEXe-OmTp3c .VfPpkd-rOvkhd-Zr1Nwf-OWXEXe-ssJRIf{color: "+color+"} .Y5sE8d{color: white} .yBiuPb.FTMc0c{background-color: "+color+"; border: "+color+"} .x95qze{ color:"+color+"} .tC2Wod{border: 3px solid "+color+"}";

  // add the text node to the newly created div
  newDiv.appendChild(document.createTextNode(newContent));
  if (document.querySelector(".css_extension") == null) {
    const currentDiv = document.querySelector('#yDmH0d');
    document.body.insertBefore(newDiv, currentDiv);
  }else{
    document.querySelector(".css_extension").innerHTML = newContent
  }
  // add the newly created element and its content into the DOM

}

let divElement = document.createElement("div")
divElement.setAttribute("class", "container")

const currentDiv2 = document.querySelector('.SQHmX');
document.body.insertBefore(divElement, currentDiv2);
let link = window.location.href;
let user = "default"
if (link.replace("authuser=0",'')!=link) {
  user = "0"
}else if (link.replace("authuser=1",'')!=link) {
    user = "1"
}else if (link.replace("authuser=2",'')!=link) {
    user = "2"
}else if (link.replace("authuser=3",'')!=link) {
    user = "3"
}else if (link.replace("authuser=4",'')!=link) {
    user = "4"
}else if (link.replace("authuser=5",'')!=link) {
    user = "5"
}
console.log(user)

if (user=="default") {
  user="0"
  link_classroom=`https://classroom.google.com/`
  link_drive=`https://drive.google.com/drive/`
  link_gmail=`https://mail.google.com/mail/`
}else{
  link_classroom=`https://classroom.google.com/u/${user}/h`
  link_drive=`https://drive.google.com/drive/u/${user}/`
  link_gmail=`https://mail.google.com/mail/u/${user}/`

}
//crea bottone per copiare il copiare il link


document.querySelector('.container').innerHTML += `<div class="g-services-bar"><a href="${link_classroom}" class="classroom" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png"></a><a href="${link_drive}" class="drive" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png"></a><a href="${link_gmail}" class="gmail" target="blank"><img src="https://1000marche.net/wp-content/uploads/2020/03/Gmail-logo.png"></a></div><div class="container-content"><div class="left-part"><div class="copyLinkDiv"><div class="copyLinkDiv2" id="btnCopy"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="copy" class="svg-inline--fa fa-copy fa-w-14" role="img" id="icona-copy" sxmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path></svg><p>copy link</p></div><input type="text" name="" value="${window.location.href}"></div></div><div class="right-part"><div class="div-create-project"><h2>Create new project</h2><a class="g-documenti" href="https://docs.google.com/document/u/${user}/create" target="_blank"><img src="https://www.fantalica.com/wp-content/uploads/2020/10/Google-Documenti-Icon.png"><p>google document</p></a><a class="g-presentazioni" href="https://docs.google.com/presentation/u/${user}/create" target="_blank"><img src="https://play-lh.googleusercontent.com/DG-zbXPr8LItYD8F2nD4aR_SK_jpkipLBK77YWY-F0cdJt67VFgCHZtRtjsakzTw3EM"><p>google presentation</p></a><a class="g-fogli" href="https://docs.google.com/spreadsheets/u/${user}/create" target="_blank"><img src="https://cdn.statically.io/img/cdn6.aptoide.com/lonerfox2013/6cabf09e015eea1347cce35e3e8870d5_icon.png"><p>google sheets</p></a></div></div></div>`

document.querySelector("#btnCopy").addEventListener("click", function (){
  var link = window.location.href;
  console.log(link.replace("authuser",''))
  //verifichiamo se è l'account di default e nel caso togliamo la seconda perte di link
  if (link.replace("authuser",'') != link) {
    let count=0
    let arrayLink=[]
    for (var x in link) {

      count+=1;
      if (count<=36) {arrayLink.push(link[x])}
    }
    console.log(arrayLink)
    link = arrayLink.join("")

    console.log(link)
  }
  navigator.clipboard.writeText(link);
  document.querySelector('#btnCopy').querySelector('p').innerHTML = 'link copied'

});
//https://meet.google.com/edj-ywux-krf  36 caratteri  ?pli=1&authuser=1



/*

Cpvy4b V7iHrd


oIy2qc -> messaggio
VfPpkd-kBDsod -> tasto di invio

for (var x in oIy2qc) {
  if (x=="/") {

  }

}
if (oIy2qc.text) {

}
document.querySelector(".VfPpkd-kBDsod").addEventListener("click", function(){
  console.log(document.querySelector(".oIy2qc").text)
})
*/
