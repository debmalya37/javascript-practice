// promises
//  resolve
// reject
// pending

function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const error = true;
            if(!error){
                console.log('data submisson successful')
                resolve(" congrats!")
            }
            else{
                console.log("sorry try again")
                reject("better luck next time" );
            }

        }, 2000);
    })
}

func1().then(function (){
    console.log(" well done ! you made it ")
}).catch(function (error){
    console.log("error occured: " + error)
});


// 2
const students = [{name: "deb", sub: "javascript"},
    {name:"sen", sub:"python"}
];

function enrollStudents(student){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            students.push(student);
            console.log("enrolled successfully")
        },5000);
        const error = true;
        if(!error){
            resolve();
        } else{
            reject();
        }
    })
}
function getStudents(){
    setTimeout(() => {
        let str ="";
        students.forEach(function(student){
            str += `<li><u>NAME</u>: ${student.name} <u>SUB</u>: ${student.sub}</li>`;
        });
        document.getElementById('students').innerHTML= str;
        console.log("students fetched successfully")
        
    }, 3000);
}
let newstudent = 
    {name: "ayush", sub: "php"}
enrollStudents(newstudent).then(function(){getStudents();
}).catch(function(){
    console.log("error occured")
});


// File system module 

// let fs = require("fs");
let fs = require("fs/promises");

let a = fs.readFile("file.txt", "utf-8");
a.then( (data)=>{
    console.log(data);
})

