function simular() {
  var valor = document.getElementById("valor").valueAsNumber;
  var prazo = document.getElementById("prazo").valueAsNumber;
  var jurosaa = document.getElementById("jurosaa").valueAsNumber;

  var prestacoes = prazo * 12;
  var jurosam = (1 + jurosaa) ** (1 / 12) - 1;
  var amortizacao = valor / prestacoes;

  document.getElementById("prestacoes").valueAsNumber = amortizacao.toFixed(2);
  document.getElementById("jurosam").valueAsNumber = jurosam;

  var tbody = document.querySelector("tbody");
  var jurostotal = 0;

  for (var i = 0; i < prestacoes; i++) {

    var saldoDevedor = valor - (i*amortizacao);
    var jurosPrestacao = saldoDevedor*jurosam;
    jurostotal += jurosPrestacao;

    if (i < 12) {
      var totalPrestacao = jurosPrestacao + amortizacao;

      var tr = tbody.children[i];
      tr.children[1].textContent = amortizacao.toFixed(2);
      tr.children[2].textContent = jurosPrestacao.toFixed(2);
      tr.children[3].textContent = totalPrestacao.toFixed(2);
    }
  }
document.getElementById("jurostotal").valueAsNumber = jurostotal.toFixed(2);
}
