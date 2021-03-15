module.exports = function check(braces, bracketsConfig) {
  while(braces.length>0){
  let minuspair = false
  for (let i = 0; i < braces.length-1; i++){
    for (let pair of bracketsConfig){
      if (braces[i]==pair[0] && braces[i+1]==pair[1]){
        braces = braces.slice(0,i)+braces.slice(i+2,braces.length)
        minuspair = true
        
      }
    
    }

  }
  if (!minuspair && braces.length > 0){
    return false
  }
  }
  return true

  };

