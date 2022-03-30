$(document).ready(function() {
    $('form').bind('submit', $('form'), function(event) {
        var form = this;

        event.preventDefault();
        event.stopPropagation();

        if (form.submitted) {
            return;
        }

        form.submitted = true;

        $.ajax({
            url: '/login/api/jsonrpc/',
            data: {
                username: $('input[name=username]').val(),
                password: $('input[name=password]').val()
            },
            success: function(response) {
                form.submitted = false;
                form.submit(); //invoke the save password in browser
            }
        });
    });
});

