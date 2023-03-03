let formHasError = false;

function setError(input, hasError = false) {
    input.setAttribute("error", hasError);
    formHasError = hasError;
}

export function formValidator(form, props) {

    const {name, email, phone, message, callback} = props;
    const formData = new FormData(contactForm);


    form.addEventListener("submit", e => {
        e.preventDefault();
        let regexRecipeEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(name) {
            setError(name, name.value.length < 3);
        }

        if(email) {
            setError(email, !regexRecipeEmail.test(email.value));
        }

        if(phone) {
            console.log(phone.value.length <= 10)
            setError(phone, phone.value.length <= 10 );
        }

        if(message) {
            setError(message, message.value.length <= 10);
        }

        if(formHasError) {
            formHasError = false;
            return;
        }

        name && setError(name, false);
        email && setError(email, false);
        message && setError(message, false);
        phone && setError(phone, false);


        fetch(contactForm.action, {
            method: "POST",
            body: formData,
        });

        callback && callback(form);
        e.target.reset();
    }) 
}