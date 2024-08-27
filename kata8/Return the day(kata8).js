function whatday(num) { 
let arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
return arr[num-1] || "Wrong, please enter a number between 1 and 7"
}