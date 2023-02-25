<?php
include( 'index.html');
$token = "5951826659:AAGd4J1fSZiLBQRz_H3KllPTBVM04Vd4soc";

$chat_id = "-690320840";

if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $phone = ($_POST['phone']);
    $the_cause = ($_POST['the_cause']);

    $arr = array(
        'Имя:' => $name,
        'Телефон:' => $phone,
        'поломка' => $the_cause
    );

    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

    if ($sendToTelegram) {
        alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    }

    else {
        alert('Что-то пошло не так. ПОпробуйте отправить форму ещё раз.');
    }
}
?>