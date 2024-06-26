import { getUserById } from '../../src/js-fundation/03-callbacks';


describe('js-fundation/03-callbacks.ts', () => {
    test('getUserById should return an error if does not exist', ( done ) => {
        const id = 10;
        getUserById(id, (err, user) => {

            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();

            done();

        });
    });
    test('getUserById should return John Doe', ( done ) => {
        const id = 1;
        getUserById(id, (err, user) => {

            expect(err).toBeUndefined;
            expect(user).toEqual({
                id: 1,
                name: 'John Doe',
            });

            done();

        });
    });
});