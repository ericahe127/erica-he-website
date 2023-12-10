$(document).ready(function () {
        $('#send-button').on('click', function () {

            $('#send-button').html("Sent😁");
            $('#send-button').removeClass("btn-outline-primary");
            $('#send-button').addClass("btn-success");
            setTimeout(() => {
                $('#send-button').html("Send");
                $('#send-button').addClass("btn-outline-primary");
                $('#send-button').removeClass("btn-success");
            }, 1000);
            // Get input values using jQuery
            var name = $('#nameInput').val();
            var email = $('#emailInput').val();
            var message = $('#messageInput').val();

            // Do something with the values (for now, just log them to the console)
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Reset the form (optional)
            $('#nameInput').val('');
            $('#emailInput').val('');
            $('#messageInput').val('');
        });
    });
