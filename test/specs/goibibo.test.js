import help from '../pageobjects/help';
import lib from '../pageobjects/lib'
import loc from '../pageobjects/locators';
import data from '../test-data/data';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;


describe('Goibibo test - Verify if GoIbibo homepage (https://www.goibibo.com) works as expected', () => {

  it('Should open goibibo Website', async () => {
    await help.url(data.Url);
    await expect(help.getTitle()).eventually.to.equal('Online flight booking, Hotels, Bus &amp; Holiday Packages at Goibibo')
  })

  it('verify if GoIbibo homepage works as expected', async () => {
    await expect(lib.check_goibibo_page()).eventually.to.equal(true);
  })

})


describe(`Goibibo test - Should be able to search for one-way flights between ${data.search.from} and ${data.search.to}`, () => {

  it('Should open goibibo Website', async () => {
    await help.url(data.Url);
    await expect(help.getTitle()).eventually.to.equal('Online flight booking, Hotels, Bus &amp; Holiday Packages at Goibibo')
  })

  it(`Should book a ticket between ${data.search.from} and ${data.search.to}`, async () => {
    await expect(lib.bookticket()).eventually.to.equal(true);
  })

})

describe('Goibibo test - should be able to verify if the page results are ordered in decreasing order of cost',()=>{

  it('Should open goibibo Website', async () => {
    await help.url(data.Url);
    await expect(help.getTitle()).eventually.to.equal('Online flight booking, Hotels, Bus &amp; Holiday Packages at Goibibo')
  })

  it(`Should book a ticket between ${data.search.from} and ${data.search.to}`, async () => {
    await expect(lib.bookticket()).eventually.to.equal(true);
  })

  it('Should check if rates are listed in ascending order', async () => {
    await expect(lib.compare_rates(loc.search.results_rate)).eventually.to.equal(true);
  })

})
  describe('Goibibo test - should be able to verify if the page results are ordered in decreasing order of cost',()=>{

    it('Should open goibibo Website', async () => {
      await help.url(data.Url);
      await expect(help.getTitle()).eventually.to.equal('Online flight booking, Hotels, Bus &amp; Holiday Packages at Goibibo')
    })
  
    it(`Should book a ticket between ${data.search.from} and ${data.search.to} with low rates in ${data.search.Month}`, async () => {
      await expect(lib.bookticket_Lowest_fares()).eventually.to.equal(true);
    })
  
    // it('Should check if rates are listed in ascending order', async () => {
    //   await expect(lib.compare_rates(loc.search.results_rate)).eventually.to.equal(true);
    // })
  


})
