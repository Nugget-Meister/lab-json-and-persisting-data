const {
    createPlayer,
    playerList
} = require("../index.js")

const data = [];

describe("createPlayer()", () => {
    it("should return an object", () => {
        const actual = typeof createPlayer()
        const expected = "object"
        expect(actual).toStrictEqual(expected)
    })
    it("should have an id as a string", () => {
        const actual = typeof createPlayer()._id
        const expected = "string"
        expect(actual).toStrictEqual(expected)
    })
    it("should have sex be male or female", () => {
        const actual = createPlayer().sex
        const expected = ["male", "female"]
        expect(expected.includes(actual)).toStrictEqual(true)
    })
    it("should have alive as a boolean", () => {
        const actual = typeof createPlayer().alive
        const expected = "boolean"
        expect(actual).toStrictEqual(expected)
    })
    it("should have a level between 1 and 20", () => {
        const actual = createPlayer().level
        expect(actual >= 1 && actual <= 20).toStrictEqual(true)
    })
    it("should have highlight as a string", () => {
        const actual = typeof createPlayer().highlight
        const expected = "string"
        expect(actual).toStrictEqual(expected)
    })
})

describe("playerList()", () => {
    it("should create one object when given an argument of 1", () => {
        const actual = playerList(1).length
        const expected = 1
        expect(actual).toStrictEqual(expected)
    })
    it("should make multiple objects when given a number greater than 1", () => {
        const actual = playerList(14).length
        const expected = 14
        expect(actual).toStrictEqual(expected)
    })
})