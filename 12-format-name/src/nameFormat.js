function nameFormat(inputArray){
    //return inputArray.join(", ");
    var newArray = [];
    if(inputArray.length > 1){
        for(var i=0; i<inputArray.length-2; i++){
            newArray.push(inputArray[i] + ", ");
        }
        newArray.push( inputArray[inputArray.length-2] );
        newArray.push( " & " + inputArray[inputArray.length-1] );
        return newArray.join("");
    }else{
        return inputArray[0];
    }
}

module.exports = nameFormat;