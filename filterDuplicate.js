function filterDuplicate(callback,arr)
{
    const finalArr = [];
    for (let i=0; i<arr.length; i++)
    {
        if(callback(arr[i]))
        {
            finalArr.push(arr[i]);
        }
    }
    return finalArr;
}

const ages = [32, 33, 16, 40];
const result = filterDuplicate(checkAdult,ages);
console.log(result);
document.getElementById("example").innerHTML = result;

function checkAdult(age) 
{
  return age >= 18;
}