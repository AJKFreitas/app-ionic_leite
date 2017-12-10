import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnalisePage } from "../analise/analise";

/**
 * Generated class for the ParametrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parametros',
  templateUrl: 'parametros.html',
})
export class ParametrosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParametrosPage');
  }

  public maisDetalhes(){
    this.navCtrl.push(AnalisePage);
  }

}
