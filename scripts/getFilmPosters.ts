import fs from "fs";
import https from "https";
import playwright from "playwright";
import films from "../src/baseFilms.json" assert { type: "json" };

(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();

  for (let i = 0; i < films.length; i++) {
    const film = films[i];
    await page.goto(film.uri, { waitUntil: "domcontentloaded" });
    await page.waitForURL("**/film/**", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(3000);

    console.log(`${film.name} (${i + 1} of ${films.length})`);

    const images = await page.$$eval(
      "#js-poster-col .film-poster.poster img",
      (all_images) => {
        const image_links = [];
        all_images.forEach((image) => {
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

    images.forEach((imageUrl) => {
      const split = film.uri.split("/");
      const path = `./src/posters/${split[split.length - 1]}/poster.jpg`;
      fs.mkdirSync(`./src/posters/${split[split.length - 1]}`, {
        recursive: true,
      });
      const file = fs.createWriteStream(path);
      https.get(imageUrl, function (response) {
        response.pipe(file);
      });
    });
    console.log(images);
  }
  await browser.close();
})();
