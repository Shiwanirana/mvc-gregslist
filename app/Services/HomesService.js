import { ProxyState } from "../AppState.js"
import Home from "../Models/Home.js"

class HomesService {
  deleteHome(id) {
    ProxyState.homes = ProxyState.homes.filter(home => home.id != id)
  }
  createHome(newHome) {
    let home = new Home(newHome)
    ProxyState.homes = [...ProxyState.homes, home]
  }

}
// Singleton Pattern
export const homesService = new HomesService()