window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'None') {
                navbarToggler.click();
            }
        });
    });

});

Survey.StylesManager.applyTheme("defaultV2");

var surveyJSON = { "logoPosition": "right", "pages": [{ "name": "page1", "elements": [{ "type": "text", "name": "BMI", "title": "What is your BMI (body mass index)?", "isRequired": true }], "navigationButtonsVisibility": "show" }, { "name": "page2", "elements": [{ "type": "radiogroup", "name": "Smoking", "title": "Have you smoked at least 100 cigarettes in your entire life?", "description": " note: 5 packs = 100 cigarettes", "isRequired": true, "choices": [{ "value": "Yes", "text": "Yes" }, { "value": "No", "text": "No" }] }] }, { "name": "page3", "elements": [{ "type": "radiogroup", "name": "AlcoholDrinking", "title": "Would you be considered a heavy drinker?", "description": "A heavy drinker is defined as an adult man having more than 14 drinks per week or an adult woman having more than 7 drinks per week.", "isRequired": true, "choices": [{ "value": "Yes", "text": "Yes" }, { "value": "No", "text": "No" }] }] }, { "name": "page4", "elements": [{ "type": "radiogroup", "name": "Stroke", "title": "Have you ever had (or been told that you have had) a stroke?", "isRequired": true, "choices": [{ "value": "Yes", "text": "Yes" }, { "value": "No", "text": "No" }] }] }, { "name": "page5", "elements": [{ "type": "text", "name": "PhysicalHealth", "title": "Thinking about your physical health, which includes physical illness and injury, for how many days during the past 30 days was your physical health not good? ", "description": "(0-30 days)", "isRequired": true }] }, { "name": "page6", "elements": [{ "type": "text", "name": "MentalHealth", "title": "Thinking about your mental health, for how many days during the past 30 days was your mental health not good? ", "description": "(0-30 days)", "isRequired": true }] }, { "name": "page7", "elements": [{ "type": "radiogroup", "name": "DiffWalking", "title": "Do you have serious difficulty walking or climbing stairs?", "isRequired": true, "choices": [{ "value": "Yes", "text": "Yes" }, { "value": "No", "text": "No" }] }] }, { "name": "page8", "elements": [{ "type": "radiogroup", "name": "Sex", "title": "Are you male or female?", "isRequired": true, "choices": [{ "value": "Male", "text": "Male" }, { "value": "Female", "text": "Female" }] }] }, { "name": "page9", "elements": [{ "type": "radiogroup", "name": "AgeCategory", "title": "What is your age?", "isRequired": true, "choices": [{ "value": "18-24", "text": "18-24" }, { "value": "25-29", "text": "25-29" }, { "value": "30-34", "text": "30-34" }, { "value": "35-39", "text": "35-39" }, { "value": "40-44", "text": "40-44" }, { "value": "45-49", "text": "45-49" }, { "value": "50-54", "text": "50-54" }, { "value": "55-59", "text": "55-59" }, { "value": "60-64", "text": "60-64" }, { "value": "65-69", "text": "65-69" }, { "value": "70-74", "text": "70-74" }, { "value": "75-79", "text": "75-79" }, { "value": "80 or older", "text": "80 or older" }] }] }, { "name": "page10", "elements": [{ "type": "radiogroup", "name": "Race", "title": "What is you race?", "isRequired": true, "choices": [{ "value": "American Indian/Alaskan Native", "text": "American Indian/Alaskan Native" }, { "value": "Black", "text": "Black" }, { "value": "Hispanic", "text": "Hispanic" }, { "value": "Asian", "text": "Asian" }, { "value": "White", "text": "White" }, { "value": "Other", "text": "Other" }] }] }, { "name": "page11", "elements": [{ "type": "radiogroup", "name": "Diabetic", "title": "Have you ever had (or been told that you have had) diabetes?", "isRequired": true, "choices": [{ "value": "Yes", "text": "Yes" }, { "value": "No", "text": "No" }] }] }, { "name": "page12", "elements": [{ "type": "radiogroup", "name": "PhysicalActivity", "title": "Do you engage in any physical activity or exercise other than your regular job? (during the past 30 days)", "isRequired": true, "choices": [{ "value": "Yes", "text": "Yes" }, { "value": "No", "text": "No" }] }] }, { "name": "page13", "elements": [{ "type": "radiogroup", "name": "question9", "title": "Would you say that in general your health is...   ", "isRequired": true, "choices": [{ "value": "Excellent", "text": "Excellent" }, { "value": "Very good", "text": "Very good" }, { "value": "Good", "text": "Good" }, { "value": "Fair", "text": "Fair" }, { "value": "Poor", "text": "Poor" }] }] }, { "name": "page14", "elements": [{ "type": "text", "name": "SleepTime", "title": "On average, how many hours of sleep do you get in a 24-hour period?", "isRequired": true }] }, { "name": "page15", "elements": [{ "type": "radiogroup", "name": "Asthma", "title": "Have you ever had (or been told that you have had) asthma?", "isRequired": true, "choices": [{ "value": "Yes", "text": "Yes" }, { "value": "No", "text": "No" }] }] }, { "name": "page16", "elements": [{ "type": "radiogroup", "name": "KidneyDisease", "title": "Not including kidney stones, bladder infection, or incontinence, were you ever told you had kidney disease?", "isRequired": true, "choices": [{ "value": "Yes", "text": "Yes" }, { "value": "No", "text": "No" }] }] }, { "name": "page17", "elements": [{ "type": "radiogroup", "name": "SkinCancer", "title": "Have you ever had (or been told that you have had) skin cancer?", "isRequired": true, "choices": [{ "value": "Yes", "text": "Yes" }, { "value": "No", "text": "No" }] }] }], "showProgressBar": "top",  "navigateToUrl": `http://127.0.0.1:5500/results.html/$JSON.stringify(survey.data)`,
"questionsOnPageMode": "questionPerPage" };

function sendDataToServer(survey) {
    //send Ajax request to your web server
    alert("The results are: " + JSON.stringify(survey.data));
    console.log(survey.data);
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer,
});