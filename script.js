var index = new Array(8);
var columns = document.getElementById("columns").childNodes;
var piece = document.getElementById("wBishopOne");
index[0] = columns[1].childNodes;
index[1] = columns[3].childNodes;
index[2] = columns[5].childNodes;
index[3] = columns[7].childNodes;
index[4] = columns[9].childNodes;
index[5] = columns[11].childNodes;
index[6] = columns[13].childNodes;
index[7] = columns[15].childNodes;

function move(x,y){
  piece.style.left = x*90+"px";
  piece.style.top = y*90+"px";
}
