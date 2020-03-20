
exports.min = function min (array) {
    if (array && array.length) {
        let min = array[0];
        for (let i = 1; i < array.length; i++) {
            min = array[i] < min ? array[i] : min;   
        } 
        return min;  
    }
    return 0;
}

exports.max = function max (array) {
    if (array && array.length) {
        let max = array[0];
        for (let i = 1; i < array.length; i++) {
            max = array[i] > max ? array[i] : max;   
        } 
        return max;  
    }
    return 0;
}

exports.avg = function avg (array) {
    if (array && array.length) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        } 
        return sum / array.length;  
    }
    return 0;
}
