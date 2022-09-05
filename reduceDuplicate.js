function reduceDuplicate(callback,arr,initialValue)
{
    let start,previousValue,total;
    if (initialValue === undefined)
        
        {
            previousValue = arr[0];
            start = 1;
        }
    else
    {
            previousValue = initialValue;
            start = 0;
    }
    
    for (start; start < arr.length; start++)
    {
        finalValue=callback(previousValue,arr[start]);
        previousValue=finalValue;
    }
    return finalValue
}

// Example 1
const numbers = [175, 50, 25];

function myFunc(total, num) {
  return total - num;
}
console.log(reduceDuplicate(myFunc,numbers))
document.getElementById("example1").innerHTML = reduceDuplicate(myFunc,numbers);

//Example 2
const numbers2 = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num) {
  return total + Math.round(num);
}
console.log(reduceDuplicate(getSum,numbers2,0));
document.getElementById("example2").innerHTML = reduceDuplicate(getSum,numbers2,0);