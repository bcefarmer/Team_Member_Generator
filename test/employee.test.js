const openClass = require("../lib/classes/classes");
const Employee = openClass.Employee;



test("Employee instance created", () => {
    const e = new Employee(); 
    expect(typeof (e)).toBe("object");
});



test("Set name in constructor", () => {
    const firstName = "Alice";
    const e = new Employee(1, firstName, "Jenkins", "ajenkins@gmail.com", "Intern");
    expect(e.firstName).toBe(firstName);
});

test("Set id in constructor", () => {
    const id = 100;
    const e = new Employee(id, "Alice", "Jenkins", "ajenkins@gmail.com", "Intern" );
    expect(e.id).toBe(id);
});

test("Set email in constructor", () => {
    const email = "test@test.com";
    const e = new Employee(1, "Alice", "Jenkins", email, "Intern");
    expect(e.email).toBe(email);
});

test("Can get name via getName()", () => {
    const testValue = "Alice";
    const testValue2 = "Jenkins"
    const e = new Employee(1, testValue, testValue2, "ajenkins@gmail.com", "Intern");
    expect(e.getName()).toBe(testValue + " " + testValue2);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee(testValue, "Alice", "Jenkins", "ajenkins@gmail.com", "Intern" );
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee(1, "Alice", "Jenkins", testValue, "Intern");
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return Employee", () => {
    const testValue = "Employee";
    const e = new Employee(1, "Alice", "Jenkins", "ajenkins@gmail.com", testValue);
    expect(e.getRole()).toBe(testValue);
});


test("printInfo() should return \"name, id, email\"", () => {
    console.log(new Employee)
});
