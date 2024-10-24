function saveData() {
    var textInput = document.getElementById('textInput').value;
    var selectInput = document.getElementById('selectInput').value;
    
    var data = 'Szöveg: ' + textInput + '\n' + 'Választás: ' + selectInput;
    var blob = new Blob([data], { type: 'text/plain' });
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'adatok.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url)}