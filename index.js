// add solution here
function theBeatlesPlay(arrayMusician, arrayInstrument)
{
  var empArray = [];
  for(i=0; i<arrayMusician.length; i++)
  {
    empArray[i]= "";
    empArray[i] += arrayMusician[i] + "plays" + arrayInstrument[i];
  }
  return empArray;
}
theBeatlesPlay(["Why", "No"] , ["Guitar", "Hello"]);
