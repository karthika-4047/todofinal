// var logout = document.getElementById('logout');

// function logout() {
//     alert('Logged out successfully');
//   }



//   function fetchTodos() {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(response => response.json())
//         .then(data => {
//             let completedCount = 0;
//             const checkboxContainer = document.getElementById('checkboxContainer');
//             checkboxContainer.innerHTML = ''; 
//             data.forEach(todo => {
//                 const checkbox = document.createElement('input');
//                 checkbox.type = 'checkbox';
//                 checkbox.checked = todo.completed;
//                 // checkbox.disabled = true;
//                 checkboxContainer.appendChild(checkbox);
//                 checkboxContainer.appendChild(document.createTextNode(todo.title));
//                 checkboxContainer.appendChild(document.createElement('br'));

//                 if (todo.completed) {
//                     completedCount++;
//                 }
//             });

//             if (completedCount >= 5) {
//                 alert('Congrats. 5 Tasks have been Successfully Completed');
//             }
//         });


// }


function Todos() {
  fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
          let checkedCount = 0; 
          const checkboxContainer = document.getElementById('checkboxContainer');
          checkboxContainer.innerHTML = ''; 

          data.forEach(todo => {
              const checkbox = document.createElement('input');
              checkbox.type = 'checkbox';
              checkbox.checked = false; 
              checkbox.addEventListener('change', () => {
                  if (checkbox.checked) {
                      checkedCount++;
                  } else {
                      checkedCount--;
                  }
                  checkCompletedTasks(checkedCount);
              });
              checkboxContainer.appendChild(checkbox);
              checkboxContainer.appendChild(document.createTextNode(todo.title));
              checkboxContainer.appendChild(document.createElement('br'));
          });
      });

  return false; // Prevent default link behavior
}

function checkCompletedTasks(count) {
  if (count === 5) {
      alert('Congrats. 5 Tasks have been Successfully Completed');
  }
}

function logout() {
  alert('Logged out successfully');
  
  return true; 

}









