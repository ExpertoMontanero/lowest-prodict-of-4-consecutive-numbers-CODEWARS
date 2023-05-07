function lowestProduct(input) { 
//making an input as an array of intigers
input.split("").forEach(element=>parseInt(element));
  //checking if array length is grater than 4 or returning proper info
  if(input.length<4){
    return "Number is too small";
  }
  //looking for lowest product 
  var temp=0;
  var  min = input[0]*input[1]*input[2]*input[3];
  for(var index = 0; index<input.length-3; index++){
   temp = input[index]*input[index+1]*input[index+2]*input[index+3];
    if(temp<min){
      min=temp;
    }
  }
  //returning lowest product 
  return min;
}
