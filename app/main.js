import { TasksController } from "./Controllers/TasksController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { WeathersController } from "./Controllers/WeathersController.js";

class App {
  tasksController = new TasksController()
  quotesController = new QuotesController()

  weathersController = new WeathersController()
}

window["app"] = new App();
