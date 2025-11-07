class HomePage {
  constructor(page) {
    this.page = page
    this.menu = "//*[@alt='menu']"
    this.logoutButton = "//button[normalize-space()='Sign out']"
  }
  async logoutFromApp() {
    await this.page.click(this.menu)
    // await this.page.pause()
    await this.page.click(this.logoutButton)
  }
}

module.exports = HomePage
