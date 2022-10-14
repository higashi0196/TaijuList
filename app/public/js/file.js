'use strict';

{
    // file 削除機能 非同期通信
    const filebtns = document.querySelectorAll('.filedelete-btn');
    filebtns.forEach(filebtn => {
        filebtn.addEventListener('click', () => {
            if (!confirm('削除しますか?')) {
                return;
            }
        fetch('./filedelete.php', {
            method: 'POST',
            body: new URLSearchParams({
            id: filebtn.dataset.id,
            token: filebtn.closest('li').dataset.token,
        }),
        }).then(response => {
            return response.json();
        }).then(json => {
            console.log(json);
        })
        .catch(error => {
            window.location.href = './../error/404.html';
            console.log("画像削除に失敗しました");
        })
            filebtn.closest('li').remove();
        });
    });
}