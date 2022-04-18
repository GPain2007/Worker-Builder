const Manager = require("../lib/Manager");

test("creates employee object", () => {
  const employee = new Manager("dave", "", null, "Manager", "");

  expect(employee.name).toBe("dave");
  expect(employee.email).toBe("");
  expect(employee.getID()).toBe("please enter a valid id number");
  expect(employee.role).toBe("Manager");
});

test("get a new name", () => {
  const employee = new Manager("dave");
  let name = employee.getName();
  expect(name).toBe("dave");
});
test("get Office Number", () => {
  const employee = new Manager("dave", "", null, "Manager", "");
  let officeNumber = employee.getOfficeNumber();
  expect(officeNumber).toBe("");
});
