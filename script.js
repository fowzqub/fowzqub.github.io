var index = new Array(8);
var columns = document.getElementById("columns").childNodes;
index[0] = columns[0].childNodes;
index[1] = columns[1].childNodes;
index[2] = columns[2].childNodes;
index[3] = columns[3].childNodes;
index[4] = columns[4].childNodes;
index[5] = columns[5].childNodes;
index[6] = columns[6].childNodes;
index[7] = columns[7].childNodes;
index[5][5].style.backgroundColor = "red";
