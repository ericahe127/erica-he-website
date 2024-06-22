// $(document).ready(function () {
//         $('#send-button').on('click', function () {
//             // Get input values using jQuery
//             var name = $('#nameInput').val();
//             var email = $('#emailInput').val();
//             var message = $('#messageInput').val();
            
//             // Check if the mandatory fields are not empty
//             if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
//                 alert('Please fill in all mandatory fields.');
//                 return;
//             }

//             // Do something with the values (for now, just log them to the console)
//             console.log('Name:', name);
//             console.log('Email:', email);
//             console.log('Message:', message);

//             // Reset the form (optional)
//             $('#nameInput').val('');
//             $('#emailInput').val('');
//             $('#messageInput').val('');
//             $('#send-button').html("Sent😁");
//             $('#send-button').removeClass("btn-outline-primary");
//             $('#send-button').addClass("btn-success");
//             setTimeout(() => {
//                 $('#send-button').html("Send");
//                 $('#send-button').addClass("btn-outline-primary");
//                 $('#send-button').removeClass("btn-success");
//             }, 1000);
//         });
//     });

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("my-form");
    const sendButton = document.getElementById("send-button");
    const formStatus = document.getElementById("my-form-status");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get input values
        const name = document.getElementById("nameInput").value.trim();
        const email = document.getElementById("emailInput").value.trim();
        const message = document.getElementById("messageInput").value.trim();

        // Check if the mandatory fields are not empty
        if (!name || !email || !message) {
            alert('Please fill in all mandatory fields.');
            return;
        }

        const data = new FormData(form);

        sendButton.innerHTML = "Sending...";
        sendButton.disabled = true;

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatus.innerHTML = "Thanks for your submission!";
                form.reset(); // Reset all form fields
                sendButton.innerHTML = "Sent😁";
                sendButton.classList.remove("btn-outline-primary");
                sendButton.classList.add("btn-success");
            } else {
                const data = await response.json();
                if (data && data.errors) {
                    formStatus.innerHTML = data.errors.map(error => error.message).join(", ");
                } else {
                    formStatus.innerHTML = "Oops! There was a problem submitting your form";
                }
            }
        } catch (error) {
            formStatus.innerHTML = "Oops! There was a problem submitting your form";
        } finally {
            setTimeout(() => {
                sendButton.innerHTML = "Send";
                sendButton.disabled = false;
                sendButton.classList.add("btn-outline-primary");
                sendButton.classList.remove("btn-success");
                formStatus.innerHTML = "";
            }, 5000);
        }
    });
});
