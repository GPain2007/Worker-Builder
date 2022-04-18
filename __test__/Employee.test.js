const Employee = require("../lib/Employee");

test("creates employee object", () => {
  const employee = new Employee("dave", "", null, "Manager");
  let role = employee.role;
  expect(employee.name).toBe("dave");
  expect(employee.email).toBe("");
  expect(employee.getID()).toBe("please enter a valid id number");
  expect(role).toBe(role);
});

test("get a new name", () => {
  const employee = new Employee("dave");
  let name = employee.getName();
  expect(name).toBe("dave");
});

test("get a new email", () => {
  const employee = new Employee("dave", "");
  let email = employee.getEmail();
  expect(email).toBe("please enter a valid email");
});

test("get a new id", () => {
  const employee = new Employee("dave", "", null);
  let id = employee.getID();
  expect(id).toBe("please enter a valid id number");
});

test("get a new id", () => {
  const employee = new Employee("dave", "", -1);
  let id = employee.getID();
  expect(id).toBe("please enter a valid id number");
});

test("get a new id", () => {
  const employee = new Employee("dave", "", "");
  let id = employee.getID();
  expect(id).toBe("please enter a valid id number");
});

test("get a new role", () => {
  const employee = new Employee("dave", "", null, null);
  let role = employee.getRole();
  expect(role).toBe("Employee");
});
