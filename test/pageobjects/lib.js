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
                if (index == rate.length - 1) {
                    if (rates === rates.sort()) {
                        console.log(`${index} : ${rates}`);
                        resolve(true);
                    }
                    else
                        resolve(false);
                }
            })
        })
    }


    async bookticket() {

        return new Promise(async (resolve, reject) => {
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
            if (result === true) {
                return resolve(true);
            }
            else {
                return resolve(false);
            }
        })

    }

    async check_goibibo_page() {
        return new Promise(async (resolve, reject) => {
            await help.isexisting(loc.Homepage.from)
            await help.isexisting(loc.Homepage.to)
            await help.isexisting(loc.Homepage.date)
            await help.isexisting(loc.Homepage.search)
            await help.isexisting(loc.Homepage.roundtrip_btn)
            await help.isexisting(loc.Homepage.oneway_btn)
            await help.isexisting(loc.Homepage.multiCity_btn)
            await help.isexisting(loc.Homepage.returndate)
            await help.isexisting(loc.Homepage.categ)
            let a = await this.swap_destination_source()
            return resolve(a);
        })
    }

    async bookticket_Lowest_fares() {

        return new Promise(async (resolve, reject) => {
            await help.setValue(loc.Homepage.from, data.search.from);
            let t1 = (data.search.from).split(" ");
            await help.click(`//span[normalize-space()='${t1[1]}']`);
            await help.setValue(loc.Homepage.to, data.search.to);
            t1 = (data.search.to).split(" ");
            await help.click(`//span[normalize-space()='${t1[1]}']`);
            await help.click(loc.Homepage.date);
            let Month_visible = await help.isexisting(`#fare_${data.search.Month}`);
            if (Month_visible === false) {
                await help.click(loc.Homepage.Next_Month_btn);
            }
            else {
                let rates_along_dates = {};
                // rates_along_dates['date'] = 2001;

                let a = await browser.$$(loc.Homepage.rates);
                a.forEach();



            }

        });

    }

    async swap_destination_source() {
        return new Promise(async (resolve, reject) => {
            await help.setValue(loc.Homepage.from, data.search.from);
            let t1 = (data.search.from).split(" ");
            await help.click(`//span[normalize-space()='${t1[1]}']`);
            await help.setValue(loc.Homepage.to, data.search.to);
            t1 = (data.search.to).split(" ");
            await help.click(`//span[normalize-space()='${t1[1]}']`);
            await help.click(loc.Homepage.date);
            await help.click(`#fare_${data.search.date}`);
            let src = await help.gettext(loc.Homepage.from);
            let des = await help.gettext(loc.Homepage.to);
            await help.click(loc.Homepage.change_src_dest_btn);
            let src1 = await help.gettext(loc.Homepage.from);
            let des1 = await help.gettext(loc.Homepage.to);
            if ((src == des1) && (des == src1)) {
                return resolve(true);
            }
            else {
                return resolve(false);
            }
        })
    }

}

export default new lib();