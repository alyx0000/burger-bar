// Burger bar
let navigationLinks = document.getElementById('navigation');
let toggleButton = document.getElementById('burger');

toggleButton.addEventListener('click', function(){
    navigationLinks.classList.toggle('toggle');
    toggleButton.classList.toggle('toggle');
})


// Input
let button = document.querySelector('.button');
let input = document.querySelector('.input');
let ulList = document.querySelector('.ul-list');
let form = document.querySelector('.form-wrp');

form.addEventListener('submit', function(event){
    event.preventDefault();
    let value = input.value;

    if(value != ''){
    let li = document.createElement('li');

    let btnDelete = document.createElement('button');
    btnDelete.classList.add('btn-delete');
    btnDelete.textContent = '🗙';
    btnDelete.addEventListener('click', function(){
        li.remove();
    })

    li.textContent = value;
    li.appendChild(btnDelete);
    ulList.appendChild(li);
    input.value = '';
    }
});


document.querySelector('.clear-list').addEventListener('click',function(){
    ulList.innerHTML = '';
})