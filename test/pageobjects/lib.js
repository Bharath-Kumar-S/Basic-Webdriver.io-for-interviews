const assert = require('assert');
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import help from './help'
import data from '../test-data/data';
let loc = require('./locators')

class lib {

    constructor() {

    }

    async compare_rates(element) {
        return new Promise(async (resolve, reject) => {
            await help.waitForElementVisible(element);
            let rate = await $$(element);
            let rates = [];
            rate.forEach(async (v, index) => {
                rates.push(await v.getText())
                if (index === rates.length - 1) {
                    if (rates === rates.sort())
                        resolve(true);
                    else
                        resolve(false);
                }
            })
        })
    }


    async bookticket() {

        return new Promise(async(resolve, reject) => {
            await help.setValue(loc.Homepage.from, data.search.from);
            let t1 = (data.search.from).split(" ");
            await help.click(`//span[normalize-space()='${t1[1]}']`);
            await help.setValue(loc.Homepage.to, data.search.to);
            t1 = (data.search.to).split(" ");
            await help.click(`//span[normalize-space()='${t1[1]}']`);
            await help.click(loc.Homepage.date);
            await help.click(`#fare_${data.search.date}`);
            await help.click(loc.Homepage.search);
            await help.waitForElementVisible(loc.search.results_rate);
            let result = await help.exist(loc.search.results_rate);
            if(result === true){
                return resolve(true);
            }
            else{
                return resolve(false);
            }
        })

    }

}

export default new lib();