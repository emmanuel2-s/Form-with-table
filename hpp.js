// TO GET THE CORRECT ANSWER YOU WANT
// WHICH IS (10+10)*20 =210
var list = (10 + 10)*20;
console.log(list)

// THIS WILL BE CALCULATED AS 20*10 + 10= 400
var list1 = 10 + 10*20;
console.log(list1)

let selectedRow = null;
document.addEventListener('DOMContentLoaded', getOutputs);
function formSubmit(){
  let data= showData()
  if (selectedRow === null) {
    createRow(data);
    storeInLocalStorage(data)
}

}


function showData(){
 let data = {};
 data ["Name"] = document.getElementById('fname').value
 data ["Email"] = document.getElementById('email').value
 data ["Gender"] = document.getElementById('gender').value
 data ["Phone"] = document.getElementById('phone').value
 data ["Country"] = document.getElementById('country').value

 console.log(data)
 return data;

// let data = {
//  Name : document.getElementById('fname').value,
//  Email : document.getElementById('email').value,
//  Gender : document.getElementById('gender').value,
//  Phone : document.getElementById('phone').value,
//  Country : document.getElementById('country').value
// }
}

function storeInLocalStorage (data){
    let formData;
    if (localStorage.getItem('formData')=== null){
        formData = []
    }else{
        formData = JSON.parse(localStorage.getItem('formData'))
    }
    formData.push(data)
    localStorage.setItem('formData', JSON.stringify(formData))
}

function createRow(){
    var table = document.getElementById('table');
    var newRow = table.insertRow(table.length);
    var Name = newRow.insertCell(0);
    Name.innerHTML = document.getElementById('fname').value;
    var Email = newRow.insertCell(1);
    Email.innerHTML = document.getElementById('email').value;
    var Gender = newRow.insertCell(2);
    Gender.innerHTML = document.getElementById('gender').value;
    var Phone = newRow.insertCell(3);
    Phone.innerHTML = document.getElementById('phone').value;
    var Country = newRow.insertCell(3);
    Country.innerHTML = document.getElementById('country').value;

  
}

function getOutputs (){

    let formData;
    if (localStorage.getItem('formData')=== null){
        formData = []
    }else{
        formData = JSON.parse(localStorage.getItem('formData'))
    }

        formData.forEach((data) => {
            var table = document.getElementById('tbdy');
            var newRow = table.insertRow(table.length);
            var Name = newRow.insertCell(0);
            Name.innerHTML = data.Name;
            var Email = newRow.insertCell(1);
            Email.innerHTML = data.Email;
            var Gender = newRow.insertCell(2);
            Gender.innerHTML = data.Gender;
            var Phone = newRow.insertCell(3);
            Phone.innerHTML = data.Phone;
            var Country = newRow.insertCell(4);
            Country.innerHTML = data.Country;

            return data;
        });
}