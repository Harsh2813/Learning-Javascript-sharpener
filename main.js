    let form = document.getElementById('addForm');
    let itemList = document.getElementById('items');
    let filter = document.getElementById('filter');

    form.addEventListener('submit', addItem);
    itemList.addEventListener('click', removeItem);
    filter.addEventListener('keyup', filterItems);

    function addItem(e){
        e.preventDefault();
        let newItem = document.getElementById('item').value;
        let newItem2 = document.getElementById('item2').value;
        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(newItem));
        li.appendChild(document.createTextNode(" "));
        li.appendChild(document.createTextNode(newItem2));

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
        if(e.target.classList.contains('delete')){ // jo apna event hoga mtlb jispe bhi click karenge to jo wo target hoga uska class agar delete h to hi apan aage delete krenge mtlb jo X sign h sirf uska class delete h na ki pure li ka to li me X ko click karenge to fir are you sure ko yes krne ke baad delete hoga
            if(confirm('Are You Sure?')){
                var li = e.target.parentElement; // jo apne event ka target X uska parent element li me store kiye code me dekho X button ka parent element li h usi line ka to li me li ko rakh liye
                itemList.removeChild(li);// fir item list ke sare child li h to jo current li liye h wo remove hoga item list se code dhyan se dekho li ke andar button tag h.
            }
        }
    }
   // Filter Items
    function filterItems(e){
        // convert text to lowercase
        let text = e.target.value.toLowerCase(); // if we want to filter case sensitive so we can remove loLowerCase
        // Get lis
        let items = itemList.getElementsByTagName('li');
        // Convert to an array
        Array.from(items).forEach(function(item){
        let itemName = item.textContent;
        let itemName2 = item.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || itemName2.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
        });
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