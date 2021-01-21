const openClass = require("../lib/classes/classes");
const Manager = openClass.MANAGER;



test("Employee instance created", () => {
    const e = new Manager(); 
    expect(typeof (e)).toBe("object");
});



test("Set name in constructor", () => {
    const firstName = "Alice";
    const e = new Manager(1, firstName, "Jenkins", "ajenkins@gmail.com", "444-976-4432");
    expect(e.firstName).toBe(firstName);
});

test("Set id in constructor", () => {
    const id = 100;
    const e = new Manager(id, "Alice", "Jenkins", "ajenkins@gmail.com", "444-976-4432" );
    expect(e.id).toBe(id);
});

test("Set email in constructor", () => {
    const email = "test@test.com";
    const e = new Manager(1, "Alice", "Jenkins", email, "444-976-4432");
    expect(e.email).toBe(email);
});

test("Can get name via getName()", () => {
    const testValue = "Alice";
    const testValue2 = "Jenkins"
    const e = new Manager(1, testValue, testValue2, "ajenkins@gmail.com", "444-976-4432");
    expect(e.getName()).toBe(testValue + " " + testValue2);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Manager(testValue, "Alice", "Jenkins", "ajenkins@gmail.com", "444-976-4432" );
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Manager(1, "Alice", "Jenkins", testValue, "444-976-4432");
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return Manager", () => {
    const testValue = "Manager";
    const e = new Manager(1, "Alice", "Jenkins", "ajenkins@gmail.com", "444-976-4432");
    expect(e.getRole()).toBe(testValue);
});


test("printInfo() should print manager data in terminal/console.", () => {
    console.log(new Manager)
});
