$(document).ready(() => {
    const form = $('#form');
    form.on('submit', (e) => {
        const fname = $('#fname').val();
        const lname = $('#lname').val();
        const password = $('#password').val();
        const email = $('#email').val();

        //check inputs: 
        if(fname.length < 3 || lname.length < 3 || password.length < 3 || email.length < 5){
            $('#error').text('information error .');
            setTimeout(() => {
                $('#error').text('')
            }, 3000);
            e.preventDefault()
            return;
        }
        
        $.post('/user/api/register', {fname, lname, email, password} , (res) => {
            if (res.error) {
                $('#error').text(res.error)
                setTimeout(() => {
                    $('#error').text('')
                }, 3000);
            }
            if(res.codeMailed){
                window.location.href = '/user/confirm?id='+ res.userCard.user
            }
        }, 'JSON')

        e.preventDefault();
    })
})