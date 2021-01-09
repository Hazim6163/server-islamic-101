$(document).ready(() => {
    const form = $('#form');
    form.on('submit', (e) => {
        const code = $('#code').val();
        const id = getUrlParameter('id');

        $.post('/user/api/confirm', { id, code }, (res) => {
            if (res.errMsg) {
                $('#error').text(res.errMsg)
                setTimeout(() => {
                    $('#error').text('')
                }, 3000);
                return;
            }
            window.location.href = '/';
        });

        e.preventDefault();
    })
})

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};