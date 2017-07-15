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

function piece(name,locx,locy,id){
  this.name = name;
  this.locx = locx;
  this.locy = locy;
  this.id = id;
}

var wr1 = new piece("rook",0,0,document.getElementById("wCastleOne"));
var wkn1 = new piece("knight",1,0,document.getElementById("wKnightOne"));
var wb1 = new piece("bishop",2,0,document.getElementById("wBishopOne"));
var wq = new piece("queen",3,0,document.getElementById("wCastleOne"));
var wk = new piece("king",4,0,document.getElementById("wCastleOne"));
var wb2 = new piece("bishop",5,0,document.getElementById("wBishopTwo"));
var wkn2 = new piece("knight",6,0,document.getElementById("wKnightTwo"));
var wr2 = new piece("rook",7,0,document.getElementById("wCastleTwo"));
var wp1 = new piece("pawn",0,1,document.getElementById("wPawnOne"));
var wp2 = new piece("pawn",1,1,document.getElementById("wPawnTwo"));
var wp3 = new piece("pawn",2,1,document.getElementById("wPawnThree"));
var wp4 = new piece("pawn",3,1,document.getElementById("wPawnFour"));
var wp5 = new piece("pawn",4,1,document.getElementById("wPawnFive"));
var wp6 = new piece("pawn",5,1,document.getElementById("wPawnSix"));
var wp7 = new piece("pawn",6,1,document.getElementById("wPawnSeven"));
var wp8 = new piece("pawn",7,1,document.getElementById("wPawnEight"));
  
var br1 = new piece("rook",0,0,document.getElementById("bCastleOne"));
var bkn1 = new piece("knight",1,0,document.getElementById("bKnightOne"));
var bb1 = new piece("bishop",2,0,document.getElementById("bBishopOne"));
var bq = new piece("queen",3,0,document.getElementById("bCastleOne"));
var bk = new piece("king",4,0,document.getElementById("bCastleOne"));
var bb2 = new piece("bishop",5,0,document.getElementById("bBishopTwo"));
var bkn2 = new piece("knight",6,0,document.getElementById("bKnightTwo"));
var br2 = new piece("rook",7,0,document.getElementById("bCastleTwo"));
var bp1 = new piece("pawn",0,1,document.getElementById("bPawnOne"));
var bp2 = new piece("pawn",1,1,document.getElementById("bPawnTwo"));
var bp3 = new piece("pawn",2,1,document.getElementById("bPawnThree"));
var bp4 = new piece("pawn",3,1,document.getElementById("bPawnFour"));
var bp5 = new piece("pawn",4,1,document.getElementById("bPawnFive"));
var bp6 = new piece("pawn",5,1,document.getElementById("bPawnSix"));
var bp7 = new piece("pawn",6,1,document.getElementById("bPawnSeven"));
var bp8 = new piece("pawn",7,1,document.getElementById("bPawnEight"));

function move(x,y){
  select.id.style.left = x*90+"px";
  select.id.style.top = y*90+"px";
}
