import emailjs from '@emailjs/browser';

export function showNotification (setter) { 
    setter(true);
    setTimeout(() => {
        setter(false);
    }, 2000);
}

export function sendEmail (template,data) {

    emailjs.send('service_jb6mijg', template, data,'iAGffvAUjlmg0kSrt')
            .then(function(response) {
            // console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
            console.log('FAILED...', error);
        });
}

