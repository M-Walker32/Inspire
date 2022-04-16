import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { inspireService } from "./AxiosService.js";

class QuotesService {
  async getQuote() {
    // debugger
    const res = await inspireService.get('quotes')
    const quote = new Quote(res.data)
    ProxyState.quote = quote
  }
}

export const quotesService = new QuotesService()