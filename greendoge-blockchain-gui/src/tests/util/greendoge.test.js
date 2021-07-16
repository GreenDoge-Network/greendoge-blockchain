const greendoge = require('../../util/greendoge');

describe('greendoge', () => {
  it('converts number dog to greendoge', () => {
    const result = greendoge.dog_to_greendoge(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string dog to greendoge', () => {
    const result = greendoge.dog_to_greendoge('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number dog to greendoge string', () => {
    const result = greendoge.dog_to_greendoge_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string dog to greendoge string', () => {
    const result = greendoge.dog_to_greendoge_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number greendoge to dog', () => {
    const result = greendoge.greendoge_to_dog(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string greendoge to dog', () => {
    const result = greendoge.greendoge_to_dog('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number dog to colouredcoin', () => {
    const result = greendoge.dog_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string dog to colouredcoin', () => {
    const result = greendoge.dog_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number dog to colouredcoin string', () => {
    const result = greendoge.dog_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string dog to colouredcoin string', () => {
    const result = greendoge.dog_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to dog', () => {
    const result = greendoge.colouredcoin_to_dog(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to dog', () => {
    const result = greendoge.colouredcoin_to_dog('1000');

    expect(result).toBe(1000000);
  });
});
