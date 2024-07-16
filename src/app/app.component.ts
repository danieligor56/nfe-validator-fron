import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { Nfe } from './Models/nfe';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nfe-validator-front';
  response:string = '';
  xml:string = '';
  nfeResponse:Nfe;

  constructor(
    private service:ServicesService,
    
  ){

    this.nfeResponse = {
      titResult: '',
      respParserXml: '',
      tipMsmString: '',
      schValid: '',
      titValidNfe: '',
      certUser: '',
      validCert: '',
      regNegProd: '',
      probValida: '',
      listErrs: []
    };

    
  }
  
  
  ngOnInit(): void {

    throw new Error('Method not implemented.');
  }

  apagar(){
    this.xml = '';
    this.nfeResponse = {
      titResult: '',
      respParserXml: '',
      tipMsmString: '',
      schValid: '',
      titValidNfe: '',
      certUser: '',
      validCert: '',
      regNegProd: '',
      probValida: '',
      listErrs: []
    };
  }

  validarXml(){
    
    this.service.valida(this.xml).subscribe(
      (resposta) => {
        this.response = resposta;
        this.nfeResponse.titResult = resposta.titResult;
        this.nfeResponse.respParserXml = resposta.respParserXml;
        this.nfeResponse.tipMsmString = resposta.tipMsmString;
        this.nfeResponse.schValid = resposta.schValid;        
        this.nfeResponse.titValidNfe = resposta.titValidNfe;
        this.nfeResponse.certUser = resposta.certUser;
        this.nfeResponse.validCert = resposta.validCert;
        this.nfeResponse.regNegProd = resposta.regNegProd;
        this.nfeResponse.probValida = resposta.probValida;
        this.nfeResponse.listErrs = resposta.listErrs;
      
      }
    )
  }
  
  


}
