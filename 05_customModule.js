console.log("This is a module");

function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length;
}

module.exports={
    avg:average,
    name:"Kashif",
    repo:"Github"

}

module.exports.mobile="9113159949";
