"use strict";

var expect = require('chai').expect;
var obfuscator = require('./../modules/Obfuscator.js');
var frequency = require('./../modules/Frequency.js');
var allowedChars = require('./../modules/AllowedChars.js');
var permutationsWithRepetition = require('./../modules/PermutationsWithRepetition.js');

describe('#Obfuscator', function() {
    it('Frequency', function () {
        var data = ['asqq', 'qwww', 'asqq', 'vvf', 'vvf', 'vvf', 'gg'],
            expectJson = {
                'asqq': 2,
                'qwww': 1,
                'vvf': 3,
                'gg': 1
            };

        var result = frequency(data);
        expect(result).to.deep.equal(expectJson);
    });
    it('AllowedChars begin', function () {
          var  expectJson = 26;

        var result = allowedChars().arrayBegin.length;
        expect(result).to.deep.equal(expectJson);
    });
    it('AllowedChars others', function () {
        var  expectJson = 38;

        var result = allowedChars().arrayOthers.length;
        expect(result).to.deep.equal(expectJson);
    });
    it('PermutationsWithRepetition', function () {
        var data = ['a', 'b', 'c', 'd'],
            expectJson = ['a','a','a'];
        var result = permutationsWithRepetition(data,3).next();
        expect(result).to.deep.equal(expectJson);
    });
    it('mini Obfuscate', function () {
        var data = ['asqq', 'qwww', 'asqq', 'vvf', 'vvf', 'vvf', 'gg'],
            expectJson = {vvf: 'a', asqq: 'b', gg: 'c', qwww: 'd'};
        var result = obfuscator(data);
        expect(result).to.deep.equal(expectJson);
    });
    it('Obfuscate', function () {
        var data = require('./data.json');
        var expectJson = require('./result.json');
        var result = obfuscator(data);
        expect(result).to.deep.equal(expectJson);
    });
});