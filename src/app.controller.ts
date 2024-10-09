import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
const CashfreeBanks = [
  { name: 'AU Small Finance Bank', code: 3087, abbreviation: 'AUBLR' },
  { name: 'Airtel Payments Bank', code: 3123, abbreviation: 'AIRPR' },
  { name: 'Andhra Pragathi Grameena Bank', code: 3094, abbreviation: 'APGBR' },
  { name: 'Axis Bank', code: 3003, abbreviation: 'UTIBR' },
  { name: 'Axis Bank Corporate', code: 3071, abbreviation: 'UTIBC' },
  { name: 'Bandhan Bank - Retail Banking', code: 3088, abbreviation: 'BDBLR' },
  {
    name: 'Bandhan Bank- Corporate banking',
    code: 3079,
    abbreviation: 'BDBLC',
  },
  { name: 'Bank of Bahrain and Kuwait', code: 3095, abbreviation: 'BBKMR' },
  { name: 'Bank of Baroda - Corporate', code: 3060, abbreviation: 'BARBC' },
  {
    name: 'Bank of Baroda - Retail Banking',
    code: 3005,
    abbreviation: 'BARBR',
  },
  { name: 'Bank of India', code: 3006, abbreviation: 'BKIDR' },
  { name: 'Bank of India - Corporate', code: 3061, abbreviation: 'BKIDC' },
  { name: 'Bank of Maharashtra', code: 3007, abbreviation: 'MAHBR' },
  {
    name: 'Barclays Corporate- Corporate Banking',
    code: 3080,
    abbreviation: 'BARCC',
  },
  { name: 'Bassien Catholic Coop Bank', code: 3096, abbreviation: 'BACBC' },
  { name: 'CSB Bank Limited', code: 3010, abbreviation: 'CSBKR' },
  { name: 'Canara Bank', code: 3009, abbreviation: 'CNRBR' },
  { name: 'Capital Small Finance Bank', code: 3098, abbreviation: 'CLBLR' },
  { name: 'Central Bank of India', code: 3011, abbreviation: 'CBINR' },
  { name: 'City Union Bank', code: 3012, abbreviation: 'CIUBR' },
  { name: 'City Union Bank of Corporate', code: 3083, abbreviation: 'CIUBC' },
  { name: 'Cosmos Bank', code: 3097, abbreviation: 'COSBR' },
  { name: 'DBS Bank Ltd', code: 3017, abbreviation: 'DBSSR' },
  { name: 'DCB Bank - Corporate', code: 3062, abbreviation: 'DCBLC' },
  { name: 'DCB Bank - Personal', code: 3018, abbreviation: 'DCBLR' },
  { name: 'Deutsche Bank', code: 3016, abbreviation: 'DEUTR' },
  { name: 'Dhanlakshmi Bank', code: 3019, abbreviation: 'DLXBR' },
  { name: 'Dhanlaxmi Bank Corporate', code: 3072, abbreviation: 'DLXBC' },
  { name: 'ESAF Small Finance Bank', code: 3100, abbreviation: 'ESMFR' },
  { name: 'Equitas Small Finance Bank', code: 3076, abbreviation: 'ESFBR' },
  { name: 'Federal Bank', code: 3020, abbreviation: 'FDRLR' },
  { name: 'Fincare Bank', code: 3101, abbreviation: 'FSFBR' },
  {
    name: 'Gujarat State Co-operative Bank Limited',
    code: 3091,
    abbreviation: 'GSCBR',
  },
  { name: 'HDFC Bank', code: 3021, abbreviation: 'HDFCR' },
  { name: 'HDFC Corporate', code: 3084, abbreviation: 'HDFCC' },
  { name: 'HSBC Retail NetBanking', code: 3092, abbreviation: 'HSBCR' },
  { name: 'ICICI Bank', code: 3022, abbreviation: 'ICICR' },
  { name: 'ICICI Corporate Netbanking', code: 3073, abbreviation: 'ICICC' },
  { name: 'IDBI Bank', code: 3023, abbreviation: 'IBKLR' },
  { name: 'IDFC FIRST Bank', code: 3024, abbreviation: 'IDFBR' },
  { name: 'Indian Bank', code: 3026, abbreviation: 'IDIBR' },
  { name: 'Indian Overseas Bank', code: 3027, abbreviation: 'IOBAR' },
  { name: 'Indian Overseas Bank Corporate', code: 3081, abbreviation: 'IOBAC' },
  { name: 'IndusInd Bank', code: 3028, abbreviation: 'INDBR' },
  { name: 'Jammu and Kashmir Bank', code: 3029, abbreviation: 'JAKAR' },
  { name: 'Jana Small Finance Bank', code: 3102, abbreviation: 'JSFBR' },
  { name: 'Janata Sahakari Bank Ltd Pune', code: 3104, abbreviation: 'JSBPR' },
  { name: 'Jio Payments Bank', code: 3103, abbreviation: 'JIOPR' },
  { name: 'Kalyan Janata Sahakari Bank', code: 3105, abbreviation: 'KJSBR' },
  { name: 'Karnataka Bank Ltd', code: 3030, abbreviation: 'KARBR' },
  { name: 'Karnataka Gramin Bank', code: 3113, abbreviation: 'PKGBR' },
  { name: 'Karnataka Vikas Grameena Bank', code: 3107, abbreviation: 'KVGBR' },
  { name: 'Karur Vysya Bank', code: 3031, abbreviation: 'KVBLR' },
  { name: 'Kotak Mahindra Bank', code: 3032, abbreviation: 'KKBKR' },
  { name: 'Lakshmi Vilas Bank - Corporate', code: 3064, abbreviation: 'LAVBC' },
  {
    name: 'Laxmi Vilas Bank - Retail Net Banking',
    code: 3033,
    abbreviation: 'LAVBR',
  },
  { name: 'Maharashtra Gramin Bank', code: 3108, abbreviation: 'MAHGR' },
  { name: 'Mehsana urban Co-op Bank', code: 3109, abbreviation: 'MSNUR' },
  { name: 'NKGSB Co-op Bank', code: 3111, abbreviation: 'NKGSR' },
  {
    name: 'North East Small Finance Bank Ltd',
    code: 3110,
    abbreviation: 'NESFR',
  },
  {
    name: 'Nutan Nagarik Sahakari Bank Limited',
    code: 3112,
    abbreviation: 'NNSBR',
  },
  { name: 'Punjab & Sind Bank', code: 3037, abbreviation: 'PSIBR' },
  {
    name: 'Punjab National Bank - Corporate',
    code: 3065,
    abbreviation: 'PUNBC',
  },
  {
    name: 'Punjab National Bank - Retail Banking',
    code: 3038,
    abbreviation: 'PUNBR',
  },
  { name: 'RBL Bank', code: 3039, abbreviation: 'RATNR' },
  {
    name: 'RBL Bank Limited - Corporate Banking',
    code: 3114,
    abbreviation: 'RATNC',
  },
  { name: 'SBM Bank India', code: 3115, abbreviation: 'STCBR' },
  { name: 'Saraswat Bank', code: 3040, abbreviation: 'SRCBR' },
  { name: 'Shamrao Vithal Bank Corporate', code: 3075, abbreviation: 'SVCBC' },
  {
    name: 'Shamrao Vitthal Co-operative Bank',
    code: 3041,
    abbreviation: 'SVCBR',
  },
  { name: 'Shivalik Bank', code: 3086, abbreviation: 'SMCBR' },
  { name: 'South Indian Bank', code: 3042, abbreviation: 'SIBLR' },
  { name: 'Standard Chartered Bank', code: 3043, abbreviation: 'SCBLR' },
  { name: 'State Bank Of India', code: 3044, abbreviation: 'SBINR' },
  {
    name: 'State Bank of India - Corporate',
    code: 3066,
    abbreviation: 'SBINC',
  },
  { name: 'Suryoday Small Finance Bank', code: 3116, abbreviation: 'SURYR' },
  { name: 'TJSB Bank', code: 3119, abbreviation: 'TJSBR' },
  {
    name: 'Tamil Nadu State Co-operative Bank',
    code: 3051,
    abbreviation: 'TNSCR',
  },
  { name: 'Tamilnad Mercantile Bank Ltd', code: 3052, abbreviation: 'TMBLR' },
  { name: 'Thane Bharat Sahakari Bank Ltd', code: 3118, abbreviation: 'TBSBR' },
  {
    name: 'The Kalupur Commercial Co-Operative Bank',
    code: 3106,
    abbreviation: 'KCCBR',
  },
  {
    name: 'The Surat Peoples Co-operative Bank Limited',
    code: 3090,
    abbreviation: 'SPCBR',
  },
  { name: 'The Sutex Co-op Bank Ltd', code: 3117, abbreviation: 'SUTBR' },
  { name: 'UCO Bank', code: 3054, abbreviation: 'UCBAR' },
  { name: 'UCO Bank Corporate', code: 3122, abbreviation: 'UCBAC' },
  { name: 'Union Bank of India', code: 3055, abbreviation: 'UBINR' },
  {
    name: 'Union Bank of India - Corporate',
    code: 3067,
    abbreviation: 'UBINC',
  },
  { name: 'Utkarsh Small Finance Bank', code: 3089, abbreviation: 'UTKSR' },
  {
    name: 'Varachha Co-operative Bank Limited',
    code: 3120,
    abbreviation: 'VARAR',
  },
  { name: 'Yes Bank Corporate', code: 3077, abbreviation: 'YESBC' },
  { name: 'Yes Bank Ltd', code: 3058, abbreviation: 'YESBR' },
  {
    name: 'Zoroastrian Co-Operative Bank Ltd',
    code: 3121,
    abbreviation: 'ZCBLR',
  },
];
const EasebuzzBanks = [
  { name: 'AU Small Finance Bank', code: 'AUSFB' },
  { name: 'Axis Bank', code: 'AXB' },
  { name: 'Axis Corporate Net banking', code: 'ACNB' },
  { name: 'Bandhan Bank', code: 'BANB' },
  { name: 'Bandhan Bank Corporate', code: 'BABC' },
  { name: 'Bank of Baroda - Corporate Banking', code: 'BOBCB' },
  { name: 'Bank of Baroda - Retail Banking', code: 'BOBRB' },
  { name: 'Bank of India', code: 'BOIND' },
  { name: 'Bank of Maharashtra', code: 'BOMH' },
  { name: 'Canara Bank', code: 'CANB' },
  { name: 'Canara Bank (Erstwhile Syndicate Bank)', code: 'SYNB' },
  { name: 'Capital Small Finance Bank', code: 'CSFB' },
  { name: 'Catholic Syrian Bank', code: 'CSB' },
  { name: 'Central Bank of India', code: 'CBOI' },
  { name: 'City Union Bank', code: 'CUB' },
  { name: 'DCB Bank', code: 'DCBB' },
  { name: 'Equitas Small Finance Bank', code: 'EQSFB' },
  { name: 'Federal Bank', code: 'FEDB' },
  { name: 'HDFC Bank', code: 'HDFCB' },
  { name: 'ICICI Bank', code: 'ICICIB' },
  { name: 'ICICI Corporate', code: 'ICICICO' },
  { name: 'IDBI Bank', code: 'IDBIB' },
  { name: 'IDFC First Bank', code: 'IDFCFB' },
  { name: 'Indian Bank', code: 'INB' },
  { name: 'Indian Overseas Bank', code: 'IOB' },
  { name: 'Indian Overseas Bank - Corporate', code: 'IOBC' },
  { name: 'IndusInd Bank', code: 'INDUSB' },
  { name: 'Jammu & Kashmir Bank', code: 'JKB' },
  { name: 'Jammu & Kashmir Bank - Corporate', code: 'JKBC' },
  { name: 'Janata Sahakari Bank Ltd Pune', code: 'JSBLP' },
  { name: 'Karnataka Bank Ltd', code: 'KBL' },
  { name: 'Karur Vysya Bank', code: 'KVB' },
  { name: 'Kotak Bank', code: 'KTB' },
  { name: 'Lakshmi Vilas Bank', code: 'LVB' },
  { name: 'PNB (Erstwhile-Oriental Bank of Commerce)', code: 'OBOC' },
  { name: 'PNB (Erstwhile-United Bank of India)', code: 'UNBOI' },
  { name: 'Punjab & Sind Bank', code: 'PASB' },
  { name: 'Punjab National Bank - Corporate Banking', code: 'PNBCB' },
  { name: 'Punjab National Bank - Retail Banking', code: 'PNBRB' },
  { name: 'RBL Bank Limited', code: 'RBLBL' },
  { name: 'Saraswat Bank', code: 'SARB' },
  { name: 'South Indian Bank', code: 'SIB' },
  { name: 'Standard Chartered Bank', code: 'SCB' },
  { name: 'Standard Chartered Bank - Corporate', code: 'SCBC' },
  { name: 'State Bank of India', code: 'SBOI' },
  { name: 'State Bank of India - Corporate Banking', code: 'SBOIC' },
  { name: 'Tamilnad Mercantile Bank Ltd.', code: 'TMBL' },
  { name: 'UCO Bank', code: 'UCOB' },
  { name: 'Union Bank of India', code: 'UBOI' },
  { name: 'Union Bank of India (Erstwhile Andhra Bank)', code: 'ANB' },
  { name: 'Vijaya Bank', code: 'VIJB' },
  { name: 'Yes Bank Ltd', code: 'YESBL' },
  { name: 'Airtel Payments Bank', code: 'AIRTLM' },
  { name: 'Shivalik Bank', code: 'NBSB' },
];

