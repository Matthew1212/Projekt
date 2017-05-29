'use strict';

var expect = require('chai').expect;
var app = require('../app/app');


describe('when no negative numbers', function ()
{
    it('should return sort number', function ()
    {
        expect(app.BubbleSort([2,3,4,5,1,5,56])).to.eql([1,2,3,4,5,5,56]);
        expect(app.BubbleSort([2,4,4,4,4,1,22])).to.eql([1,2,4,4,4,4,22]);
    });
});

describe('when numbers with negative numbers', function ()
{
    it('should return sort number with negative numbers', function ()
    {
        expect(app.BubbleSort([-22,3,4,-5,1,5,56])).to.eql([-22,-5,1,3,4,5,56]);
        expect(app.BubbleSort([2,-3,4,5,1,5,56])).to.eql([-3,1,2,4,5,5,56]);
    });
});
