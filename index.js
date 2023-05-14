'use strict'
/**
 * 
 * @param {number} sonAge 
 * @param {number} fatherAge 
 * @returns {number} year when father was/will be twofold older than son
 */

const ageTwoFold = (sonAge, fatherAge) =>{
    let result;
    if((fatherAge - sonAge) <= 15 || sonAge <= 0) {
        return 'You entered wrong information';
    };
    const years = (fatherAge - sonAge) * 2;
    if(years >= 0) {
        return years
    };
    if(years <= 0) {
        return `Was ${-years} ago`
    }
  
}
const fatherAge = 50;
const sonAge = 30;

const result = ageTwoFold(sonAge, fatherAge);
console.log(result);
        

            
 