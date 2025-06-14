// DOMが完全に読み込まれてからスクリプトを実行
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageBox = document.getElementById('messageBox');

    // ログインフォームが送信されたときのイベントリスナー
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // フォームのデフォルト送信をキャンセル

        const username = usernameInput.value.trim(); // ユーザー名またはメールアドレスを取得し、空白を除去
        const password = passwordInput.value.trim(); // パスワードを取得し、空白を除去

        // 簡易的なクライアントサイドバリデーション
        if (username === '' || password === '') {
            displayMessage('エラー: すべての項目を入力してください。', 'bg-red-100 text-red-700');
        } else {
            // ここに実際のログインロジック（例: サーバーへのAPI呼び出し）を記述します。
            // 今回はデモンストレーションのため、簡単なシミュレーションを行います。
            if (username === 'test@example.com' && password === 'password123') {
                displayMessage('ログイン成功！ようこそ！', 'bg-green-100 text-green-700');
                // 実際のアプリケーションでは、ここにリダイレクトなどの処理を追加します。
                // 例: window.location.href = '/dashboard';
            } else {
                displayMessage('エラー: ユーザー名またはパスワードが正しくありません。', 'bg-red-100 text-red-700');
            }
        }
    });

    /**
     * メッセージボックスにメッセージを表示する関数
     * @param {string} message - 表示するメッセージ
     * @param {string} typeClass - メッセージボックスに適用するTailwind CSSクラス（例: 'bg-green-100 text-green-700'）
     */
    function displayMessage(message, typeClass) {
        messageBox.textContent = message; // メッセージを設定
        messageBox.className = `mt-6 p-3 rounded-lg text-center ${typeClass}`; // クラスを適用
        messageBox.classList.remove('hidden'); // 表示する
    }
});
