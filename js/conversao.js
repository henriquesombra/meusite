function converte(){
    var url = "https://economia.awesomeapi.com.br/json/all"
    let request = new XMLHttpRequest();
    var moeda = window.document.getElementById('conversao')
    var valor = moeda.options[moeda.selectedIndex].value
    var quantia = Number(window.document.getElementById('tVal').value)
    var total
    request.open('GET', url, true)
    request.onload = function() {

        if (request.readyState == 4 && request.status == 200) {
            var resposta = JSON.parse(request.responseText)
            if(valor == 'EUR'){
                window.document.querySelector('td#cotacao').innerText = `R$${resposta.EUR.bid.replace('.', ',')}` 
                total = Number(resposta.EUR.bid) * quantia;
                window.document.querySelector('td#convertido').innerText = `R$${total.toFixed(2).replace('.', ',')}`
            }
            else if(valor == 'USD'){
                window.document.querySelector('td#cotacao').innerText = `R$${resposta.USD.bid.replace('.', ',')}`
                total = Number(resposta.USD.bid) * quantia
                window.document.querySelector('td#convertido').innerText = `R$${total.toFixed(2).replace('.', ',')}`
            }
            else if(valor == 'GBP'){
                window.document.querySelector('td#cotacao').innerText = `R$${resposta.GBP.bid.replace('.', ',')}`
                total = Number(resposta.GBP.bid) * quantia
                window.document.querySelector('td#convertido').innerText = `R$${total.toFixed(2).replace('.', ',')}`
            }
            else if(valor == 'CNY'){
                window.document.querySelector('td#cotacao').innerText = `R$${resposta.CNY.bid.replace('.', ',')}`
                total = Number(resposta.CNY.bid) * quantia
                window.document.querySelector('td#convertido').innerText = `R$${total.toFixed(2).replace('.', ',')}`
            }
            else if(valor == 'JPY'){
                window.document.querySelector('td#cotacao').innerText = `R$${resposta.JPY.bid.replace('.', ',')}`
                total = Number(resposta.JPY.bid) * quantia
                window.document.querySelector('td#convertido').innerText = `R$${total.toFixed(2).replace('.', ',')}`
            }
            else if(valor == 'BTC'){
                window.document.querySelector('td#cotacao').innerText = `R$${resposta.BTC.bid.replace('.', ',')}`
                total = Number(resposta.BTC.bid) * quantia
                window.document.querySelector('td#convertido').innerText = `R$${total.toFixed(2).replace('.', ',')}`
            }
        } 
    }
    request.onerror = function() {
        console.log("Erro:" + request)
    }
    request.send()
}
