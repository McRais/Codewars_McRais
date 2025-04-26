function whichNote(kPC) {
    let arr = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G","G#"]
    let number = kPC
    while(number > 88){
      number-=88
    }
    while(number > 12){
      number-=12
    }
    return arr[number-1]
}
