import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("has correct title", async ({ page }) => {
        await expect(page).toHaveTitle("Portfolio de sanzcarlos");
    });

    test("has correct meta description", async ({ page }) => {
        const meta = page.locator('meta[name="description"]');
        await expect(meta).toHaveAttribute(
            "content",
            /Solutions Architect|cloud/i,
        );
    });

    test.describe("Header", () => {
        test("renders logo image", async ({ page }) => {
            const logo = page.locator("header img");
            await expect(logo).toBeVisible();
            await expect(logo).toHaveAttribute("alt", "Logo");
        });

        test("renders navigation links", async ({ page }) => {
            const nav = page.locator("header nav");
            await expect(nav.getByRole("link", { name: "Home" })).toBeVisible();
            await expect(
                nav.getByRole("link", { name: "Experience" }),
            ).toBeVisible();
            await expect(
                nav.getByRole("link", { name: "About" }),
            ).toBeVisible();
            await expect(
                nav.getByRole("link", { name: "Contact" }),
            ).toBeVisible();
        });

        test("Home nav link points to #top", async ({ page }) => {
            const link = page.locator("header nav").getByRole("link", {
                name: "Home",
            });
            await expect(link).toHaveAttribute("href", "#top");
        });

        test("Experience nav link points to #experience", async ({ page }) => {
            const link = page.locator("header nav").getByRole("link", {
                name: "Experience",
            });
            await expect(link).toHaveAttribute("href", "#experience");
        });
    });

    test.describe("Hero section", () => {
        test("displays greeting with name", async ({ page }) => {
            const heading = page.locator("h1").first();
            await expect(heading).toContainText("Hi, I'm Carlos");
        });

        test("displays Developer badge", async ({ page }) => {
            await expect(page.getByText("Developer")).toBeVisible();
        });

        test("displays Solutions Architect badge", async ({ page }) => {
            await expect(page.getByText("Solutions Architect")).toBeVisible();
        });

        test("displays bio text", async ({ page }) => {
            await expect(
                page.getByText(/Solutions Architect with extensive experience/),
            ).toBeVisible();
        });

        test("LinkedIn social link is present and correct", async ({
            page,
        }) => {
            const link = page
                .locator("nav")
                .filter({ hasText: "LinkedIn" })
                .getByRole("link", { name: /LinkedIn/ });
            await expect(link).toHaveAttribute(
                "href",
                "https://www.linkedin.com/in/sanzcarlos/",
            );
        });

        test("GitHub social link is present and correct", async ({ page }) => {
            const link = page
                .locator("nav")
                .filter({ hasText: "Github" })
                .getByRole("link", { name: /Github/ });
            await expect(link).toHaveAttribute(
                "href",
                "https://www.github.com/sanzcarlos/",
            );
        });

        test("email social link is present and correct", async ({ page }) => {
            const link = page.getByRole("link", {
                name: /carlos.sanzpenas@gmail.com/,
            });
            await expect(link).toHaveAttribute(
                "href",
                "mailto:carlos.sanzpenas@gmail.com",
            );
        });
    });

    test.describe("Work Experience section", () => {
        test("section heading is visible", async ({ page }) => {
            await expect(
                page.getByRole("heading", { name: /Work Experience/ }),
            ).toBeVisible();
        });

        test("section has correct id anchor", async ({ page }) => {
            const section = page.locator("section#experience");
            await expect(section).toBeVisible();
        });

        test("renders all 5 experience entries", async ({ page }) => {
            const items = page.locator("section#experience ol li");
            await expect(items).toHaveCount(5);
        });

        test("first entry is Solutions Architect at NTT", async ({ page }) => {
            const firstItem = page
                .locator("section#experience ol li")
                .first();
            await expect(firstItem).toContainText("Solutions Architect");
            await expect(firstItem).toContainText("NTT");
        });

        test("last entry is Engineer at BT", async ({ page }) => {
            const lastItem = page.locator("section#experience ol li").last();
            await expect(lastItem).toContainText("Engineer");
            await expect(lastItem).toContainText("BT");
        });

        test("each entry shows a start date", async ({ page }) => {
            const items = page.locator("section#experience ol li");
            const count = await items.count();
            for (let i = 0; i < count; i++) {
                const text = await items.nth(i).textContent();
                expect(text).toMatch(/\d{4}/);
            }
        });
    });

    test.describe("Projects section", () => {
        test("section heading is visible", async ({ page }) => {
            await expect(
                page.getByRole("heading", { name: /Projects/ }),
            ).toBeVisible();
        });

        test("section has correct id anchor", async ({ page }) => {
            const section = page.locator("section#project");
            await expect(section).toBeVisible();
        });
    });

    test.describe("Footer", () => {
        test("footer is visible", async ({ page }) => {
            const footer = page.locator("footer");
            await expect(footer).toBeVisible();
        });

        test("footer contains current year", async ({ page }) => {
            const year = new Date().getFullYear().toString();
            await expect(page.locator("footer")).toContainText(year);
        });

        test("footer contains site link", async ({ page }) => {
            const link = page
                .locator("footer")
                .getByRole("link", { name: "sanzcarlos" });
            await expect(link).toHaveAttribute(
                "href",
                "https://sanzcarlos.github.io/",
            );
        });

        test("footer contains rights text", async ({ page }) => {
            await expect(page.locator("footer")).toContainText(
                "derechos reservados",
            );
        });
    });

    test.describe("Accessibility", () => {
        test("page has a single h1", async ({ page }) => {
            const h1s = page.locator("h1");
            await expect(h1s).toHaveCount(1);
        });

        test("all images have alt text", async ({ page }) => {
            const images = page.locator("img");
            const count = await images.count();
            for (let i = 0; i < count; i++) {
                const alt = await images.nth(i).getAttribute("alt");
                expect(alt).toBeTruthy();
            }
        });

        test("external links have rel=noopener or rel=noreferrer", async ({
            page,
        }) => {
            const externalLinks = page.locator('a[target="_blank"]');
            const count = await externalLinks.count();
            for (let i = 0; i < count; i++) {
                const rel = await externalLinks.nth(i).getAttribute("rel");
                expect(rel).toMatch(/noopener|noreferrer/);
            }
        });
    });
});
