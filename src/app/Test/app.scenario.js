describe('Default Route', function() {
    it('Should Redirect user to default route', function() {
        // Loading Index Page
        browser.get('index.html');

        // Assertion for default route url & title
        expect(browser.getLocationAbsUrl()).toMatch("/phones");
        expect(browser.getTitle()).toMatch("Home");
    });
});