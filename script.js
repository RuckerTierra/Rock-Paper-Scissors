// alert("connected");

// count = 0;
var countToThree = function(count){
  if(count == 3){
    console.log("3 Finished counting");
  } 
  else {
    console.log(count);
    countToThree(count + 1);
  }
}
countToThree(0);