export class Quote {
  constructor(data) {
    this.quote = data.content
    this.author = data.author
    this.description = data.description
  }

  get Template() {
    return `<h3 class="font-italic">${this.quote}</h3>
  <h5 class="on-hover">Author: ${this.author}</h5>
  `
  }
}