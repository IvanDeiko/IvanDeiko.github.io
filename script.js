let text= document.querySelectorAll('[data-validation="text"]');
let radio = document.querySelectorAll('[data-validation="radio"]');
let dataValidation = document.querySelectorAll('[data-validation]')
let btn = document.querySelector('[data-validation="submit"]');
let form = document.querySelector('.form')
let address = document.querySelector('[data-validation="Address"]');
let select = document.querySelector('[data-selector="select"]')
let Email = document.querySelector('[data-email ="email"]')

function validateEmail(){
  let num = 0;
   let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if(Email.value == ""){
     let error = showError('This field is required!')
     Email.classList.add('error1');
     mail.appendChild(error)
   }else if(reg.test(Email.value) == false){
    let error = showError('Email address is not valid ')
    Email.classList.add('error1');
    mail.appendChild(error)
   }else{
     num++;
    Email.classList.remove('error1');
   }
   return num;
}
function showError(text){
          var error = document.createElement('div')
          error.className='error'
          error.style.color = 'red'
          error.innerHTML = text
          return error;
}

function resetError() {
        let errors = form.querySelectorAll('.error');
        for(let i = 0; i < errors.length; i++ ){
          errors[i].remove();
        }
}

function checkSelector(){
  let num = 0;
     if(!select.value){
      select.classList.add('error1');
      let error = showError('This field is required!')
      selector.appendChild(error)
     }else{
       num++
       select.classList.remove('error1');
     }
    return num;
}

function checkAddress(){
  let num = 0;
  if(/'/.test(address.value)){
    let error = showError('Bad Symbols!')
    address.classList.add('errorAddress')
     
      Address.appendChild(error);

  }else if(/"/.test(address.value)){
    let error = showError('Bad Symbols!')
     address.classList.add('errorAddress')
      Address.appendChild(error); 

    
  }else{
    num++
    address.classList.remove('errorAddress')
  }
  return num;
}

function checkFields(){
  let num = 0;
  for(let i = 0; i < dataValidation.length; i++){
    if(!dataValidation[i].value){
      let error = showError('This field is required!')
      dataValidation[i].classList.add('error1');
      form[i].parentElement.insertBefore(error, dataValidation[i].nextSibling)
    }
    else{
      num++;
      dataValidation[i].classList.remove('error1');
    }
  }
  return num;
}

function checkName(){
   let num = 0;
    for(let i = 0; i < text.length; i++){
        if(/'/.test(text[i].value)){
          text[i].classList.add('errorAddress')
          let error = showError('Bad symbols' )  //не знаю, как нормально сформулировать:)
          form[i].parentElement.insertBefore(error, text[i].nextSibling)
        }else if(/"/.test(text[i].value)){
          text[i].classList.add('errorAddress')
          let error = showError('Bad symbols' )  
          form[i].parentElement.insertBefore(error, text[i].nextSibling)
        }else{
          text[i].classList.remove('errorAddress')
          num++;
        }
    }
    return num;
}

function checkRadio() {
    var formValid = false;

    var i = 0;
    while (!formValid && i < radio.length) {
        if (radio[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) {
      let error = showError('Choose Gender')
      gender.appendChild(error);
    };
    return formValid;
}

function checkDate(){
      let num = 0;
     let data = document.querySelector('[data-date ="date"]')
      if(!data.value){
        let error = showError('Choose Data');
         data.classList.add('error1')
        Birthday.appendChild(error);
      }else{
        data.classList.remove('error1');
        num++;
      }
      return num;
}

function validationPassed(){
      resetError();
      let num = 0;
      num = checkDate() + checkRadio() + checkName() + checkFields() + checkAddress() + checkSelector() + validateEmail();
      if(num == 14){
        alert('Validation passed');
      }else{
        alert('Validation false')
      }
      return num;

}
     

      form.addEventListener ('submit', function(event) {
        event.preventDefault();
        resetError();
        checkAddress()
        checkName();
        checkSelector();
        checkRadio();
        checkDate();
        checkFields();
        validateEmail();

        validationPassed();
        
      })  




