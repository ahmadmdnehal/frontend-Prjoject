// const user = prompt("enter your name")
let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";

let arr = Array.from(buttons); // jitni bhi button hai puri buttons ko ham aarraya bana diye
arr.forEach(button =>{ // foreach button in arr=array kke lement ko button bnaya
    button.addEventListener('click', (e)=>{// jb bhi koi buttion per click krey , e paas ho
        if(e.target.innerHTML == '='){ 
            string = eval(string);
            input.value = string;
            // chek krenge ki hmne jo button dbaya hai wo = hai agr hai to emty string ke ande eval function ki help se usey input box me store krdo
        }
        else if(e.target.innerHTML == 'AC'){ // AC button target
            string = "";
            input.value = string;

        }
        else if(e.target.innerHTML == 'DEL'){
            //DEl buton target
            string=string.substring(0,string.length-1);
            input.value = string;
        }
        
        else{
            // aur agr nhi to use  direct input box me daalo
        string = string+e.target.innerHTML;
        input.value = string;
        }
    })
})