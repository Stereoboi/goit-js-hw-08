import throttle from 'lodash.throttle';
const formRef = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';
populateTextInput()

formRef.addEventListener('submit', getFormInputData);
formRef.addEventListener('input', throttle(enteredValues, 500));

function getFormInputData(event) {
    event.preventDefault();

    const {elements} = event.target;
    const values = {};

    for (let i = 0; i < elements.length; i += 1) {

        const formElement = elements[i];
        const {name} = formElement;
        
        if (name) {
            const {value} = formElement;
            values[name] = value;
        }
    }
    if (values.email === '' || values.message === '' ) {
        alert('Please check the entered data');
        return;
    }
        console.log('Submited', values);
        localStorage.removeItem(STORAGE_KEY);
        event.currentTarget.reset()
        
}

function enteredValues() {

    const formData = new FormData(formRef);
    const values = Object.fromEntries(formData.entries());
    // console.log(values);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    
}

function populateTextInput() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData) {
        formRef.message.value = savedData.message;
        formRef.email.value = savedData.email;
    }
}