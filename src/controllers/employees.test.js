const controllerEmployees = require("./employees");
const serviceEmployee = require("../services/employees");

describe("delete employee", () => {
  let spiedMethod;

  beforeAll(() => {
    spiedMethod = jest.spyOn(serviceEmployee, "deleteS");
  });

  afterEach(() => {
    spiedMethod.mockReset();
  });

  it("controller should return deleted employee if it gets existed id", async () => {
    const req = { params: { id: "2565656565" } };
    const res = { json: jest.fn() };
    const mockedData = { name: "Viktor", surname: "Radchenko" };

    spiedMethod.mockResolvedValue(mockedData);

    await controllerEmployees.deleteEmployee(req, res);

    const response = res.json.mock.calls[0][0];
    expect(spiedMethod).toHaveBeenCalled();
    expect(spiedMethod).toHaveBeenCalledWith(req.params.id);
    expect(res.json).toHaveBeenCalled();
    expect(response.deletedEmployee).toBe(mockedData);
  });

  it('controller should return status 404 and message "Not found"', async () => {
    const req = { params: { id: "25656565657" } };
    const json = { json: jest.fn() };
    const res = { status: jest.fn().mockReturnValue(json) };

    spiedMethod.mockResolvedValue(null);

    await controllerEmployees.deleteEmployee(req, res);

    expect(spiedMethod).toHaveBeenCalled();
    expect(spiedMethod).toHaveBeenCalledWith(req.params.id);
    expect(res.status).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(404);
    expect(json.json).toHaveBeenCalled();
    expect(json.json).toHaveBeenCalledWith({ message: "Not found" });
  });
});
