document.addEventListener('DOMContentLoaded', function () {
    var key = "pittsburghese_enabled";
    var input = document.getElementById(key);


    // set the initial state of the checkbox
    var pittsburghese_enabled = localStorage[key];
    console.log("pittsburghese_enabled",pittsburghese_enabled);
    
    if (pittsburghese_enabled == "true") {
        input.checked = true;
    } else {
        input.checked = false;
    }

    input.addEventListener("change", function () {
        localStorage[key] = input.checked;
    });


});