var number = 10;
var string = 'Hello World';
var isRad = true;
var groceries = ['Milk', 'egg', 'cheese'];

/*document.getElementById('box1').innerHTML = string;*/

/*You can code normally*/
if(number==10){
    console.log("Yeah Buddy!");
}
else{
    console.log("NOOOOO");
}

for(var i=0; i<10; i++){
    console.log(i);
}

function list(){
    for(var i=0; i<groceries.length; i++){
        console.log(groceries[i]);
    }
}

list();

/*To alert user when something appens*/
document.getElementById('box1').addEventListener('click', function(){
    alert('I got clicked');
});