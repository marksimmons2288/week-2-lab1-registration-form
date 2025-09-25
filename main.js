// HTML Selectors
const mainForm = document.getElementById("main-form");
const outputDiv = document.getElementById("output");

    // Get the varibles of inputs
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");

// Event Listener
mainForm.addEventListener('submit', function (event) {

    // Prevent the action from the form to refresh the page
    event.preventDefault();
    



    console.log(`First Name: ${firstNameInput.value}`);
    console.log(`Last Name: ${lastNameInput.value}`);

    // Get the output
    outputDiv.innerHTML =
    `<p>My first name is: ${firstNameInput.value}</p>
    <p>My last name is: ${lastNameInput.value}</p>`




});

