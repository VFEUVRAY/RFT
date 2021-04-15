function setCount() 
{
  var adminSheet = SpreadsheetApp.getActiveSpreadsheet();
  var pList = adminSheet.getRangeByName('tempListPC').getValues();
  var logs = adminSheet.getRangeByName('LogsPC').getValues();
  var pLen = rangeLen(pList);
  var i = 0;
  
  while (i < pLen)
  {
    pList[i][2] = inRangeCount(logs, pList[i][0].toLowerCase());
    i = i + 1;
  }
  adminSheet.getRangeByName('tempListPC').setValues(pList);
}

function setCountPS4() 
{
  var adminSheet = SpreadsheetApp.getActiveSpreadsheet();
  var pList = adminSheet.getRangeByName('tempListPS4').getValues();
  var logs = adminSheet.getRangeByName('LogsPS4').getValues();
  var pLen = rangeLen(pList);
  var i = 0;
  
  while (i < pLen)
  {
    pList[i][2] = inRangeCount(logs, pList[i][0].toLowerCase());
    i = i + 1;
  }
  adminSheet.getRangeByName('tempListPS4').setValues(pList);
}

function inRangeCount(range, str)
{
  var len = rangeLen(range);
  var i = 0;
  var count = 0;
  
  while (i < len)
  {
    if (strfind(range[i][0].toLowerCase(), str) > -1)
      count = count + 1;
    i = i + 1;
  }
  return (count);
}