'use strict'
{
    // todo 削除機能 非同期通信
    const deletebtns = document.querySelectorAll('.delete-btn');
    deletebtns.forEach(btn => {
        btn.addEventListener('click', () => {
        if (!confirm('削除しますか?')) {
            return;
        }
            fetch('./delete.php', {
                method: 'POST',
                body: new URLSearchParams({
                id: btn.dataset.id,
                token: btn.closest('tr').dataset.token,
            }),
        }).then(response => {
            return response.json();
        }).then(json => {
            console.log(json);
        })
        .catch(error => {
            window.location.href = './../error/404.html';
            console.log("削除に失敗しました");
        })
            btn.closest('tr').remove();
        });
    });

    // todo checkbox toggle機能 非同期通信
    const toggles = document.querySelectorAll('input[type="checkbox"]');
    toggles.forEach(toggle => {
        toggle.addEventListener('change', () => {
            fetch('./toggle.php', {
                method: 'POST',
                body: new URLSearchParams({
                id: toggle.dataset.id,
                token: toggle.closest('tr').dataset.token,
            }),
        }).then(response => {
            return response.json();
        }).then(json => {     
            console.log(json);
        })
        .catch(error => {
            window.location.href = './../error/404.html';
            console.log("削除に失敗しました");
        });
            toggle.closest('tr').children[1].classList.toggle('done');
            toggle.closest('tr').children[2].classList.toggle('done');
        });
    });

    const achieve = document.querySelector('.achieve');
    if (total <= 0) {
        console.log("0kg以下,達成");
    } else if (total <= goal * 0.02) {
        achieve.classList.add("little");
        achieve.textContent =  'あと ' + total + ' kg ' + 'もう少し頑張ろう !';
        console.log("もう少し,頑張ろう");
    } else {
        achieve.style.display = 'none';
        console.log("まだまだ");
    }

    // weight全データ 削除 非同期通信
    const list = document.querySelector('.reset');
    const weights = document.querySelectorAll('.goal-weight');
    const day = document.querySelector('.ideal-day');

    list.addEventListener('click', () => {
        if (!confirm('体重のデータを削除しますか?')) {
            return;
          }
        fetch('./../weight/weightdelete.php', {
            method: 'POST',
            body: new URLSearchParams({
            token: list.dataset.token,
            }),
        }).then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
        })
        .catch(error => {
            window.location.href = './../error/404.html';
            console.log("削除に失敗しました");
        });
        day.textContent = '~ 体重の入力ができます ~';
        day.classList.add("weight-sheet");
        achieve.style.display = 'none';
        for (var i = 0; i < weights.length; i++) {
            weights[i].textContent = '-- kg';
        }
    });

    const post = document.querySelector('.post');
    const wordbtn = document.querySelector('.wordbtn');
    
    wordbtn.addEventListener('click', () => {
        if (!confirm('削除しますか?')) {
            return;
        }
        fetch('./../post/postdelete.php', {
            method: 'POST',
            body: new URLSearchParams({
            token: wordbtn.dataset.token,
            }),
        }).then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
        })
        .catch(error => {
            window.location.href = './../error/404.html';
            console.log("削除に失敗しました");
        });
        post.textContent = '一言メッセージを入力できます';
    });

}