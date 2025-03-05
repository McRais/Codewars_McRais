function getDrinkByProfession(param){
  const cocktails = new Map([
  ["jabroni", "Patron Tequila"],
  ["school counselor", "Anything with Alcohol"],
  ["programmer", "Hipster Craft Beer"],
  ["bike gang member", "Moonshine"],
  ["politician", 	"Your tax dollars"],
  ["rapper", "Cristal"]
])
 return cocktails.get(param.toLowerCase()) ||"Beer"
}