import { get } from 'http';
import { getId } from '../../src/plugins/get-id.plugin';

describe('plugins/get-id.plugin.ts', () => {
    
    test('getId() should return an ID', () => {
        const id = getId();

        expect(typeof id).toBe('string');
        expect(id.length).toBe(36);
    })
})