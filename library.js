/**
 *  library.js - iob support library
 *
 *		copyright McM1957 2023, MIT
 *
 */
// @ts-ignore

const iobStates = require('./lib/stateslib.js');
const iobTranslator = require('./lib/translib.js');

function iobInit(pAdapter){
    iobStates.init(pAdapter);
    iobTranslator.init(pAdapter);
}
module.exports =
    {
        iobInit,
        iobStates,
        iobTranslator
    };

