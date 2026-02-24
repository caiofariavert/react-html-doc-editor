import { compileToCustomHTML } from '../htmlCompiler.js';
describe('htmlCompiler utilities', () => {
    it('should have compileToCustomHTML function', () => {
        expect(typeof compileToCustomHTML).toBe('function');
    });
    it('should return a string', () => {
        const result = compileToCustomHTML({});
        expect(typeof result).toBe('string');
    });
    it('should return HTML with template syntax', () => {
        const result = compileToCustomHTML({});
        expect(result).toContain('{{');
        expect(result).toContain('}}');
    });
});
