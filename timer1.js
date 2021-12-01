var args = (process.argv.slice(2));
console.log(args);


const timer1 = function(arr){
  let newArr = [];
  let val = 0;

  for (const values of arr){
    val = parseInt(values)
    newArr.push(val);
  }

  for (let i = 0; i < newArr.length; i++){
    if(newArr[i] > 0 && typeof newArr[i] === "number"){
      setTimeout(() => {
        process.stdout.write(".");
      }, newArr[i] * 1000);
    }
  }
}

timer1(args);