import {Page} from 'playwright'
const env = require('dotenv').config();

export class BasePage {

    private readonly _baseUrl = process.env.BASE_URL!;
    protected readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async navigate(url: string) {
        await this.page.goto(`${this._baseUrl}${url}`)
    }
}
