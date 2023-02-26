const formsScreen = require("../screens/forms.screen");
const homeScreen = require("../screens/home.screen");

describe('Preencher menu forms', () => {
    it('Acessar o menu forms', async () => {
        await homeScreen.clickForms()
        await expect(formsScreen.inputField)
    });  

    it('Inserir texto', async () => {
        await homeScreen.clickForms()
        await formsScreen.typeInput('Teste')
        await expect(formsScreen.resultField).toHaveText('Teste')
    }); 
    
    it('Ligar switch', async () => {
        await homeScreen.clickForms()
        await formsScreen.clickSwitch()
        await expect(formsScreen.switchText).toHaveText('Click to turn the switch OFF')
    });

    it('Selecionar Dropdown', async () => {
        await homeScreen.clickForms()
        await formsScreen.clickDropdown()
        await formsScreen.selectDropdownDialog('webdriver.io is awesome')
        const selection = 'new UiSelector().text("webdriver.io is awesome").className("android.widget.CheckedTextView")'
        const text = await $(`android=${selection}`)
        await expect(text).toBeDisplayed()
    });  

    it('Clicar botão inactive', async () => {
        await homeScreen.clickForms()
        await formsScreen.clickInactiveButton()
        await expect(formsScreen.buttonInactive).toBeDisplayed()
    });

    it('Clicar botão active', async () => {
        await homeScreen.clickForms()
        await formsScreen.clickActiveButton()
        await expect(formsScreen.activeMessage).toHaveText('This button is active')
        await formsScreen.okBtn.click()
    });
});