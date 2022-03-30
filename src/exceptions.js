class TabNotOpen extends Error {
    constructor() {
        super(message)
        this.name = 'TabNotOpenError'
        this.message = 'a tab should be opened before placing an order'
    }
}

module.exports = TabNotOpen;