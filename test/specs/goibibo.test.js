import help from '../pageobjects/help';
import lib from '../pageobjects/lib'
import loc from '../pageobjects/locators';
import data from '../test-data/data';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;


describe('Goibibo test', () => {

  it('Should open goibibo Website', async () => {
    await help.url(data.Url);
    await expect(help.getTitle()).eventually.to.equal('Online flight booking, Hotels, Bus &amp; Holiday Packages at Goibibo')
  })

  it('verify if GoIbibo homepage works as expected', async () => {
    await expect(lib.check_goibibo_page()).eventually.to.equal(true);
  })

  it('Should book a ticket', async () => {
    await expect(lib.bookticket()).eventually.to.equal(true);
  })

  it('Should check if rates are listed in ascending order', async () => {
    await expect(lib.compare_rates(loc.search.results_rate)).eventually.to.equal(true);
  })

})