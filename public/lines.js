const codeHeight = document.getElementById('root').offsetHeight;  
const lines = Math.ceil(codeHeight / 23);
let html = '';
for (i = 1; i < lines; i++) {
    html += '<p>' + i + '</p>'
}
document.getElementById('lines').innerHTML = html;