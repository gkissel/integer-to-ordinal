// test/index.test.ts
import { toOrdinal } from '../src/index';

describe('toOrdinal', () => {
  it('should return the correct ordinal form in English', () => {
    expect(toOrdinal({ input: 1, language: 'en' })).toEqual('first');
    expect(toOrdinal({ input: 2, language: 'en' })).toEqual('second');
    expect(toOrdinal({ input: 3, language: 'en' })).toEqual('third');
    expect(toOrdinal({ input: 4, language: 'en' })).toEqual('fourth');
    expect(toOrdinal({ input: 5, language: 'en' })).toEqual('fifth');
  });

  it('should return the correct ordinal form in Portuguese', () => {
    expect(toOrdinal({ input: 1, language: 'pt' })).toEqual('primeiro');
    expect(toOrdinal({ input: 2, language: 'pt' })).toEqual('segundo');
    expect(toOrdinal({ input: 3, language: 'pt' })).toEqual('terceiro');
    expect(toOrdinal({ input: 4, language: 'pt' })).toEqual('quarto');
    expect(toOrdinal({ input: 5, language: 'pt' })).toEqual('quinto');
  });

  it('should throw an error for invalid inputs', () => {
    expect(() => toOrdinal({ input: -1 })).toThrow('Invalid Number');
    expect(() => toOrdinal({ input: 1000 })).toThrow('Invalid Number');
    expect(() => toOrdinal({ input: 1.5 })).toThrow('Number its not an integer');
  });
});