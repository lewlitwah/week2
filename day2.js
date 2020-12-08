var lines = 7;
var hashtag = "#"
for(var i = 0; i < lines; i++){
  document.write(hashtag);
  document.write("<br/>");
  hashtag += "#";
}
for (var i = 0; i < lines; i++){
    for(var j = 0; j < lines-i-1; j++){
    document.write("#")
  }
  document.write("<br/>");
}

var lines = 11;

for (var j= 0; j< lines; j++){
for (var i= 0; i< lines; i++){
  if (i % 2 == 0 && j %2 == 0){
    document.write("#");
   }
  else if (i % 2 == 1 && j % 2 == 1 || i % 2 == 0 && j % 2 == 0){
    document.write("#")
  }
 
  else{
     document.write("0")
  }
  }
  document.write("<br/>")
}

