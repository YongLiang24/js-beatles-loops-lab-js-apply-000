// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var string = [];
  //create an array size of musician's length
  for(i=0; i<musicians.length; i++)
  {
    string[i]= "";
  }
  //
  for(j=0; j<musicians.length; j++)
  {
    string[j]+="${musicians[j]} plays ${instruments[i]}";
  }
  return string;
}
