
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
  return variance
}


function getSortedArray (array){
  validationResult = validate(array)
  if(!validationResult){
    throw {error: "Invalid array"}
  }
  return array.sort(function(a,b){
    return a- b;
  });
}

function median(sortedArray){
  console.log(sortedArray)
  var len = sortedArray.length
  if (len%2){
    index = (len -1) / 2
    medianVal =  sortedArray[index]
  }else {
    lowIndex = (len / 2 ) - 1
    highIndex = (len / 2)
    console.log(lowIndex)
    console.log(highIndex)
    medianVal = (sortedArray[lowIndex] + sortedArray[highIndex])/2
  }
  console.log("Median " + medianVal)
  return medianVal
}

function getMedian(array){
  sortedArray = getSortedArray(array)
  return median(sortedArray)
}

function getQuartile(array){
  console.log(array)
  sortedArray = getSortedArray(array)
  console.log("gq" + sortedArray)
  q2 = median(sortedArray)
  len = sortedArray.length
  if (len % 2){
    indexMedian = (len -1) / 2
    lowerRankedArray = sortedArray.slice(0,indexMedian)
    higherRankedArray = sortedArray.slice(indexMedian+1,sortedArray.length)
    q1 = median(lowerRankedArray)
    q3 = median(higherRankedArray)
  }else{
    lowIndex = (len / 2 ) - 1
    highIndex = (len / 2)
    q1 = median(sortedArray.slice(0,highIndex))
    q3 = median(sortedArray.slice(highIndex,sortedArray.length))
  }
  var quartile = {
    q1 : q1,
    q2 : q2,
    q3 : q3
  }
  return quartile
}
