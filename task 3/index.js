

let valid = true;
let prom_name;
while (valid) {
    var reg = /^[a-zA-Z]+$/;
    prom_name = prompt("Enter your name ");
    if (reg.test(prom_name)) 
        valid = false;
    else
        alert("name is not valid")
}


valid = true;
let prom_year;
while (valid) {
     prom_year = Number(prompt("Enter your birth year"));
    if (isNaN(prom_year) || prom_year >= 2010)
        alert("birth day is not valid")
    else
        valid = false;
}
let age = 2024 - prom_year;
document.write("Name: " + prom_name+"<br>");
document.write("Birth year: " + prom_year+"<br>");
document.write("Age: " + age+"<br>");


