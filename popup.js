 document.addEventListener('DOMContentLoaded', function (){
   document.querySelector("#invioBtn").addEventListener('click', alclick, false)
   function alclick(){
     let colore = document.querySelector("select").value
     funzione(colore)
     chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
     chrome.tabs.sendMessage(tabs[0].id, colore)
       })
   }
 }, false)

function funzione(colore){
  let col = colore
  console.log(col)

}
