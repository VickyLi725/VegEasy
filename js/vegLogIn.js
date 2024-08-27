document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表單提交

    const account = document.getElementById('account').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // 假設正確的帳號和密碼是 "user" 和 "password"
    if (account === 'abc' && password === '123') {
        window.location.href = 'index.html'; // 登入成功後跳轉到歡迎頁面
    } else {
        errorMessage.textContent = '帳號或密碼錯誤';
        errorMessage.style.visibility = 'visible'; // 顯示錯誤信息
    }
});
