import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { sandboxApi } from "./AxiosService.js"


class TasksService {
  async markComplete(id) {
    let foundtask = ProxyState.tasks.find(t => t.id == id)
    foundtask.completed = !foundtask.completed

    const res = await sandboxApi.put('todos/' + id, foundtask)
    const task = new Task(res.data)
    const index = ProxyState.tasks.findIndex(t => t.id == task.id)

    ProxyState.tasks = ProxyState.tasks
  }
  async getAllTasks() {
    const res = await sandboxApi.get('todos')
    const tasks = res.data.map(t => new Task(t))
    ProxyState.tasks = tasks
  }

  async addTask(formData) {
    const res = await sandboxApi.post('todos', formData)
    // console.log('from the service:' + res)
    const newTask = new Task(res.data)
    ProxyState.tasks = [newTask, ...ProxyState.tasks]
  }

  async removeTask(id) {
    // console.log('made it to service')
    const res = await sandboxApi.delete('todos/' + id)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== id)
  }
}

export const tasksService = new TasksService()