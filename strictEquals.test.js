function strictEquals(a, b) {
    if (isNaN(a) && isNaN(b)) {
        return false;
    }
    a = Math.abs(a);
    b = Math.abs(b);

    return Object.is(a, b);
}

describe('function strictEquals', function() {
    test('when function strictEquals recives 1 and 1, it returns true', () => {
        const n1 = 1;
        const n2 = 1;
        const expected = true;
        const result = strictEquals(n1, n2);
        expect(result).toBe(expected);
    });

    test('when function strictEquals recives 1 and "1", it returns false', () => {
        const n1 = 1;
        const n2 = "1";
        const expected = false;
        const result = strictEquals(n1, n2);
        expect(result).toBe(expected);
    });

    test('when function strictEquals recives true and false, it returns false', () => {
        const n1 = true;
        const n2 = false;
        const expected = false;
        const result = strictEquals(n1, n2);
        expect(result).toBe(expected);
    });

    test('when function strictEquals recives false and false, it returns true', () => {
        const n1 = false;
        const n2 = false;
        const expected = true;
        const result = strictEquals(n1, n2);
        expect(result).toBe(expected);
    });

    test('when function strictEquals recives "Water" and "oil", it returns false', () => {
        const n1 = "Water";
        const n2 = "oil";
        const expected = false;
        const result = strictEquals(n1, n2);
        expect(result).toBe(expected);
    });

    test('when function strictEquals recives NaN and NaN, it returns false', () => {
        const n1 = NaN;
        const n2 = NaN;
        const expected = false;
        const result = strictEquals(n1, n2);
        expect(result).toBe(expected);
    });

    test('when function strictEquals recives 0 and -0, it returns true', () => {
        const n1 = 0;
        const n2 = -0;
        const expected = true;
        const result = strictEquals(n1, n2);
        expect(result).toBe(expected);
    });

    test('when function strictEquals recives -0 and 0, it returns true', () => {
        const n1 = -0;
        const n2 = 0;
        const expected = true;
        const result = strictEquals(n1, n2);
        expect(result).toBe(expected);
    });

});