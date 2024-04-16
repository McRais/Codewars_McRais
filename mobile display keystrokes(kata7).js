const map = ['1234567890*#','adgjmptw','behknqux','cfilorvy','sz']

function mobileKeyboard(str){
  return [...str].reduce((s,c)=>s+map.findIndex(l=>l.includes(c)),str.length);
}