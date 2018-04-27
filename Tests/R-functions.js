module.exports = {
    toCelsius(num){
        return (5/9) * (num - 32)
    },
    areEven(num1, num2){
        if(num1 % 2 === 0 && num2 % 2 === 0){
            return true
        } else return false 
    },
    uniq(array) {
        let newArray = [];
        for(var i = 0; i < array.length; i++){
          console.log(newArray, newArray.indexOf(array[i]))
          if(newArray.indexOf(array[i]) === -1){
            newArray.push(array[i])
          }
        } return newArray
      },
      moveVowel(input) {
        var cons = input.replace(/[aeiou]/g, '')
        var vow = input.replace(/[^aeiou]/g, '')
        return cons + vow
      }
}