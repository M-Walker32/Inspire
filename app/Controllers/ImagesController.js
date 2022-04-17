import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { Pop } from "../Utils/Pop.js";

function drawImage() {
  const image = ProxyState.image
  // @ts-ignore
  document.getElementById('cover-img').src = ProxyState.image.image
}

async function _getImage() {
  try {
    await imagesService.getImage()
  } catch (error) {
    console.log(error)
    Pop.toast(error.message, 'error')
  }
}

export class ImagesController {
  constructor() {
    ProxyState.on('image', drawImage)
    _getImage()
    // drawQuote()
  }
}