const merge = [
  {
    name: 'AU Small Finance Bank',
    cf_code: 'AUBLR',
    eb_code: 'AUSFB',
  },
  {
    name: 'Airtel Payments Bank',
    cf_code: 'AIRPR',
    eb_code: 'AIRTLM',
  },
  {
    name: 'Andhra Pragathi Grameena Bank',
    cf_code: 'APGBR',
    eb_code: null,
  },
  {
    name: 'Axis Bank',
    cf_code: 'UTIBR',
    eb_code: 'AXB',
  },
  {
    name: 'Axis Bank Corporate',
    cf_code: 'UTIBC',
    eb_code: null,
  },
  {
    name: 'Bandhan Bank - Retail Banking',
    cf_code: 'BDBLR',
    eb_code: 'BANB',
  },
  {
    name: 'Bandhan Bank- Corporate banking',
    cf_code: 'BDBLC',
    eb_code: 'BABC',
  },
  {
    name: 'Bank of Bahrain and Kuwait',
    cf_code: 'BBKMR',
    eb_code: null,
  },
  {
    name: 'Bank of Baroda - Corporate',
    cf_code: 'BARBC',
    eb_code: null,
  },
  {
    name: 'Bank of Baroda - Retail Banking',
    cf_code: 'BARBR',
    eb_code: 'BOBRB',
  },
  {
    name: 'Bank of India',
    cf_code: 'BKIDR',
    eb_code: 'BOIND',
  },
  {
    name: 'Bank of India - Corporate',
    cf_code: 'BKIDC',
    eb_code: null,
  },
  {
    name: 'Bank of Maharashtra',
    cf_code: 'MAHBR',
    eb_code: 'BOMH',
  },
  {
    name: 'Barclays Corporate- Corporate Banking',
    cf_code: 'BARCC',
    eb_code: null,
  },
  {
    name: 'Bassien Catholic Coop Bank',
    cf_code: 'BACBC',
    eb_code: null,
  },
  {
    name: 'CSB Bank Limited',
    cf_code: 'CSBKR',
    eb_code: null,
  },
  {
    name: 'Canara Bank',
    cf_code: 'CNRBR',
    eb_code: 'CANB',
  },
  {
    name: 'Capital Small Finance Bank',
    cf_code: 'CLBLR',
    eb_code: 'CSFB',
  },
  {
    name: 'Central Bank of India',
    cf_code: 'CBINR',
    eb_code: 'CBOI',
  },
  {
    name: 'City Union Bank',
    cf_code: 'CIUBR',
    eb_code: 'CUB',
  },
  {
    name: 'City Union Bank of Corporate',
    cf_code: 'CIUBC',
    eb_code: null,
  },
  {
    name: 'Cosmos Bank',
    cf_code: 'COSBR',
    eb_code: null,
  },
  {
    name: 'DBS Bank Ltd',
    cf_code: 'DBSSR',
    eb_code: null,
  },
  {
    name: 'DCB Bank - Corporate',
    cf_code: 'DCBLC',
    eb_code: null,
  },
  {
    name: 'DCB Bank - Personal',
    cf_code: 'DCBLR',
    eb_code: null,
  },
  {
    name: 'Deutsche Bank',
    cf_code: 'DEUTR',
    eb_code: null,
  },
  {
    name: 'Dhanlakshmi Bank',
    cf_code: 'DLXBR',
    eb_code: null,
  },
  {
    name: 'Dhanlaxmi Bank Corporate',
    cf_code: 'DLXBC',
    eb_code: null,
  },
  {
    name: 'ESAF Small Finance Bank',
    cf_code: 'ESMFR',
    eb_code: null,
  },
  {
    name: 'Equitas Small Finance Bank',
    cf_code: 'ESFBR',
    eb_code: 'EQSFB',
  },
  {
    name: 'Federal Bank',
    cf_code: 'FDRLR',
    eb_code: 'FEDB',
  },
  {
    name: 'Fincare Bank',
    cf_code: 'FSFBR',
    eb_code: null,
  },
  {
    name: 'Gujarat State Co-operative Bank Limited',
    cf_code: 'GSCBR',
    eb_code: null,
  },
  {
    name: 'HDFC Bank',
    cf_code: 'HDFCR',
    eb_code: 'HDFCB',
  },
  {
    name: 'HDFC Corporate',
    cf_code: 'HDFCC',
    eb_code: null,
  },
  {
    name: 'HSBC Retail NetBanking',
    cf_code: 'HSBCR',
    eb_code: null,
  },
  {
    name: 'ICICI Bank',
    cf_code: 'ICICR',
    eb_code: 'ICICIB',
  },
  {
    name: 'ICICI Corporate Netbanking',
    cf_code: 'ICICC',
    eb_code: null,
  },
  {
    name: 'IDBI Bank',
    cf_code: 'IBKLR',
    eb_code: 'IDBIB',
  },
  {
    name: 'IDFC FIRST Bank',
    cf_code: 'IDFBR',
    eb_code: null,
  },
  {
    name: 'Indian Bank',
    cf_code: 'IDIBR',
    eb_code: 'INB',
  },
  {
    name: 'Indian Overseas Bank',
    cf_code: 'IOBAR',
    eb_code: 'IOB',
  },
  {
    name: 'Indian Overseas Bank Corporate',
    cf_code: 'IOBAC',
    eb_code: null,
  },
  {
    name: 'IndusInd Bank',
    cf_code: 'INDBR',
    eb_code: 'INDUSB',
  },
  {
    name: 'Jammu and Kashmir Bank',
    cf_code: 'JAKAR',
    eb_code: null,
  },
  {
    name: 'Jana Small Finance Bank',
    cf_code: 'JSFBR',
    eb_code: null,
  },
  {
    name: 'Janata Sahakari Bank Ltd Pune',
    cf_code: 'JSBPR',
    eb_code: 'JSBLP',
  },
  {
    name: 'Jio Payments Bank',
    cf_code: 'JIOPR',
    eb_code: null,
  },
  {
    name: 'Kalyan Janata Sahakari Bank',
    cf_code: 'KJSBR',
    eb_code: null,
  },
  {
    name: 'Karnataka Bank Ltd',
    cf_code: 'KARBR',
    eb_code: 'KBL',
  },
  {
    name: 'Karnataka Gramin Bank',
    cf_code: 'PKGBR',
    eb_code: null,
  },
  {
    name: 'Karnataka Vikas Grameena Bank',
    cf_code: 'KVGBR',
    eb_code: null,
  },
  {
    name: 'Karur Vysya Bank',
    cf_code: 'KVBLR',
    eb_code: 'KVB',
  },
  {
    name: 'Kotak Mahindra Bank',
    cf_code: 'KKBKR',
    eb_code: null,
  },
  {
    name: 'Lakshmi Vilas Bank - Corporate',
    cf_code: 'LAVBC',
    eb_code: null,
  },
  {
    name: 'Laxmi Vilas Bank - Retail Net Banking',
    cf_code: 'LAVBR',
    eb_code: null,
  },
  {
    name: 'Maharashtra Gramin Bank',
    cf_code: 'MAHGR',
    eb_code: null,
  },
  {
    name: 'Mehsana urban Co-op Bank',
    cf_code: 'MSNUR',
    eb_code: null,
  },
  {
    name: 'NKGSB Co-op Bank',
    cf_code: 'NKGSR',
    eb_code: null,
  },
  {
    name: 'North East Small Finance Bank Ltd',
    cf_code: 'NESFR',
    eb_code: null,
  },
  {
    name: 'Nutan Nagarik Sahakari Bank Limited',
    cf_code: 'NNSBR',
    eb_code: null,
  },
  {
    name: 'Punjab & Sind Bank',
    cf_code: 'PSIBR',
    eb_code: 'PASB',
  },
  {
    name: 'Punjab National Bank - Corporate',
    cf_code: 'PUNBC',
    eb_code: null,
  },
  {
    name: 'Punjab National Bank - Retail Banking',
    cf_code: 'PUNBR',
    eb_code: 'PNBRB',
  },
  {
    name: 'RBL Bank',
    cf_code: 'RATNR',
    eb_code: null,
  },
  {
    name: 'RBL Bank Limited - Corporate Banking',
    cf_code: 'RATNC',
    eb_code: null,
  },
  {
    name: 'SBM Bank India',
    cf_code: 'STCBR',
    eb_code: null,
  },
  {
    name: 'Saraswat Bank',
    cf_code: 'SRCBR',
    eb_code: 'SARB',
  },
  {
    name: 'Shamrao Vithal Bank Corporate',
    cf_code: 'SVCBC',
    eb_code: null,
  },
  {
    name: 'Shamrao Vitthal Co-operative Bank',
    cf_code: 'SVCBR',
    eb_code: null,
  },
  {
    name: 'Shivalik Bank',
    cf_code: 'SMCBR',
    eb_code: 'NBSB',
  },
  {
    name: 'South Indian Bank',
    cf_code: 'SIBLR',
    eb_code: 'SIB',
  },
  {
    name: 'Standard Chartered Bank',
    cf_code: 'SCBLR',
    eb_code: 'SCB',
  },
  {
    name: 'State Bank Of India',
    cf_code: 'SBINR',
    eb_code: null,
  },
  {
    name: 'State Bank of India - Corporate',
    cf_code: 'SBINC',
    eb_code: null,
  },
  {
    name: 'Suryoday Small Finance Bank',
    cf_code: 'SURYR',
    eb_code: null,
  },
  {
    name: 'TJSB Bank',
    cf_code: 'TJSBR',
    eb_code: null,
  },
  {
    name: 'Tamil Nadu State Co-operative Bank',
    cf_code: 'TNSCR',
    eb_code: null,
  },
  {
    name: 'Tamilnad Mercantile Bank Ltd',
    cf_code: 'TMBLR',
    eb_code: null,
  },
  {
    name: 'Thane Bharat Sahakari Bank Ltd',
    cf_code: 'TBSBR',
    eb_code: null,
  },
  {
    name: 'The Kalupur Commercial Co-Operative Bank',
    cf_code: 'KCCBR',
    eb_code: null,
  },
  {
    name: 'The Surat Peoples Co-operative Bank Limited',
    cf_code: 'SPCBR',
    eb_code: null,
  },
  {
    name: 'The Sutex Co-op Bank Ltd',
    cf_code: 'SUTBR',
    eb_code: null,
  },
  {
    name: 'UCO Bank',
    cf_code: 'UCBAR',
    eb_code: 'UCOB',
  },
  {
    name: 'UCO Bank Corporate',
    cf_code: 'UCBAC',
    eb_code: null,
  },
  {
    name: 'Union Bank of India',
    cf_code: 'UBINR',
    eb_code: 'UBOI',
  },
  {
    name: 'Union Bank of India - Corporate',
    cf_code: 'UBINC',
    eb_code: null,
  },
  {
    name: 'Utkarsh Small Finance Bank',
    cf_code: 'UTKSR',
    eb_code: null,
  },
  {
    name: 'Varachha Co-operative Bank Limited',
    cf_code: 'VARAR',
    eb_code: null,
  },
  {
    name: 'Yes Bank Corporate',
    cf_code: 'YESBC',
    eb_code: null,
  },
  {
    name: 'Yes Bank Ltd',
    cf_code: 'YESBR',
    eb_code: 'YESBL',
  },
  {
    name: 'Zoroastrian Co-Operative Bank Ltd',
    cf_code: 'ZCBLR',
    eb_code: null,
  },
  {
    name: 'Axis Corporate Net banking',
    cf_code: null,
    eb_code: 'ACNB',
  },
  {
    name: 'Bank of Baroda - Corporate Banking',
    cf_code: null,
    eb_code: 'BOBCB',
  },
  {
    name: 'Canara Bank (Erstwhile Syndicate Bank)',
    cf_code: null,
    eb_code: 'SYNB',
  },
  {
    name: 'Catholic Syrian Bank',
    cf_code: null,
    eb_code: 'CSB',
  },
  {
    name: 'DCB Bank',
    cf_code: null,
    eb_code: 'DCBB',
  },
  {
    name: 'ICICI Corporate',
    cf_code: null,
    eb_code: 'ICICICO',
  },
  {
    name: 'IDFC First Bank',
    cf_code: null,
    eb_code: 'IDFCFB',
  },
  {
    name: 'Indian Overseas Bank - Corporate',
    cf_code: null,
    eb_code: 'IOBC',
  },
  {
    name: 'Jammu & Kashmir Bank',
    cf_code: null,
    eb_code: 'JKB',
  },
  {
    name: 'Jammu & Kashmir Bank - Corporate',
    cf_code: null,
    eb_code: 'JKBC',
  },
  {
    name: 'Kotak Bank',
    cf_code: null,
    eb_code: 'KTB',
  },
  {
    name: 'Lakshmi Vilas Bank',
    cf_code: null,
    eb_code: 'LVB',
  },
  {
    name: 'PNB (Erstwhile-Oriental Bank of Commerce)',
    cf_code: null,
    eb_code: 'OBOC',
  },
  {
    name: 'PNB (Erstwhile-United Bank of India)',
    cf_code: null,
    eb_code: 'UNBOI',
  },
  {
    name: 'Punjab National Bank - Corporate Banking',
    cf_code: null,
    eb_code: 'PNBCB',
  },
  {
    name: 'RBL Bank Limited',
    cf_code: null,
    eb_code: 'RBLBL',
  },
  {
    name: 'Standard Chartered Bank - Corporate',
    cf_code: null,
    eb_code: 'SCBC',
  },
  {
    name: 'State Bank of India',
    cf_code: null,
    eb_code: 'SBOI',
  },
  {
    name: 'State Bank of India - Corporate Banking',
    cf_code: null,
    eb_code: 'SBOIC',
  },
  {
    name: 'Tamilnad Mercantile Bank Ltd.',
    cf_code: null,
    eb_code: 'TMBL',
  },
  {
    name: 'Union Bank of India (Erstwhile Andhra Bank)',
    cf_code: null,
    eb_code: 'ANB',
  },
  {
    name: 'Vijaya Bank',
    cf_code: null,
    eb_code: 'VIJB',
  },
];

