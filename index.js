// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var newArray = [];
  //create an array size of musician's length
  for(i=0; i<musicians.length; i++)
  {
    newArray[i]= "";
  }
  //
  for(j=0; j<musicians.length; j++)
  {
    newArray[j]="${musicians[j]} plays ${instruments[i]}";
  }
  return newArray;
}
