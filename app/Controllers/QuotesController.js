import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";

function drawQuote() {
  const quote = ProxyState.quote
  document.getElementById('quote').innerHTML = quote.Template
}

async function _getQuote() {
  try {
    await quotesService.getQuote()
  } catch (error) {
    console.log(error)
    Pop.toast(error.message, 'error')
  }
}

export class QuotesController {
  constructor() {
    ProxyState.on('quote', drawQuote)
    _getQuote
  }
}