<?php
$servername = "localhost"; // Altere conforme necessário
$username = "root"; // Altere conforme necessário
$password = ""; // Altere conforme necessário
$dbname = "contatos_db"; // Nome do banco de dados

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['Name'];
    $empresa = $_POST['Empresa'] ?? '';
    $localidade = $_POST['Localidade'];
    $email = $_POST['Email'];
    $tipo_contato = $_POST['contactus'];
    $mensagem = $_POST['Message'];

    $stmt = $conn->prepare("INSERT INTO contatos (nome, empresa, localidade, email, tipo_contato, mensagem) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $nome, $empresa, $localidade, $email, $tipo_contato, $mensagem);

    if ($stmt->execute()) {
        echo "<script>alert('Mensagem enviada com sucesso!'); window.location.href='index.html';</script>";
    } else {
        echo "Erro: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
