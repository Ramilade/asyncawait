let  formAddCar 
export function initP5(){
 formAddCar = /** @type {HTMLFormElement} */  (document.getElementById('new-car-form'));
  document.getElementById("add-new-btn").onclick = newCar
  document.getElementById("btn-submit-car").onclick = submitCar

}


//ADD A CAR START



function submitCar (e) {
  e.preventDefault();
  const formData = new FormData(formAddCar);
  const carDataFromForm = Object.fromEntries(formData)
  console.log(carDataFromForm)
  const options = {
    method: 'POST',
    body: JSON.stringify(carDataFromForm),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch("http://localhost:8080/api/cars", options)
   .then(res=>res.json())
   .then(result =>  document.getElementById("new-car-status").innerText =
    "New car added with ID: " + result.id + `(${JSON.stringify(result)})`)
}

function newCar(evt ){
  evt.preventDefault()
  document.getElementById("brand-id").value=""
  document.getElementById("model-id").value=""
  document.getElementById("pricePrDay-id").value=""
  document.getElementById("bestDiscount-id").value=""

}

//ADD A CAR END

