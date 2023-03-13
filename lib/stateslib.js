/**
 *  stateslib.js - iob  trannslation support library
 *
 *		copyright McM1957 2023, MIT
 *
 */
// @ts-ignore

class iobStates {
    constructor() {
        this.adapter = null;
    }

    init(pAdapter) {
        this.adapter = pAdapter;
    }

    async setStatesAsync(pId, pObj) {
        let states;
        states = await this.adapter.getStatesAsync(pId);
        for (const key in states) await this.adapter.setState(key, pObj);
    }
}

module.exports = new iobStates();
