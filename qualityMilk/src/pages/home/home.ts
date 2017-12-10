import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LaboratorioProvider } from '../../providers/laboratorio/laboratorio';
import { Laboratorio } from '../../model/laboratorio.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public provider: LaboratorioProvider) {
    // this. getAvaliacoes();
  }
  public avaliacao ={ 
                nome_laticinio: '' ,
                nome_produtor : '',
                gordura: '',
                acidez: '',
                densidade_relativa: '',
                indice_crioscopico: '',
                solidos_n_gordurosos: '',
                proteina_total: '',
                estabilidade_alizarol: '',
                cont_placas: '',
                cont_celula_somatica:''
  }
  public labs: Laboratorio[];
  public lab: Laboratorio = new Laboratorio;
  public getAvaliacoes() {
    this.provider.getAvaliacoes()
      .subscribe(data => {
        this.labs = data;
        console.log(this.labs);
      });
  }
  public addAvaliacoes(){
    this.lab.nome_laticinio = "Laticinio do Joao";
    this.lab.nome_produtor = "Frederico Fagundes";
      this.provider.addAvaliacoes(this.lab).subscribe
      ((result) => {
        console.log(result);
      }, (err) => {
        console.log(err);
      });
    }
  }
