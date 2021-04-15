function putGrade(playa, sheet) {
    var grade;
    var n_grade;
    var i = 0;
    var y = 1;
    var l;
    var new_list = sheet.getRangeByName('copydummy').getValues();

    l = rangeLen(playa);
    grade = parseInt(+playa[0][1] / 1000);
    new_list[0][0] = ('Palier ' + grade);
    while (i < l) {
        n_grade = parseInt(+playa[i][1] / 1000);
        if (n_grade < grade) {
            grade = n_grade;
            new_list[y][0] = '-';
            new_list[y][1] = '';
            new_list[y + 1][0] = ('Palier ' + grade);
            new_list[y + 1][1] = '';
            y = y + 2;
        }
        new_list[y][0] = playa[i][0];
        new_list[y][1] = playa[i][1];
        i = i + 1;
        y = y + 1;
    }
    return (new_list);
}

function my_abs(n1, n2) {
    var diff;

    diff = n1 - n2;
    return (diff < 0 ? diff * (-1) : diff);
}

function strfind(string, to_find) {
    var i;
    var y;
    var l;
    var t_l;

    i = 0;
    y = 0;
    l = string.length;
    t_l = to_find.length;
    while (i < l) {
        while (string[i] == to_find[y]) {
            y = y + 1;
            i = i + 1;
        }
        if (y == t_l)
            return (i - y);
        i = i + 1;
        y = 0;
    }
    return (-1);
}

function strstr(str1, str2) {
    var i;
    var l;

    i = 0;
    l = str1.length;
    while (i < l) {
        if (str1[i] != str2[i])
            return (-1);
        i = i + 1;
    }
    return (1);
}

function find_name(range, name) {
    var i;
    var l;
    var pos;

    i = 0;
    l = rangeLen(range);

    while (i < l) {
        if (range[i][0].toLowerCase() == name.toLowerCase())
            return (i);
        i = i + 1;
    }
    return (-1);
}

function testif(num) {
    return (num == 3 ? 1 : -1);
}
