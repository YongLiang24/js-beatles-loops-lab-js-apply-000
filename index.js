// add solution here
//case 1
function theBeatlesPlay(musician, instrument)
{
  var newArray=[]; //empty array
  /*This for loop iterates the size of array musician, using .push to add new
  array elements to the empty array*/
  for(var i=0; i<musician.length; i++)
  {
    //Use string interpolation
    newArray.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return newArray;
}
//case 2
function johnLennonFacts(facts){
  var arr =[];//empty array
  var c=0; //a counter variable
  //while loop to push '!!!' to the end of each index of facts array
  while(c <facts.length){
    arr.push(facts[c]+'!!!');
    c++;
  }
 return arr;
}
