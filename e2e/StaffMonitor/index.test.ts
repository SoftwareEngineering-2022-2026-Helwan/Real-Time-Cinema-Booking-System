import {expect,describe, jest, it} from '@jest/globals';
import random  from 'random';

describe('random', () => {
    it.skip('should work', () => {
        expect(1).toEqual(1);
    });

    it('should validate number between 1 and 47', () => {
        
        let num = random.int(0, 47);

        expect(num).toBeGreaterThanOrEqual(1);
        expect(num).toBeLessThanOrEqual(47); 
    })
});
