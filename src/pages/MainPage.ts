import { Page } from "@playwright/test";

export class MainPage {
    constructor(private page: Page) {}

    async open() {
        await this.page.goto("/")
    }
}
