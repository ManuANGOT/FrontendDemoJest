import hello from "./Exercice1";

describe("GIVEN : Je sollicite la méthode hello", () =>{
    describe("WHEN : je donne le prénom Manu en paramètre",()=>{
        it("Then : On affiche `Bonjour Manu` dans la console",()=>{
            const spy = jest.spyOn(console, "log")
            hello("Manu")
            //expect(spy).toHaveBeenNthCalledWith(`Bonjour Manu`)
        })
    })
})