const filter = [
  {
    name: 'Airtel Payments Bank',
    cf_code: 'AIRPR',
    eb_code: 'AIRTLM',
  },
  {
    name: 'Andhra Pragathi Grameena Bank',
    cf_code: 'APGBR',
    eb_code: null,
  },
  {
    name: 'AU Small Finance Bank',
    cf_code: 'AUBLR',
    eb_code: 'AUSFB',
  },
  {
    name: 'Axis Bank',
    cf_code: 'UTIBR',
    eb_code: 'AXB',
  },
  {
    name: 'Axis Bank Corporate',
    cf_code: 'UTIBC',
    eb_code: 'ACNB',
  },
  {
    name: 'Bandhan Bank - Retail Banking',
    cf_code: 'BDBLR',
    eb_code: 'BANB',
  },
  {
    name: 'Bandhan Bank- Corporate banking',
    cf_code: 'BDBLC',
    eb_code: 'BABC',
  },
  {
    name: 'Bank of Bahrain and Kuwait',
    cf_code: 'BBKMR',
    eb_code: null,
  },
  {
    name: 'Bank of Baroda - Corporate',
    cf_code: 'BARBC',
    eb_code: 'BOBCB',
  },
  {
    name: 'Bank of Baroda - Retail Banking',
    cf_code: 'BARBR',
    eb_code: 'BOBRB',
  },
  {
    name: 'Bank of India',
    cf_code: 'BKIDR',
    eb_code: 'BOIND',
  },
  {
    name: 'Bank of India - Corporate',
    cf_code: 'BKIDC',
    eb_code: null,
  },
  {
    name: 'Bank of Maharashtra',
    cf_code: 'MAHBR',
    eb_code: 'BOMH',
  },
  {
    name: 'Barclays Corporate- Corporate Banking',
    cf_code: 'BARCC',
    eb_code: null,
  },
  {
    name: 'Bassien Catholic Coop Bank',
    cf_code: 'BACBC',
    eb_code: null,
  },
  {
    name: 'Canara Bank',
    cf_code: 'CNRBR',
    eb_code: 'CANB',
  },
  {
    name: 'Canara Bank (Erstwhile Syndicate Bank)',
    cf_code: null,
    eb_code: 'SYNB',
  },
  {
    name: 'Capital Small Finance Bank',
    cf_code: 'CLBLR',
    eb_code: 'CSFB',
  },
  {
    name: 'Catholic Syrian Bank',
    cf_code: 'CSBKR',
    eb_code: 'CSB',
  },
  {
    name: 'Central Bank of India',
    cf_code: 'CBINR',
    eb_code: 'CBOI',
  },
  {
    name: 'City Union Bank',
    cf_code: 'CIUBR',
    eb_code: 'CUB',
  },
  {
    name: 'City Union Bank of Corporate',
    cf_code: 'CIUBC',
    eb_code: null,
  },
  {
    name: 'Cosmos Bank',
    cf_code: 'COSBR',
    eb_code: null,
  },
  {
    name: 'DBS Bank Ltd',
    cf_code: 'DBSSR',
    eb_code: null,
  },
  {
    name: 'DCB Bank',
    cf_code: 'DCBLR',
    eb_code: 'DCBB',
  },
  {
    name: 'DCB Bank - Corporate',
    cf_code: 'DCBLC',
    eb_code: null,
  },
  {
    name: 'Deutsche Bank',
    cf_code: 'DEUTR',
    eb_code: null,
  },
  {
    name: 'Dhanlakshmi Bank',
    cf_code: 'DLXBR',
    eb_code: null,
  },
  {
    name: 'Dhanlaxmi Bank Corporate',
    cf_code: 'DLXBC',
    eb_code: null,
  },
  {
    name: 'Equitas Small Finance Bank',
    cf_code: 'ESFBR',
    eb_code: 'EQSFB',
  },
  {
    name: 'ESAF Small Finance Bank',
    cf_code: 'ESMFR',
    eb_code: null,
  },
  {
    name: 'Federal Bank',
    cf_code: 'FDRLR',
    eb_code: 'FEDB',
  },
  {
    name: 'Fincare Bank',
    cf_code: 'FSFBR',
    eb_code: null,
  },
  {
    name: 'Gujarat State Co-operative Bank Limited',
    cf_code: 'GSCBR',
    eb_code: null,
  },
  {
    name: 'HDFC Bank',
    cf_code: 'HDFCR',
    eb_code: 'HDFCB',
  },
  {
    name: 'HDFC Corporate',
    cf_code: 'HDFCC',
    eb_code: null,
  },
  {
    name: 'HSBC Retail NetBanking',
    cf_code: 'HSBCR',
    eb_code: null,
  },
  {
    name: 'ICICI Bank',
    cf_code: 'ICICR',
    eb_code: 'ICICIB',
  },
  {
    name: 'ICICI Corporate',
    cf_code: 'ICICC',
    eb_code: 'ICICICO',
  },
  {
    name: 'IDBI Bank',
    cf_code: 'IBKLR',
    eb_code: 'IDBIB',
  },
  {
    name: 'IDFC First Bank',
    cf_code: 'IDFBR',
    eb_code: 'IDFCFB',
  },
  {
    name: 'Indian Bank',
    cf_code: 'IDIBR',
    eb_code: 'INB',
  },
  {
    name: 'Indian Overseas Bank',
    cf_code: 'IOBAR',
    eb_code: 'IOB',
  },
  {
    name: 'Indian Overseas Bank - Corporate',
    cf_code: 'IOBAC',
    eb_code: 'IOBC',
  },
  {
    name: 'IndusInd Bank',
    cf_code: 'INDBR',
    eb_code: 'INDUSB',
  },
  {
    name: 'Jammu & Kashmir Bank',
    cf_code: 'JAKAR',
    eb_code: 'JKB',
  },
  {
    name: 'Jammu & Kashmir Bank - Corporate',
    cf_code: null,
    eb_code: 'JKBC',
  },
  {
    name: 'Jana Small Finance Bank',
    cf_code: 'JSFBR',
    eb_code: null,
  },
  {
    name: 'Janata Sahakari Bank Ltd Pune',
    cf_code: 'JSBPR',
    eb_code: 'JSBLP',
  },
  {
    name: 'Jio Payments Bank',
    cf_code: 'JIOPR',
    eb_code: null,
  },
  {
    name: 'Kalyan Janata Sahakari Bank',
    cf_code: 'KJSBR',
    eb_code: null,
  },
  {
    name: 'Karnataka Bank Ltd',
    cf_code: 'KARBR',
    eb_code: 'KBL',
  },
  {
    name: 'Karnataka Gramin Bank',
    cf_code: 'PKGBR',
    eb_code: null,
  },
  {
    name: 'Karnataka Vikas Grameena Bank',
    cf_code: 'KVGBR',
    eb_code: null,
  },
  {
    name: 'Karur Vysya Bank',
    cf_code: 'KVBLR',
    eb_code: 'KVB',
  },
  {
    name: 'Kotak Bank',
    cf_code: null,
    eb_code: 'KTB',
  },
  {
    name: 'Kotak Mahindra Bank',
    cf_code: 'KKBKR',
    eb_code: null,
  },
  {
    name: 'Lakshmi Vilas Bank',
    cf_code: 'LAVBR',
    eb_code: 'LVB',
  },
  {
    name: 'Lakshmi Vilas Bank - Corporate',
    cf_code: 'LAVBC',
    eb_code: null,
  },
  {
    name: 'Maharashtra Gramin Bank',
    cf_code: 'MAHGR',
    eb_code: null,
  },
  {
    name: 'Mehsana urban Co-op Bank',
    cf_code: 'MSNUR',
    eb_code: null,
  },
  {
    name: 'NKGSB Co-op Bank',
    cf_code: 'NKGSR',
    eb_code: null,
  },
  {
    name: 'North East Small Finance Bank Ltd',
    cf_code: 'NESFR',
    eb_code: null,
  },
  {
    name: 'Nutan Nagarik Sahakari Bank Limited',
    cf_code: 'NNSBR',
    eb_code: null,
  },
  {
    name: 'PNB (Erstwhile-Oriental Bank of Commerce)',
    cf_code: null,
    eb_code: 'OBOC',
  },
  {
    name: 'PNB (Erstwhile-United Bank of India)',
    cf_code: null,
    eb_code: 'UNBOI',
  },
  {
    name: 'Punjab & Sind Bank',
    cf_code: 'PSIBR',
    eb_code: 'PASB',
  },
  {
    name: 'Punjab National Bank - Corporate',
    cf_code: 'PUNBC',
    eb_code: 'PNBCB',
  },
  {
    name: 'Punjab National Bank - Retail Banking',
    cf_code: 'PUNBR',
    eb_code: 'PNBRB',
  },
  {
    name: 'RBL Bank',
    cf_code: 'RATNR',
    eb_code: 'RBLBL',
  },
  {
    name: 'RBL Bank Limited - Corporate Banking',
    cf_code: 'RATNC',
    eb_code: null,
  },
  {
    name: 'Saraswat Bank',
    cf_code: 'SRCBR',
    eb_code: 'SARB',
  },
  {
    name: 'SBM Bank India',
    cf_code: 'STCBR',
    eb_code: null,
  },
  {
    name: 'Shamrao Vithal Bank Corporate',
    cf_code: 'SVCBC',
    eb_code: null,
  },
  {
    name: 'Shamrao Vitthal Co-operative Bank',
    cf_code: 'SVCBR',
    eb_code: null,
  },
  {
    name: 'Shivalik Bank',
    cf_code: 'SMCBR',
    eb_code: 'NBSB',
  },
  {
    name: 'South Indian Bank',
    cf_code: 'SIBLR',
    eb_code: 'SIB',
  },
  {
    name: 'Standard Chartered Bank',
    cf_code: 'SCBLR',
    eb_code: 'SCB',
  },
  {
    name: 'Standard Chartered Bank - Corporate',
    cf_code: null,
    eb_code: 'SCBC',
  },
  {
    name: 'State Bank of India',
    cf_code: 'SBINR',
    eb_code: 'SBOI',
  },
  {
    name: 'State Bank of India - Corporate',
    cf_code: 'SBINC',
    eb_code: 'SBOIC',
  },
  {
    name: 'Suryoday Small Finance Bank',
    cf_code: 'SURYR',
    eb_code: null,
  },
  {
    name: 'Tamil Nadu State Co-operative Bank',
    cf_code: 'TNSCR',
    eb_code: null,
  },
  {
    name: 'Tamilnad Mercantile Bank Ltd',
    cf_code: 'TMBLR',
    eb_code: 'TMBL',
  },
  {
    name: 'Thane Bharat Sahakari Bank Ltd',
    cf_code: 'TBSBR',
    eb_code: null,
  },
  {
    name: 'The Kalupur Commercial Co-Operative Bank',
    cf_code: 'KCCBR',
    eb_code: null,
  },
  {
    name: 'The Surat Peoples Co-operative Bank Limited',
    cf_code: 'SPCBR',
    eb_code: null,
  },
  {
    name: 'The Sutex Co-op Bank Ltd',
    cf_code: 'SUTBR',
    eb_code: null,
  },
  {
    name: 'TJSB Bank',
    cf_code: 'TJSBR',
    eb_code: null,
  },
  {
    name: 'UCO Bank',
    cf_code: 'UCBAR',
    eb_code: 'UCOB',
  },
  {
    name: 'UCO Bank Corporate',
    cf_code: 'UCBAC',
    eb_code: null,
  },
  {
    name: 'Union Bank of India',
    cf_code: 'UBINR',
    eb_code: 'UBOI',
  },
  {
    name: 'Union Bank of India - Corporate',
    cf_code: 'UBINC',
    eb_code: null,
  },
  {
    name: 'Union Bank of India (Erstwhile Andhra Bank)',
    cf_code: null,
    eb_code: 'ANB',
  },
  {
    name: 'Utkarsh Small Finance Bank',
    cf_code: 'UTKSR',
    eb_code: null,
  },
  {
    name: 'Varachha Co-operative Bank Limited',
    cf_code: 'VARAR',
    eb_code: null,
  },
  {
    name: 'Vijaya Bank',
    cf_code: null,
    eb_code: 'VIJB',
  },
  {
    name: 'Yes Bank Corporate',
    cf_code: 'YESBC',
    eb_code: null,
  },
  {
    name: 'Yes Bank Ltd',
    cf_code: 'YESBR',
    eb_code: 'YESBL',
  },
  {
    name: 'Zoroastrian Co-Operative Bank Ltd',
    cf_code: 'ZCBLR',
    eb_code: null,
  },
];

