class FormsScreen {
    
    get inputField(){
        return $('~text-input')
    }

    get resultField(){
        return $('~input-text-result')
    }
    
    get dropdown(){
        return $('~Dropdown')
    }
    	
    get #switch(){
        return $('~switch')
    }
    
    get switchText(){
        return $('~switch-text')
    }
    	
    get #buttonActive(){
        return $('~button-Active')
    }

    get buttonInactive(){
        return $('~button-Inactive')
    }

    get activeMessage(){
        const activeBtnMessage = 'new UiSelector().text("This button is active").className("android.widget.TextView")'
        return $(`android=${activeBtnMessage}`)
    }

    get okBtn(){ 
        const okButton = 'new UiSelector().text("OK").className("android.widget.Button")'
        return $(`android=${okButton}`)
    }

    async typeInput(text){
        this.inputField.setValue(text)
    }

    async clickDropdown(){
        this.dropdown.click()
    }

    async selectDropdownDialog(text){
        const selection = 'new UiSelector().text("'+text+'").className("android.widget.CheckedTextView")'
        const button = await $(`android=${selection}`)
        button.click()
    }

    async clickSwitch(){
        this.#switch.click()
    }

    async clickActiveButton(){
        await driver.execute('mobile: scroll', { direction: 'down', strategy: 'accessibility id', selector: 'button-Active' })
        this.#buttonActive.click()
    }

    async clickInactiveButton(){
        await driver.execute('mobile: scroll', { direction: 'down', strategy: 'accessibility id', selector: 'button-Active' })
        this.buttonInactive.click()
    }

    async clickOK(){
        this.okBtn.click()
    }
}

module.exports = new FormsScreen