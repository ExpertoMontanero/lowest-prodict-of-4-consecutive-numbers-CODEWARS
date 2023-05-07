function lowestProduct(input) { 
input.split("").forEach(element=>parseInt(element));
  if(input.length<4){
    return "Number is too small";
  }
  var temp=0;
  var  min = input[0]*input[1]*input[2]*input[3];
  for(var index = 0; index<input.length-3; index++){
   temp = input[index]*input[index+1]*input[index+2]*input[index+3];
    if(temp<min){
      min=temp;
    }
  }
  return min;
}
