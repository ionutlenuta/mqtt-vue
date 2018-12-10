const parseToObject = function(sensorsArray) {
  let objectsArray=[];
  sensorsArray.forEach(element => {
    objectsArray.push(element[0]);
  });
  return objectsArray;
}

export
  {
    parseToObject
  }
