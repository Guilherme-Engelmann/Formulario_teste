document.addEventListener("DOMContentLoaded", function () {  
    // Selecting the container  
    const container = document.querySelector(".container");  

    // Function to validate input fields  
    function validateForm() {  
        // Grab all inputs  
        const inputs = container.querySelectorAll("input");  
        let isValid = true;  

        // Loop through the inputs for validation  
        inputs.forEach((input) => {  
            // Check if input is empty and required  
            if (input.required && !input.value) {  
                alert(`${input.previousElementSibling.innerText} não pode estar vazio.`);  
                isValid = false;  
                input.focus(); // Set focus on the first empty field  
                return; // Exit the loop  
            }  

            // Validate email format  
            if (input.type === "email" && input.value) {  
                const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  
                if (!emailPattern.test(input.value)) {  
                    alert("Por favor, insira um e-mail válido.");  
                    isValid = false;  
                    input.focus();  
                    return; // Exit the loop  
                }  
            }  
        });  

        // Ensure at least one radio button is selected for certain groups  
        const radioGroups = {  
            gender: container.querySelectorAll("input[name='drone']"),  
            vehicle: container.querySelectorAll("input[name='drone']"),  
            previdencia: container.querySelectorAll("input[name='drone']"),  
            civilStatus: container.querySelectorAll("input[name='drone']"),  
            ngo: container.querySelectorAll("input[name='drone']"),  
            course: container.querySelectorAll("input[name='radio']"),  
            sports: container.querySelectorAll("input[name='radio']")  
        };  

        Object.keys(radioGroups).forEach(groupName => {  
            const group = radioGroups[groupName];  
            const checked = Array.from(group).some(input => input.checked);  

            if (!checked) {  
                alert(`Por favor, selecione uma opção para ${groupName.replace(/([A-Z])/g, ' $1').toLowerCase()}.`);  
                isValid = false;  
            }  
        });  

        return isValid; // Return final validation status  
    }  

    // Attach event listener to a form submission or button click (you may create a button in your HTML)  
    const submitButton = document.createElement("button");  
    submitButton.innerText = "Enviar";  
    container.appendChild(submitButton);  
    
    submitButton.addEventListener("click", function (event) {  
        event.preventDefault(); // Prevent default form submission  
        if (validateForm()) {  
            alert("Formulário enviado com sucesso!");  
            // Here you can handle the form submission (e.g., send data to a server)  
            // For demonstration, we're just logging the data to the console  
            console.log('Formulário válido, os dados seriam enviados para o servidor.');  
        }  
    });  
});  