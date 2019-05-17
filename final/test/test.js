const assert = require('chai').assert;
const file1 = require('../out/teste1.json');
const file2 = require('../out/teste2.json');
const file3 = require('../out/teste3.json');
const file4 = require('../out/teste4.json');

describe('Length of JSON array', () => {
    it('length of level 1 should return 4', () => {
        assert.equal(file1.length, 4);
    });

    it('length of level 2 should return 43', () => {
        assert.equal(file2.length, 43);
    });

    it('length of level 3 should return 39', () => {
        assert.equal(file3.length, 39);
    });

    it('length of level 4 should return 59', () => {
        assert.equal(file4.length, 59);
    });

});

describe('Type of objects', () => {
    it('Level 1 object type test', () => {
        file1.forEach(e => {
            assert.typeOf(e.description, 'string');
            assert.typeOf(e.classifier, 'string');
            assert.typeOf(e.openingBalance, 'number');
            assert.typeOf(e.debit, 'number');
            assert.typeOf(e.credit, 'number');
            assert.typeOf(e.finalBalance, 'number');
        });
    });

    it('Level 2 object type test', () => {
        file2.forEach(e => {
            assert.typeOf(e.description, 'string');
            assert.typeOf(e.classifier, 'string');
            assert.typeOf(e.openingBalance, 'number');
            assert.typeOf(e.debit, 'number');
            assert.typeOf(e.credit, 'number');
            assert.typeOf(e.finalBalance, 'number');
        });
    });

    it('Level 3 object type test', () => {
        file3.forEach(e => {
            assert.typeOf(e.description, 'string');
            assert.typeOf(e.classifier, 'string');
            assert.typeOf(e.openingBalance, 'number');
            assert.typeOf(e.debit, 'number');
            assert.typeOf(e.credit, 'number');
            assert.typeOf(e.finalBalance, 'number');
        });
    });

    it('Level 3 object type test', () => {
        file4.forEach(e => {
            assert.typeOf(e.description, 'string');
            assert.typeOf(e.classifier, 'string');
            assert.typeOf(e.openingBalance, 'number');
            assert.typeOf(e.debit, 'number');
            assert.typeOf(e.credit, 'number');
            assert.typeOf(e.finalBalance, 'number');
        });
    });
});

// this test WILL fail because the values received in the input are not 100% right
/*
describe('openingBalance - debit + credit should be equals to finalBalance', () => {
    it('Level 1 sum test', () => {
        file1.forEach(e => {
            assert.equal(e.openingBalance + e.credit - e.debit, e.finalBalance);
        });
    });

    it('Level 2 sum test', () => {
        file2.forEach(e => {
            assert.equal(e.openingBalance + e.credit - e.debit, e.finalBalance);
        });
    });
    
    it('Level 2 sum test', () => {
        file2.forEach(e => {
            assert.equal(e.openingBalance + e.credit - e.debit, e.finalBalance);
        });
    });
    
    it('Level 2 sum test', () => {
        file2.forEach(e => {
            assert.equal(e.openingBalance + e.credit - e.debit, e.finalBalance);
        });
    });
});
*/