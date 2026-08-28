import { Page, expect } from "@playwright/test";

export class FilterPage {
    constructor(private page: Page) {}

    private filterCheckbox(tagLabel: string) {
        return this.page.locator(`span.tab_filter_control[data-loc='${tagLabel}']`)
    }

    async open() {
        await this.page.goto("/search")
    }

    async addFilterTag(tagLabel: string) {
        await this.filterCheckbox(tagLabel).click()
    }

    async removeFilterTag(tagLabel: string) {
        await this.filterCheckbox(tagLabel).click()
    }

    async checkFilterTagApplied(tagLabel: string) {
        await expect(this.filterCheckbox(tagLabel)).toHaveClass(/checked/)
    }

    async checkFilterTagNotApplied(tagLabel: string) {
        await expect(this.filterCheckbox(tagLabel)).not.toHaveClass(/checked/)
    }

    async checkFiltersCleared(...tagLabels: string[]) {
        for (const tagLabel of tagLabels) {
            await this.checkFilterTagNotApplied(tagLabel)
        }
    }
}
