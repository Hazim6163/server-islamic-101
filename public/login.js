$(document).ready(() => {
    const form = $('#form');
    form.on('submit', (e) => {
        const email = $('#email').val();
        const password = $('#password').val();

        $.post('/user/api/login', { email, password }, (res) => {
            console.log(res);
            if (res.loggedIn){
                window.location.replace('/');
                return;
            }
            if (res.error) {
                $('#error').text(res.error)
                setTimeout(() => {
                    $('#error').text('')
                }, 3000);
            }
            if (res.errMsg) {
                $('#error').text(res.error.error);
                setTimeout(() => {
                    $('#error').text('')
                }, 3000);
            }
            //user need to confirm the account:
            if(res.error && res.error.id){
                window.location.replace('/user/confirm?id=' + res.error.id);
                return;
            }
            if (res.errMsg) {
                if (res.error.token)
                    window.location.href = '/';
                return;
            }

        }, 'JSON');

        e.preventDefault();
    })
})