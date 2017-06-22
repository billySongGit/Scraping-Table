if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != 'undefined' ? args[number] : match;
    });
  };
}

var a = [];

for (var i = 1; i <= 50; i++) {
  var rows = document.getElementsByTagName("table")[0].rows;
  var row = rows[i];
  var b = [];
  for (var j = 0; j < 15; j++) {
    var cell = row.cells[j];
    if (cell.innerText) {
      cell = cell.innerText;
    }
    b.push(cell);
  }
  a.push(b);
}

var arr = [];
for (var f = 0; f < a.length; f++) {
  var c = a[f];
  for (var h = 0; h < c.length; h++) {
    if (c[h] != null) {
      c[h] = c[h].replace("'", "\'").replace(",", "");
    }

  }
  var g = "insert into table value({0}, '{1}', '{2}', '{3}', {4}, {5}, {6}, {7}, {8}, {9}, {10}, {11}, {12}, {13}, {14})".format(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14]);
  console.log(g);
};
