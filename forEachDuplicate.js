function forEachDuplicate(callback,arr)
{
    for (let i=0; i<arr.length; i++)
    {
            callback(arr[i],i,arr);
        
    }
}

let text = "";
const fruits = ["apple", "orange", "cherry"];

forEachDuplicate(myFunction,fruits)
console.log(text)
document.getElementById("demo").innerHTML = text;
 
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
}