function openReport() {
    var html = HtmlService.createHtmlOutputFromFile('rapport_score');
    SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
        .showModalDialog(html, 'Résultat de défi');
}
  
function myMain(j1, j2, s1, s2)
{
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    //var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/10pJYWRtyv4AP1QmMA6nQIzYJln3sjOHj9-LnJFbLw3U/edit#gid=0');
    var playa = ss.getRangeByName('tempList').getValues();
    var pos_j1 = find_name(playa, j1);
    var pos_j2 = find_name(playa, j2);
    var winlos = ['', '', '', ''];
   
    entryERR((pos_j1 < 0 || pos_j2 < 0 ? (-1) : 0), j1, j2, pos_j1, pos_j2);
    entryERR(checkScore(s1, s2));
    winlos = detWinLos(j1, j2, s1, s2);
}
  
  /* fonction de gestion d'erreur
  errcode -1 = nom(s) invalide(s)
  errcode -2 = scores invalides
  errcode 0 = aucune erreur
  ra*/
function entryERR(errcode, j1, j2, pos_j1, pos_j2)
{
    var error = ['Noms de joueurs non valides (liste sur la gauche): ',
                 'Scores non valides (le score doit être compris entre 0 et 10, avec le uniquement le gagnant à 10).'];
    if (errcode == (-1))
    {
      if (pos_j1 < 0)
        error[0] = error[0] + j1 + ' ';
      if (pos_j2 < 0)
        error[0] = error[0] + j2;
      error[0] = error[0] + ' non trouvé(s). Si un nom manque à la liste, veuillez contacter un modérateur.';
      Browser.msgBox(error[0]);
      openReport();
    }
    if (errcode == (-2))
    {
      Browser.msgBox(error[1]);
      openReport();
    }
}

function checkScore(s1, s2)
{
    if (s1 < 0 || s2 < 0)
      return(-2);
    if(s1 == s2)
      return(-2);
    if(s1 != 10 && s2 != 10)
      return(-2);
    return(1);
  }
  function checkEntries(joueur1, joueur2, score1, score2) {
    var mainSheet = SpreadsheetApp.getActiveSpreadsheet();
    var adminSheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/10pJYWRtyv4AP1QmMA6nQIzYJln3sjOHj9-LnJFbLw3U/edit');
    
    var playa = adminSheet.getRangeByName('tempListPC').getValues(); 
    
    var pos_j1 = find_name(playa, joueur1);
    var pos_j2 = find_name(playa, joueur2);
    
    
    if (pos_j1 < 0 || pos_j2 < 0) {
      Browser.msgBox('Entrer un nom valide (liste sur la gauche) ' + joueur1 + joueur2);
      openReport();
    }
    else if (score1 < 0 || score2 < 0 || (score1==score2) || (score1 != 10 && score2 != 10)) {
      Browser.msgBox('Scores non valides (le score doit être compris entre 0 et 10, avec le gagnant seulement à 10)');
      openReport();
    }
    else 
    {
      var winner;
      var loser;
      var pos_w;
      var pos_l;
      var win_score;
      var los_score;
      
      //Browser.msgBox(playa[pos_j1][0] + ' is J1: ' + score1 + ' , ' + joueur2 + ' is J2: ' + score2); 
      if ((+score1) > (+score2))
      {
        win_score = +score1;
        los_score = +score2;
        winner = joueur1;
        loser = joueur2;
        pos_w = pos_j1;
        pos_l = pos_j2;
        //Browser.msgBox((joueur1 + ' Win ' + score1));
      }
      if ((+score2) > (+score1))
      {
        win_score = +score2;
        los_score = +score1;
        winner = joueur2;
        loser = joueur1;
        pos_w = pos_j2;
        pos_l = pos_j1;
        //Browser.msgBox((joueur2 + ' Win ' + score2));
      }    
      var scores = [JSON.parse(JSON.stringify(playa[pos_w][1])),
                    0,
                    JSON.parse(JSON.stringify(playa[pos_l][1])),
                    0]; 
      playa = score_calc(playa, winner, loser, pos_w, pos_l);
      scores[1] = playa[pos_w][1];
      scores[3] = playa[pos_l][1];
      logReg(adminSheet, winner, loser, scores, win_score, los_score);
      playa = sort(playa);
      pos_w = find_name(playa, winner);
      pos_l = find_name(playa, loser);
      playa[pos_w][2] = playa[pos_w][2] + 1;
      playa[pos_l][2] = playa[pos_l][2] + 1;
      adminSheet.getRangeByName('tempListPC').setValues(playa);
      Browser.msgBox('Merci d\'avoir rapporté les scores. La liste sera mise à jour après une vérification des modérateurs! :^)');
    }
}