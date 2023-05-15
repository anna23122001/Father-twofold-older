'use strict'
/**
 * 
 * @param {number} sonAge 
 * @param {number} fatherAge 
 * @returns {number} year when father was/will be twofold older than son
 */

const ageTwoFold = (sonAge, fatherAge) =>{
    if((fatherAge - sonAge) <= 15 || sonAge < 0) {
        return 'You entered wrong information';
    };

    let result = 0;
    while (sonAge * 2 < fatherAge) {
        fatherAge++;
        sonAge++;
        result++;
    };
  return result;
}
const fatherAge = 60;
const sonAge = 15;

const years = ageTwoFold(sonAge, fatherAge);
console.log(`Через ${years} лет отец будет вдвое старше сына.`);
        

            
 