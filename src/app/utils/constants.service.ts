import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


//dev
// export const API_ENDPOINT = 'http://146.88.74.66:20002';
// export const APP_VERSION = 'Dev Version 1.10.6';
// export const VERSION = '1.10.6';
export const API_ENDPOINT_DEV = 'http://210.5.69.249:29173';
export const API_ENDPOINT_DOMAIN_DEV = 'http://210.5.69.249:29173';

//staging
export const API_ENDPOINT = 'http://210.5.69.249:29794';
export const API_ENDPOINT_DOMAIN = 'http://210.5.69.249:29794';
export const APP_VERSION = 'Staging Version 1.14.0 v6';
export const VERSION = '1.14.0';

//prod
// export const API_ENDPOINT = 'http://146.88.74.69:9993';
// export const API_ENDPOINT_DOMAIN = 'http://gear.goldenabc.com:9993';
// export const APP_VERSION = 'Version 1.13.0';
// export const VERSION = '1.13.0';

export const USER_GABC = 'GABC';
export const USER_GUEST = 'GUEST';

export const DEV_PASSWORD = '0729';



// export const FTP_HOST = "ftp://150.200.3.90:4444";
export const FTP_HOST = "ftp://146.88.74.69:5511";
export const FTP_USERNAME = "GEARWebService";
export const FTP_PASSWORD = "GRp@ssw0rd";

export const APP_PLATFORM = 'IOS';
export const API_KEY = 'd1wvB34K10iGNP49wib1QqOhllHjbLav';

export const FCM_LEAVE_APPROVAL = "leave_approval";
export const FCM_LEAVE = "leave";
export const FCM_AA_APPROVAL = "aa_approval";
export const FCM_AA = "aa";

export const OUTDATED_ERROR = 'OUTDATED APP';
export const ERROR_OTHER_DEVICE = 'LOGGED IN ON ANOTHER DEVICE';
export const ERROR_EXPIRED = 'SESSION EXPIRED';
export const ERROR_REQUIRED = 'SESSION IS REQUIRED';

export const ERROR_OUTDATED_HEADER = 'Update Required'
export const ERROR_OTHER_DEVICE_HEADER = 'Login Instance'
export const ERROR_EXPIRED_HEADER = 'Session Expired'
export const ERROR_REQUIRED_HEADER = 'Session Required'

export const SOMETHING_WENT_WRONG = 'Something went wrong. Please try again later.'

export const OUTDATED_MESSAGE = 'your GEAR is outdated. Please, update your app.!';
export const ERROR_MESSAGE_OTHER_DEVICE = 'Login to other device detected. Please re-login!';
export const ERROR_MESSAGE_EXPIRED = 'Current session expired. Please re-login!';
export const ERROR_MESSAGE_REQUIRED = 'Error occured. Please re-login!';

export const KEY_EMPID = 'employeeId';
export const KEY_LEAVETYPES = 'leaveTypes';
export const KEY_OTTYPES = 'otTypes';
export const KEY_MENU = 'otMenu';
export const KEY_DATEOFDUTY = 'dateOfDuty';
export const KEY_EMPDETAILS = 'empDetails';
export const KEY_HOLIDAYS = 'holidays';
export const KEY_REQTYPE = 'requestTypes';
export const KEY_SUBORDINATES = 'subordinates';
export const KEY_SUBORDINATESFOROT = 'subordinatesOT';
export const KEY_LEAVEDETAILS = 'leaveDetails';
export const KEY_DTRDETAILS = 'dtrDetails';
export const KEY_OTDETAILS = 'otDetails';
export const KEY_LOANDETAILS = 'loanDetails';
export const KEY_PURCHASEDETAILS = 'purchasedetails';
export const KEY_CHILDRENHOURRATE = 'hourrate';
export const KEY_WFHDETAILS = 'wfhDetails';

export const KEY_GUEST_MENU = 'guestMenu';
export const KEY_GUEST_DETAILS = 'guestDetails';

export const KEY_SERVER_SETTINGS = "server_settings"
export const IS_SERVER_DOMAIN = "is_server_domain"
export const IS_SERVER_DEFAULT = "is_server_default"
export const IS_SERVER_DEV = "is_server_dev"
export const IS_SERVER_SET_URL = "is_server_set_url"
export const IS_GUEST_LOGIN = "is_guest_login"
export const SERVER_URL = "server_url"

