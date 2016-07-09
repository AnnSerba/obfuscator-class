/**
 * @param {Array} src - allowed chars
 * @param {Number} len - length generate chars
 * @throws param src and len need len>=src.length
 * @return {Object}
 */
module.exports = function PermutationsWithRepetition(src, len){

    if(len>=src.length){
        throw new Error("need len>= src.length")
    }
    var i = 0,
        j = 0,
        out = [],
        stack = [];

    function next(){
        while (true) {
            while (j < src.length) {
                out[i] = src[j++];
                if (i == len - 1) return out.slice(0);
                else {
                    if (j < src.length) {
                        stack.push(i);
                        stack.push(j);
                    }
                    i++;
                    j = 0;
                }
            }
            if (stack.length == 0) break;

            j = stack.pop();
            i = stack.pop();
        }
        return false;
    }

    function rewind(){ i = 0; j = 0; out = []; stack = []; }

    function each(cb) {
        rewind();
        var v;
        while (v = next()) if (cb(v) === false) return;
    }

    return {
        next: next,
        each: each,
        rewind: rewind
    };
}