// add solution here
function theBeatlesPlay(arrayMusician, arrayInstrument)
{
  var empArray = [];
  for(i=0; i<arrayMusician.length; i++)
  {
    empArray[i] += arrayMusician[i] + "plays" + arrayInstrument[i];
  }
  return empArray;
}
