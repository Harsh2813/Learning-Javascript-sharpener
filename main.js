    let form = document.getElementById('addForm');
    let itemList = document.getElementById('items');

    form.addEventListener('submit', addItem);
    itemList.addEventListener('click', removeItem);

    function addItem(e){
        e.preventDefault();
        let newItem = document.getElementById('item').value;
        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(newItem));

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
        deleteBtn.appendChild(document.createTextNode('X'));
        li.appendChild(deleteBtn);

        let editBtn = document.createElement('button');
        editBtn.className = 'btn btn-danger btn-sm float-right';
        editBtn.appendChild(document.createTextNode('edit'));

        itemList.appendChild(editBtn);
        itemList.appendChild(li);
    }
    function removeItem(e){
        if(e.target.classList.contains('delete')){
            if(confirm('Are You Sure?')){
                var li = e.target.parentElement;
                itemList.removeChild(li);
            }
        }
    }
    // let itemList = document.getElementById('items');
    // console.log(itemList.parentElement);
    // console.log(itemList.lastChild);

    // let newchild = document.createElement('div');
    // newchild.setAttribute('title', 'nice')
    // newchild.id = 'hello';
    // let childText = document.createTextNode('Hello');
    // newchild.appendChild(childText);
    // console.log(newchild);

    // console.log(itemList.firstElementChild);
    // console.log(itemList.firstChild);
    // console.log(itemList.lastElementChild);
    // console.log(itemList.nextSibling);
    // console.log(itemList.nextElementSibling);
    // console.log(itemList.previousSibling);
    // console.log(itemList.previousElementSibling);
    
    // let hello1 = document.querySelector('head link');
    // let title = document.querySelector('head title');
    // hello1.parentNode.insertBefore(newchild, title);

    
    // let header = document.getElementById('main-header');
    // header.style.borderBottom = 'solid 5px black';
    // let addItems = document.querySelector('.title');
    // addItems.style.fontWeight = 'bold';
    // addItems.style.color = 'green';
    // let item3 = document.getElementsByTagName('li');
    // item3[2].style.backgroundColor = 'green';
    // for (let i = 0; i < item3.length; i++) {
    //     item3[i].style.fontWeight = 'bold';
    // }
    // let temp = document.getElementsByTagName('li');
    // temp[4].innerText = 'New Item 5';

    // let item2 = document.querySelectorAll('.list-group-item');
    // item2[1].style.backgroundColor = 'green';
    // item2[2].style.display = 'none';

    // let oddElem = document.querySelectorAll('li:nth-child(odd)');
    // for(let i=0; i<oddElem.length; i++){
    //     oddElem[i].style.backgroundColor = 'green';
    // }
    // let oddElem = document.querySelectorAll('li:nth-child(odd)');
    // for(let i=0; i<oddElem.length; i++){
    //     oddElem[i].style.backgroundColor = 'green';
    // }