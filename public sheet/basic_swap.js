function sort(playa) {
    var n_bcp; //name backup
    var s_bcp;
    var c_bcp;
    var i = 0;
    var y;
    var l;
    var cell;
    var fin = 0;

    l = rangeLen(playa);
    while (i < l && fin == 0) {
        y = 0;
        fin = 1;
        while (y < l) {
            if (+playa[y][1] < +playa[y + 1][1]) {
                n_bcp = playa[y][0];
                s_bcp = playa[y][1];
                c_bcp = playa[y][2];
                playa[y][0] = playa[y + 1][0];
                playa[y][1] = playa[y + 1][1];
                playa[y][2] = playa[y + 1][2];
                playa[y + 1][0] = n_bcp;
                playa[y + 1][1] = s_bcp;
                playa[y + 1][2] = c_bcp;
                fin = 0;
            }
            y = y + 1;
        }
        i = i + 1;
    }
    return (playa);
}

function rangeLen(range) {
    var i = 0;
    while (range[i][0] != '')
        i = i + 1;
    return (i);
}

function printRange(sheet, range) {
    var i = 0;
    var l = rangeLen(range);
    while (i != l) {
        sheet.appendRow([range[i][0], range[i][1]]);
        i = i + 1;
    }
}