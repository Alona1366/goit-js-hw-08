import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const userData = {
    'email' : '',
    'message' : ''
}

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea')
}

refs.form.addEventListener('submit', onFormSubmit);
refs.message.addEventListener('input', throttle(onSetData, 500));
refs.email.addEventListener('input', throttle(onSetData, 500));

onGetData ()

function onSetData(evt) {
    userData.email = refs.email.value
    userData.message = refs.message.value
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData))
}

function onFormSubmit(evt) {
    evt.preventDefault();
    // console.log(`e-mail: ${refs.email.value}, message: ${refs.message.value}`)
    console.log({email: refs.email.value, password: refs.message.value})
    evt.target.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY)
}

function onGetData(){
    const savedData = localStorage.getItem(LOCALSTORAGE_KEY)
    const parseData = JSON.parse(savedData)

    if(parseData){
        refs.email.value = parseData.email || ''
        refs.message.value = parseData.message || ''
    }
}