/*jslint node: true */

function BubbleSort(myTable) {
    'use strict';
    for(var i=0; i<myTable.length-1; i++){
        if ( typeof(myTable[i]) === 'string'  )
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
