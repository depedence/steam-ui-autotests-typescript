import { Page, expect } from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) {}

    async clickLoginButton() {
        await this.page.locator("a.global_action_link").click();
    }

    async checkLoginPage() {
        await expect(
            this.page.locator("form:not([role='search']) button[type='submit']")
        ).toHaveText("Sign in")
    }
}
