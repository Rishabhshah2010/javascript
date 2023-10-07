

function reverseArray(inputArray)
{

    var length = inputArray.length;
    var reversedArray = [];

    for (var i = length-1; i >= 0; i--) {
        reversedArray.push(inputArray[i]);
    }

    console.log(reversedArray);
}
myArray = [R,I,S,H,A,B,H];
reverseArray(myArray);