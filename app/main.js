import { TasksController } from "./Controllers/TasksController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { WeathersController } from "./Controllers/WeathersController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { ClocksController } from "./Controllers/ClockController.js"

class App {
  tasksController = new TasksController()
  quotesController = new QuotesController()

  weathersController = new WeathersController()

  imagesController = new ImagesController()
  clocksController = new ClocksController()
}

window["app"] = new App();
