var index = new Array(8);
var columns = document.getElementById("columns").childNodes;

index[0] = columns[1].childNodes;
index[1] = columns[3].childNodes;
index[2] = columns[5].childNodes;
index[3] = columns[7].childNodes;
index[4] = columns[9].childNodes;
index[5] = columns[11].childNodes;
index[6] = columns[13].childNodes;
index[7] = columns[15].childNodes;

function piece(name,locx,locy){
  this.name = name;
  this.locx = locx;
  this.locy = locy;
}

var wr1 = new piece("rook",0,0);
var wkn1 = new piece("knight",1,0);
var wb1 = new piece("bishop",2,0);
var wq = new piece("queen",3,0);
var wk = new piece("king",4,0);
var wb2 = new piece("bishop",5,0);
var wkn2 = new piece("knight",6,0);
var wr2 = new piece("rook",7,0);
var wp1 = new piece("pawn",0,1);
var wp2 = new piece("pawn",1,1);
var wp3 = new piece("pawn",2,1);
var wp4 = new piece("pawn",3,1);
var wp5 = new piece("pawn",4,1);
var wp6 = new piece("pawn",5,1);
var wp7 = new piece("pawn",6,1);
var wp8 = new piece("pawn",7,1);
  
function move(x,y){
  piece.style.left = x*90+"px";
  piece.style.top = y*90+"px";
}
