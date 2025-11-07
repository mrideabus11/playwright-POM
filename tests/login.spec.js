import { test, expect } from "@playwright/test"
import LoginPage from "../pages/login"

test("test", async ({ page }) => {
  const login = new LoginPage(page)
  await login.goToLoginPage()
  await login.login("tomsmith", "SuperSecretPassword!")
  //   await page.getByRole("textbox", { name: "Username" }).click()
  //   await page.getByRole("textbox", { name: "Username" }).fill("tomsmith")
  //   await page.getByText("Password", { exact: true }).click()
  //   await page
  //     .getByRole("textbox", { name: "Password" })
  //     .fill("SuperSecretPassword!")
  //   await page.getByRole("button", { name: " Login" }).click()
})
