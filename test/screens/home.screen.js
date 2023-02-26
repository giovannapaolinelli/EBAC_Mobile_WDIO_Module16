class HomeScreen {
    get #forms(){
        return $('~Forms')
    }

    async clickForms(){
        this.#forms.click()
    }
}

module.exports = new HomeScreen