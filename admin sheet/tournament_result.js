function openTournamentReportPC() {
    var html = HtmlService.createHtmlOutputFromFile('tourney_resultPC');
    SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
        .showModalDialog(html, 'Résultat de tournoi PC');
  }
  
  
  function openTournamentReportPS4() {
    var html = HtmlService.createHtmlOutputFromFile('tourney_resultPS4');
    SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
        .showModalDialog(html, 'Résultat de tournoi PS4');
  }
  
  
  
  function tournamentMain(joueur,tournament_name,tournament_link,tournament_type,classement,console) {
    if (!isNameValid(joueur,console)) {
      Browser.msgBox('Entrer un nom valide (liste sur la gauche) ' + joueur);
      if (console=='PS4') openTournamentReportPS4();
      else openTournamentReportPC();
      return 0;
      
    }
      
    var points = calculatePoints(tournament_type,classement);
      
    var admin_ss = SpreadsheetApp.getActiveSpreadsheet();
    
    writeResults(joueur, tournament_name, tournament_link, tournament_type, classement, points, admin_ss,console);
    
  }
  
  function writeResults(joueur, tournament_name, tournament_link, tournament_type, classement, points, sheet, console) {
    var fullResults = [[joueur],
                   [tournament_name],
                   [tournament_type],
                   [points],
                   [tournament_link]];
    
    
    var data = sheet.getRangeByName('tournamentResults'+console).getValues();
    var playa = sheet.getRangeByName('tempList' + console).getValues();
     
    
    data = addBeg(data, fullResults);
    sheet.getRangeByName('tournamentResults'+console).setValues(data);
    
    playa = addPoints(joueur, points, sheet,console);
    playa = sort(playa);
    sheet.getRangeByName('tempList'+console).setValues(playa);
    
    
    Browser.msgBox('Résultat pris en compte pour ' + console + ".");
  }
  
  function addPoints(joueur,points,sheet,console) {
      
    
    var playa = sheet.getRangeByName('tempList'+console).getValues();
       
    
    var pos_j = find_name(playa,joueur);
    
    
    var score = +playa[pos_j][1];
    score += points;
      
    playa[pos_j][1] = parseInt(score);
    return(playa);
    
  }
  
  function isNameValid(joueur,console) {
    
    var adminSheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/10pJYWRtyv4AP1QmMA6nQIzYJln3sjOHj9-LnJFbLw3U/edit#gid=0');
    
    var playa = adminSheet.getRangeByName('tempList'+console).getValues();
    
    var pos_j = find_name(playa, joueur);
        
    if (pos_j < 0) {
      return false;
    }
    
    return true;
  }
  
  
  function calculatePoints(tournament_type, classement) {
    var result;
    
    if (tournament_type == "FR") {
      switch(classement) {
        case "7":
          result = 100;
          break;
        case "5":
          result = 150;
          break;
        case "4":
          result = 200;
          break;
        case "3":
          result = 350;
          break;
        case "2":
          result = 600;
          break;
        case "1":
          result = 800;
          break;
        default:
          result = 100;
      } 
    }
    
    
    else {
      
      switch(classement) {
        case "7":
          result = 200;
          break;
        case "5":
          result = 300;
          break;
        case "4":
          result = 400;
          break;
        case "3":
          result = 600;
          break;
        case "2":
          result = 850;
          break;
        case "1":
          result = 1200;
          break;
        default:
          result = 200;
      }
      
    }
    
    return result;
    
  }
  
  
  
  
  