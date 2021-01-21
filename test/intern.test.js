const openClass = require("../lib/classes/classes");
const Intern = openClass.INTERN;



test("Employee instance created", () => {
    const e = new Intern(); 
    expect(typeof (e)).toBe("object");
});



test("Set name in constructor", () => {
    const firstName = "Alice";
    const e = new Intern(1, firstName, "Jenkins", "ajenkins@gmail.com", "NC State University");
    expect(e.firstName).toBe(firstName);
});

test("Set id in constructor", () => {
    const id = 100;
    const e = new Intern(id, "Alice", "Jenkins", "ajenkins@gmail.com", "NC State University" );
    expect(e.id).toBe(id);
});

test("Set email in constructor", () => {
    const email = "test@test.com";
    const e = new Intern(1, "Alice", "Jenkins", email, "NC State University");
    expect(e.email).toBe(email);
});

test("Can get name via getName()", () => {
    const testValue = "Alice";
    const testValue2 = "Jenkins"
    const e = new Intern(1, testValue, testValue2, "ajenkins@gmail.com", "NC State University");
    expect(e.getName()).toBe(testValue + " " + testValue2);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Intern(testValue, "Alice", "Jenkins", "ajenkins@gmail.com", "NC State University" );
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Intern(1, "Alice", "Jenkins", testValue, "NC State University");
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return Intern", () => {
    const testValue = "Intern";
    const e = new Intern(1, "Alice", "Jenkins", "ajenkins@gmail.com", testValue);
    expect(e.getRole()).toBe(testValue);
});


test("printInfo() should return name, id, email, school", () => {
    console.log(new Intern)
});
