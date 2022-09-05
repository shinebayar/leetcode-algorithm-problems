const majorityElement = function(A){
    var statArr = ["Closed", "Investigation"];
    var typeArr = ["RD", "WW", "CC", "MB", "CN" ];
    var sql = "";

    for (let i=0; i<statArr.length; i++) {
        for(let j=0; j<typeArr.length; j++){
            console.log(`stat = '${statArr[i]}' AND type = '${typeArr[j]}' OR`)
        }
    }
}

console.log(majorityElement(2147447412))