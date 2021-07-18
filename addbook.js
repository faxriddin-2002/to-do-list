window.addEventListener("DOMContentLoaded", function () {
    let input = document.querySelectorAll("input");
    button = document.querySelector("button");
    table = document.querySelector("table");
    title = document.querySelector("#title");
    aouthor= document.querySelector("#aouthor");
    year = document.querySelector("#year");
    let d = "";
    button.addEventListener("click", function () {
        if(title.value == " " && aouthor.value == " " && year.value == " ") {
             alert(`pleas full the input`);
        }else if(title.value != " " && aouthor.value != " " && year.value != " ") {
            input.forEach(function (e) {
                // e.style.border = `2px solid green`;
                let y = e.value;
                let x = `<td>${y}</td>`;
                d += x;
        });
     }
        table.innerHTML += `<tr>${d}</tr>`;
        d = "";
        title.value = " ";
        aouthor.value = " ";
        year.value = " ";
    })
})