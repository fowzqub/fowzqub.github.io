var index = new Array(8);
var columns = document.getElementById("columns").childNodes;
var select;

index[0] = columns[1].childNodes;
index[1] = columns[3].childNodes;
index[2] = columns[5].childNodes;
index[3] = columns[7].childNodes;
index[4] = columns[9].childNodes;
index[5] = columns[11].childNodes;
index[6] = columns[13].childNodes;
index[7] = columns[15].childNodes;

function piece(name,locx,locy,id,color){
  this.name = name;
  this.locx = locx;
  this.locy = locy;
  this.id = id;
  this.color = color;
}

var wr1 = new piece("rook",0,0,document.getElementById("wCastleOne"),"light");
var wkn1 = new piece("knight",1,0,document.getElementById("wKnightOne"),"light");
var wb1 = new piece("bishop",2,0,document.getElementById("wBishopOne"),"light");
var wq = new piece("queen",3,0,document.getElementById("wCastleOne"),"light");
var wk = new piece("king",4,0,document.getElementById("wCastleOne"),"light");
var wb2 = new piece("bishop",5,0,document.getElementById("wBishopTwo"),"light");
var wkn2 = new piece("knight",6,0,document.getElementById("wKnightTwo"),"light");
var wr2 = new piece("rook",7,0,document.getElementById("wCastleTwo"),"light");
var wp1 = new piece("pawn",0,1,document.getElementById("wPawnOne"),"light");
var wp2 = new piece("pawn",1,1,document.getElementById("wPawnTwo"),"light");
var wp3 = new piece("pawn",2,1,document.getElementById("wPawnThree"),"light");
var wp4 = new piece("pawn",3,1,document.getElementById("wPawnFour"),"light");
var wp5 = new piece("pawn",4,1,document.getElementById("wPawnFive"),"light");
var wp6 = new piece("pawn",5,1,document.getElementById("wPawnSix"),"light");
var wp7 = new piece("pawn",6,1,document.getElementById("wPawnSeven"),"light");
var wp8 = new piece("pawn",7,1,document.getElementById("wPawnEight"),"light");
  
var br1 = new piece("rook",0,0,document.getElementById("bCastleOne"),"dark");
var bkn1 = new piece("knight",1,0,document.getElementById("bKnightOne"),"dark");
var bb1 = new piece("bishop",2,0,document.getElementById("bBishopOne"),"dark");
var bq = new piece("queen",3,0,document.getElementById("bCastleOne"),"dark");
var bk = new piece("king",4,0,document.getElementById("bCastleOne"),"dark");
var bb2 = new piece("bishop",5,0,document.getElementById("bBishopTwo"),"dark");
var bkn2 = new piece("knight",6,0,document.getElementById("bKnightTwo"),"dark");
var br2 = new piece("rook",7,0,document.getElementById("bCastleTwo"),"dark");
var bp1 = new piece("pawn",0,1,document.getElementById("bPawnOne"),"dark");
var bp2 = new piece("pawn",1,1,document.getElementById("bPawnTwo"),"dark");
var bp3 = new piece("pawn",2,1,document.getElementById("bPawnThree"),"dark");
var bp4 = new piece("pawn",3,1,document.getElementById("bPawnFour"),"dark");
var bp5 = new piece("pawn",4,1,document.getElementById("bPawnFive"),"dark");
var bp6 = new piece("pawn",5,1,document.getElementById("bPawnSix"),"dark");
var bp7 = new piece("pawn",6,1,document.getElementById("bPawnSeven"),"dark");
var bp8 = new piece("pawn",7,1,document.getElementById("bPawnEight"),"dark");

function move(x,y){
  if(select.color == "dark"){ 
  switch(select.id){
    case "pawn":
      break;
    case "rook":
      break;
    case "knight":
      break;
    case "bishop":
      break;
    case "king":
      break;
    case "queen":
      break;
  }}else{
  select.id.style.left = x*90+"px";
  select.id.style.top = y*90+"px";
  }

}
