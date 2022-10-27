import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as Constants from 'src/app/utils/constants.service';
import { LoginService } from 'src/app/services/login.service';
import { HTTP } from '@ionic-native/http/ngx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personalbackground',
  templateUrl: './personalbackground.page.html',
  styleUrls: ['./personalbackground.page.scss'],
})
export class PersonalbackgroundPage implements OnInit {
  loadingDone: boolean = false;
  noError: boolean = true;
  errorMessage: string;
  empId: string;
  subId: string;
  showPage: string;
  personalInfo: any;
  mobileInfo: any;
  familyInfo: any;
  familyContactInfo: any;
  educationInfo: any;
  idbankInfo: any;
  name: string;
  position: string;
  clickedPIBG = false;
  clickedPersonal = false;
  clickedAddress = false;
  clickedContact = false;
  clickedEmergency = true;
  clickedIDBankGov = false;
  clickedIDBankBank = false;
  clickedIDBankDriver = false;
  clickedIDBankPassport = false;

  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private menuCtrl: MenuController,
    private httpApi: HTTP) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadingDone = false;
    this.storage.get(`${Constants.KEY_EMPID}`).then((val) => {
      this.empId = val;
      this.subId = this.activatedRoute.snapshot.paramMap.get('id');
      this.showPage = this.activatedRoute.snapshot.paramMap.get('page');
      console.log(this.subId);
      this.getInfo();
    });
  }

  getInfo() {
    this.storage.get(`${Constants.KEY_SESSION}`).then((val) => {

      let postData = {
        RecordID: val[Constants.KEY_RECORD_ID],
        SecurityStamp: val[Constants.KEY_SECURITY_STAMP],
        Token: val[Constants.KEY_TOKEN],
        AppPlatForm: Constants.APP_PLATFORM,
        AppVersion: Constants.VERSION,
        IsActive: true,
        UserID: this.empId,
        EmployeeID: this.subId,
      };

      this.storage.get(Constants.KEY_SERVER_SETTINGS).then((value) => {

        this.httpApi.post(`${value[Constants.SERVER_URL]}/api/BasicInfo/GetPersonalInformation`, postData, {})
          .then(data => {

            if (data.data == null || data.data == undefined) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }

            var jsonData = JSON.parse(data.data);

            console.log(jsonData);
            if (jsonData['Status'] != Constants.POST_SUCCESS) {
              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }

            if (jsonData['Success'] != Constants.POST_YES) {

              switch (jsonData['Message']) {
                case Constants.OUTDATED_ERROR:
                  this.loginService.showSessionError(Constants.ERROR_OUTDATED_HEADER, Constants.OUTDATED_MESSAGE);
                  return;
                case Constants.ERROR_OTHER_DEVICE:
                  this.loginService.showSessionError(Constants.ERROR_OTHER_DEVICE_HEADER, Constants.ERROR_MESSAGE_OTHER_DEVICE);
                  return;
                case Constants.ERROR_EXPIRED:
                  this.loginService.showSessionError(Constants.ERROR_EXPIRED_HEADER, Constants.ERROR_MESSAGE_EXPIRED);
                  return;
                case Constants.ERROR_REQUIRED:
                  this.loginService.showSessionError(Constants.ERROR_REQUIRED_HEADER, Constants.ERROR_MESSAGE_REQUIRED);
                  return;
              }

              this.noError = false;
              this.errorMessage = Constants.MESSAGE_CON_ERROR;
              return;
            }

            this.noError = true;
            if (jsonData['Value']['tblPersonalInfo'] != null || jsonData['Value']['tblPersonalInfo'] != undefined) {
              this.personalInfo = jsonData['Value']['tblPersonalInfo']['0'];
            }
            if (jsonData['Value']['tblMobileInfo'] != null || jsonData['Value']['tblMobileInfo'] != undefined) {
              this.mobileInfo = jsonData['Value']['tblMobileInfo']['0'];
            }
            if (jsonData['Value']['tblFamily'] != null || jsonData['Value']['tblFamily'] != undefined) {
              this.familyInfo = jsonData['Value']['tblFamily'];
            }
            if (jsonData['Value']['tblFamilyContactPerson'] != null || jsonData['Value']['tblFamilyContactPerson'] != undefined) {
              this.familyContactInfo = jsonData['Value']['tblFamilyContactPerson']['0'];
            }
            if (jsonData['Value']['tblEducation'] != null || jsonData['Value']['tblEducation'] != undefined) {
              this.educationInfo = jsonData['Value']['tblEducation'];
            }

            if (this.showPage == 'Personal') {
              if (this.personalInfo != null || this.personalInfo != undefined) {
                this.personalInfo["RELIGION"] = this.setReligionType(this.personalInfo["RELIGION"] != null ? this.personalInfo["RELIGION"].trim() : "");
                this.personalInfo["RELIGIONOTHERS"] = this.setReligionType(this.personalInfo["RELIGIONOTHERS"]);
                this.personalInfo["PROVINCE"] = this.setProvinceType(this.personalInfo["PROVINCECODE1"] != null ? this.personalInfo["PROVINCECODE1"].trim() : "");
                this.personalInfo["LICENSE"] = this.setLicenseType(this.personalInfo["LICENSECODE"] != null ? this.personalInfo["LICENSECODE"].trim() : "");
                this.personalInfo["CITY"] = this.setCityType(this.personalInfo["CITYCODE1"] != null ? this.personalInfo["CITYCODE1"].trim() : "");
                this.personalInfo["MIDDLENAME"] = this.personalInfo["MNAME"] != null ? this.personalInfo["MNAME"].substring(0, 1) + "." : "";
                this.personalInfo["MAIDENNAME"] = this.personalInfo["MAIDENNAME"] != null ? this.personalInfo["MAIDENNAME"].substring(0, 1) + "." : "";
                var bday = this.personalInfo["BIRTHDAY"].split('/');
                this.personalInfo["BIRTHDAY2"] = this.personalInfo["BIRTHDAY"] != null ? bday[0] + "/" + bday[2] : "";
              }
              else {
                this.noError = false;
                this.errorMessage = "EMPTY";
              }
            }
            else if (this.showPage == 'Family') {
              if (this.familyInfo == null || this.familyInfo == undefined || this.familyInfo.length == 0) {
                if (this.familyContactInfo == null || this.familyContactInfo == undefined) {
                  this.noError = false;
                  this.errorMessage = "EMPTY";
                }
              }
              else {
                this.familyInfo.forEach(element => {
                  element["CLICKED"] = "0";
                });
              }

              if (this.familyContactInfo != null || this.familyContactInfo != undefined) {
                this.familyContactInfo["CNTACT_RELATIONSHIP"] = this.setRelationType(this.familyContactInfo["CNTACT_RELATIONSHIP"] != null ? this.personalInfo["CNTACT_RELATIONSHIP"].trim() : "");
              }
            }
            else if (this.showPage == 'Education') {

              if (this.educationInfo == null || this.educationInfo == undefined || this.educationInfo.length == 0) {
                this.noError = false;
                this.errorMessage = "EMPTY";
              }
              else {
                this.educationInfo.forEach(element => {
                  element["CLICKED"] = "0";
                });
              }
            }

            this.loadingDone = true;

          })
          .catch(error => {
            console.log(error);
            this.noError = false;
            this.errorMessage = Constants.MESSAGE_CON_ERROR;
            this.loadingDone = true;
          });
      });
    });
  }

  refresh() {
    this.ionViewWillEnter();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  togglePersonalSection() {
    this.clickedPersonal = !this.clickedPersonal;
  }

  toggleAddressSection() {
    this.clickedAddress = !this.clickedAddress;
  }

  toggleContactSection() {
    this.clickedContact = !this.clickedContact;
  }

  toggleFamilySection(item: any) {
    console.log('clicked');
    if (this.familyInfo != null || this.familyInfo == undefined) {
      this.familyInfo.forEach(element => {
        if (element["ID"] == item) {
          console.log('found');
          if (element["CLICKED"] == "0") {
            console.log('1');
            element["CLICKED"] = "1"
          }
          else {
            console.log('0');
            element["CLICKED"] = "0"
          }
        }
      });
    }
  }

  toggleEmergencySection() {
    this.clickedEmergency = !this.clickedEmergency;
  }

  toggleEducationSection(item: any) {
    console.log('clicked');
    if (this.educationInfo != null || this.educationInfo == undefined) {
      this.educationInfo.forEach(element => {
        if (element["IDNO"] == item) {
          console.log('found');
          if (element["CLICKED"] == "0") {
            console.log('1');
            element["CLICKED"] = "1"
          }
          else {
            console.log('0');
            element["CLICKED"] = "0"
          }
        }
      });
    }
  }

  toggleIDBankGovSection() {
    this.clickedIDBankGov = !this.clickedIDBankGov;
  }

  toggleIDBankBankSection() {
    this.clickedIDBankBank = !this.clickedIDBankBank;
  }

  toggleIDBankDriverSection() {
    this.clickedIDBankDriver = !this.clickedIDBankDriver;
  }

  toggleIDBankPassportSection() {
    this.clickedIDBankPassport = !this.clickedIDBankPassport;
  }

  setLicenseType(item: string): string {
    switch (item) {
      case "DLC001": {
        return "Professional";
      }
      case "DLC002": {
        return "Non-Professional";
      }
      case "DLC003": {
        return "Student";
      }
      default: {
        return item;
      }
    }
  }

  setProvinceType(item: string): string {
    switch (item) {
      case "ABR": { return "Abra"; }
      case "AGN": { return "Agusan del Norte"; }
      case "AGS": { return "Agusan del Sur"; }
      case "AKL": { return "Aklan"; }
      case "ALB": { return "Albay"; }
      case "ANT": { return "Antique"; }
      case "APA": { return "Apayao"; }
      case "AUR": { return "Aurora"; }
      case "BAN": { return "Bataan"; }
      case "BAS": { return "Basilan"; }
      case "BEN": { return "Benguet"; }
      case "BIL": { return "Biliran"; }
      case "BOH": { return "Bohol"; }
      case "BTG": { return "Batangas"; }
      case "BTN": { return "Batanes"; }
      case "BUK": { return "Bukidnon"; }
      case "BUL": { return "Bulacan"; }
      case "CAG": { return "Cagayan"; }
      case "CAM": { return "Camiguin"; }
      case "CAN": { return "Camarines Norte"; }
      case "CAP": { return "Capiz"; }
      case "CAS": { return "Camarines Sur"; }
      case "CAT": { return "Catanduanes"; }
      case "CAV": { return "Cavite"; }
      case "CEB": { return "Cebu"; }
      case "COM": { return "Compostela Valley"; }
      case "DAO": { return "Davao Oriental"; }
      case "DAS": { return "Davao del Sur"; }
      case "DAV": { return "Davao del Norte"; }
      case "DIN": { return "Dinagat Islands"; }
      case "EAS": { return "Eastern Samar"; }
      case "GUI": { return "Guimaras"; }
      case "IFU": { return "Ifugao"; }
      case "ILI": { return "Iloilo"; }
      case "ILN": { return "Ilocos Norte"; }
      case "ILS": { return "Ilocos Sur"; }
      case "ISA": { return "Isabela"; }
      case "KAL": { return "Kalinga"; }
      case "LAG": { return "Laguna"; }
      case "LAN": { return "Lanao del Norte"; }
      case "LAS": { return "Lanao del Sur"; }
      case "LEY": { return "Leyte"; }
      case "LUN": { return "La Union"; }
      case "MAD": { return "Marinduque"; }
      case "MAG": { return "Maguindanao"; }
      case "MAS": { return "Masbate"; }
      case "MDC": { return "Occidental Mindoro"; }
      case "MDR": { return "Oriental Mindoro"; }
      case "MNL": { return "Metropolitan Manila"; }
      case "MOU": { return "Mountain"; }
      case "MSC": { return "Misamis Occidental"; }
      case "MSR": { return "Misamis Oriental"; }
      case "NCO": { return "Cotabato"; }
      case "NEC": { return "Negros Occidental"; }
      case "NER": { return "Negros Oriental"; }
      case "NSA": { return "Northern Samar"; }
      case "NUE": { return "Nueva Ecija"; }
      case "NUV": { return "Nueva Vizcaya"; }
      case "PAM": { return "Pampanga"; }
      case "PAN": { return "Pangasinan"; }
      case "PLW": { return "Palawan"; }
      case "QUE": { return "Quezon"; }
      case "QUI": { return "Quirino"; }
      case "RIZ": { return "Rizal"; }
      case "ROM": { return "Romblon"; }
      case "SAM": { return "Samar"; }
      case "SAR": { return "Sarangani"; }
      case "SCO": { return "South Cotabato"; }
      case "SHF": { return "Shariff Kabunsuan"; }
      case "SIG": { return "Siquijor"; }
      case "SLE": { return "Southern Leyte"; }
      case "SLU": { return "Sulu"; }
      case "SOR": { return "Sorsogon"; }
      case "SUK": { return "Sultan Kudarat"; }
      case "SUN": { return "Surigao del Norte"; }
      case "SUR": { return "Surigao del Sur"; }
      case "TAR": { return "Tarlac"; }
      case "TAW": { return "Tawi-Tawi"; }
      case "ZAN": { return "Zamboanga del Norte"; }
      case "ZAS": { return "Zamboanga del Sur"; }
      case "ZMB": { return "Zambales"; }
      case "ZSI": { return "Zamboanga-Sibugay"; }
      default: {
        return item;
      }
    }
  }

  setRegionType(item: string): string {
    switch (item) {
      case "R1": return "Region I";
      case "R10": return "Region IX";
      case "R11": return "Region X";
      case "R12": return "Region XI";
      case "R13": return "Region XII";
      case "R14": return "Region XIII";
      case "R15": return "NCR";
      case "R16": return "CAR";
      case "R2": return "Region II";
      case "R3": return "Region III";
      case "R4": return "Region IV-A";
      case "R5": return "Region IV-B";
      case "R6": return "Region V";
      case "R7": return "Region VI";
      case "R8": return "Region VII";
      case "R9": return "Region VIII";
      default: {
        return item;
      }
    }
  }

  setCityType(item: string): string {
    switch (item) {
      case "CIT00001": { return "Alaminos"; }
      case "CIT00002": { return "Angeles"; }
      case "CIT00003": { return "Antipolo"; }
      case "CIT00004": { return "Bacolod"; }
      case "CIT00005": { return "Bago"; }
      case "CIT00006": { return "Baguio"; }
      case "CIT00007": { return "Balanga"; }
      case "CIT00008": { return "Bais"; }
      case "CIT00009": { return "Basilan"; }
      case "CIT00010": { return "Batangas"; }
      case "CIT00011": { return "Bayawan"; }
      case "CIT00012": { return "Bislig"; }
      case "CIT00013": { return "Biñan (Laguna)"; }
      case "CIT00014": { return "Butuan"; }
      case "CIT00015": { return "Cabanatuan"; }
      case "CIT00016": { return "Cadiz"; }
      case "CIT00017": { return "Cagayan de Oro"; }
      case "CIT00018": { return "Calamba"; }
      case "CIT00019": { return "Calapan"; }
      case "CIT00020": { return "Calbayog"; }
      case "CIT00021": { return "Caloocan"; }
      case "CIT00022": { return "Candon"; }
      case "CIT00023": { return "Canlaon"; }
      case "CIT00024": { return "Catbalogan"; }
      case "CIT00025": { return "Cauayan"; }
      case "CIT00026": { return "Cavite"; }
      case "CIT00027": { return "Cebu"; }
      case "CIT00028": { return "Cotabato"; }
      case "CIT00029": { return "Dagupan"; }
      case "CIT00030": { return "Danao"; }
      case "CIT00031": { return "Dapitan"; }
      case "CIT00032": { return "Davao"; }
      case "CIT00033": { return "Digos"; }
      case "CIT00034": { return "Dipolog"; }
      case "CIT00035": { return "Dumaguete"; }
      case "CIT00036": { return "Escalante"; }
      case "CIT00037": { return "Gapan"; }
      case "CIT00038": { return "General Santos"; }
      case "CIT00039": { return "Gingoog"; }
      case "CIT00040": { return "Himamaylan"; }
      case "CIT00041": { return "Iligan"; }
      case "CIT00042": { return "Iloilo"; }
      case "CIT00043": { return "Iriga"; }
      case "CIT00044": { return "Isabela"; }
      case "CIT00045": { return "Kabankalan"; }
      case "CIT00046": { return "Kidapawan"; }
      case "CIT00047": { return "Koronadal"; }
      case "CIT00048": { return "La Carlota"; }
      case "CIT00049": { return "Laoag"; }
      case "CIT00050": { return "Lapu-Lapu"; }
      case "CIT00051": { return "Las Piñas"; }
      case "CIT00052": { return "Legaspi"; }
      case "CIT00053": { return "Ligao"; }
      case "CIT00054": { return "Lipa"; }
      case "CIT00055": { return "Lucena"; }
      case "CIT00056": { return "Maasin"; }
      case "CIT00057": { return "Makati"; }
      case "CIT00058": { return "Malabon"; }
      case "CIT00059": { return "Malaybalay"; }
      case "CIT00060": { return "Malolos"; }
      case "CIT00061": { return "Mandaluyong"; }
      case "CIT00062": { return "Mandaue"; }
      case "CIT00063": { return "Marawi"; }
      case "CIT00064": { return "Marikina"; }
      case "CIT00065": { return "Masbate"; }
      case "CIT00066": { return "Meycauayan"; }
      case "CIT00067": { return "Science City of Muñoz"; }
      case "CIT00068": { return "Muntinlupa"; }
      case "CIT00069": { return "Naga"; }
      case "CIT00070": { return "Olongapo"; }
      case "CIT00071": { return "Ormoc"; }
      case "CIT00072": { return "Oroquieta"; }
      case "CIT00073": { return "Ozamis"; }
      case "CIT00074": { return "Pagadian"; }
      case "CIT00075": { return "Palayan"; }
      case "CIT00076": { return "Panabo"; }
      case "CIT00077": { return "Parañaque"; }
      case "CIT00078": { return "Pasay"; }
      case "CIT00079": { return "Pasig"; }
      case "CIT00080": { return "Passi"; }
      case "CIT00081": { return "Puerto Princesa"; }
      case "CIT00082": { return "Quezon City"; }
      case "CIT00083": { return "Roxas"; }
      case "CIT00084": { return "Sagay"; }
      case "CIT00085": { return "Island Garden City of Samal"; }
      case "CIT00086": { return "San Carlos (Negros Occidental)"; }
      case "CIT00087": { return "San Carlos (Pangasinan)"; }
      case "CIT00088": { return "San Fernando (Pampanga)"; }
      case "CIT00089": { return "San Fernando (La Union)"; }
      case "CIT00090": { return "San Jose (Nueva Ecija)"; }
      case "CIT00091": { return "San Jose del Monte"; }
      case "CIT00092": { return "San Pablo"; }
      case "CIT00093": { return "Santa Rosa"; }
      case "CIT00094": { return "Santiago"; }
      case "CIT00095": { return "Silay"; }
      case "CIT00096": { return "Sipalay"; }
      case "CIT00097": { return "Sorsogon"; }
      case "CIT00098": { return "Surigao"; }
      case "CIT00099": { return "Tabaco"; }
      case "CIT00100": { return "Tacloban"; }
      case "CIT00101": { return "Tacurong"; }
      case "CIT00102": { return "Tagaytay"; }
      case "CIT00103": { return "Tagbilaran"; }
      case "CIT00104": { return "Taguig"; }
      case "CIT00105": { return "Tagum"; }
      case "CIT00106": { return "Talisay (Cebu)"; }
      case "CIT00107": { return "Talisay (Negros Occidental)"; }
      case "CIT00108": { return "Tanauan"; }
      case "CIT00109": { return "Tangub"; }
      case "CIT00110": { return "Tanjay"; }
      case "CIT00111": { return "Tarlac"; }
      case "CIT00112": { return "Toledo"; }
      case "CIT00113": { return "Trece Martires"; }
      case "CIT00114": { return "Tuguegarao"; }
      case "CIT00115": { return "Urdaneta"; }
      case "CIT00116": { return "Valencia"; }
      case "CIT00117": { return "Valenzuela"; }
      case "CIT00118": { return "Victorias"; }
      case "CIT00119": { return "Vigan"; }
      case "CIT00120": { return "Zamboanga"; }
      case "CIT00121": { return "Manila"; }
      case "CIT99999": { return "Other Cities"; }
      default: {
        return item;
      }
    }
  }

  setReligionType(item: string): string {
    switch (item) {
      case "38": { return "LATTER DAY SAINTS"; }
      case "INC": { return "Iglesia Ni Cristo"; }
      case "RLG001": { return "Aglipayan (Philippine Independence Church)"; }
      case "RLG002": { return "Ang Dating Daan"; }
      case "RLG003": { return "Assemblies of God (Ilocos Norte)"; }
      case "RLG004": { return "Baptist World Alliance"; }
      case "RLG005": { return "Born Again"; }
      case "RLG006": { return "Buddhists"; }
      case "RLG007": { return "Chinese"; }
      case "RLG008": { return "Christian"; }
      case "RLG009": { return "Church of Jesus Christ and the Latter Day Saints"; }
      case "RLG010": { return "Church of the Nazarene"; }
      case "RLG011": { return "Come To Jesus Fellowship International"; }
      case "RLG012": { return "El Shaddai"; }
      case "RLG013": { return "Evangelical"; }
      case "RLG014": { return "God World Missions Church"; }
      case "RLG015": { return "Hindu"; }
      case "RLG016": { return "Iglesia ni Cristo (Church of Christ)"; }
      case "RLG017": { return "Indigenous Religion"; }
      case "RLG018": { return "Jehovah's Witnesses"; }
      case "RLG019": { return "Jesus Is Lord"; }
      case "RLG020": { return "Judaism"; }
      case "RLG021": { return "Lutheran Church in the Philippines"; }
      case "RLG022": { return "Mennonites"; }
      case "RLG023": { return "Methodist"; }
      case "RLG024": { return "Mormon"; }
      case "RLG025": { return "Mount Banahaw Holy Confederation"; }
      case "RLG026": { return "Muslim/Islamic"; }
      case "RLG028": { return "Philippine Episcopal Church"; }
      case "RLG029": { return "Presbyterian"; }
      case "RLG030": { return "Protestants"; }
      case "RLG031": { return "Rizalistas"; }
      case "RLG032": { return "Roman Catholic"; }
      case "RLG033": { return "Seventh-Day Adventists (Central Phil. Union Conf.)"; }
      case "RLG034": { return "Unitarian"; }
      case "RLG035": { return "United Church of Christ in the Philippines (UCCP)"; }
      case "RLG036": { return "Worldwide Church of God"; }
      case "RLG037": { return "PICC"; }
      case "RLG038": { return "One Way Outreach"; }
      case "RLG039": { return "Iglesia Filipina Independiente"; }
      case "RLG999": { return "Others (please specify Complete Name)"; }
      default: {
        return item;
      }
    }
  }

  setRelationType(item: string): string {
    switch (item) {
      case "REL001": return "Auntie";
      case "REL002": return "Brother";
      case "REL003": return "Brother In-Law";
      case "REL004": return "Common Law Partner";
      case "REL005": return "Daughter";
      case "REL006": return "Daughter In-Law";
      case "REL007": return "Father";
      case "REL008": return "Father In-Law";
      case "REL009": return "First Degree Cousin";
      case "REL010": return "Friend";
      case "REL011": return "Grand Father";
      case "REL012": return "Grand Mother";
      case "REL013": return "Grand Daughter";
      case "REL014": return "Grand Son";
      case "REL015": return "Guardian";
      case "REL016": return "Husband";
      case "REL017": return "Mother";
      case "REL018": return "Mother In-Law";
      case "REL019": return "Mistress";
      case "REL020": return "Nephew";
      case "REL021": return "Niece";
      case "REL022": return "Second Degree Cousin";
      case "REL023": return "Sister";
      case "REL024": return "Sister In-Law";
      case "REL025": return "Son";
      case "REL026": return "Son in-Law";
      case "REL027": return "Step Father";
      case "REL028": return "Step Mother";
      case "REL029": return "Third Degree Cousin";
      case "REL030": return "Uncle";
      case "REL031": return "Wife";
      case "REL999": return "Others";
      default: {
        return item;
      }
    }
  }

  goBack() { this.navCtrl.back(); }
}
