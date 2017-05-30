'use strict';

var expect = require('chai').expect;
var app = require('../app/app');


describe('Bubble Sort', function ()
{
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

    describe('when is not number', function ()
    {
        it('should return false when "a" is not a number', function ()
        {
            expect(app.BubbleSort(['a',2,-3,4,5,1,5,56])).to.eql(false);
        });
        it('should return false when "a" is not a number', function ()
        {
            expect(app.BubbleSort(['a'])).to.eql(false);
        });
        it('should return false when "abcd" is not a number', function ()
        {
            expect(app.BubbleSort(["abcd",2,-3,4,5,1,5,56])).to.eql(false);
        });
        it('should return false when "v" is not a number', function ()
        {
            expect(app.BubbleSort([2,-3,4,"v",1,5,56])).to.eql(false);
        });
        it('should return false when "aa" and "bb" is not a number', function ()
        {
            expect(app.BubbleSort(['aa','bb'])).to.eql(false);
        });
        it('should return false when "dd" is not a number', function ()
        {
            expect(app.BubbleSort([2,-3,4,"dd",1,5,56])).to.eql(false);
        });

    });
});


