const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phoneNumber");
const button = document.querySelector("#btn");
const loader = document.querySelector("#loader");
const qrimg = document.querySelector("#qrimg");


// const url =` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example`

button.addEventListener('click', async()=>{
  let nameValue = name.value;
  let emailValue = email.value;
  let phoneValue = phoneNumber.value;
  let allValues = (`Name = ${nameValue}, Email = ${emailValue}, Contact Number =  ${phoneValue}`);


  loader.style.display ="block"
  qrimg.src ="";


    if(nameValue.length == 0 || emailValue.length==0 ||phoneValue.length == 0 ){
      alert("Enter valid credentials !!!! ")
      loader.style.display ="none";
      
  } else{
      let imgSource = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${allValues}`;
      let data = await fetch(imgSource);
      let response = await data.blob(); // blob = binary large object contains image, audio and other files
      let url = URL.createObjectURL(response);
      qrimg.src =url;
      loader.style.display ="none"
      

  }
})


