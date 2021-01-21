const openClass = require("../lib/classes/classes");
const Engineer = openClass.Engineer;



test("Engineer instance created", () => {
    const e = new Engineer(); 
    expect(typeof (e)).toBe("object");
});



test("Set first name in constructor", () => {
    const firstName = "Alice";
    const e = new Engineer(1, firstName, "Jenkins", "ajenkins@gmail.com", "github.com/ajenkins");
    expect(e.firstName).toBe(firstName);
});


test("Set email in constructor", () => {
    const email = "test@test.com";
    const e = new Engineer(1, "Alice", "Jenkins", email, "github.com/ajenkins");
    expect(e.email).toBe(email);
});

test("Can get name via getName()", () => {
    const testValue = "Alice";
    const testValue2 = "Jenkins"
    const e = new Engineer(1, testValue, testValue2, "ajenkins@gmail.com", "github.com/ajenkins");
    expect(e.getName()).toBe(testValue + " " + testValue2);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Engineer(testValue, "Alice", "Jenkins", "ajenkins@gmail.com", "github.com/ajenkins" );
    expect(e.getId()).toBe(testValue);
});


test("getRole() should return Engineer", () => {
    const testValue = "Engineer";
    const e = new Engineer(1, "Alice", "Jenkins", "ajenkins@gmail.com", "github.com/ajenkins");
    expect(e.getRole()).toBe(testValue);
});


test("printInfo() should return name, id, email, github", () => {
    console.log(new Engineer);
});
