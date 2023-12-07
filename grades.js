
document.querySelector('form')
.addEventListener('submit', setGrade)

let grades = [];

function setGrade(e) {
    e.preventDefault();
    let name = document.querySelector('#name').value
    let grade = parseFloat(document.querySelector('#grade').value)
    grades.push({name, grade});
    //console.log({name, grade})
    printGrades()
}

function printGrades() {
    let o = document.querySelector('#output');
    let sum = 0;
    for (let i=0; i<grades.length; i++) {
        //console.log(sum, grades[i].grade)
        sum += grades[i].grade;
    }
    let avg = sum / grades.length;
    //console.log(sum, grades.length)
    o.innerText = avg
    
}