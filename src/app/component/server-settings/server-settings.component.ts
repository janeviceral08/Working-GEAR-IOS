import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as Constants from 'src/app/utils/constants.service';


@Component({
  selector: 'app-server-settings',
  templateUrl: './server-settings.component.html',
  styleUrls: ['./server-settings.component.scss'],
})
export class ServerSettingsComponent implements OnInit {

  constructor(private modalController: ModalController,
    private storage: Storage,
    private navParams: NavParams) { }

  ngOnInit() {

  }

  devMode: any;
  domainMode: any;
  UrlInput: string;
  PasswordInput: string;
  guestLogin: any;

  param: any;
  module: any;

  isServerSetUrl: any;
  serverUrl: any;

  isServerDefault: any;

  ionViewWillEnter() {
    this.storage.get(`${Constants.KEY_SERVER_SETTINGS}`).then((val) => {

      console.log(val)
      this.param = this.navParams.get('data');
      this.module = this.navParams.get('module');

      this.devMode = val[Constants.IS_SERVER_DEV];
      this.domainMode = val[Constants.IS_SERVER_DOMAIN];
      this.isServerSetUrl = val[Constants.IS_SERVER_SET_URL];
      this.serverUrl = val[Constants.SERVER_URL];
      this.isServerDefault = val[Constants.IS_SERVER_DEFAULT];
      this.guestLogin = val[Constants.IS_GUEST_LOGIN];

      if (this.isServerSetUrl) {
        this.UrlInput = this.serverUrl
      }

      if(this.devMode) {
        this.PasswordInput = Constants.DEV_PASSWORD;
      }
    });
  }

  devModeCheck() {
    if (!this.devMode) {
      this.PasswordInput = ""

      if(this.isServerSetUrl) {
        this.UrlInput = this.serverUrl;
      }
    }
    else {
      this.UrlInput = "";
    }
  }

  domainModeCheck() {
    if (!this.domainMode) {
      this.UrlInput = "";

      if(this.isServerSetUrl) {
        this.UrlInput = this.serverUrl;
      }

    }else{
      this.UrlInput = "";
    }
  }

  save() {

    var tempUrl = this.serverUrl;

    if (this.UrlInput) {
      this.isServerSetUrl = true;
      this.isServerDefault = false;
      tempUrl = this.UrlInput;
    }

    if (this.domainMode && !this.devMode) {
      tempUrl = Constants.API_ENDPOINT_DOMAIN;
      this.isServerDefault = false;
    }

    if (!this.domainMode && this.devMode) {

      if(!this.PasswordInput) {
        alert('Password is required')
        return;
      }

      if(this.PasswordInput != Constants.DEV_PASSWORD) {
        alert('Wrong password!')
        return;
      }

      tempUrl = Constants.API_ENDPOINT_DEV;
      this.isServerDefault = false;

    }

    if (this.domainMode && this.devMode) {

      if(!this.PasswordInput) {
        alert('Password is required')
        return;
      }

      if(this.PasswordInput != Constants.DEV_PASSWORD) {
        alert('Wrong password!')
        return;
      }
      
      tempUrl = Constants.API_ENDPOINT_DOMAIN_DEV;
      this.isServerDefault = false;
    }

    if (this.UrlInput == "" && !this.devMode && !this.domainMode) {
      this.isServerSetUrl = false;
      this.isServerDefault = true;
      tempUrl = Constants.API_ENDPOINT;
    }

    let server_settings = {

      is_server_domain: this.domainMode,
      is_server_default: this.isServerDefault,
      is_server_dev: this.devMode,
      is_server_set_url: this.isServerSetUrl,
      is_guest_login: this.guestLogin,
      server_url: tempUrl,
    }

    console.log(server_settings);


    this.storage.set(Constants.KEY_SERVER_SETTINGS, server_settings).then(result => {
      alert('Settings Saved!')
      this.myDismiss();
    }).catch(e => {
      alert('Error saving settings. Please try again!')
      this.myDismiss();
    });
  }

  async myDismiss() {
    let result = {
      'isDismissed': 1,
      'is_guest_login': this.guestLogin
    };


    await this.modalController.dismiss(result);
  }


}
