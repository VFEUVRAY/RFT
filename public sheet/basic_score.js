function test_score() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet();

    var names = sheet.getRangeByName('duel').getValues();
    var playa = sheet.getRangeByName('tempList').getValues();
    var winner = names[0][0];
    var loser = names[0][2];
    var pos_w;
    var pos_l;

    pos_w = find_name(playa, winner);
    pos_l = find_name(playa, loser);
    if (pos_w < 0 || pos_l < 0)
        return (Browser.msgBox('Please enter valid names (list on the left) ' + pos_w + pos_l));

    var scores = [JSON.parse(JSON.stringify(playa[pos_w][1])),
        0,
    JSON.parse(JSON.stringify(playa[pos_l][1])),
        0];

    playa = score_calc(playa, winner, loser, pos_w, pos_l);
    scores[1] = playa[pos_w][1];
    scores[3] = playa[pos_l][1];
    logReg(sheet, winner, loser, scores);
    playa = sort(playa);
    sheet.getRangeByName('tempList').setValues(playa);
    Browser.msgBox('Thank you for reporting results. List will be updated after a moderator check! :^)');
}

function score_calc(playa, winner, loser, pos_w, pos_l) {
    var fact_w;
    var fact_l;
    var score_w;
    var score_l;
    var diff;

    score_w = +playa[pos_w][1];
    score_l = +playa[pos_l][1];
    fact_w = parseInt(score_w / 1000);
    fact_l = parseInt(score_l / 1000);
    diff = my_abs(fact_w, fact_l);


    if (fact_w > fact_l) {
        score_w = score_w + (700 / (1 + fact_w + diff));
        score_l = score_l - (700 / (1 + fact_w + diff));

    }
    if (fact_w < fact_l + 1) {
        score_w = score_w + ((700 / (1 + fact_w)) + (diff * 100));
        score_l = score_l - ((700 / (1 + fact_l)) + (diff * 100));
    }
    if (score_w < 0)
        score_w = 0;
    if (score_l < 0)
        score_l = 0;
    playa[pos_w][1] = parseInt(score_w);
    playa[pos_l][1] = parseInt(score_l);
    return (playa);
}

function noGradeList(playa, sheet) {
    var i = 0;
    var y = 0;
    var l;
    var new_list = sheet.getRangeByName('copydummy').getValues();

    l = rangeLen(playa);
    if (strfind(playa[0][0], 'Palier') > (-1)) {
        i = i + 1;
    }
    while (i < l) {
        if (playa[i][0] != '-') {
            new_list[y][0] = playa[i][0];
            new_list[y][1] = playa[i][1];
            y = y + 1;
        }
        if (playa[i][0] == '-')
            i = i + 1;
        i = i + 1;
    }
    return (new_list);
}