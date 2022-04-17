import { ProxyState } from "../AppState.js";
import { sandboxApi } from "../Services/AxiosService.js";
import { tasksService } from "../Services/TasksService.js";
import { Pop } from "../Utils/Pop.js";



function drawTasks() {
  // debugger
  let template = ''
  ProxyState.tasks.forEach(t => template += t.TaskTemplate)
  document.getElementById('tasks').innerHTML = template
}

async function drawCount() {
  try {
    const res = await sandboxApi.get('todos')
    const tasks = res.data
    let count = 0
    for (let i = 0; i < tasks.length; i++) {
      const element = tasks[i]
      if (element.completed) { count++ }
      console.log(count)
      document.getElementById('count').innerHTML = `${count} completed`
    }
  }
  catch (error) {
    console.log(error)
    Pop.toast(error.message)
  }
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
    ProxyState.on('tasks', drawCount)
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
