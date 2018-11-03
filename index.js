// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var empArray = [];
  for(i=0; i<musicians.length; i++)
  {

    empArray[i] = musicians[i] + "plays" + instruments[i];
  }
  return empArray;
}
theBeatlesPlay(["Why", "No"] , ["Guitar", "Hello"]);
