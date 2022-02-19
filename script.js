

function relogio() {
    let data = new Date();
    let hr = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();
    let temp = hr + ":" + min + ":" + seg;
    let tempo = window.document.getElementById('relogio');
    tempo.innerHTML = temp;

    let day = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado');
    let month = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');
    let fullDate = day[data.getDay()] + '<br>' + data.getDate() + ' de ' +  month[ data.getMonth() ] + ' de ' + data.getFullYear();
    document.getElementById('diaMes').innerHTML = fullDate;
}
setInterval(relogio, 200);

