const Intern = require("../lib/Intern");

test("creates employee object", () => {
  const employee = new Intern("dave", "", null, "Manager", "");

  expect(employee.name).toBe("dave");
  expect(employee.email).toBe("");
  expect(employee.getID()).toBe("please enter a valid id number");
  expect(employee.role).toBe("Manager");
});

test("get a new name", () => {
  const employee = new Intern("dave");
  let name = employee.getName();
  expect(name).toBe("dave");
});
test("get School name", () => {
  const employee = new Intern("dave", "", null, "Manager", "");
  let school = employee.getSchool();
  expect(school).toBe("");
});
