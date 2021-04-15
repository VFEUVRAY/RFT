function updateListPC() 
{
  var admin_ss = SpreadsheetApp.getActiveSpreadsheet();
  var main_ssPC = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1u9TOjc0ulg28pmYr4MwY9Jg4lAeAhOVeQ09JgOnehhA/edit');

  
  var playaPC = admin_ss.getRangeByName('tempListPC').getValues();
  playaPC = putGrade(playaPC, main_ssPC);
  
  
  var logsPC = admin_ss.getRangeByName('LogsPC').getValues();
  var tempListPC = admin_ss.getRangeByName('tempListPC').getValues();
  var tempTourneyResultsPC = admin_ss.getRangeByName('tournamentResultsPC').getValues();
  
    
  main_ssPC.getRangeByName('players').setValues(playaPC);
  main_ssPC.getRangeByName('Historique').setValues(logsPC);
  //main_ssPC.getRangeByName('tourneyResults').setValues(tempTourneyResultsPC);
  
  
  Browser.msgBox('Mise à jour PC effectuée, tuée, tuée.');
  
}




function updateListPS4() 
{
  var admin_ss = SpreadsheetApp.getActiveSpreadsheet();
  
  var main_ssPS4 = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1WNmdOoR77lsgzfeLGYsY0eaNpwR82Zlntupc_m2bBOM/edit');
  
  var playaPS4 = admin_ss.getRangeByName('tempListPS4').getValues();
  playaPS4 = putGrade(playaPS4, main_ssPS4);
  
  
  var logsPS4 = admin_ss.getRangeByName('LogsPS4').getValues();
  var tempListPS4 = admin_ss.getRangeByName('tempListPS4').getValues();
  var tempTourneyResultsPS4 = admin_ss.getRangeByName('tournamentResultsPS4').getValues();
  
  main_ssPS4.getRangeByName('players').setValues(playaPS4);
  main_ssPS4.getRangeByName('Historique').setValues(logsPS4);
  //main_ssPS4.getRangeByName('tourneyResults').setValues(tempTourneyResultsPS4);
  
  
  Browser.msgBox('Mise à jour PS4 effectuée, tuée, tuée.');
  
}
