<?php

require_once('./../../controller/Controller.php');

$token = new Token();
$token->create();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $weightcontroller = new Weightcontroller();
    $weightcontroller->weightcreate();
    exit;
}

$weightcontroller = new Weightcontroller();
$goallist = $weightcontroller->goalweight();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    if (isset($_GET['body'])) {
        $body = $_GET['body'];
    }

    if (isset($_GET['weight'])) {
        $weight = $_GET['weight'];
    }

    if (isset($_GET['today'])) {
        $today = $_GET['today'];
    }
}

$token_error = $_SESSION['token_error'];
unset($_SESSION['token_error']);
$weight_error = $_SESSION['weight_error'];
unset($_SESSION['weight_error']);
$body_error = $_SESSION['body_error'];
unset($_SESSION['body_error']);
$today_error = $_SESSION['today_error'];
unset($_SESSION['today_error']);

?>

<!DOCTYPE html>
<html lang="ja">
<head> 
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>体重登録</title>
    <link rel="stylesheet" href="./../../public/css/styles.css">
</head>
<body>
    <p class="outline">体重記録</p>

    <?php if ($token_error): ?>
        <?php foreach ($token_error as $token_err): ?>
            <p class="error-log"><?php echo Utils::h($token_err); ?></p>
        <?php endforeach; ?>
    <?php endif; ?>

    <form method="POST" action="./weight.php">
        <p class="body-title">目標体重 : <input type="text" name="body" class="weight-input" value="<?php if (isset($body)): ?><?php echo Utils::h($body); ?><?php else: ?><?php echo Utils::h($goallist['goalweights']); ?><?php endif; ?>"> kg</p>

        <?php if ($body_error): ?>
            <?php foreach ($body_error as $body_err): ?>
                <p class="error-log"><?php echo Utils::h($body_err); ?></p>
            <?php endforeach; ?>
        <?php endif; ?>

        <p class="body-title">現在の体重 : <input type="text" name="weight" class="weight-input" value="<?php echo Utils::h($weight); ?>"> kg</p>

        <?php if ($weight_error): ?>
            <?php foreach ($weight_error as $weight_err): ?>
                <p class="error-log"><?php echo Utils::h($weight_err); ?></p>
            <?php endforeach; ?>
        <?php endif; ?>

        <p class="body-title">日付 :
        <input type="date" name="today" class="day-input" value="<?php echo Utils::h($today); ?>"></p>

        <?php if ($today_error): ?>
            <?php foreach ($today_error as $today_err): ?>
                <p class="error-log"><?php echo Utils::h($today_err); ?></p>
            <?php endforeach; ?>
        <?php endif; ?>

        <button type="submit" class="register-btn">記入</button>
        <input type="hidden" name="token" value="<?php echo Utils::h($_SESSION['token']); ?>">
    </form>

    <a href="./../todo/index.php"><button class="return-btn">戻る</button></a>
</body>
</html>