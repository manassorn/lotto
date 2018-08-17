const {Builder, By} = require('selenium-webdriver');

class ScbEasyNet {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.driver = new Builder().forBrowser('chrome').build()
    }

    async findAccBalance(accNo) {
        await this.driver.navigate().refresh();
        let currentUrl = await this.driver.getCurrentUrl();
        if (currentUrl == 'https://www.scbeasy.com/online/easynet/page/acc/acc_bnk_bln.aspx') {
            const balance = await this.getTextBalance();
            return balance;
        }
        await this.goToViewAccPage(accNo)
        const balance = await this.getTextBalance();
        return balance;
    }

    async goToViewAccPage(accNo) {
        await this.gotoLandingPage();
        await this.login();
        await this.clickMyPage();
        await this.clickViewAcc(accNo);
    }

    gotoLandingPage() {
        return this.driver.get('https://www.scbeasy.com/v1.4/site/presignon/index.asp');
    }

    async login() {
        await this.driver.findElement(By.name('LOGIN')).sendKeys(this.username);
        await this.driver.findElement(By.name('PASSWD')).sendKeys(this.password);
        return this.driver.findElement(By.name('lgin')).click();
    }

    clickMyPage() {
        return this.driver.findElement(By.xpath('//a[@onclick="LoadHM(\'1\',\'acc/acc_mpg.aspx\')"]')).click()
    }

    clickViewAcc(accNo) {
        accNo = 'XXXX' + accNo.slice(-6)	//XXXX142382
        const xpath = `//a[contains(text(), "${accNo}") and starts-with(@id, "DataProcess_SaCaGridView_SaCa_LinkButton_")]`
        return this.driver.findElement(By.xpath(xpath)).click()
    }

    async getTextBalance() {
        // TODO - this is not sure
        const elems = await this.driver.findElements(By.css(".hd_th_blk11_bld"));
        const balance = await elems[1].getText();
        return parseFloat(balance.split(',').join(''));
    }

    /*
     TODO-
     async capture(filename, dir = this.ssDir) {
     const image = await this.driver.takeScreenshot();
     const imagePath = path.format({
     dir: dir,
     name: filename,
     ext: '.png'
     });
     fs.writeFile(imagePath, image, 'base64', (err) => {
     if(err) logger.error(err);
     });
     }
     */

}

module.exports = ScbEasyNet;