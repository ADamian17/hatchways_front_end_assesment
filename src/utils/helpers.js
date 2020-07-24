export const getAverage = ( arr ) => {
    if (arr <= 0 ) return;
    let result = 0;

    for (let index of arr ) {
        result += parseInt(index);
    }

    return result / arr.length; 
};
