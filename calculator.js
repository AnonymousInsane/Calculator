let string = "";
let buttons = document.querySelectorAll('.child');
Array.from(buttons).forEach((child) => {
    child.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.getElementById('box').innerHTML = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.getElementById('box').innerHTML = string;
        }
        else if (e.target.innerHTML == 'X') {
            console.log(buttons.entries);
            document.getElementById('box').innerHTML = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.getElementById('box').innerHTML = string;
        }
    })
})