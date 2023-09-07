       
         const todo = [{
            taskName:'one',
            date:'09/09/2023'
        }];


        function todoo(){
        let todoList ='';
         for(let i=1; i<todo.length; i++){
            const a =todo[i];
            let task =a.taskName;
           let date=a.date;
            //const{date} =todo;
            // next step is generating html
            const html =`<div>
                ${task} </div> 
                <div>${date}</div>
                 <button onclick="
                todo.splice(${i}, 1);
                todoo();
                " class="delet">Delete</button>
                `;
                todoList = todoList+html;
            }
            document.querySelector('.js-display').innerHTML=todoList;

        }

        function addTodo(){
        const input = document.querySelector('.js-input');
        const name = input.value;
        const dueDate = document.querySelector('.js-date')
        const date = dueDate.value;
         
         todo.push({taskName:name,
        date:date});
         input.value='';
         todoo();
        }