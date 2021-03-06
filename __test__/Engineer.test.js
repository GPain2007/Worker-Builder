const Engineer = require("../lib/Engineer");

test("creates employee object", () => {
  const employee = new Engineer("dave", "", null, "", "Manager");
  let role = employee.getRole();
  expect(employee.name).toBe("dave");
  expect(employee.email).toBe("");
  expect(employee.getID()).toBe("please enter a valid id number");
  expect(role).toBe(role);
});

test("get a new name", () => {
  const employee = new Engineer("dave");
  let name = employee.getName();
  expect(name).toBe("dave");
});
test("get Github name", () => {
  const employee = new Engineer("dave", "", null, "");
  let github = employee.getGithub();
  expect(github).toBe("");
});
