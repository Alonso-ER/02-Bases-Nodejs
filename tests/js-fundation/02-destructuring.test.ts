import { characters } from "../../src/js-fundation/02-destructuring";


describe('js-fundation/02/destructuring.ts', () => {
    test('characters should containt Flash, Superman', () => {

        expect(characters).toContain('Flash');
        expect(characters).toContain('Superman');
    });    

    test('first character should be Flash, and Second Superman', () => {

        const [flash, superman] = characters;

        expect(flash).toBe('Flash');
        expect(superman).toBe('Superman');
    })
})