export const KEY_CALFILTER_HOLIDAY = 'cal_holiday';
export const KEY_CALFILTER_LEAVES = 'cal_leaves';
export const KEY_CALFILTER_ADVISORY = 'cal_advisory';
export const KEY_CALFILTER_WFH = 'cal_wfh';

export const KEY_CALFILTER_FORAPPROVAL_LEAVES = 'cal_forapproval_leaves';
export const KEY_CALFILTER_SUB_LEAVES = 'cal_subleave';
export const KEY_CALFILTER_SUB_ADVISORY = 'cal_subadvisory';
export const KEY_CALFILTER_SUB_WFH = 'cal_subwfh';
export const KEY_CALFILTER_FOR_APPROVAL = 'cal_forapproval';
export const KEY_CALFILTER_SHOW_ALL = 'true';

export const KEY_SESSION = "session";
export const KEY_RECORD_ID = "recordid";
export const KEY_SECURITY_STAMP = "security_stamp";
export const KEY_TOKEN = "token";
export const KEY_USER_ID = "userid"
export const KEY_USER_TYPE = "usertype"
export const KEY_ISFIRSTTIME = "isfirsttime";
export const KEY_ERROR_MESSAGE = 'NO ERROR';

export const POST_SUCCESS = '200';
export const POST_YES = 'Yes';
export const MESSAGE_CON_ERROR = 'CONNECTION ERROR';

export const LEAVE_STATUS_FOR_APPROVAL = "LVS00001";
export const LEAVE_STATUS_APPROVED = "LVS00002";
export const LEAVE_STATUS_CANCELLED = "LVS00003";
export const LEAVE_STATUS_ON_HOLD = "LVS00004";
export const LEAVE_STATUS_DISAPPROVED = "LVS00005";
export const LEAVE_STATUS_SUBMITTED = "LVS00006";
export const LEAVE_STATUS_ADJUSTED = "LVS00009";
export const LEAVE_STATUS_PLANNED = "LVS00008";
export const LEAVE_STATUS_POSTED = "LVS00007";

export const REASON_CODE_PERSONAL = "LVR00001";
export const REASON_CODE_NOT_FEEL = "LVR00002";
export const REASON_CODE_DTR = "LVR00003";
export const REASON_CODE_CANCEL = "LVR00004";

export const ATD_TYPE_CODE_AUT = "ATD0001";
export const ATD_TYPE_CODE_AL = "ATD0002";
export const ATD_TYPE_CODE_OS = "ATD0003";
export const ATD_TYPE_CODE_CTO = "ATD0004";
export const ATD_TYPE_CODE_OB = "ATD0005";
export const ATD_TYPE_CODE_AS = "ATD0010";
export const ATD_TYPE_CODE_WFH = "ATD0013";

export const ATD_TIME_CODE_NOH = "TME0002";
export const ATD_TIME_CODE_OD = "TME0004";
export const ATD_TIME_CODE_HD = "TME0005";

export const ATD_REASON_CODE_FIELD = "RSN0001";
export const ATD_REASON_CODE_SEMINAR = "RSN0002";
export const ATD_REASON_CODE_POS = "RSN0003";
export const ATD_REASON_CODE_PERSONAL = "RSN0004";
export const ATD_REASON_CODE_NFW = "RSN0005";
export const ATD_REASON_CODE_WBT = "RSN0006";
export const ATD_REASON_CODE_WFH = "RSN0007";


export const CONNECTION_ERROR = "Connection interrupted. Please check if your request has been posted.";
export const CONNECTION_ERROR_TRY_AGAIN = "Connection error. Please try again later.";

export const SUCCESS_MESSAGE = "Your changes have been saved for processing";

export var  TEST = "Your changes have been saved for processing";

export var Esett  ="tesstst";

const toggleSwitch = () => {
  this.storage.get(`${KEY_EMPID}`).then((val) => {
    console.log("Constant")
      TEST =  "test";

      return "test";
  });
}

export default toggleSwitch;



@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  TEST = "test";

  constructor(
    private storage: Storage
  ) { 
    this.storage.get(`${KEY_EMPID}`).then((val) => {
      console.log("Constant")
        TEST =  "test";
    });

  }
}
