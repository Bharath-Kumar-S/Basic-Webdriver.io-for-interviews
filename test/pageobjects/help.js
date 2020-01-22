const assert = require('assert');
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

class helpers {

    constructor() {

    }

    async setwindow(widthXheight) {
        const [width, height] = widthXheight.split('x')
        await browser
            .manage()
            .window()
            .setSize(parseInt(width), parseInt(height))
    }


    //final code
    async setValue(element, text) {
        await this.waitForElementEditable(element, 10000)
        let a = await browser.$(element);
        a.clearValue()
        a.setValue(text)
    }


    //final code
    async click(element) {
        await this.waitForElementVisible(element, 10000)
        let a = await browser.$(element);
        a.click();
    }

    async gettext(element) {
        let a = await browser.$(element);
        return a.getText();
    }

    async getTitle() {
        return await browser.getTitle();
    }

    async url(element) {
        await browser.url(element);
    }

    async keys(element) {
        await browser.keys(element);
    }

    //final
    async check_radio_box(element) {
        let a = await browser.$(element);
        a.click();
    }

    //final
    async check_selected(element) {
        let a = await browser.$(element);
        let selected = await a.isSelected();
        if (selected === true) {
            return true;
        } else {
            assert.fail('selected');
        }
    }

    //final
    async waitForElementPresent(element, timeout) {
        let t = timeout || `5000`;
        const notification = await browser.$(element);
        await notification.waitForExist(t);
    }

    async waitForElementNotPresent(element, timeout) {
        let t = timeout || `5000`;
        const notification = await browser.$(element);
        await notification.waitForExist(t, true);
    }

    //final
    async check_unselected(element) {
        let a = await browser.$(element);
        let selected = await a.isSelected();
        if (selected === false) {
            return true;
        } else {
            assert.fail('selected');
        }
    }

    //final
    async assertText(element, text) {
        let elem = await browser.$(element);
        let r = await elem.getText()
        expect(r).to.equal(text);

    }

    async selectByVisibleText(element, value) {
        const selectBox = await browser.$(element);
        await selectBox.selectByVisibleText(value);
    }


    async selectByAttribute(element, t) {
        const selectBox = await browser.$(element);
        await selectBox.selectByAttribute('value', t);
    }

    async assertSelectedValue(element, value) {
        let a = await browser.$(`[value="${value}"]`);
        let selected = await a.isSelected();
        assert.strictEqual(selected, true);
    }

    async assertNotSelectedValue(element, value) {
        let a = await browser.$(`[value="${value}"]`);
        let selected = await a.isSelected();
        assert.strictEqual(selected, false);
    }

    async assertSelectedLabel(element, value) {
        let a = await browser.$(`//*[contains(text(),'${value}')]`);
        let selected = await a.isSelected();
        assert.strictEqual(selected, true);
    }

    async assertNotSelectedLabel(element, value) {
        let a = await browser.$(`//*[contains(text(),'${value}')]`);
        let selected = await a.isSelected();
        assert.strictEqual(selected, false);
    }

    //final
    async setFramebyindex(id) {
        let i = 0;
        do {
            await browser.switchToFrame(i);
            id--;
            i++;
        } while (id >= 0)
    }

    async submit(element) {
        await browser.elementSubmit(element);
    }

    async exist(element) {
        let a = await browser.$(element);
        let exist = await a.isExisting();
        return exist;
    }

    async isexisting(element) {
        let a = await browser.$(element);
        let exist = await a.isExisting();
        return exist;
        // expect(exist).to.equal(true)
    }

    async is_notexisting(element) {
        let a = await browser.$(element);
        let exist = await a.isExisting();
        expect(exist).to.equal(false)
    }

    async assertEditable(element) {
        let a = await browser.$(element);
        let exist = await a.isEnabled();
        expect(exist).to.equal(true)
    }

    async assertNotEditable(element) {
        let a = await browser.$(element);
        let exist = await a.isEnabled();
        expect(exist).to.equal(false)
    }

    async waitForElementEditable(element, timeout) {
        let t = timeout || `5000`;
        const notification = await browser.$(element);
        await notification.waitForEnabled(t);
    }

    async waitForElementNotEditable(element, timeout) {
        let t = timeout || `5000`;
        const notification = await browser.$(element);
        await notification.waitForEnabled(t, true);
    }

    async waitForElementVisible(element, timeout) {
        let t = timeout || `5000`;
        const notification = await browser.$(element);
        await notification.waitForDisplayed(t);
    }

    async waitForElementNotVisible(element, timeout) {
        let t = timeout || `5000`;
        const notification = await browser.$(element);
        await notification.waitForDisplayed(t, true);
    }

}

export default new helpers();