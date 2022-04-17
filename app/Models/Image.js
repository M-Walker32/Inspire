// the model might be different here

export class Image {
  constructor(data) {
    this.id = data.id
    this.image = data.largeImgUrl
    this.author = data.author
    this.tags = data.query
  }

  get ITemplate() {
    return `
    <h3>${this.author}, ${this.tags}</h3>
  `
  }
}