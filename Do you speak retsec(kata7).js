function reverseByCenter(s){
  if(s.length % 2 == 1){return s.slice(Math.round(s.length/2)) + s[Math.round(s.length/2)-1] + s.slice(0, (Math.round(s.length/2))-1)                    
  } else {return s.slice(s.length/2, s.length) + s.slice(0, s.length/2)}
}