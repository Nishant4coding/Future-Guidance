let namasteBtn = document.querySelector('button')
namasteBtn.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('ENTER THE NAME OF STUDENT');
    namasteBtn.textContent = 'roll no.1:' + name;
}