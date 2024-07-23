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
  isLoading = false;
  responseApi:string = '';
  enButton:boolean = true;

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
      documentationResponse: '',
      listErrs: [],
      
    };

    
  }
  
  
  ngOnInit(): void {

    throw new Error('Method not implemented.');
  }

  apagar(){
    this.isLoading  = false;
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
      listErrs: [],
      documentationResponse: ''
    };
  }
  
  validarXml(){
    debugger;
    this.enButton=false;
    this.isLoading = true;
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
       
        if (resposta.documentationResponse) {
          try {
            const documentationResponse = JSON.parse(resposta.documentationResponse);
            if (documentationResponse.candidates && documentationResponse.candidates[0].content.parts[0].text) {
              this.nfeResponse.documentationResponse = documentationResponse.candidates[0].content.parts[0].text;
            } else {
              this.nfeResponse.documentationResponse = '';
            }
          } catch (e) {
            console.error('Failed to parse documentationResponse JSON:', e);
            this.nfeResponse.documentationResponse = '';
          }
        } else {
          this.nfeResponse.documentationResponse = '';
        }
       
       
        this.isLoading = false;
      
      }
    )
  }
  
  


}
