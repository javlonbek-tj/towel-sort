// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    return matrix
        .map((m, i) => {
            if (i % 2 === 0) {
                return m;
            } else {
                return m.reverse();
            }
        })
        .flat();
};
