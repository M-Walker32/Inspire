import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { Pop } from "../Utils/Pop.js";


function drawTasks() {
  // debugger
  let template = ''
  ProxyState.tasks.forEach(t => template += t.TaskTemplate)
  document.getElementById('tasks').innerHTML = template
}

async function _getAllTasks() {
  try {
    await tasksService.getAllTasks()
  } catch (error) {
    console.log(error)
    Pop.toast(error.message)
  }
}

export class TasksController {
  constructor() {
    ProxyState.on('tasks', drawTasks)
    _getAllTasks()
  }
  async addTask() {
    // debugger
    window.event.preventDefault()
    try {
      const formElem = event.target
      const formData = {
        // @ts-ignore
        description: formElem.description.value,
      }
      await tasksService.addTask(formData)
      // console.log('controller:' + formData.description)
      // console.log('new task')
      // @ts-ignore
      formElem.reset()
    } catch (error) {
      console.log(error)
      Pop.toast(error.message)
    }
  }

  async removeTask(id) {
    try {
      if (await Pop.confirm()) {
        await tasksService.removeTask(id)
      }

    } catch (error) {
      console.log(error)
      Pop.toast(error.message)

    }
  }
  markComplete(id) {
    // debugger
    tasksService.markComplete(id)
  }
}
