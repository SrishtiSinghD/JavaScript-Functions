// Implementation of Map Function
function mapDuplicate (callback,arr)
{
    const newArr = [];
    let lenArr = arr.length;
    let i;
    
    for (i=0; i<lenArr; i++)
    {
        processedElement = callback(arr[i]);
        newArr.push(processedElement);
    }
    return newArr
}

// Example 1
function myFunction(num) {
  return num * 10;
}

const numbers = [65, 44, 12, 4];
const newArray = mapDuplicate(myFunction,numbers)
console.log(newArray);
document.getElementById("example1").innerHTML = newArray;

// Example 2
const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");
}
console.log(mapDuplicate(getFullName,persons));
document.getElementById("example2").innerHTML = mapDuplicate(getFullName,persons);