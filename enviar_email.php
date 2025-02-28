<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Se instalou via Composer
// require 'caminho_para/PHPMailer/src/PHPMailer.php'; // Se instalou manualmente

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    $mail = new "PHPMailer"(true);//

    try {
        // Configuração do servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // SMTP do Gmail (mude se usar outro provedor)
        $mail->SMTPAuth = true;
        $mail->Username = 'seuemail@gmail.com'; // Seu e-mail
        $mail->Password = 'suasenha'; // Sua senha (ou App Password se usar Gmail)
        $mail->SMTPSecure = "PHPMailer::ENCRYPTION_STARTTLS";
        $mail->Port = 587;

        // Remetente e destinatário
        $mail->setFrom('seuemail@gmail.com', 'Seu Nome');
        $mail->addAddress($email); // E-mail do usuário que se inscreveu

        // Conteúdo do e-mail
        $mail->isHTML(true);
        $mail->Subject = 'Subscrição na Newsletter';
        $mail->Body    = "<p>Obrigado por se inscrever na nossa newsletter!</p>";

        // Enviar e-mail
        $mail->send();
        echo "<script>alert('Subscrição realizada com sucesso!'); window.location.href='index.html';</script>";
    } catch (Exception $e) {
        echo "Erro ao enviar o e-mail: {$mail->ErrorInfo}";
    }
}