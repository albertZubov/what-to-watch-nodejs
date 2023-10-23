import { MockData } from "../../types/mock-data.type";
import { getRandomItem } from "../../utils/random.js";
import { OfferGenerateInterface } from "./offer-generator.interface";

export default class OfferGenerator implements OfferGenerateInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const name = getRandomItem<string>(this.mockData.names);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const genre = getRandomItem<string>(this.mockData.genres);
    const previewVideoLink = getRandomItem<string>(
      this.mockData.previewVideoLinks
    );
    const videoLink = getRandomItem<string>(this.mockData.videoLinks);
    const starring = getRandomItem<string>(this.mockData.starrings);
    const director = getRandomItem<string>(this.mockData.directors);
    const posterImage = getRandomItem<string>(this.mockData.posterImages);
    const backgroundImage = getRandomItem<string>(
      this.mockData.backgroundImages
    );
    const backgroundColor = getRandomItem<string>(
      this.mockData.backgroundColors
    );
    const firstname = getRandomItem<string>(this.mockData.firstnames);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatarPath = getRandomItem<string>(this.mockData.avatarPaths);
    const password = getRandomItem<string>(this.mockData.passwords);

    return [
      name,
      description,
      genre,
      previewVideoLink,
      videoLink,
      starring,
      director,
      posterImage,
      backgroundImage,
      backgroundColor,
      firstname,
      email,
      avatarPath,
      password,
    ].join("\t");
  }
}
