
    //    classes target

    let naturalNo = document.getElementsByClassName('naturalNum');


       
       
       
       function naturalno(num){
            for(let a = 1; a <= num; a++){
                document.write(naturalNo.innerhtml = a);
            }
            document.write('<br>')
            return;
        }

        function evenNo(num){
            for(let a = 2;a <= num; a += 2){
             document.write(`<td> ${a} </td>`);    
            }
            document.write('<br>')
            return;
        }

        function oddNo(num){
            for(let a = 1;a <= num;a += 2){
             document.write(`<td> ${a} </td>`);    
            }
            document.write('<br>')
            return;
        }
 





        // calling a function 
        let inputno = +prompt();
        naturalno(inputno);
        evenNo(inputno);
        oddNo(inputno);