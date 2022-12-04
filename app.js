
/*================ VARIABLE DECLARATION =============*/
const btnCreate = document.getElementById('btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');
const taskList = document.querySelector('.list-container ul');
const listItems = taskList.children[0];
console.log(listItems);

//const listItems = document.getElementsByTagName('li');
 
/* FUNCTION TO CREATE A REMOVE BUTTON */
function attachRemoveButton(li) {
  let remove = document.createElement("button");
  remove.className = "remove";
  remove.textContent = "Remove";
  li.appendChild(remove)
}

for (let i = 0; i < listItems.length; i++) {
   attachRemoveButton(listItems[i]);
  }
/*==== UPPERRCASE WHEN MOUSE HOVER OVER======= */
/* for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('mouseover', () => {
  listItems[i].textContent = listItems[i].textContent.toUpperCase();
  }) 
}*/

/*==== REMOVE A LIST ITEM WHEN CLICK IS TRIGERED======= */
/* EVEN WHEN A NEW TASK IS ADDED TO THE LIST */
taskList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    li.remove()
   }
})

/* CHANGE TEXT CONTENT WHEN BUTTON IS CLICKED */
/* FROM SHOW LIST TO HIDE LIST AND VISEVERSA */
btnToggle.addEventListener('click', () => {
  const listContainer = document.querySelector('.list-container');
  if (listContainer.style.display === 'none') { 
    btnToggle.textContent = 'Hide List';
    listContainer.removeAttribute('style');
  } else {
    btnToggle.textContent = 'Show List';                        
    listContainer.style.display = 'none';
  }                         
});

/* ADD A LIST ITEM AT THE BEGINNING OF THE LIST */
/* btnCreate.addEventListener('click', () => {
  const input = document.querySelector('.input-main');
  const list = document.querySelector('ul');
  list.insertAdjacentHTML( 
    'afterbegin', 
    `<li>${input.value}</i>` 
  );
  input.value = '';
}); */

/* CREATE A NEW LIST ITEM WITH A REMOVE BUTTON INCLUDED */
btnCreate.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  const input = document.querySelector('.input-main');
  let li = document.createElement('li');
  li.textContent = input.value;
  attachRemoveButton(li)
  ul.appendChild(li);
  input.value = '';
});
btnCreate.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  const input = document.querySelector('.input-main');
  let li = document.createElement('li');
  li.textContent = input.value;
  attachRemoveButton(li)
  ul.appendChild(li);
  input.value = '';
});

/*== REMOVE LAST LIST ITEM WHEN BUTTON IS CLICKED == */
/* btnRemove.addEventListener('click', () => {
  const li = document.querySelector('li:last-child');
  li.remove();
}); */

