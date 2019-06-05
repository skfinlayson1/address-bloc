const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {

    beforeEach(() => {
        this.menu = new MenuController();
    });

    describe("#remindMe()", () => {
        
        it("should return 'Learning is a life-long pursuit'", () => {
            const menu = new MenuController();
            expect(menu.remindMe()).toBe('Learning is a life-long pursuit');
        })

    })

  });