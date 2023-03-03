import { formValidator } from "./src/formValidator.js";
import { initMobileEvents } from "./src/mobile.js";
import { initSliderEvents } from "./src/slider.js";

const contactForm = document.querySelector('.contact-form');
const recipeForm = document.querySelector('.recipe-form');

// Initialize events
initMobileEvents();
initSliderEvents();

formValidator(contactForm, {
    name: contactForm.name,
    email: contactForm.email,
    phone: contactForm.phone,
    message: contactForm.message,
});

formValidator(recipeForm, {
    name: recipeForm.name,
    email: recipeForm.email,
})



