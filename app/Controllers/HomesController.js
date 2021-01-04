import { ProxyState } from "../AppState.js"
import { homesService } from "../Services/HomesService.js"
 
function _drawHomes() {
  let homes = ProxyState.homes
  let template = ''
  homes.forEach(home => {
    template += home.Template
  })
  document.getElementById('homes').innerHTML = template
}

export default class HomesController {
  constructor() {
    ProxyState.on("homes", _drawHomes)
    _drawHomes()
  }
   createHome() {
    window.event.preventDefault()
    let form = window.event.target
    let newHome = {
      bedrooms: form['bedrooms'].value,
      bathrooms: form['bathrooms'].value,
      levels: form['levels'].value,
      year: form['year'].value,
      price: form['price'].value,
      description: form['description'].value,
      imgUrl: form['imgUrl'].value
    }
    homesService.createHome(newHome)
    // @ts-ignore
    form.reset()
    // @ts-ignore
    document.getElementById("new-home-modal");
  }

   deleteHome(id){
     homesService.deleteHome(id)
   }
 }