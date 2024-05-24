function calculateYears(principal, interest, tax, desired) {
   let [money,years] = [principal,0]
   while(money < desired){
     money = (money + (money*interest) - (money*interest*tax))
     years++
   }
  return years
}