 
// courses
let webDevelopment = {
    courseName:'webDevelopment',
    fees : 28000,
    city : 'nashik'
}
let webDesigner = {
    courseName:'webDesigner',
    fees : 30000,
    city : 'nashik'
}
let fullstack = {
    courseName:'fullstack',
    fees : 34000,
    city : 'nashik'
}

//student
let aniket = {
    name: 'aniket',
    age: 28,
    phoneNo: 123456789,
    gender: 'male',
    address: {
        road: 'Mumbai Agra Road',
        city: 'Nashik'
    }
}
let jyoti = {
    name: 'jyoti',
    age: 28,
    phoneNo: 123456789,
    gender: 'female',
    address: {
        road: 'Mumbai Agra Road',
        city: 'Nashik'
    }
}
let roshani = {
    name: 'roshani',
    age: 25,
    phoneNo: 123456789,
    gender: 'female',
    address: {
        road: 'Mumbai Agra Road',
        city: 'Nashik'
    }
}



// Array
let student = [jyoti,aniket,roshani];   
let courses = [webDevelopment,webDesigner,fullstack]; 
// let institute = [treemiti,infotech,master];

function display(p){
    // for(let i = 0;i<= student.length; i++){
    //     if(p == i )
    //    console.log(student[i-1].address.city);       
    // }
   
    for(let key in student){
        document.write(key);
        console.log(student[key].name);
        }

    for(let i = 0;i<= courses.length; i++){
        if(p == i )
       console.log(courses[i-1]);
    }
    return;
}

let print = +prompt();
let result = display(print);

