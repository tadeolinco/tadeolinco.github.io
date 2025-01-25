import fs from "fs";
import https from "https";
import playwright from "playwright";
import films from "../src/baseFilms.json" assert { type: "json" };

(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();

  for (const film of films) {
    await page.goto(film.uri, { waitUntil: "domcontentloaded" });
    await page.waitForURL("**/film/**", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(3000);

    const images = await page.$$eval(
      "#js-poster-col .film-poster.poster img",
      (all_images) => {
        const image_links = [];
        all_images.forEach((image, index) => {
          if (
            image.src.startsWith("https://") &&
            image.src.includes("resize")
          ) {
            image_links.push(image.src);
          }
        });
        return image_links;
      }
    );

    images.forEach((imageUrl, index) => {
      const path = `src/posters/${film.name}.jpg`;
      const file = fs.createWriteStream(path);
      https.get(imageUrl, function (response) {
        response.pipe(file);
      });
    });
    console.log(images);
  }
  await browser.close();
})();
