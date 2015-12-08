
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function validate(array){
  result = true
  for (x in array){
    if (isNumeric(x) == false){
      result = false
      break
    }
  }
  return result

}

function mean(array){
  validationResult = validate(array)
  if (!validationResult){
    throw {error : "Invalid array"}
  }
  return expectation(array,1)
}


function expectation(array,n){
  sum = 0
  for (i in array){
    sum += Math.pow(array[i],n)
  }
  return sum / array.length
}

function variance(array){

  validationResult = validate(array)
  if (!validationResult){
    throw {error : "Invalid array"}
  }

  mean = expectation(array,1);
  var val = 0
  for (x in array){
    var temp = array[x]-mean
    val += Math.pow(temp,2)
  }
  var variance = val/array.length
  console.log(variance)
  return variance
}

function sample_variance(array){

  validationResult = validate(array)
  if (!validationResult){
    throw {error : "Invalid array"}
  }

  mean = expectation(array,1);
  var val = 0
  for (x in array){
    var temp = array[x]-mean
    val += Math.pow(temp,2)
  }
  var variance = val/(array.length-1)
  console.log(variance)
  return variance
}
