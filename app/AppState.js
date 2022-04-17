import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /** @type {import('./Models/Task').Task[]} */
  tasks = []

  /** @type {import('./Models/Quote').Quote} */
  quote = null;

   /** @type {import('./Models/Weather').Weather} */
   weather = null;
  // /** @type {import('./Models/Image').Image[]} */
  // Image = null

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
