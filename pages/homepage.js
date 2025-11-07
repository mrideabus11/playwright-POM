import { expect } from "@playwright/test"

class HomePage {
  constructor(page) {
    this.page = page
    this.manageoption = "//span[normalize-space()='Manage']"
    this.menu = "//*[@alt='menu']"
    this.logoutButton = "//button[normalize-space()='Sign out']"
  }
  async verifyManageOption() {
    await expect(this.page.locator(this.manageoption)).toBeVisible()
  }
  async logoutFromApp() {
    // this is a method
    await this.page.click(this.menu)
    // await this.page.pause()
    await this.page.click(this.logoutButton)
  }
}

module.exports = HomePage
