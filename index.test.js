const useLessModule = require("./index");

describe("Unit | Script", () => {
  it('should return "Hello from useless scripts 🚀🔝😂" ', () => {
    expect(useLessModule()).toBe("Hello from useless scripts 🚀🔝😂");
  });
});
