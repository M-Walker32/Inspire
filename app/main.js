import { TasksController } from "./Controllers/TasksController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
// import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  tasksController = new TasksController()
  quotesController = new QuotesController()
  // weatherController = new WeatherController();
}

window["app"] = new App();
