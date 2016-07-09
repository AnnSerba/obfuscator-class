/**
 * @param {Array} data - array in which the values are not unique strings
 * @return {Object} object in which the keys - unique string and values - the frequency of occurrence a string
 */
module.exports =function Frequency(data) {
    var frequency={};
    data.forEach(function(item){
        if(!frequency[item])
            frequency[item] = 1;
        else frequency[item]++;
    });
    return frequency;
};