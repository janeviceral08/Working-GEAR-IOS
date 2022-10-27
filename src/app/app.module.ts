import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatBottomSheetModule } from '@angular/material';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

import { DatePipe } from '@angular/common'
import { AppVersion } from '@ionic-native/app-version/ngx';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
// import { Firebase } from '@ionic-native/firebase/ngx';

import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FTP } from '@ionic-native/ftp/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { Camera } from '@ionic-native/camera/ngx';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { Clipboard } from '@ionic-native/clipboard/ngx';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [IonicStorageModule.forRoot(),
    BrowserModule,
  AngularFireModule.initializeApp(environment.firebase),
  IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBottomSheetModule],
  providers: [
    AppVersion,
    StatusBar,
    SplashScreen,
    DatePipe,
    IOSFilePicker,
    FirebaseX,
    // Firebase,
    ImagePicker,
    Camera,
    File,
    FileOpener,
    FileTransfer,
    FTP,
    DocumentViewer,
    HTTP,
    AndroidPermissions,
    Geolocation,
    LocationAccuracy,
    NativeGeocoder,
    InAppBrowser,
    Clipboard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
