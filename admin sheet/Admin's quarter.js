Date.prototype.dateFR = function()
{
  var months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai',
                'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre',
                'Novembre', 'Décembre'];
  var days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi',
              'Vendredi', 'Samedi', 'Dimanche'];
  this.month = months[this.getMonth()];
  this.day = days[this.getDay() - 1];
}

function onOpen(e)
{
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LogsPC').setFrozenRows(1);
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LogsPS4').setFrozenRows(1);

}




function addBeg(range, array)
{
  var i = 0;
  var l = rangeLen(range);
  
  while (i < l)
  {
    range[l - i] = range [l - i - 1];
    i = i + 1;
  }
  range[0] = array;
  return(range);
}

function scoresToString(old_score, new_score)
{
  var string = [old_score + ' => ' + new_score];
  return(string);
}


function addProp(date)
{
  var months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai',
                'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre',
                'Novembre', 'Décembre'];
  var days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi',
              'Vendredi', 'Samedi', 'Dimanche'];
  var newdate;
  newdate = [months[date.getDate()], months[date.getMonths()]];
  date.prototype.month = months[date.getMonth()];
  return(date);
}


