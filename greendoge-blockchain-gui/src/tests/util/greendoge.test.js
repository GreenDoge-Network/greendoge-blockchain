const greendoge = require("../../util/greendoge");

describe("greendoge", () => {
  it("converts number mojo to greendoge", () => {
    const result = greendoge.mojo_to_greendoge(1000000);

    expect(result).toBe(0.000001);
  });
  it("converts string mojo to greendoge", () => {
    const result = greendoge.mojo_to_greendoge("1000000");

    expect(result).toBe(0.000001);
  });
  it("converts number mojo to greendoge string", () => {
    const result = greendoge.mojo_to_greendoge_string(1000000);

    expect(result).toBe("0.000001");
  });
  it("converts string mojo to greendoge string", () => {
    const result = greendoge.mojo_to_greendoge_string("1000000");

    expect(result).toBe("0.000001");
  });
  it("converts number greendoge to mojo", () => {
    const result = greendoge.greendoge_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it("converts string greendoge to mojo", () => {
    const result = greendoge.greendoge_to_mojo("0.000001");

    expect(result).toBe(1000000);
  });
  it("converts number mojo to colouredcoin", () => {
    const result = greendoge.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it("converts string mojo to colouredcoin", () => {
    const result = greendoge.mojo_to_colouredcoin("1000000");

    expect(result).toBe(1000);
  });
  it("converts number mojo to colouredcoin string", () => {
    const result = greendoge.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe("1,000");
  });
  it("converts string mojo to colouredcoin string", () => {
    const result = greendoge.mojo_to_colouredcoin_string("1000000");

    expect(result).toBe("1,000");
  });
  it("converts number colouredcoin to mojo", () => {
    const result = greendoge.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it("converts string colouredcoin to mojo", () => {
    const result = greendoge.colouredcoin_to_mojo("1000");

    expect(result).toBe(1000000);
  });
});
