$(document).ready(function () {
        $('#send-button').on('click', function () {
            // Get input values using jQuery
            var name = $('#nameInput').val();
            var email = $('#emailInput').val();
            var message = $('#messageInput').val();
            
            // Check if the mandatory fields are not empty
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Please fill in all mandatory fields.');
                return;
            }

            // Do something with the values (for now, just log them to the console)
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Reset the form (optional)
            $('#nameInput').val('');
            $('#emailInput').val('');
            $('#messageInput').val('');
            $('#send-button').html("Sent😁");
            $('#send-button').removeClass("btn-outline-primary");
            $('#send-button').addClass("btn-success");
            setTimeout(() => {
                $('#send-button').html("Send");
                $('#send-button').addClass("btn-outline-primary");
                $('#send-button').removeClass("btn-success");
            }, 1000);
        });
    });
