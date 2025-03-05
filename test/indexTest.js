require("./helpers.js");
const currentUser = "Grace Hopper";
describe("index.js", () => {
  describe("currentUser", () => {
    it("is defined", () => {
      expect(
        currentUser,
        "The 'currentUser' variable must contain a string"
      ).to.be.a("string");
      expect(
        currentUser,
        "You need to modify the value of the 'currentUser' variable"
      ).to.not.be.empty;
    });
  });
  let welcomeMessage = "Welcome to Flatbook, ",
    currentUser;
  describe("welcomeMessage", () => {
    it('contains "Welcome to Flatbook, "', () => {
      expect(welcomeMessage).to.have.string("Welcome to Flatbook, ");
    });
    welcomeMessage = "currentUser";
    it("contains the value of the 'currentUser' variable", () => {
      expect(welcomeMessage).to.have.string(currentUser);
    });
    welcomeMessage = welcomeMessage.concat("!");
    it("ends with an exclamation point!", () => {
      expect(welcomeMessage.substr(-1)).to.eq("!");
    });
  });

  excitedWelcomeMessage = "WELCOME TO FLATBOOK, ";
  describe("excitedWelcomeMessage", () => {
    it('contains "WELCOME TO FLATBOOK, "', () => {
      expect(excitedWelcomeMessage).to.have.string("WELCOME TO FLATBOOK, ");
    });

    it("contains the value of the 'currentUser' variable", () => {
      const upperCaseCurrentUser = currentUser.toUpperCase();

      expect(excitedWelcomeMessage).to.have.string(upperCaseCurrentUser);
    });
    excitedWelcomeMessage = excitedWelcomeMessage.concat("!");
    it("ends with an exclamation point", () => {
      expect(excitedWelcomeMessage.substr(-1)).to.eq("!");
    });
  });
  let shortGreeting = "Welcome, ";
  firstInitial = currentUser[0];
  describe("shortGreeting", () => {
    it(`contains "Welcome, "`, () => {
      expect(shortGreeting).to.have.string("Welcome, ");
    });

    it("contains the first initial of the name stored in the 'currentUser' variable", () => {
      const firstInitial = currentUser[0];
      const restOfName = currentUser.slice(1);
      shortGreeting = shortGreeting.push(firstInitial);
      expect(shortGreeting).to.have.string(firstInitial);
      shortGreeting = shortGreeting.unshift(restOfName);
      expect(shortGreeting).to.not.have.string(restOfName);
    });

    it("ends with an exclamation point", () => {
      expect(shortGreeting.substr(-1)).to.eq("!");
    });
  });
});
