"use strict";

/**
 * @return {Object} object in which generate allowed chars
 */
module.exports =function AllowedChars(){
    var arrayAllowedCharsBegin=[];
    var arrayAllowedCharsOthers=['-','_'];

    for (var i = 48; i <= 57; i++) {
        arrayAllowedCharsOthers.push(String.fromCharCode(i));
    }

    for (var i = 97; i <= 122; i++) {
        arrayAllowedCharsBegin.push(String.fromCharCode(i));
        arrayAllowedCharsOthers.push(String.fromCharCode(i));
    }

    return {
        arrayBegin:arrayAllowedCharsBegin,
        arrayOthers:arrayAllowedCharsOthers,
        Choose:function(position){
            if(position==0){
                return arrayAllowedCharsBegin;
            }else
                return arrayAllowedCharsOthers;
        }
    }
};