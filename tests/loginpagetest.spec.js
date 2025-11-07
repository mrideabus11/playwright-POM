import { test, expect } from "@playwright/test"
import LoginPage from "../pages/loginpage"
import HomePage from "../pages/homepage"

test("login page test", async ({ page }) => {
  const logintestpage = new LoginPage(page)
  const homePage = new HomePage(page)
  await page.goto("https://freelance-learn-automation.vercel.app/login")
  await logintestpage.loginToApp()
  await homePage.logoutFromApp()
})
