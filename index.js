// add solution here
function theBeatlesPlay(musician, instrument)
{
  var newArray=[]; //empty array
  for(var i=0; i<musician.length; i++)
  {
    newArray.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return newArray;

}
