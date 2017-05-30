/*jslint node: true */

function BubbleSort(myTable) {
    'use strict';
    for(var i=1; i<=myTable.length; i++){
        if ( typeof(myTable[i-1]) === 'string'  )
        {
            return false;
        }
    }
    var change, temp;
    do {
        change = false;
        for(var j=0; j<myTable.length-1; j++) {
            if (myTable[j+1] < myTable[j]) {
                temp = myTable[j];
                myTable[j] = myTable[j+1];
                myTable[j+1] = temp;
                change = true;
            }
        }
    } while (change);
    return myTable;
}

module.exports = {
    BubbleSort: BubbleSort
};