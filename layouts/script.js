

var data;


document.getElementById("logo").setAttribute('style', 'border :5px dashed blue');
document.getElementById('logo').removeAttribute('style');
// data = document.getElementById("logo").getAttribute('onclick');
var data = document.getElementById('logo').attributes;
console.log(data);


// document.getElementById("header").removeAttribute("style");

/*
document.title
document.head
document.body
document.doctype
document.URL
document.links
document.images
document.getElementById('ID Name')
document.getElementsByClassName('Class name')
document.getElementsByTagName('tag name')
document.querySelector('#id name')
document.querySelector('.Class name')
document.querySelector('tag name')
*/
// querySelector returns only first elements and querySelectorAll returns all element 


// function testclick() {
//     alert('function call on click');
// }
/*
document.getElementById('logo').innerHTML
document.getElementById('logo').innerHTML ="<h1>web page</h1>"
document.getElementById('logo').innerText
document.getElementById('logo').style.color = 'pink'
document.getElementById('logo').style.fontSize = '20px'
document.getElementsByClassName('first')[0].style.background="gray"
document.getElementById('logo').innerText ="web page"
document.getElementsByClassName('first')[0].attributes
document.getElementsByClassName('first')[0].attributes[0]
document.getElementsByClassName('first')[0].attributes[1].value
document.getElementsByClassName('first')[0].attributes[1].name
document.getElementsByClassName('list')[0].setAttribute('class','test')
document.getElementById('logo').classList;
document.getElementById("header").setAttribute('style','border :5px dashed blue');
document.getElementById("logo").getAttribute('class');
document.getElementById("logo").removeAttribute("style");
document.getElementById('logo').attributes[1];
document.getElementById('logo').attributes;
document.getElementById('logo').getAttributeNode('class');
*/

document.getElementById('menu').addEventListener('click',abc);
function abc(){
    // alert('hello');
    this.style.backgroundColor = "gray";
    document.getElementsByTagName('a')[1].style.color = "white";
}

var list = document.getElementsByTagName('p')[0];
list.addEventListener('mouseover',function(){
    this.style.backgroundColor = "green";
});

// toggle class 
// document.getElementById('logo').classList.toggle('test');
var to = document.getElementById('logo');
to.addEventListener('click',function(){
    to.classList.toggle('test');
})