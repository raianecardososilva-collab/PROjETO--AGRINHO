function calcular(){

    let area = Number(document.getElementById("area").value);
    let consumo = Number(document.getElementById("consumo").value);

    if(area <= 0 || consumo <= 0){
        alert("Preencha os valores corretamente!");
        return;
    }

    let total = area * consumo;

    let mensagem = `
        🌊 Consumo diário: ${total.toLocaleString()} litros de água.
        <br><br>
    `;

    if(total > 50000){
        mensagem += "⚠️ Consumo elevado! Considere sistemas de irrigação por gotejamento.";
    } else {
        mensagem += "✅ Ótimo! Seu consumo está dentro de uma faixa mais sustentável.";
    }

    document.getElementById("resultado").innerHTML = mensagem;
}