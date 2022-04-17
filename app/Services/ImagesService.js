import { ProxyState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { inspireService } from "./AxiosService.js";

class ImagesService {
  async getImage() {
    // debugger
    const res = await inspireService.get('images')
    // console.log(res)
    const images = new Image(res.data)
    // console.log(images)
    ProxyState.image = images
  }
}

export const imagesService = new ImagesService()