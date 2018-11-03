// add solution here
function theBeatlesPlay(musician, instrument)
{
  var newArray=[]; //empty array
  /*This for loop iterates the size of array musician, using .push to add new
  array elements to the empty array*/
  for(var i=0; i<musician.length; i++)
  {
    newArray.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return newArray;
}
