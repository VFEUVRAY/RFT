function openPlayerDialogPC() {
    var html = HtmlService.createHtmlOutputFromFile('new_playerPC');
    SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
        .showModalDialog(html, 'Inscription nouveau joueur PC');
  }
  
  function openPlayerDialogPS4() {
    var html = HtmlService.createHtmlOutputFromFile('new_playerPS4');
    SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
        .showModalDialog(html, 'Inscription nouveau joueur PS4');
  }
  
  
  function addNewPlayer(name, console)
  {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var playa = ss.getRangeByName('tempList'+console).getValues();
    /*if (find_name(playa,name)) {
        Browser.msgBox(name + ' est déjà inscrit sur ' + console + '.');
        return 0;
        }*/
  
    
    
    playa[rangeLen(playa)]=[name,2000,0];
    playa=sort(playa);
    ss.getRangeByName('tempList'+console).setValues(playa);
      
  
    Browser.msgBox(name +' est inscrit sur ' + console + '. Youpi.');
    
  }