let sharedText = "Default text"

console.log("Page: 2" + sharedText)

export function initP2(){
  document.querySelector("#btn-save-text").onclick = readText
  document.querySelector("#text").innerText = sharedText
  }

  export function getText(){
    return sharedText
  }

function readText(){
  sharedText = document.querySelector("#input-text").value
  document.querySelector("#text").innerText = sharedText
}
  