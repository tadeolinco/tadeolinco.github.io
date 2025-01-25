import { expect, test } from "@playwright/test";
import films from "./testFilms.json" assert { type: "json" };

test("has title", async ({ page }) => {
  for (const film of films) {
    await page.goto(film.uri, { waitUntil: "domcontentloaded" });
    await page.waitForURL("**/film/**", { waitUntil: "domcontentloaded" });

    await page.$$eval(".film-poster img", (allImages) => {
      console.log(allImages);
      allImages[0].src;
    });
    const container = await page.locator(".film-poster");
    const img = await container.locator("img");
    console.log(img);
    const posterUrl = img.getAttribute("src");
    expect(posterUrl).toBe(
      "https://a.ltrbxd.com/resized/film-poster/6/1/7/4/4/3/617443-dune-part-two-0-230-0-345-crop.jpg?v=cc533700f8"
    );
  }
});
