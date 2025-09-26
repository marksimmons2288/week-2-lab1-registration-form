// HTML Selectors
const mainForm = document.getElementById("main-form");
const outputDiv = document.getElementById("output");

    // Get the varibles of inputs
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const dateInput = document.getElementById("date");
    const passwordInput = document.getElementById("password");
    const checkBoxInput = document.getElementById("checkbox");

// Event Listener
mainForm.addEventListener('submit', function (event) {

    // Prevent the action from the form to refresh the page
    event.preventDefault();

    // Prevent E-mail text overflow
    document.getElementById("email") .style.textOverflow = "ellipsis"
     
    

    



    console.log(`First Name: ${firstNameInput.value}`);
    console.log(`Last Name: ${lastNameInput.value}`);
    console.log(`date: ${dateInput.value}`);

    // Get the output
    outputDiv.innerHTML =
    `<p>My First name is: ${firstNameInput.value}</p>
    <p>My Last name is: ${lastNameInput.value}</p>
    <p>My E-mail is: ${emailInput.value}</p>
    <p>My Date of Birth is: ${dateInput.value}</p>
    <p>My Password is: ${passwordInput.value}</p>`



    outputDiv.style.display = 'block';


    // Clear the inputs

    firstNameInput.value = '';
    lastNameInput.value ='';
    emailInput.value ='';
    dateInput.value ='';
    passwordInput.value ='';
    checkbox.value = false;

    // Clear checkbox
   
    






});

