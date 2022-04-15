import { ValuesController } from "./Controllers/ValuesController.js";
import { TasksController } from "./Controllers/TasksController.js"
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  // valuesController = new ValuesController();
  tasksController = new TasksController()
  weatherController = new WeatherController()
}

window["app"] = new App();
