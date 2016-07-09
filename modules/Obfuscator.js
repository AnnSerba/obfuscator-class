"use strict";

var frequency = require('./Frequency.js');
var generateAllowedChars = require('./AllowedChars.js');
var permutationsWithRepetition=require('./PermutationsWithRepetition.js');

/**
 * @param {Array} data
 * @return {object} obj
 */
module.exports = function Obfuscator (data) {

    //generate unique string and frequency of occurrence a string
   var objectFrequency=frequency(data);

    //sorted unique string and reverse
    var arraySortedReverse = Object.keys(objectFrequency)
        .sort(function (a, b) {
            return objectFrequency[a] - objectFrequency[b]
        })
        .reverse();

    //generate allowed chars in new name classes
    var allowedChars=generateAllowedChars();

    //generate begin char in new names classes
    var objectResult={};
    arraySortedReverse.forEach(
        function(item,iter){
            objectResult[item]=allowedChars.arrayBegin[iter % allowedChars.arrayBegin.length];
        }
    );

    //generate others chars in new names classes
    var countChars=1;
    var permutations = permutationsWithRepetition(allowedChars.arrayOthers, countChars);
    arraySortedReverse.forEach(function(item,iter){
        if(iter>=allowedChars.arrayBegin.length) {
            var nextPermutations = permutations.next();
            if (!nextPermutations) {
                countChars++;
                permutations = permutationsWithRepetition(allowedChars.arrayOthers, countChars);
                nextPermutations = permutations.next();
            }
            objectResult[item] += nextPermutations.join('');
        }
    });
    return objectResult;
};
