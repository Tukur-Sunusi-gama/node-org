
const factorsOf = (numb) => {
    let items = []
      for (var i = 0; i <= numb; i++){
        if (numb%i == 0){
            items.push(i)
        }
        else{
            continue
        }
      }
      console.log(`The factors of ${numb} are :`);
      return items
  }

  const sum = (numb1, numb2) =>{
    return numb1 + numb2
  }

  const difference = (numb1, numb2) =>{
    return numb1 - numb2
  }

  const product = (numb1, numb2) =>{
    return numb1 * numb2
  }
  const divide = (numb1, numb2) =>{
    return numb1 / numb2
  }

  const remender = (numb1, numb2) =>{
    return numb1 % numb2
  }

  const exponent = (numb1, numb2) =>{
    return numb1 ** numb2
  }
  module.exports = {factorsOf,sum,difference,product,divide,remender,exponent}