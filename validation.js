let fieldName = document.querySelectorAll('.inputs');
let fieldArea = document.querySelectorAll('.form__inputs');
let emailField = document.querySelector('.email');
function validateForm(e) {
    e.preventDefault();
    for (let i = 0; i < fieldName.length; i++) {
        if (fieldName[i].value === "") {
            fieldName[i].classList.add('error-border');           
        }                        
        //removes errror
        setTimeout(() => {
            fieldName[i].classList.remove('error-border');
        }, 2500)
    }
    fieldArea.forEach( element => {
        let field = element.dataset.field;
        let error = document.createElement('span');
        error.classList.add('error-message');
        let errorMessage = `${field} cannot be empty`;
        error.append(errorMessage);
        element.append(error);

        setTimeout(() => {
            element.removeChild(error);
        }, 2500)
    }) 
}

//validates the email field
function emailValueChecker(email) {
    var regex = /\S+@\S+\.\S+/;
    if (regex.test(email)) {
        return true;
    } else {
        return false;
    }
}

document.querySelector('form').addEventListener('click', (e) => {
    if (!emailValueChecker(emailField.value)) {
        emailField.classList.add('error-border');
        emailField.classList.add('error-icon');        
        let error = document.createElement('span');
        error.classList.add('error-message');
        let errorMessage = `Looks like this is not an email`;
        error.append(errorMessage);
        emailField.parentElement.append(error);

        setTimeout(() => {
            emailField.parentElement.removeChild(error);
        }, 1500)
    } else {
        emailField.classList.remove('error-border');
        emailField.classList.remove('error-icon')
    }
});

document.querySelector('form').addEventListener('submit', validateForm);