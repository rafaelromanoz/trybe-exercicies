const funcExe1 = (num) => {
  if(num > 0) {
    return "O número é positivo!";
  }
  else if(num < 0) {
    return "O número é negativo!";
  }
  else if(num === 0) {
    return "O número é neutro"
  }
  else if(typeof num !== 'number'){
    return "Moço, oc precisa informar um número pufavô";
  }
};

module.exports = funcExe1;