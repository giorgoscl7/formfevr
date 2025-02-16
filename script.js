function validationForm(event){
    event.preventDefault();
    const username = document.getElementById('name').value.trim();
    const errorMessage = document.getElementById('error-message');
    const email = document.getElementById('email').value.trim();
    const errorEmail = document.getElementById('error-email');
    const confirmEmail = document.getElementById('confirm-email').value.trim();
    const errorConfirmEmail = document.getElementById('error-confirm-email');
    const phone = document.getElementById('phone').value.trim();
    const errorPhone = document.getElementById('error-phone');
    const address = document.getElementById('address').value.trim();
    const errorAddress = document.getElementById('error-address');
    const message = document.getElementById('message').value.trim();
    const errorMessageContent = document.getElementById('error-message-msg');

    let isValid = true;
    
console.log('validationForm');
    if(username.length < 6 ){
        errorMessage.textContent = 'required 6 characters at least'
        isValid = false;
        
        }else{
            errorMessage.textContent = '';
        }

        
        if(email.length < 8 && !email.includes('@')){
            errorEmail.textContent = 'please enter an email'
            isValid = false;
        }else{
            errorEmail.textContent = '';

        }
        if(confirmEmail !== email){
            errorConfirmEmail.textContent = 'Email do not match';
            isValid = false;
        } else {
            errorConfirmEmail.textContent = '';
        }
    
        if(phone.length > 10){
            errorPhone.textContent = 'your phone number is incorrect'
            isValid = false;
        } else{
            errorPhone.textContent = '';
        }
        if (address.length === 0){
            errorAddress.textContent = 'address not valid';
            isValid = false;
        }else{errorAddress.textContent = '';

        }
        if (message.length < 15){
            errorMessageContent.textContent = 'your message is too short'
            isValid = false;
        }else{
            errorMessageContent.textContent = '';
        }

        if(isValid){
            console.log('form is valid');
            document.getElementById('contactForm').submit();
            
        }else{
            console.log('error');
        }
           

}



document.getElementById('contact-form').addEventListener('submit', validationForm);