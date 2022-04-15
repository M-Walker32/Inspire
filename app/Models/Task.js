import { ProxyState } from "../AppState.js"

export class Task {
  constructor(data) {
    this.id = data.id || ''
    this.completed = false || data.completed
    this.description = data.description || ''
  }

  get TaskTemplate() {
    return /*html*/`
    <div class="d-flex align-items-center">
    <input id="checktask" type="checkbox" ${this.completed == true ? 'checked' : ''} class="m-1" onclick="app.tasksController.markComplete('${this.id}')">
      <label for="checkbox">${this.description}</label>
      <i class="mdi mdi-trash-can selectable" onclick="app.tasksController.removeTask('${this.id}')"></i>
    </div>
    `
  }
}