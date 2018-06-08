import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: '<body class="welc">' +
  '\n' +
  '  <div class="centerme">\n' +
  '    <h1 class="wel"><br>Burn the World with<br>your favorite Jams!!!</h1>' +
  '    <button class="button buttonwel">Membresias</button>\n' +
  '    <button class="button buttonwel">Registrarse</button>\n' +
  '<h4>Just by joining you can be 20% cooler!<br><br><br><br><br></h4>' +
  '</div>' +
  '</body>'
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
