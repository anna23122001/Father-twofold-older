'use strict'
/**
 * 
 * @param {number} sonAge 
 * @param {number} fatherAge 
 * @returns {number} year when father was/will be twofold older than son
 */

const ageTwoFold = (sonAge, fatherAge) =>{
    let result = 0;
    if((fatherAge - sonAge) <= 15 || sonAge <= 0) {
        return 'You entered wrong information';
    };
    if(fatherAge / sonAge === 2){
        return result;
    }

   if (fatherAge / sonAge > 2){
    while (fatherAge / sonAge !== 2){
        fatherAge++;
        sonAge++;
        result++;
    }
    return result;
   }
    while (fatherAge / sonAge !== 2) {
        fatherAge--;
        sonAge--;
        result++;
    };
  return -result;
}
const fatherAge = 48;
const sonAge = 25;

const years = ageTwoFold(sonAge, fatherAge);
console.log(years);
        

            
 