const { getPort } = require("./free-port");

describe("getPort", () => {
  let logSpy;

  beforeAll(() => {
    // Redirigir la salida de console.log
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    // Restaurar la salida de console.log
    logSpy.mockRestore();
  });

  test("should accept a number as an argument", async () => {
    await expect(getPort(8080)).resolves.not.toThrow();
  });
});
