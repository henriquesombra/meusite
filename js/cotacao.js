function cotar(){
    var url = "https://economia.awesomeapi.com.br/json/all"
    let request = new XMLHttpRequest()
    request.open('GET', url, true)
    var moeda = window.document.getElementById('moeda')
    var valor = moeda.options[moeda.selectedIndex].value
    request.onload = function() {

        if (request.readyState == 4 && request.status == 200) {
            var resposta = JSON.parse(request.responseText)
            if(valor == 'EUR'){
                window.document.querySelector('td#nome').innerText = `${resposta.EUR.name}`
                window.document.querySelector('td#compra').innerText = `R$${resposta.EUR.bid}`
                window.document.querySelector('td#venda').innerText = `R$${resposta.EUR.ask}`
                window.document.querySelector('td#data').innerText = `${resposta.EUR.create_date}`
            }
            else if(valor == 'USD'){
                window.document.querySelector('td#nome').innerText = `${resposta.USD.name}`
                window.document.querySelector('td#compra').innerText = `R$${resposta.USD.bid}`
                window.document.querySelector('td#venda').innerText = `R$${resposta.USD.ask}`
                window.document.querySelector('td#data').innerText = `${resposta.USD.create_date}`
            }
            else if(valor == 'BTC'){
                window.document.querySelector('td#nome').innerText = `${resposta.BTC.name}`
                window.document.querySelector('td#compra').innerText = `R$${resposta.BTC.bid}`
                window.document.querySelector('td#venda').innerText = `R$${resposta.BTC.ask}`
                window.document.querySelector('td#data').innerText = `${resposta.BTC.create_date}`
            }
            else if(valor == 'GBP'){
                window.document.querySelector('td#nome').innerText = `${resposta.GBP.name}`
                window.document.querySelector('td#compra').innerText = `R$${resposta.GBP.bid}`
                window.document.querySelector('td#venda').innerText = `R$${resposta.GBP.ask}`
                window.document.querySelector('td#data').innerText = `${resposta.GBP.create_date}`
            }
            else if(valor == 'CNY'){
                window.document.querySelector('td#nome').innerText = `${resposta.CNY.name}`
                window.document.querySelector('td#compra').innerText = `R$${resposta.CNY.bid}`
                window.document.querySelector('td#venda').innerText = `R$${resposta.CNY.ask}`
                window.document.querySelector('td#data').innerText = `${resposta.CNY.create_date}`
            }
            else if(valor == 'JPY'){
                window.document.querySelector('td#nome').innerText = `${resposta.JPY.name}`
                window.document.querySelector('td#compra').innerText = `R$${resposta.JPY.bid}`
                window.document.querySelector('td#venda').innerText = `R$${resposta.JPY.ask}`
                window.document.querySelector('td#data').innerText = `${resposta.JPY.create_date}`
            }
            
        } 
    }
    request.onerror = function() {
        console.log("Erro:"+request)
    }
    request.send()
}
