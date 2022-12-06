import bonjour from ".";

describe("Je vais tester bonjour", () => {
    it("should return 'Bonjour'", () => {
        expect(bonjour()).toBe("Bonjour");
    });
});
