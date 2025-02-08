//htmlの読み込みが完了した時点でスクリプトを実行
document.addEventListener('DOMContentLoaded', function() {
    //現在の時刻を取得する
    function updateTime() {
        //現在の日時を取得
        const now = new Date();

        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const dateString = `${year}年${month}月${day}日`;
        const timeString = `${hours}時${minutes}分${seconds}秒`;
        const dateTimeString = `${dateString} ${timeString}`;

        document.getElementById('clock').textContent = dateTimeString;
    }

    updateTime();
    //時刻の更新一秒ごとに
    setInterval(updateTime, 1000);
});

function calculate() {
    //入力値を取得し整数にする
    let input_num = parseInt(document.getElementById('input_num').value);
    //チェックボックスがon、offの判定
    const skip_show = document.getElementById('skip_show').checked;
    const result_container = document.getElementById('result_container');
    result_container.innerHTML = '';

    if (isNaN(input_num)) {
        document.getElementById('warning').textContent = '数値を入力してください';
        return;
    } else if (input_num < 1) {
        document.getElementById('warning').textContent = '自然数を入力してください';
        return;
    } else {
        document.getElementById('warning').textContent = '';
    }

    let result_array = [input_num];
    while(input_num != 1) {
        if (input_num % 2 == 0) {
            input_num = input_num / 2;
            result_array.push(input_num);
        } else {
            input_num = input_num * 3 + 1;
            result_array.push(input_num);
        }
    }

    result_array.forEach((result, index) => {
        if (skip_show) {
            const result_p = document.createElement('p');
            result_p.textContent = result;
            result_container.appendChild(result_p);
        } else {
            setTimeout(() => {
                const result_p = document.createElement('p');
                result_p.textContent = result;
                result_container.appendChild(result_p);
                result_p.scrollIntoView({ behavior: 'smooth' });
            }, index * 500);
        }
    });

}