
//this code for printing the table in page
function printTable() {
        let num = document.getElementById("number").value;
        let output = document.getElementById("output");
        output.innerHTML = "";

        if (num === "") {
            output.innerHTML = "Please enter a number!";
            return;
        }

        for (let i = 1; i <= 10; i++) {
            output.innerHTML += `${num} × ${i} = ${num * i}<br>`;
        }
    }





