import { Page, Locator, expect } from "@playwright/test";

export class SearchPage {
    private searchInput: Locator

    constructor(private page: Page) {
        this.searchInput = page.locator("input[name='term']");
    }

    async clickSearchField() {
        await this.searchInput.click()
    }

    async findGameByTitle(title: string) {
        await this.searchInput.fill(title)
        await this.searchInput.press('Enter')
    }

    async openFirstGameInSearchRow() {
        await this.page.locator('.search_result_row').first().click()
    }

    async checkGameTitle(expectedTitle: string) {
        await expect(this.page.locator('#appHubAppName')).toHaveText(expectedTitle)
    }

    // expectedUrl example: "/570/Dota_2/"
    async checkGamePageUrl(url: string) {
        await expect(this.page).toHaveURL(`https://store.steampowered.com/app${url}`)
    }
}
