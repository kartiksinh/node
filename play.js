let name = "Kartik";
let age = 26;
const hasHobbies = true;

age = 30;
name = "Rutvij";

function summarizeUser(userName, uerAge, userHobbies){
    return (
    'Name is ' + userName + 
    ' age is ' + age + 
    ' hobbies has :' + hasHobbies
    );
}

console.log(summarizeUser(name, age, hasHobbies)); 