const filtered = [
  {
    name: "Airtel Payments Bank",
    cf_code: "AIRPR",
    eb_code: "AIRTLM",
    enumName: "NB_AIRTEL_PAYMENTS_BANK",
  },
  {
    name: "Andhra Pragathi Grameena Bank",
    cf_code: "APGBR",
    eb_code: null,
    enumName: "NB_ANDHRA_PRAGATHI_GRAMEENA_BANK",
  },
  {
    name: "AU Small Finance Bank",
    cf_code: "AUBLR",
    eb_code: "AUSFB",
    enumName: "NB_AU_SMALL_FINANCE_BANK",
  },
  {
    name: "Axis Bank",
    cf_code: "UTIBR",
    eb_code: "AXB",
    enumName: "NB_AXIS_BANK",
  },
  {
    name: "Axis Bank Corporate",
    cf_code: "UTIBC",
    eb_code: "ACNB",
    enumName: "NB_AXIS_BANK_CORPORATE",
  },
  {
    name: "Bandhan Bank - Retail Banking",
    cf_code: "BDBLR",
    eb_code: "BANB",
    enumName: "NB_BANDHAN_BANK_RETAIL_BANKING",
  },
  {
    name: "Bandhan Bank- Corporate banking",
    cf_code: "BDBLC",
    eb_code: "BABC",
    enumName: "NB_BANDHAN_BANK_CORPORATE_BANKING",
  },
  {
    name: "Bank of Bahrain and Kuwait",
    cf_code: "BBKMR",
    eb_code: null,
    enumName: "NB_BANK_OF_BAHRAIN_AND_KUWAIT",
  },
  {
    name: "Bank of Baroda - Corporate",
    cf_code: "BARBC",
    eb_code: "BOBCB",
    enumName: "NB_BANK_OF_BARODA_CORPORATE",
  },
  {
    name: "Bank of Baroda - Retail Banking",
    cf_code: "BARBR",
    eb_code: "BOBRB",
    enumName: "NB_BANK_OF_BARODA_RETAIL_BANKING",
  },
  {
    name: "Bank of India",
    cf_code: "BKIDR",
    eb_code: "BOIND",
    enumName: "NB_BANK_OF_INDIA",
  },
  {
    name: "Bank of India - Corporate",
    cf_code: "BKIDC",
    eb_code: null,
    enumName: "NB_BANK_OF_INDIA_CORPORATE",
  },
  {
    name: "Bank of Maharashtra",
    cf_code: "MAHBR",
    eb_code: "BOMH",
    enumName: "NB_BANK_OF_MAHARASHTRA",
  },
  {
    name: "Barclays Corporate- Corporate Banking",
    cf_code: "BARCC",
    eb_code: null,
    enumName: "NB_BARCLAYS_CORPORATE_CORPORATE_BANKING",
  },
  {
    name: "Bassien Catholic Coop Bank",
    cf_code: "BACBC",
    eb_code: null,
    enumName: "NB_BASSIEN_CATHOLIC_COOP_BANK",
  },
  {
    name: "Canara Bank",
    cf_code: "CNRBR",
    eb_code: "CANB",
    enumName: "NB_CANARA_BANK",
  },
  {
    name: "Canara Bank (Erstwhile Syndicate Bank)",
    cf_code: null,
    eb_code: "SYNB",
    enumName: "NB_CANARA_BANK_ERSTWHILE_SYNDICATE_BANK",
  },
  {
    name: "Capital Small Finance Bank",
    cf_code: "CLBLR",
    eb_code: "CSFB",
    enumName: "NB_CAPITAL_SMALL_FINANCE_BANK",
  },
  {
    name: "Catholic Syrian Bank",
    cf_code: "CSBKR",
    eb_code: "CSB",
    enumName: "NB_CATHOLIC_SYRIAN_BANK",
  },
  {
    name: "Central Bank of India",
    cf_code: "CBINR",
    eb_code: "CBOI",
    enumName: "NB_CENTRAL_BANK_OF_INDIA",
  },
  {
    name: "City Union Bank",
    cf_code: "CIUBR",
    eb_code: "CUB",
    enumName: "NB_CITY_UNION_BANK",
  },
  {
    name: "City Union Bank of Corporate",
    cf_code: "CIUBC",
    eb_code: null,
    enumName: "NB_CITY_UNION_BANK_OF_CORPORATE",
  },
  {
    name: "Cosmos Bank",
    cf_code: "COSBR",
    eb_code: null,
    enumName: "NB_COSMOS_BANK",
  },
  {
    name: "DBS Bank Ltd",
    cf_code: "DBSSR",
    eb_code: null,
    enumName: "NB_DBS_BANK_LTD",
  },
  {
    name: "DCB Bank",
    cf_code: "DCBLR",
    eb_code: "DCBB",
    enumName: "NB_DCB_BANK",
  },
  {
    name: "DCB Bank - Corporate",
    cf_code: "DCBLC",
    eb_code: null,
    enumName: "NB_DCB_BANK_CORPORATE",
  },
  {
    name: "Deutsche Bank",
    cf_code: "DEUTR",
    eb_code: null,
    enumName: "NB_DEUTSCHE_BANK",
  },
  {
    name: "Dhanlakshmi Bank",
    cf_code: "DLXBR",
    eb_code: null,
    enumName: "NB_DHANLAKSHMI_BANK",
  },
  {
    name: "Dhanlaxmi Bank Corporate",
    cf_code: "DLXBC",
    eb_code: null,
    enumName: "NB_DHANLAXMI_BANK_CORPORATE",
  },
  {
    name: "Equitas Small Finance Bank",
    cf_code: "ESFBR",
    eb_code: "EQSFB",
    enumName: "NB_EQUITAS_SMALL_FINANCE_BANK",
  },
  {
    name: "ESAF Small Finance Bank",
    cf_code: "ESMFR",
    eb_code: null,
    enumName: "NB_ESAF_SMALL_FINANCE_BANK",
  },
  {
    name: "Federal Bank",
    cf_code: "FDRLR",
    eb_code: "FEDB",
    enumName: "NB_FEDERAL_BANK",
  },
  {
    name: "Fincare Bank",
    cf_code: "FSFBR",
    eb_code: null,
    enumName: "NB_FINCARE_BANK",
  },
  {
    name: "Gujarat State Co-operative Bank Limited",
    cf_code: "GSCBR",
    eb_code: null,
    enumName: "NB_GUJARAT_STATE_CO_OPERATIVE_BANK_LIMITED",
  },
  {
    name: "HDFC Bank",
    cf_code: "HDFCR",
    eb_code: "HDFCB",
    enumName: "NB_HDFC_BANK",
  },
  {
    name: "HDFC Corporate",
    cf_code: "HDFCC",
    eb_code: null,
    enumName: "NB_HDFC_CORPORATE",
  },
  {
    name: "HSBC Retail NetBanking",
    cf_code: "HSBCR",
    eb_code: null,
    enumName: "NB_HSBC_RETAIL_NETBANKING",
  },
  {
    name: "ICICI Bank",
    cf_code: "ICICR",
    eb_code: "ICICIB",
    enumName: "NB_ICICI_BANK",
  },
  {
    name: "ICICI Corporate",
    cf_code: "ICICC",
    eb_code: "ICICICO",
    enumName: "NB_ICICI_CORPORATE",
  },
  {
    name: "IDBI Bank",
    cf_code: "IBKLR",
    eb_code: "IDBIB",
    enumName: "NB_IDBI_BANK",
  },
  {
    name: "IDFC First Bank",
    cf_code: "IDFBR",
    eb_code: "IDFCFB",
    enumName: "NB_IDFC_FIRST_BANK",
  },
  {
    name: "Indian Bank",
    cf_code: "IDIBR",
    eb_code: "INB",
    enumName: "NB_INDIAN_BANK",
  },
  {
    name: "Indian Overseas Bank",
    cf_code: "IOBAR",
    eb_code: "IOB",
    enumName: "NB_INDIAN_OVERSEAS_BANK",
  },
  {
    name: "Indian Overseas Bank - Corporate",
    cf_code: "IOBAC",
    eb_code: "IOBC",
    enumName: "NB_INDIAN_OVERSEAS_BANK_CORPORATE",
  },
  {
    name: "IndusInd Bank",
    cf_code: "INDBR",
    eb_code: "INDUSB",
    enumName: "NB_INDUSIND_BANK",
  },
  {
    name: "Jammu & Kashmir Bank",
    cf_code: "JAKAR",
    eb_code: "JKB",
    enumName: "NB_JAMMU_AND_KASHMIR_BANK",
  },
  {
    name: "Jammu & Kashmir Bank - Corporate",
    cf_code: null,
    eb_code: "JKBC",
    enumName: "NB_JAMMU_AND_KASHMIR_BANK_CORPORATE",
  },
  {
    name: "Jana Small Finance Bank",
    cf_code: "JSFBR",
    eb_code: null,
    enumName: "NB_JANA_SMALL_FINANCE_BANK",
  },
  {
    name: "Janata Sahakari Bank Ltd Pune",
    cf_code: "JSBPR",
    eb_code: "JSBLP",
    enumName: "NB_JANATA_SAHAKARI_BANK_LTD_PUNE",
  },
  {
    name: "Jio Payments Bank",
    cf_code: "JIOPR",
    eb_code: null,
    enumName: "NB_JIO_PAYMENTS_BANK",
  },
  {
    name: "Kalyan Janata Sahakari Bank",
    cf_code: "KJSBR",
    eb_code: null,
    enumName: "NB_KALYAN_JANATA_SAHAKARI_BANK",
  },
  {
    name: "Karnataka Bank Ltd",
    cf_code: "KARBR",
    eb_code: "KBL",
    enumName: "NB_KARNATAKA_BANK_LTD",
  },
  {
    name: "Karnataka Gramin Bank",
    cf_code: "PKGBR",
    eb_code: null,
    enumName: "NB_KARNATAKA_GRAMIN_BANK",
  },
  {
    name: "Karnataka Vikas Grameena Bank",
    cf_code: "KVGBR",
    eb_code: null,
    enumName: "NB_KARNATAKA_VIKAS_GRAMEENA_BANK",
  },
  {
    name: "Karur Vysya Bank",
    cf_code: "KVBLR",
    eb_code: "KVB",
    enumName: "NB_KARUR_VYSYA_BANK",
  },
  {
    name: "Kotak Bank",
    cf_code: null,
    eb_code: "KTB",
    enumName: "NB_KOTAK_BANK",
  },
  {
    name: "Kotak Mahindra Bank",
    cf_code: "KKBKR",
    eb_code: null,
    enumName: "NB_KOTAK_MAHINDRA_BANK",
  },
  {
    name: "Lakshmi Vilas Bank",
    cf_code: "LAVBR",
    eb_code: "LVB",
    enumName: "NB_LAKSHMI_VILAS_BANK",
  },
  {
    name: "Lakshmi Vilas Bank - Corporate",
    cf_code: "LAVBC",
    eb_code: null,
    enumName: "NB_LAKSHMI_VILAS_BANK_CORPORATE",
  },
  {
    name: "Maharashtra Gramin Bank",
    cf_code: "MAHGR",
    eb_code: null,
    enumName: "NB_MAHARASHTRA_GRAMIN_BANK",
  },
  {
    name: "Mehsana urban Co-op Bank",
    cf_code: "MSNUR",
    eb_code: null,
    enumName: "NB_MEHSANA_URBAN_CO_OP_BANK",
  },
  {
    name: "NKGSB Co-op Bank",
    cf_code: "NKGSR",
    eb_code: null,
    enumName: "NB_NKGSB_CO_OP_BANK",
  },
  {
    name: "North East Small Finance Bank Ltd",
    cf_code: "NESFR",
    eb_code: null,
    enumName: "NB_NORTH_EAST_SMALL_FINANCE_BANK_LTD",
  },
  {
    name: "Nutan Nagarik Sahakari Bank Limited",
    cf_code: "NNSBR",
    eb_code: null,
    enumName: "NB_NUTAN_NAGARIK_SAHAKARI_BANK_LIMITED",
  },
  {
    name: "PNB (Erstwhile-Oriental Bank of Commerce)",
    cf_code: null,
    eb_code: "OBOC",
    enumName: "NB_PNB_ERSTWHILE_ORIENTAL_BANK_OF_COMMERCE",
  },
  {
    name: "PNB (Erstwhile-United Bank of India)",
    cf_code: null,
    eb_code: "UNBOI",
    enumName: "NB_PNB_ERSTWHILE_UNITED_BANK_OF_INDIA",
  },
  {
    name: "Punjab & Sind Bank",
    cf_code: "PSIBR",
    eb_code: "PASB",
    enumName: "NB_PUNJAB_AND_SIND_BANK",
  },
  {
    name: "Punjab National Bank - Corporate",
    cf_code: "PUNBC",
    eb_code: "PNBCB",
    enumName: "NB_PUNJAB_NATIONAL_BANK_CORPORATE",
  },
  {
    name: "Punjab National Bank - Retail Banking",
    cf_code: "PUNBR",
    eb_code: "PNBRB",
    enumName: "NB_PUNJAB_NATIONAL_BANK_RETAIL_BANKING",
  },
  {
    name: "RBL Bank",
    cf_code: "RATNR",
    eb_code: "RBLBL",
    enumName: "NB_RBL_BANK",
  },
  {
    name: "RBL Bank Limited - Corporate Banking",
    cf_code: "RATNC",
    eb_code: null,
    enumName: "NB_RBL_BANK_LIMITED_CORPORATE_BANKING",
  },
  {
    name: "Saraswat Bank",
    cf_code: "SRCBR",
    eb_code: "SARB",
    enumName: "NB_SARASWAT_BANK",
  },
  {
    name: "SBM Bank India",
    cf_code: "STCBR",
    eb_code: null,
    enumName: "NB_SBM_BANK_INDIA",
  },
  {
    name: "Shamrao Vithal Bank Corporate",
    cf_code: "SVCBC",
    eb_code: null,
    enumName: "NB_SHAMRAO_VITHAL_BANK_CORPORATE",
  },
  {
    name: "Shamrao Vitthal Co-operative Bank",
    cf_code: "SVCBR",
    eb_code: null,
    enumName: "NB_SHAMRAO_VITTHAL_CO_OPERATIVE_BANK",
  },
  {
    name: "Shivalik Bank",
    cf_code: "SMCBR",
    eb_code: "NBSB",
    enumName: "NB_SHIVALIK_BANK",
  },
  {
    name: "South Indian Bank",
    cf_code: "SIBLR",
    eb_code: "SIB",
    enumName: "NB_SOUTH_INDIAN_BANK",
  },
  {
    name: "Standard Chartered Bank",
    cf_code: "SCBLR",
    eb_code: "SCB",
    enumName: "NB_STANDARD_CHARTERED_BANK",
  },
  {
    name: "Standard Chartered Bank - Corporate",
    cf_code: null,
    eb_code: "SCBC",
    enumName: "NB_STANDARD_CHARTERED_BANK_CORPORATE",
  },
  {
    name: "State Bank of India",
    cf_code: "SBINR",
    eb_code: "SBOI",
    enumName: "NB_STATE_BANK_OF_INDIA",
  },
  {
    name: "State Bank of India - Corporate",
    cf_code: "SBINC",
    eb_code: "SBOIC",
    enumName: "NB_STATE_BANK_OF_INDIA_CORPORATE",
  },
  {
    name: "Suryoday Small Finance Bank",
    cf_code: "SURYR",
    eb_code: null,
    enumName: "NB_SURYODAY_SMALL_FINANCE_BANK",
  },
  {
    name: "Tamil Nadu State Co-operative Bank",
    cf_code: "TNSCR",
    eb_code: null,
    enumName: "NB_TAMIL_NADU_STATE_CO_OPERATIVE_BANK",
  },
  {
    name: "Tamilnad Mercantile Bank Ltd",
    cf_code: "TMBLR",
    eb_code: "TMBL",
    enumName: "NB_TAMILNAD_MERCANTILE_BANK_LTD",
  },
  {
    name: "Thane Bharat Sahakari Bank Ltd",
    cf_code: "TBSBR",
    eb_code: null,
    enumName: "NB_THANE_BHARAT_SAHAKARI_BANK_LTD",
  },
  {
    name: "The Kalupur Commercial Co-Operative Bank",
    cf_code: "KCCBR",
    eb_code: null,
    enumName: "NB_THE_KALUPUR_COMMERCIAL_CO_OPERATIVE_BANK",
  },
  {
    name: "The Surat Peoples Co-operative Bank Limited",
    cf_code: "SPCBR",
    eb_code: null,
    enumName: "NB_THE_SURAT_PEOPLES_CO_OPERATIVE_BANK_LIMITED",
  },
  {
    name: "The Sutex Co-op Bank Ltd",
    cf_code: "SUTBR",
    eb_code: null,
    enumName: "NB_THE_SUTEX_CO_OP_BANK_LTD",
  },
  {
    name: "TJSB Bank",
    cf_code: "TJSBR",
    eb_code: null,
    enumName: "NB_TJSB_BANK",
  },
  {
    name: "UCO Bank",
    cf_code: "UCBAR",
    eb_code: "UCOB",
    enumName: "NB_UCO_BANK",
  },
  {
    name: "UCO Bank Corporate",
    cf_code: "UCBAC",
    eb_code: null,
    enumName: "NB_UCO_BANK_CORPORATE",
  },
  {
    name: "Union Bank of India",
    cf_code: "UBINR",
    eb_code: "UBOI",
    enumName: "NB_UNION_BANK_OF_INDIA",
  },
  {
    name: "Union Bank of India - Corporate",
    cf_code: "UBINC",
    eb_code: null,
    enumName: "NB_UNION_BANK_OF_INDIA_CORPORATE",
  },
  {
    name: "Union Bank of India (Erstwhile Andhra Bank)",
    cf_code: null,
    eb_code: "ANB",
    enumName: "NB_UNION_BANK_OF_INDIA_ERSTWHILE_ANDHRA_BANK",
  },
  {
    name: "Utkarsh Small Finance Bank",
    cf_code: "UTKSR",
    eb_code: null,
    enumName: "NB_UTKARSH_SMALL_FINANCE_BANK",
  },
  {
    name: "Varachha Co-operative Bank Limited",
    cf_code: "VARAR",
    eb_code: null,
    enumName: "NB_VARACHHA_CO_OPERATIVE_BANK_LIMITED",
  },
  {
    name: "Vijaya Bank",
    cf_code: null,
    eb_code: "VIJB",
    enumName: "NB_VIJAYA_BANK",
  },
  {
    name: "Yes Bank Corporate",
    cf_code: "YESBC",
    eb_code: null,
    enumName: "NB_YES_BANK_CORPORATE",
  },
  {
    name: "Yes Bank Ltd",
    cf_code: "YESBR",
    eb_code: "YESBL",
    enumName: "NB_YES_BANK_LTD",
  },
  {
    name: "Zoroastrian Co-Operative Bank Ltd",
    cf_code: "ZCBLR",
    eb_code: null,
    enumName: "NB_ZOROASTRIAN_CO_OPERATIVE_BANK_LTD",
  },
];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/fetch')
  async makeNewArr() {
    // Create a map for EasebuzzBanks for quick lookups
    const easebuzzMap = new Map(
      EasebuzzBanks.map((bank) => [bank.name, bank.code]),
    );

    // Create the new array with the specified format
    const uniqueBanks = CashfreeBanks.reduce((acc, cashfreeBank) => {
      const easebuzzBank = EasebuzzBanks.find(
        (bank) => bank.name === cashfreeBank.name,
      );
      if (!easebuzzBank) {
        acc.push({
          name: cashfreeBank.name,
          cf_code: cashfreeBank.abbreviation,
          eb_code: null,
        });
      } else {
        acc.push({
          name: cashfreeBank.name,
          cf_code: cashfreeBank.abbreviation,
          eb_code: easebuzzBank.code,
        });
      }
      return acc;
    }, []);

    // Find banks that are in EasebuzzBanks but not in CashfreeBanks
    const uniqueEasebuzzBanks = EasebuzzBanks.filter(
      (bank) => !CashfreeBanks.some((cfBank) => cfBank.name === bank.name),
    );

    // Add the unique Easebuzz banks to the array with `cf_code` as null
    uniqueEasebuzzBanks.forEach((bank) => {
      uniqueBanks.push({
        name: bank.name,
        cf_code: null,
        eb_code: bank.code,
      });
    });

    return { count: uniqueBanks.length, uniqueBanks };
  }

  @Get('/sort')
  async sort() {
    return merge.sort((a, b) => a.name.localeCompare(b.name));
  }

  @Get('/enum')
  async addEnumFieldToArray() {
    filter.forEach((obj) => {
      // Create the enum value from the bank name
      const enumValue = `NB_${obj.name.toUpperCase().replace(/\s+/g, '_')}`;

      // Add the new field to the object
      obj['enumName'] = enumValue;
    });

    // Return the updated array
    return { count: filter.length, filter };
  }

  @Get('/filter-enums')
  async getData(){
    const ebCodeNull = [];
    const cfCodeNull = [];

    filtered.forEach(bank => {
      if (bank.eb_code === null) {
        ebCodeNull.push(bank);
      }
      if (bank.cf_code === null) {
        cfCodeNull.push(bank);
      }
    });

    return {
      cshfreeOnly:ebCodeNull,
      eb_count:ebCodeNull.length,
      easebuzzOnly:cfCodeNull,
      cf_count:cfCodeNull.length
    };
  }
}
