import { parseDatasetTable } from '../datasetUtils';

describe('datasetUtils utilities', () => {
  it('should have parseDatasetTable function', () => {
    expect(typeof parseDatasetTable).toBe('function');
  });

  it('should return a string', () => {
    const result = parseDatasetTable({});
    expect(typeof result).toBe('string');
  });

  it('should return HTML with table tag', () => {
    const result = parseDatasetTable({});
    expect(result).toContain('<table>');
    expect(result).toContain('</table>');
  });

  it('should contain dataset template syntax', () => {
    const result = parseDatasetTable({});
    expect(result).toContain('{{');
    expect(result).toContain('}}');
  });
});
