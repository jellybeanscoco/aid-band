const LANGS = ["en", "zh", "ne", "fr"];
const LANG_CODE = { en: "ENG", zh: "繁", ne: "ने", fr: "FR" };
const HTML_LANG = { en: "en", zh: "zh-Hant", ne: "ne", fr: "fr" };
const SPEECH_LANG = { en: "en-GB", zh: "zh-HK", ne: "ne-NP", fr: "fr-FR" };
const AI_LANG = { en: "English", zh: "Traditional Chinese", ne: "Nepali", fr: "French" };
const SEX = ["female", "male", "other", "unknown"];
const BLOOD = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Unknown"];
const RESERVED_BANDS = ["AB-8101", "AB-8102", "AB-8103", "AB-8104", "AB-8105"];

const SHELTER_PINS = [
  { name: "Ilha Verde refuge", lat: 22.21158, lng: 113.53755 },
  { name: "Portas do Cerco assembly point", lat: 22.21467, lng: 113.54893 },
  { name: "Mong-Há Sports Centre", lat: 22.20664, lng: 113.55084 },
  { name: "Tap Seac Multisport Pavilion", lat: 22.19664, lng: 113.54690 },
  { name: "Macao Polytechnic University", lat: 22.19383, lng: 113.55152 },
  { name: "Instituto Salesiano", lat: 22.18956, lng: 113.53713 },
  { name: "Olympic Sports Centre", lat: 22.15353, lng: 113.55341 },
  { name: "Public Security Forces School, Coloane", lat: 22.11958, lng: 113.55183 },
];

const I18N = {
  en: {
    skip: "Skip to content",
    sampleName: "Sample Name",
    sample: "Sample",
    sex: "SEX", age: "AGE", ethnicity: "ETHNICITY", eye: "EYE COLOR",
    height: "HEIGHT", weight: "WEIGHT", blood: "BLOOD TYPE",
    home: "HOME ADDRESS", contacts: "EMERGENCY CONTACTS",
    relationship: "RELATIONSHIP", phone: "PHONE",
    addContact: "ADD CONTACT", removeContact: "REMOVE",
    edit: "EDIT INFO", updated: "LAST UPDATED",
    upload: "UPLOAD MEDICAL RECORDS",
    formats1: "PDF/PNG/JPG-", formats2: "FORMAT SUPPORTED",
    drop: "Upload or drop a file", reading: "Reading the file…",
    summarizing: "Writing the summary…", briefing: "Preparing rescue checks…",
    summary: "NATURAL LANGUAGE SUMMARY", recent: "Most Recent Upload:",
    recentPh: "DAY/MONTH/YEAR XX:XX",
    history: "Past Medical History:", meds: "Medications:", allergies: "Allergies:",
    none: "None recorded",
    caution: "THE INFORMATION ABOVE IS SUMMARISED WITH AI. USE WITH CAUTION.",
    consult: "AI CONSULTANT", expand: "Open chat", collapse: "Collapse chat", back: "BACK",
    chatCaution: "",
    briefEmpty: "Upload a medical record and I will explain the history, medicines, and allergies in plain language.",
    chatPh: "Ask what to double-check", send: "SEND",
    font: "FONT SIZE & ICON SIZE:", color: "COLOR BLINDNESS:",
    rgA: "Red", rgB: "Green", byA: "Blue", byB: "Yellow", mono: "Monochromacy",
    tts: "TEXT TO SPEECH:",
    ttsNote: "CHANGING TEXT LANGUAGE ALSO CHANGES AUDIO LANGUAGE",
    on: "ON", off: "OFF", close: "Close",
    tabBand: "AID-BAND", tabRegistry: "RESCUE DATABASE",
    regIntro: "Green icons on the map represent the real location where a person's profile was added. Blue dots represent shelters near that area.",
    mapEmpty: "No location has been recorded yet. Add a profile and allow location to place someone on the map.",
    scan: "SCAN BRACELET",
    addTitle: "Add this person to the rescue database?",
    addYes: "YES, ADD", addNo: "NOT NOW",
    locWaiting: "Asking this phone for its location…",
    locDenied: "Location was not allowed. They can still be added, without a pin on the map.",
    locReady: "Location recorded",
    near: "Near",
    accountPrivate: "This account stays on this phone until you add it to the rescue database.",
    accountShared: "This profile is in the shared rescue database. Other phones can see it.",
    shareProfile: "ADD TO RESCUE DATABASE",
    updateShare: "UPDATE RESCUE DATABASE",
    braceletLinkLabel: "THIS BRACELET OPENS",
    copyLink: "COPY LINK",
    copied: "Link copied. Write it onto the bracelet with an NFC app.",
    braceletLinkHelp: "Add this profile to the rescue database, then write this link onto the bracelet. A scan opens this person on any phone.",
    bandScope: "This page belongs to the bracelet. It is not the account saved on this phone.",
    bandLoading: "Opening this bracelet…",
    bandMissing: "This bracelet has no profile in the rescue database yet.",
    bandMissingOwn: "This bracelet is yours, but the profile is not in the rescue database yet. Go back and add it.",
    yourPhone: "YOUR PHONE",
    thisBracelet: "THIS BRACELET",
    bandReady: "This page already belongs to this bracelet. Fill in the profile here, then add it to the rescue database. Every phone that opens this link sees this person.",
    saveBand: "SAVE ONTO BRACELET",
    emptyBracelet: "This bracelet has no profile stored on it.",
    added: "Added to the rescue database.",
    legendShelter: "Shelter", legendPerson: "Person in the database",
    checkedIn: "CHECKED IN", notFound: "NOT YET FOUND",
    addMissing: "ADD",
    noFoundList: "No one is checked in yet.",
    noMissingList: "No one is listed yet.",
    checkTitle: "CHECK IN A BRACELET",
    thisBand: "This phone’s bracelet:",
    noBand: "Save a profile on the AID-BAND page to give this phone a bracelet code.",
    bandCode: "BAND CODE", shelter: "SHELTER", area: "AREA",
    tap: "TAP NFC BRACELET", checkIn: "CHECK IN",
    registerMissing: "REGISTER AS NOT YET FOUND",
    writeNfc: "WRITE CODE TO BRACELET",
    nfcUnsupported: "NFC needs Chrome on Android, over HTTPS.",
    nfcScanUnsupported: "This phone cannot scan a bracelet. Open AID-BAND and choose Add to rescue database.",
    nfcWriteUnsupported: "This phone cannot write to a bracelet. Choose Add to rescue database instead.",
    nfcWaiting: "Hold the bracelet against the phone…",
    nfcDone: "Bracelet read. Confirm the shelter, then check in.",
    nfcWritten: "Band code written to the bracelet.",
    nfcErr: "The bracelet could not be read. Enter the code instead.",
    searchTitle: "SEARCH BY TRAITS", search: "SEARCH",
    more: "MORE TRAITS", less: "FEWER TRAITS", name: "NAME",
    noQuery: "Enter at least one trait to search.",
    noMatch: "No one in the registry matches those traits.",
    statusFound: "FOUND", statusMissing: "NOT YET FOUND",
    foundAt: "Shelter", showMissing: "SHOW PEOPLE NOT YET FOUND",
    hideMissing: "HIDE LIST", emptyRegistry: "No one has been added yet.",
    checkingRegistry: "Checking the registry…",
    sharedOk: "Shared across rescuers in this area.",
    deviceOnly: "Saved on this device only.",
    registryMiss: "Could not reach the shared registry. Showing the last copy saved on this device.",
    needProfile: "Edit and save the profile before adding it to the rescue database.",
    needShelter: "Add the shelter name before checking in.",
    savedProfile: "Profile saved.", registered: "Bracelet registered as not yet found.",
    alreadyFound: "This bracelet is already checked in.",
    checkedMsg: "Checked in.",
    photo: "PHOTO", save: "SAVE", cancel: "CANCEL",
    nameRequired: "A name is required.",
    adminTitle: "CLINIC PASSWORD",
    adminHint: "This password is for the clinic that issued the wristband.",
    adminFail: "That password is not correct.",
    unlock: "UNLOCK", password: "PASSWORD",
    sex_female: "Female", sex_male: "Male", sex_other: "Other", sex_unknown: "Unknown",
    ageHint: "Age matches within 3 years.",
    fileType: "Use a PDF, PNG, or JPG file.",
    fileSize: "That file is larger than 10 MB.",
    unreadable: "This file did not contain readable text. Try a clearer photo or a PDF with selectable text.",
    aiFail: "The assistant did not respond. Try again.",
    aiBusy: "The free assistant is busy. Wait a minute and try again.",
    retry: "TRY AGAIN",
    results: "RESULTS", missingList: "NOT YET FOUND",
    unknownName: "Unknown",
    langChanged: "Language changed.",
    openSettings: "Accessibility settings",
    cycleLang: "Change language",
  },
  zh: {
    skip: "跳至內容",
    sampleName: "示例姓名", sample: "示例",
    sex: "性別", age: "年齡", ethnicity: "族裔", eye: "眼睛顏色",
    height: "身高", weight: "體重", blood: "血型",
    home: "住址", contacts: "緊急聯絡人",
    relationship: "關係", phone: "電話",
    addContact: "新增聯絡人", removeContact: "移除",
    edit: "編輯資料", updated: "最後更新",
    upload: "上傳病歷", formats1: "支援 PDF／PNG／JPG", formats2: "",
    drop: "上載或拖放檔案", reading: "正在讀取檔案…",
    summarizing: "正在撰寫摘要…", briefing: "正在準備救援核對…",
    summary: "自然語言摘要", recent: "最近上載：", recentPh: "日/月/年 XX:XX",
    history: "過往病歷：", meds: "藥物：", allergies: "過敏：", none: "沒有記錄",
    caution: "以上資料由人工智能摘要，請謹慎使用。",
    consult: "人工智能顧問", expand: "開啟對話", collapse: "收合對話", back: "返回",
    chatCaution: "",
    briefEmpty: "上載病歷後，我會用淺白文字說明病歷、藥物和過敏。",
    chatPh: "詢問應核對的事項", send: "傳送",
    font: "字體大小與圖示大小：", color: "色覺：",
    rgA: "紅", rgB: "綠", byA: "藍", byB: "黃", mono: "全色盲",
    tts: "文字轉語音：", ttsNote: "更改文字語言亦會更改語音語言",
    on: "開", off: "關", close: "關閉",
    tabBand: "護心帶", tabRegistry: "救援資料庫",
    regIntro: "地圖上的綠色圖示代表一個人的資料被加入時的真實位置。藍點代表該區域附近的庇護站。",
    mapEmpty: "尚未記錄位置。加入個人資料並允許定位後，才會顯示在地圖上。",
    scan: "掃描手環",
    addTitle: "把這個人加入救援資料庫？",
    addYes: "加入", addNo: "暫時不要",
    locWaiting: "正在詢問這部手機的位置…",
    locDenied: "未允許定位。仍可加入，但地圖上不會有標記。",
    locReady: "已記錄位置",
    near: "靠近",
    accountPrivate: "此帳戶在你把它加入救援資料庫之前，只留在這部手機。",
    accountShared: "此個人資料已在共用救援資料庫。其他手機可以查看。",
    shareProfile: "加入救援資料庫",
    updateShare: "更新救援資料庫",
    braceletLinkLabel: "此手環會打開",
    copyLink: "複製連結",
    copied: "已複製連結。請用 NFC 應用程式寫入手環。",
    braceletLinkHelp: "請先把個人資料加入救援資料庫，再把此連結寫入手環。任何手機掃描都會打開這個人的頁面。",
    bandScope: "此頁屬於手環，不是這部手機上的帳戶。",
    bandLoading: "正在打開此手環…",
    bandMissing: "此手環在救援資料庫中還沒有個人資料。",
    bandMissingOwn: "這是你的手環，但個人資料尚未加入救援資料庫。請返回並加入。",
    yourPhone: "你的手機",
    thisBracelet: "此手環",
    bandReady: "此頁已經屬於這條手環。請在這裡填寫個人資料，再加入救援資料庫。任何手機打開此連結都會看到這個人。",
    saveBand: "儲存到手環",
    emptyBracelet: "此手環沒有儲存個人資料。",
    added: "已加入救援資料庫。",
    legendShelter: "庇護站", legendPerson: "已在資料庫的人",
    checkedIn: "已登記", notFound: "尚未找到",
    addMissing: "加入",
    noFoundList: "尚未有人登記。",
    noMissingList: "尚未有人列入。",
    checkTitle: "手環登記", thisBand: "這部手機的手環：",
    noBand: "請先在護心帶頁面儲存個人資料，以取得手環編號。",
    bandCode: "手環編號", shelter: "庇護站", area: "地區",
    tap: "輕觸 NFC 手環", checkIn: "登記入住",
    registerMissing: "登記為尚未找到", writeNfc: "將編號寫入手環",
    nfcUnsupported: "NFC 需在 Android 的 Chrome 並使用 HTTPS。",
    nfcScanUnsupported: "這部手機不能掃描手環。請到護心帶頁面，選擇加入救援資料庫。",
    nfcWriteUnsupported: "這部手機不能寫入手環。請改選加入救援資料庫。",
    nfcWaiting: "請將手環貼近手機…", nfcDone: "已讀取手環。請確認庇護站，然後登記。",
    nfcWritten: "編號已寫入手環。", nfcErr: "未能讀取手環，請改為輸入編號。",
    searchTitle: "以特徵搜尋", search: "搜尋", more: "更多特徵", less: "較少特徵", name: "姓名",
    noQuery: "請至少輸入一項特徵。", noMatch: "名冊中沒有符合這些特徵的人。",
    statusFound: "已找到", statusMissing: "尚未找到", foundAt: "庇護站",
    showMissing: "顯示尚未找到的人", hideMissing: "隱藏名單",
    emptyRegistry: "尚未加入任何人。", checkingRegistry: "正在檢查名冊…",
    sharedOk: "此災區的救援人員可共同查看。", deviceOnly: "只儲存在這部裝置。",
    registryMiss: "未能連上共用名冊，現顯示這部裝置最後儲存的副本。",
    needProfile: "請先編輯並儲存個人資料，再加入救援資料庫。",
    needShelter: "登記前請填寫庇護站名稱。", savedProfile: "資料已儲存。",
    registered: "已登記為尚未找到。", alreadyFound: "此手環已經登記入住。",
    checkedMsg: "已登記入住。", photo: "相片", save: "儲存", cancel: "取消",
    nameRequired: "必須填寫姓名。",
    adminTitle: "診所密碼",
    adminHint: "此密碼供發放手環的診所使用。",
    adminFail: "密碼不正確。",
    unlock: "解鎖", password: "密碼",
    sex_female: "女", sex_male: "男", sex_other: "其他", sex_unknown: "不詳",
    ageHint: "年齡會在三年範圍內配對。",
    fileType: "請使用 PDF、PNG 或 JPG 檔案。", fileSize: "檔案超過 10 MB。",
    unreadable: "檔案中沒有可讀文字。請改用更清晰的相片，或可選取文字的 PDF。",
    aiFail: "顧問沒有回應。請再試一次。",
    aiBusy: "免費顧問正忙。請稍候一分鐘再試。", retry: "再試一次",
    results: "結果", missingList: "尚未找到", unknownName: "不詳",
    langChanged: "語言已更改。", openSettings: "無障礙設定", cycleLang: "更改語言",
  },
  ne: {
    skip: "सामग्रीमा जानुहोस्",
    sampleName: "नमूना नाम", sample: "नमूना",
    sex: "लिङ्ग", age: "उमेर", ethnicity: "जातीयता", eye: "आँखाको रंग",
    height: "उचाइ", weight: "तौल", blood: "रक्त समूह",
    home: "घरको ठेगाना", contacts: "आपतकालीन सम्पर्क",
    relationship: "नाता", phone: "फोन",
    addContact: "सम्पर्क थप्नुहोस्", removeContact: "हटाउनुहोस्",
    edit: "विवरण सम्पादन", updated: "अन्तिम अद्यावधिक",
    upload: "चिकित्सा कागजात अपलोड", formats1: "PDF/PNG/JPG चल्छ", formats2: "",
    drop: "फाइल अपलोड वा झार्नुहोस्", reading: "फाइल पढिँदैछ…",
    summarizing: "सारांश लेखिँदैछ…", briefing: "जाँच सूची तयार हुँदैछ…",
    summary: "सामान्य भाषाको सारांश", recent: "पछिल्लो अपलोड:", recentPh: "दिन/महिना/वर्ष XX:XX",
    history: "पुरानो स्वास्थ्य इतिहास:", meds: "औषधि:", allergies: "एलर्जी:", none: "अभिलेख छैन",
    caution: "माथिको जानकारी एआईले सारांश गरेको हो। सतर्कता अपनाउनुहोस्।",
    consult: "एआई सल्लाहकार", expand: "च्याट खोल्नुहोस्", collapse: "च्याट बन्द गर्नुहोस्", back: "फर्कनुहोस्",
    chatCaution: "",
    briefEmpty: "चिकित्सा कागजात अपलोड गर्नुहोस्। म इतिहास, औषधि र एलर्जी सरल भाषामा बताउँछु।",
    chatPh: "के जाँच्ने सोध्नुहोस्", send: "पठाउनुहोस्",
    font: "अक्षर र आइकनको आकार:", color: "वर्णान्धता:",
    rgA: "रातो", rgB: "हरियो", byA: "नीलो", byB: "पहेँलो", mono: "पूर्ण वर्णान्धता",
    tts: "पाठबाट आवाज:", ttsNote: "पाठको भाषा बदल्दा आवाजको भाषा पनि बदलिन्छ",
    on: "खुला", off: "बन्द", close: "बन्द गर्नुहोस्",
    tabBand: "एड-ब्यान्ड", tabRegistry: "उद्धार डाटाबेस",
    regIntro: "नक्साका हरिया चिह्नले व्यक्तिको प्रोफाइल थपिएको वास्तविक स्थान देखाउँछन्। नीला चिह्न त्यस क्षेत्र नजिकका आश्रय हुन्।",
    mapEmpty: "अहिलेसम्म स्थान रेकर्ड छैन। प्रोफाइल थप्नुहोस् र स्थान अनुमति दिनुहोस्।",
    scan: "ब्रेसलेट स्क्यान",
    addTitle: "यो व्यक्तिलाई उद्धार डाटाबेसमा थप्ने?",
    addYes: "थप्नुहोस्", addNo: "अहिले होइन",
    locWaiting: "यो फोनको स्थान मागिँदैछ…",
    locDenied: "स्थान अनुमति छैन। थप्न मिल्छ, तर नक्सामा चिह्न हुँदैन।",
    locReady: "स्थान रेकर्ड भयो",
    near: "नजिक",
    accountPrivate: "यो खाता उद्धार डाटाबेसमा नथप्दासम्म यसै फोनमा रहन्छ।",
    accountShared: "यो प्रोफाइल साझा उद्धार डाटाबेसमा छ। अरू फोनले हेर्न सक्छन्।",
    shareProfile: "उद्धार डाटाबेसमा थप्नुहोस्",
    updateShare: "उद्धार डाटाबेस अद्यावधिक गर्नुहोस्",
    braceletLinkLabel: "यो ब्रेसलेटले खोल्छ",
    copyLink: "लिंक कपी",
    copied: "लिंक कपी भयो। NFC एपले ब्रेसलेटमा लेख्नुहोस्।",
    braceletLinkHelp: "पहिले प्रोफाइल उद्धार डाटाबेसमा थप्नुहोस्, अनि यो लिंक ब्रेसलेटमा लेख्नुहोस्। स्क्यान गर्दा जुनसुकै फोनमा यही व्यक्ति खुल्छ।",
    bandScope: "यो पृष्ठ ब्रेसलेटको हो। यो फोनमा सुरक्षित खाता होइन।",
    bandLoading: "यो ब्रेसलेट खोलिँदैछ…",
    bandMissing: "यो ब्रेसलेटको प्रोफाइल उद्धार डाटाबेसमा छैन।",
    bandMissingOwn: "यो तपाईंको ब्रेसलेट हो, तर प्रोफाइल अझै डाटाबेसमा छैन। फर्केर थप्नुहोस्।",
    yourPhone: "तपाईंको फोन",
    thisBracelet: "यो ब्रेसलेट",
    bandReady: "यो पृष्ठ पहिले नै यो ब्रेसलेटको हो। यहाँ प्रोफाइल भर्नुहोस्, अनि उद्धार डाटाबेसमा थप्नुहोस्। यो लिंक खोल्ने हरेक फोनले यही व्यक्ति देख्छ।",
    saveBand: "ब्रेसलेटमा सुरक्षित गर्नुहोस्",
    emptyBracelet: "यो ब्रेसलेटमा प्रोफाइल छैन।",
    added: "उद्धार डाटाबेसमा थपियो।",
    legendShelter: "आश्रय", legendPerson: "डाटाबेसमा भएको व्यक्ति",
    checkedIn: "दर्ता भएका", notFound: "अझै नभेटिएका",
    addMissing: "थप्नुहोस्",
    noFoundList: "अहिलेसम्म कोही दर्ता भएको छैन।",
    noMissingList: "अहिलेसम्म कोही सूचीमा छैन।",
    checkTitle: "ब्रेसलेट दर्ता", thisBand: "यो फोनको ब्रेसलेट:",
    noBand: "ब्रेसलेट कोड पाउन पहिले एड-ब्यान्ड पृष्ठमा प्रोफाइल सुरक्षित गर्नुहोस्।",
    bandCode: "ब्यान्ड कोड", shelter: "आश्रय", area: "क्षेत्र",
    tap: "NFC ब्रेसलेट छुनुहोस्", checkIn: "आश्रयमा दर्ता",
    registerMissing: "अझै नभेटिएको रूपमा दर्ता", writeNfc: "कोड ब्रेसलेटमा लेख्नुहोस्",
    nfcUnsupported: "NFC का लागि Android को Chrome र HTTPS चाहिन्छ।",
    nfcScanUnsupported: "यो फोनले ब्रेसलेट स्क्यान गर्न सक्दैन। एड-ब्यान्ड पृष्ठमा गएर उद्धार डाटाबेसमा थप्नुहोस्।",
    nfcWriteUnsupported: "यो फोनले ब्रेसलेटमा लेख्न सक्दैन। उद्धार डाटाबेसमा थप्नुहोस्।",
    nfcWaiting: "ब्रेसलेट फोनमा टाँस्नुहोस्…",
    nfcDone: "ब्रेसलेट पढियो। आश्रय पुष्टि गरेर दर्ता गर्नुहोस्।",
    nfcWritten: "कोड ब्रेसलेटमा लेखियो।", nfcErr: "ब्रेसलेट पढिएन। कोड टाइप गर्नुहोस्।",
    searchTitle: "लक्षणबाट खोज", search: "खोज", more: "थप लक्षण", less: "कम लक्षण", name: "नाम",
    noQuery: "कम्तीमा एउटा लक्षण लेख्नुहोस्।", noMatch: "यी लक्षणसँग कोही मिलेन।",
    statusFound: "भेटियो", statusMissing: "अझै भेटिएन", foundAt: "आश्रय",
    showMissing: "अझै नभेटिएका मानिस देखाउनुहोस्", hideMissing: "सूची लुकाउनुहोस्",
    emptyRegistry: "अहिलेसम्म कोही थपिएको छैन।", checkingRegistry: "सूची जाँच हुँदैछ…",
    sharedOk: "यस क्षेत्रका उद्धारकर्ताले सँगै हेर्न सक्छन्।", deviceOnly: "यो उपकरणमा मात्र सुरक्षित छ।",
    registryMiss: "साझा सूची जोडिएन। यस उपकरणको अन्तिम प्रति देखाइँदैछ।",
    needProfile: "उद्धार डाटाबेसमा थप्नुअघि प्रोफाइल सम्पादन गरेर सुरक्षित गर्नुहोस्।",
    needShelter: "दर्ताअघि आश्रयको नाम लेख्नुहोस्।", savedProfile: "प्रोफाइल सुरक्षित भयो।",
    registered: "अझै नभेटिएको रूपमा दर्ता भयो।", alreadyFound: "यो ब्रेसलेट पहिले नै दर्ता भइसकेको छ।",
    checkedMsg: "दर्ता भयो।", photo: "फोटो", save: "सुरक्षित", cancel: "रद्द",
    nameRequired: "नाम आवश्यक छ।",
    adminTitle: "क्लिनिक पासवर्ड",
    adminHint: "यो पासवर्ड ब्रेसलेट दिने क्लिनिकका लागि हो।",
    adminFail: "पासवर्ड मिलेन।",
    unlock: "खोल्नुहोस्", password: "पासवर्ड",
    sex_female: "महिला", sex_male: "पुरुष", sex_other: "अन्य", sex_unknown: "अज्ञात",
    ageHint: "उमेर तीन वर्षको फरकभित्र मिल्छ।",
    fileType: "PDF, PNG, वा JPG प्रयोग गर्नुहोस्।", fileSize: "फाइल १० एमबीभन्दा ठूलो छ।",
    unreadable: "फाइलमा पढ्न मिल्ने पाठ भेटिएन। स्पष्ट फोटो वा पाठ छान्न मिल्ने PDF प्रयोग गर्नुहोस्।",
    aiFail: "सल्लाहकारले जवाफ दिएन। फेरि प्रयास गर्नुहोस्।",
    aiBusy: "निःशुल्क सल्लाहकार व्यस्त छ। एक मिनेटपछि फेरि प्रयास गर्नुहोस्।", retry: "फेरि प्रयास",
    results: "नतिजा", missingList: "अझै नभेटिएका", unknownName: "अज्ञात",
    langChanged: "भाषा बदलियो।", openSettings: "पहुँच सेटिङ", cycleLang: "भाषा बदल्नुहोस्",
  },
  fr: {
    skip: "Aller au contenu",
    sampleName: "Nom d’exemple", sample: "Exemple",
    sex: "SEXE", age: "ÂGE", ethnicity: "ORIGINE", eye: "COULEUR DES YEUX",
    height: "TAILLE", weight: "POIDS", blood: "GROUPE SANGUIN",
    home: "ADRESSE", contacts: "CONTACTS D'URGENCE",
    relationship: "LIEN", phone: "TÉLÉPHONE",
    addContact: "AJOUTER UN CONTACT", removeContact: "RETIRER",
    edit: "MODIFIER", updated: "DERNIÈRE MISE À JOUR",
    upload: "TÉLÉVERSER LE DOSSIER", formats1: "PDF/PNG/JPG", formats2: "FORMATS ACCEPTÉS",
    drop: "Téléverser ou déposer un fichier", reading: "Lecture du fichier…",
    summarizing: "Rédaction du résumé…", briefing: "Préparation des vérifications…",
    summary: "RÉSUMÉ EN LANGAGE CLAIR", recent: "Dernier envoi :", recentPh: "JOUR/MOIS/ANNÉE XX:XX",
    history: "Antécédents :", meds: "Médicaments :", allergies: "Allergies :", none: "Aucun élément noté",
    caution: "LES INFORMATIONS CI-DESSUS SONT RÉSUMÉES PAR IA. À UTILISER AVEC PRUDENCE.",
    consult: "CONSEILLER IA", expand: "Ouvrir la discussion", collapse: "Réduire la discussion", back: "RETOUR",
    chatCaution: "",
    briefEmpty: "Téléversez un dossier et j’expliquerai les antécédents, les médicaments et les allergies en langage clair.",
    chatPh: "Demander quoi vérifier", send: "ENVOYER",
    font: "TAILLE DU TEXTE ET DES ICÔNES :", color: "DALTONISME :",
    rgA: "Rouge", rgB: "Vert", byA: "Bleu", byB: "Jaune", mono: "Monochromatisme",
    tts: "LECTURE VOCALE :", ttsNote: "CHANGER LA LANGUE DU TEXTE CHANGE AUSSI LA LANGUE AUDIO",
    on: "OUI", off: "NON", close: "Fermer",
    tabBand: "AID-BAND", tabRegistry: "BASE DE SECOURS",
    regIntro: "Les icônes vertes indiquent le lieu réel où le profil d’une personne a été ajouté. Les points bleus indiquent les abris proches de cette zone.",
    mapEmpty: "Aucune position enregistrée. Ajoutez un profil et autorisez la position pour placer quelqu’un sur la carte.",
    scan: "SCANNER LE BRACELET",
    addTitle: "Ajouter cette personne à la base de secours ?",
    addYes: "OUI, AJOUTER", addNo: "PAS MAINTENANT",
    locWaiting: "Demande de la position de ce téléphone…",
    locDenied: "La position n’a pas été autorisée. L’ajout reste possible, sans point sur la carte.",
    locReady: "Position enregistrée",
    near: "Près de",
    accountPrivate: "Ce compte reste sur ce téléphone jusqu’à ce que vous l’ajoutiez à la base de secours.",
    accountShared: "Ce profil est dans la base de secours partagée. Les autres téléphones peuvent le voir.",
    shareProfile: "AJOUTER À LA BASE DE SECOURS",
    updateShare: "METTRE À JOUR LA BASE",
    braceletLinkLabel: "CE BRACELET OUVRE",
    copyLink: "COPIER LE LIEN",
    copied: "Lien copié. Écrivez-le sur le bracelet avec une application NFC.",
    braceletLinkHelp: "Ajoutez ce profil à la base de secours, puis écrivez ce lien sur le bracelet. Un scan ouvre cette personne sur n’importe quel téléphone.",
    bandScope: "Cette page appartient au bracelet. Ce n’est pas le compte enregistré sur ce téléphone.",
    bandLoading: "Ouverture de ce bracelet…",
    bandMissing: "Ce bracelet n’a pas encore de profil dans la base de secours.",
    bandMissingOwn: "Ce bracelet est le vôtre, mais le profil n’est pas encore dans la base. Revenez en arrière et ajoutez-le.",
    yourPhone: "VOTRE TÉLÉPHONE",
    thisBracelet: "CE BRACELET",
    bandReady: "Cette page appartient déjà à ce bracelet. Remplissez le profil ici, puis ajoutez-le à la base de secours. Chaque téléphone qui ouvre ce lien verra cette personne.",
    saveBand: "ENREGISTRER SUR LE BRACELET",
    emptyBracelet: "Ce bracelet ne contient pas de profil.",
    added: "Ajouté à la base de secours.",
    legendShelter: "Abri", legendPerson: "Personne dans la base",
    checkedIn: "ENREGISTRÉS", notFound: "PAS ENCORE RETROUVÉS",
    addMissing: "AJOUTER",
    noFoundList: "Personne n’est encore enregistrée.",
    noMissingList: "Personne n’est encore sur la liste.",
    checkTitle: "ENREGISTRER UN BRACELET", thisBand: "Bracelet de ce téléphone :",
    noBand: "Enregistrez un profil sur la page AID-BAND pour obtenir un code.",
    bandCode: "CODE", shelter: "ABRI", area: "ZONE",
    tap: "APPROCHER LE BRACELET", checkIn: "ENREGISTRER",
    registerMissing: "INSCRIRE COMME PAS ENCORE RETROUVÉ",
    writeNfc: "ÉCRIRE LE CODE SUR LE BRACELET",
    nfcUnsupported: "Le NFC nécessite Chrome sur Android, en HTTPS.",
    nfcScanUnsupported: "Ce téléphone ne peut pas scanner un bracelet. Ouvrez AID-BAND et choisissez Ajouter à la base de secours.",
    nfcWriteUnsupported: "Ce téléphone ne peut pas écrire sur un bracelet. Choisissez Ajouter à la base de secours.",
    nfcWaiting: "Maintenez le bracelet contre le téléphone…",
    nfcDone: "Bracelet lu. Confirmez l’abri, puis enregistrez.",
    nfcWritten: "Code écrit sur le bracelet.",
    nfcErr: "Lecture impossible. Saisissez le code.",
    searchTitle: "RECHERCHE PAR SIGNES", search: "CHERCHER",
    more: "PLUS DE SIGNES", less: "MOINS DE SIGNES", name: "NOM",
    noQuery: "Indiquez au moins un signe distinctif.",
    noMatch: "Personne dans le registre ne correspond.",
    statusFound: "RETROUVÉ", statusMissing: "PAS ENCORE RETROUVÉ", foundAt: "Abri",
    showMissing: "AFFICHER LES PERSONNES PAS ENCORE RETROUVÉES",
    hideMissing: "MASQUER LA LISTE", emptyRegistry: "Personne n’a encore été ajoutée.",
    checkingRegistry: "Vérification du registre…",
    sharedOk: "Partagé entre les secouristes de cette zone.",
    deviceOnly: "Enregistré uniquement sur cet appareil.",
    registryMiss: "Registre partagé injoignable. Dernière copie de cet appareil affichée.",
    needProfile: "Modifiez et enregistrez le profil avant de l’ajouter à la base de secours.",
    needShelter: "Indiquez le nom de l’abri avant d’enregistrer.",
    savedProfile: "Profil enregistré.", registered: "Inscrit comme pas encore retrouvé.",
    alreadyFound: "Ce bracelet est déjà enregistré dans un abri.",
    checkedMsg: "Enregistré.", photo: "PHOTO", save: "ENREGISTRER", cancel: "ANNULER",
    nameRequired: "Le nom est obligatoire.",
    adminTitle: "MOT DE PASSE CLINIQUE",
    adminHint: "Ce mot de passe est réservé à la clinique qui a remis le bracelet.",
    adminFail: "Ce mot de passe est incorrect.",
    unlock: "DÉVERROUILLER", password: "MOT DE PASSE",
    sex_female: "Femme", sex_male: "Homme", sex_other: "Autre", sex_unknown: "Inconnu",
    ageHint: "L’âge correspond à trois ans près.",
    fileType: "Utilisez un fichier PDF, PNG ou JPG.", fileSize: "Ce fichier dépasse 10 Mo.",
    unreadable: "Aucun texte lisible dans ce fichier. Essayez une photo plus nette ou un PDF avec du texte sélectionnable.",
    aiFail: "L’assistant n’a pas répondu. Réessayez.",
    aiBusy: "L’assistant gratuit est occupé. Réessayez dans une minute.",
    retry: "RÉESSAYER", results: "RÉSULTATS", missingList: "PAS ENCORE RETROUVÉS",
    unknownName: "Inconnu", langChanged: "Langue modifiée.",
    openSettings: "Réglages d’accessibilité", cycleLang: "Changer de langue",
  },
};

function defaultProfile() {
  return {
    saved: false, bandId: "", name: "", sex: "", age: "", ethnicity: "",
    eyeColor: "", height: "", weight: "", bloodType: "", homeAddress: "",
    emergencyContacts: [], photo: "", updatedAt: "",
  };
}

function emptyMissingDraft() {
  return {
    name: "", sex: "", age: "", ethnicity: "", eyeColor: "", height: "", weight: "",
    bloodType: "", homeAddress: "", emergencyContacts: [],
  };
}

function contactsFrom(value) {
  let list = value;
  if (typeof list === "string") {
    try { list = JSON.parse(list); } catch { list = []; }
  }
  if (!Array.isArray(list)) return [];
  return list.slice(0, 3).map((item) => ({
    name: String((item && item.name) || "").trim().slice(0, 80),
    relationship: String((item && item.relationship) || "").trim().slice(0, 40),
    phone: String((item && item.phone) || "").trim().slice(0, 40),
  }));
}

function filledContacts(value) {
  return contactsFrom(value).filter((item) => item.name || item.relationship || item.phone);
}

function contactText(contacts) {
  return filledContacts(contacts)
    .map((item) => [item.name, item.relationship, item.phone].filter(Boolean).join(", "))
    .join(" · ");
}

const ADMIN_KEY = "aidband-admin";

function adminToken() {
  try {
    const token = sessionStorage.getItem(ADMIN_KEY) || "";
    if (!token || !clientTokenFresh(token)) {
      if (token) sessionStorage.removeItem(ADMIN_KEY);
      return "";
    }
    return token;
  } catch {
    return "";
  }
}

function clientTokenFresh(token) {
  const parts = String(token).split(".");
  if (parts.length !== 2 || !parts[0] || !parts[1]) return false;
  try {
    const padded = parts[0].replace(/-/g, "+").replace(/_/g, "/");
    const pad = padded.length % 4 === 0 ? "" : "=".repeat(4 - (padded.length % 4));
    const json = JSON.parse(atob(padded + pad));
    return Boolean(json && typeof json.exp === "number" && json.exp > Date.now());
  } catch {
    return false;
  }
}

function clearAdminToken() {
  try { sessionStorage.removeItem(ADMIN_KEY); } catch { /* this tab stays locked */ }
  state.adminOk = false;
}

function defaultRecord() {
  return {
    mode: "sample", sourceText: "", uploadedAt: "",
    summary: { pastMedicalHistory: [], medications: [], allergies: [] },
  };
}

const state = {
  profile: defaultProfile(),
  record: defaultRecord(),
  brief: "",
  chat: [],
  settings: { size: "md", color: "none", tts: false, lang: "en" },
  modal: null,
  chatExpanded: false,
  chatDraft: "",
  chatBusy: false,
  busy: false,
  busyText: "",
  aiError: "",
  edit: null,
  editError: "",
  checkin: { bandId: "", shelter: "", area: "", nfcStatus: "" },
  search: {
    name: "", sex: "", age: "", eye: "", blood: "", ethnicity: "", height: "",
    bandId: "", showMore: false, results: null, ran: false,
  },
  showMissing: false,
  showFound: false,
  openProfiles: {},
  missingDraft: emptyMissingDraft(),
  missingError: "",
  people: [],
  adminPassword: "",
  adminError: "",
  adminPurpose: "",
  adminOk: false,
  adminChecking: false,
  adminBusy: false,
  pendingAdd: null,
  bandNote: "",
  scanNote: "",
  bandPage: null,
  bandPageStatus: "",
  shared: false,
  triedBackend: false,
  registryNoteKey: "checkingRegistry",
  focusModal: false,
  returnFocus: null,
  insightRunning: false,
  pendingNfc: null,
};

function t(key) {
  return (I18N[state.settings.lang] && I18N[state.settings.lang][key]) || I18N.en[key] || key;
}

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[ch]));
}

function repairText(value) {
  return String(value ?? "")
    .replace(/&amp;#39;|&#39;|&#x27;|&apos;|&amp;39;|&39;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function shapeReply(value) {
  let text = repairText(value).replace(/\r\n/g, "\n").trim();
  text = text.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/__([^_]+)__/g, "$1");
  text = text.replace(/(^|\s)\*([^*\n]+)\*(?=\s|[.,!?]|$)/g, "$1$2");
  text = text.replace(/^#{1,6}\s+/gm, "");
  text = text.replace(/^\s*[•*]\s+/gm, "- ");
  return text;
}

function rich(value) {
  const inline = (line) => esc(repairText(line));
  const lines = repairText(value).replace(/\r\n/g, "\n").split("\n");
  let html = "";
  let list = "";
  const flush = () => {
    if (!list) return;
    html += `<ul>${list}</ul>`;
    list = "";
  };
  lines.forEach((line) => {
    const trimmed = line.trim();
    const bullet = trimmed.match(/^(?:[-*+]|\d+\.)\s+(.*)$/);
    if (!trimmed) {
      flush();
      return;
    }
    if (bullet) {
      list += `<li>${inline(bullet[1])}</li>`;
      return;
    }
    flush();
    html += `<p>${inline(trimmed.replace(/^#{1,6}\s+/, ""))}</p>`;
  });
  flush();
  return html;
}

function applySavedBundle(saved) {
  state.profile = { ...defaultProfile(), ...(saved.profile || {}) };
  state.profile.homeAddress = String(state.profile.homeAddress || "");
  state.profile.emergencyContacts = contactsFrom(state.profile.emergencyContacts);
  state.record = { ...defaultRecord(), ...(saved.record || {}) };
  state.record.summary = {
    pastMedicalHistory: [],
    medications: [],
    allergies: [],
    ...(saved.record && saved.record.summary),
  };
  state.brief = saved.brief || "";
  state.chat = Array.isArray(saved.chat) ? saved.chat : [];
  if (saved.settings) state.settings = { ...state.settings, ...(saved.settings || {}) };
  state.checkin.shelter = saved.shelter || "";
  state.checkin.area = saved.area || "";
}

function load() {
  const id = bandRoute();
  try {
    const phone = JSON.parse(localStorage.getItem("aidband-state") || "null");
    if (id) {
      if (phone?.settings) state.settings = { ...state.settings, ...phone.settings };
      const draft = JSON.parse(localStorage.getItem(`aidband-band-${id}`) || "null");
      if (draft) applySavedBundle(draft);
      state.profile.bandId = id;
    } else if (phone) {
      applySavedBundle(phone);
    }
    const people = JSON.parse(localStorage.getItem("aidband-people") || "[]");
    if (Array.isArray(people)) state.people = people;
  } catch {
    /* keep defaults */
  }
  if (!LANGS.includes(state.settings.lang)) state.settings.lang = "en";
  if (adminToken()) state.adminChecking = true;
}

function persist() {
  const record = {
    ...state.record,
    sourceText: (state.record.sourceText || "").slice(0, 20000),
  };
  const bundle = {
    profile: state.profile,
    record,
    brief: state.brief,
    chat: state.chat.slice(-40),
    settings: state.settings,
    shelter: state.checkin.shelter,
    area: state.checkin.area,
  };
  const id = bandRoute();
  try {
    if (id) {
      localStorage.setItem(`aidband-band-${id}`, JSON.stringify(bundle));
      const phone = JSON.parse(localStorage.getItem("aidband-state") || "{}");
      phone.settings = state.settings;
      localStorage.setItem("aidband-state", JSON.stringify(phone));
    } else {
      localStorage.setItem("aidband-state", JSON.stringify(bundle));
    }
    localStorage.setItem("aidband-people", JSON.stringify(state.people));
  } catch {
    /* keep the profile on screen if this phone is out of storage */
  }
}

function announce(text) {
  const live = document.getElementById("live");
  if (!live) return;
  live.textContent = "";
  setTimeout(() => { live.textContent = text; }, 30);
}

function pad(n) { return String(n).padStart(2, "0"); }

function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "XX/XX/XXXX";
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
}

function formatStamp(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return t("recentPh");
  return `${formatDate(iso)} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function heartSVG() {
  return `<svg viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="32" fill="#fff"/>
    <path d="M32 47.2c-7.2-5.2-15.2-11.2-15.2-19 0-5 3.8-8.6 8.4-8.6 2.8 0 4.8 1.3 6.8 3.6 2-2.3 4-3.6 6.8-3.6 4.6 0 8.4 3.6 8.4 8.6 0 7.8-8 13.8-15.2 19z" fill="none" stroke="currentColor" stroke-width="3.6" stroke-linejoin="round" stroke-linecap="round"/>
    <path d="M29.5 24.6h5v4.4h4.4v5h-4.4v4.4h-5v-4.4h-4.4v-5h4.4z" fill="#fff" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  </svg>`;
}

function personSVG() {
  return `<svg viewBox="0 0 80 80" aria-hidden="true">
    <circle cx="40" cy="28" r="14" fill="#b0b8c6"/>
    <path fill="#b0b8c6" d="M14 70c2-18 14-26 26-26s24 8 26 26H14z"/>
  </svg>`;
}

function shown(value) {
  if (!state.profile.saved) return t("sample");
  return value || "—";
}

function sexText(value) {
  if (!value) return shown("");
  return t("sex_" + value) || value;
}

function displayName() {
  return state.profile.saved && state.profile.name ? state.profile.name : t("sampleName");
}

function applyChrome() {
  document.documentElement.lang = HTML_LANG[state.settings.lang];
  document.documentElement.dataset.size = state.settings.size;
  document.documentElement.dataset.color = state.settings.color;
  document.documentElement.classList.toggle("modal-open", Boolean(state.modal));
}

let mapHandle = null;
let shownHash = location.hash;

function render() {
  const y = window.scrollY;
  const enteringChat = location.hash === "#consultant" && shownHash !== "#consultant";
  const prev = document.activeElement?.dataset?.focus || null;
  if (mapHandle) {
    mapHandle.remove();
    mapHandle = null;
  }
  applyChrome();
  document.getElementById("app").innerHTML = shell();
  document.getElementById("modal-root").innerHTML = modalHTML();
  window.scrollTo(0, enteringChat ? 0 : y);
  shownHash = location.hash;
  mountMap();
  const thread = document.querySelector(".thread");
  if (thread) thread.scrollTop = thread.scrollHeight;
  if (state.returnFocus) {
    const key = state.returnFocus;
    state.returnFocus = null;
    document.querySelector(`[data-focus="${CSS.escape(key)}"]`)?.focus();
  } else if (state.focusModal) {
    state.focusModal = false;
    document.querySelector(".modal")?.focus();
  } else if (prev) {
    document.querySelector(`[data-focus="${CSS.escape(prev)}"]`)?.focus();
  }
}

function bandRoute() {
  const match = location.pathname.match(/^\/b\/([A-Za-z0-9-]{3,24})\/?$/);
  return match ? match[1].toUpperCase() : "";
}

function bandUrl(id) {
  return `${location.origin}/b/${id}`;
}

function shell() {
  const onBracelet = Boolean(bandRoute());
  const chat = location.hash === "#consultant";
  const registry = !onBracelet && location.hash === "#registry";
  const page = chat
    ? consultantPage()
    : onBracelet && !braceletEditable()
      ? braceletView()
      : registry
        ? registryView()
        : bandView();
  return `
    <a class="skip" href="#content">${esc(t("skip"))}</a>
    <header class="header">
      <div class="logo">${heartSVG()}</div>
      <div class="brand">
        <h1>AID-BAND</h1>
        <p class="tagline">護心帶 • ब्यान्ड-एड • bande de secours</p>
      </div>
      <div class="tools">
        <button class="lang" type="button" data-action="lang" data-focus="lang" aria-label="${esc(t("cycleLang"))}">
          <span class="lang-code">${esc(LANG_CODE[state.settings.lang])}</span>
          <span class="icon-pill" aria-hidden="true">${translateIcon()}</span>
        </button>
        <button class="gear" type="button" data-action="settings" data-focus="open-settings" aria-label="${esc(t("openSettings"))}">
          ${wrenchIcon()}
        </button>
      </div>
    </header>
    <nav class="switch" aria-label="AID-BAND">
      <a href="/" ${!registry && !onBracelet && !chat ? 'aria-current="page"' : ""}>${esc(t("tabBand"))}</a>
      <a href="/#registry" ${registry ? 'aria-current="page"' : ""}>${esc(t("tabRegistry"))}</a>
    </nav>
    <main id="content">
      ${page}
    </main>`;
}

function braceletEditable() {
  const id = bandRoute();
  if (!id) return false;
  if (state.profile.saved && state.profile.bandId === id) return true;
  return state.bandPageStatus === "missing";
}

function bandView() {
  const p = state.profile;
  const photo = p.photo
    ? `<img src="${esc(p.photo)}" alt="">`
    : personSVG();
  return `
    <div class="view-band">
      <div class="stack">
        ${bandRoute() ? `<p class="intro">${esc(t("thisBracelet"))} ${esc(bandRoute())}</p>${p.saved ? "" : `<p class="intro">${esc(t("bandReady"))}</p>`}` : ""}
        <article class="card">
          <div class="profile-top">
            <div class="avatar">${photo}</div>
            <div class="facts">
              <h2>${esc(displayName())}</h2>
              <ul>
                <li>${esc(t("sex"))}: ${esc(sexText(p.sex))}</li>
                <li>${esc(t("age"))}: ${esc(shown(p.age))}</li>
                <li>${esc(t("ethnicity"))}: ${esc(shown(p.ethnicity))}</li>
                <li>${esc(t("eye"))}: ${esc(shown(p.eyeColor))}</li>
                <li>${esc(t("height"))}: ${esc(shown(p.height))}</li>
                <li>${esc(t("weight"))}: ${esc(shown(p.weight))}</li>
                <li>${esc(t("blood"))}: ${esc(shown(p.bloodType))}</li>
                <li>${esc(t("home"))}: ${esc(shown(p.homeAddress))}</li>
                <li>${esc(t("contacts"))}: ${esc(shown(contactText(p.emergencyContacts)))}</li>
              </ul>
            </div>
            <p class="updated">${esc(t("updated"))}: ${esc(p.saved ? formatDate(p.updatedAt) : "XX/XX/XXXX")}</p>
            <button class="edit-btn" type="button" data-action="edit" data-focus="open-edit">${esc(t("edit"))}</button>
          </div>
          ${p.saved ? `<p class="account-note">${esc(profileIsShared() ? t("accountShared") : t("accountPrivate"))}</p>
          <button class="pill-btn share-btn" type="button" data-action="share-profile" data-focus="share">${esc(profileIsShared() ? t("updateShare") : t("shareProfile"))}</button>
          <p class="account-note">${esc(t("braceletLinkLabel"))}</p>
          <a class="band-link" href="${esc(bandUrl(p.bandId))}">${esc(bandUrl(p.bandId))}</a>
          <button class="text-btn light" type="button" data-action="copy-link">${esc(t("copyLink"))}</button>
          <p class="account-note">${esc(t("braceletLinkHelp"))}</p>
          ${state.bandNote ? `<p class="account-note">${esc(state.bandNote)}</p>` : ""}` : ""}
        </article>
        ${uploadBlock()}
        ${summaryBlock()}
      </div>
      ${consultantBlock()}
    </div>`;
}

function braceletView() {
  const id = bandRoute();
  if (state.bandPageStatus === "loading" || state.bandPageStatus === "") {
    return `<p class="intro">${esc(t("bandLoading"))}</p>`;
  }
  if (state.bandPageStatus === "error") {
    return `<p class="intro">${esc(t("registryMiss"))}</p>`;
  }
  if (state.bandPageStatus !== "ready" || !state.bandPage) {
    const own = state.profile.saved && state.profile.bandId === id;
    return `
      <div class="view-registry">
        <p class="intro">${esc(t("thisBracelet"))} ${esc(id)}</p>
        <p class="intro">${esc(t("bandScope"))}</p>
        <p class="intro">${esc(t(own ? "bandMissingOwn" : "bandMissing"))}</p>
        <a class="pill-btn" href="/">${esc(t("yourPhone"))}</a>
      </div>`;
  }
  const p = state.bandPage;
  const place = [p.area, p.shelter].filter(Boolean).join(" · ");
  const point = personCoords(p);
  const where = [place, point ? `${point.lat.toFixed(4)}, ${point.lng.toFixed(4)}` : ""].filter(Boolean).join(" · ");
  const row = (label, value) => `<li>${esc(label)}: ${esc(value || "—")}</li>`;
  const listed = (title, items) => `<h3>${esc(title)}</h3>${
    items && items.length
      ? `<ol>${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ol>`
      : `<p class="none">${esc(t("none"))}</p>`
  }`;
  return `
    <div class="view-band">
      <div class="stack">
        <p class="intro">${esc(t("thisBracelet"))} ${esc(id)}</p>
        <p class="intro">${esc(t("bandScope"))}</p>
        <article class="card">
          <div class="profile-top">
            <div class="avatar">${p.photo ? `<img src="${esc(p.photo)}" alt="">` : personSVG()}</div>
            <div class="facts">
              <h2>${esc(p.name || t("unknownName"))}</h2>
              <ul>
                ${row(t("sex"), p.sex ? t("sex_" + p.sex) : "—")}
                ${row(t("age"), p.age)}
                ${row(t("ethnicity"), p.ethnicity)}
                ${row(t("eye"), p.eyeColor)}
                ${row(t("height"), p.height)}
                ${row(t("weight"), p.weight)}
                ${row(t("blood"), p.bloodType)}
                ${row(t("home"), p.homeAddress)}
                ${row(t("contacts"), contactText(p.emergencyContacts))}
              </ul>
            </div>
            <p class="updated">${esc(t("updated"))}: ${esc(p.updatedAt ? formatDate(p.updatedAt) : "—")}</p>
          </div>
          ${where ? `<p class="account-note">${esc(where)}</p>` : ""}
        </article>
        <article class="card summary">
          <div class="summary-head">
            <h2>${esc(t("summary"))}</h2>
            <span class="mini-heart" aria-hidden="true">${heartSVG()}</span>
          </div>
          ${listed(t("history"), p.history)}
          ${listed(t("meds"), p.medications)}
          ${listed(t("allergies"), p.allergies)}
          <p class="disclaimer">${esc(t("caution"))}</p>
        </article>
      </div>
    </div>`;
}

async function loadBandPage(id) {
  state.bandPageStatus = "loading";
  state.bandPage = null;
  render();
  try {
    const res = await fetch(`/api/people?bandId=${encodeURIComponent(id)}`, { cache: "no-store" });
    if (res.status === 404) {
      state.bandPageStatus = "missing";
      state.bandPage = null;
    } else if (!res.ok) {
      state.bandPageStatus = "error";
    } else {
      const data = await res.json();
      state.bandPage = data.person || null;
      state.bandPageStatus = state.bandPage ? "ready" : "missing";
      if (state.bandPage?.photo && state.profile.saved && state.profile.bandId === id && !state.profile.photo) {
        state.profile.photo = state.bandPage.photo;
        persist();
      }
    }
  } catch {
    state.bandPageStatus = "error";
  }
  render();
}

function uploadBlock() {
  const hint = state.busyText || t("drop");
  return `
    <section>
      <div class="section-bar">
        <span class="cloud" aria-hidden="true">${cloudIcon()}</span>
        <h2>${esc(t("upload"))}</h2>
      </div>
    </section>
    <label class="drop">
      <input class="file-input" type="file" accept="application/pdf,image/png,image/jpeg,.pdf,.png,.jpg,.jpeg" multiple data-file="records" aria-label="${esc(t("upload"))}">
      <span class="doc-icon" aria-hidden="true">${docIcon()}</span>
      <span class="drop-copy">
        <p class="formats">${esc(t("formats1"))}${t("formats2") ? `<br>${esc(t("formats2"))}` : ""}</p>
        <p class="drop-hint">${esc(hint)}</p>
      </span>
    </label>
    ${state.aiError ? `<p class="error">${esc(state.aiError)}<button class="retry" type="button" data-action="retry">${esc(t("retry"))}</button></p>` : ""}`;
}

function listBlock(title, items, sampleCount) {
  const sample = state.record.mode !== "live";
  let body = "";
  if (sample) {
    body = sampleCount
      ? `<ol>${Array.from({ length: sampleCount }, () => `<li>${esc(t("sample"))}</li>`).join("")}</ol>`
      : "";
  } else if (items.length) {
    body = `<ol>${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ol>`;
  } else {
    body = `<p class="none">${esc(t("none"))}</p>`;
  }
  return `<h3>${esc(title)}</h3>${body}`;
}

function summaryBlock() {
  const s = state.record.summary;
  const recent = state.record.mode === "live" && state.record.uploadedAt
    ? formatStamp(state.record.uploadedAt)
    : t("recentPh");
  return `
    <article class="card summary">
      <div class="summary-head">
        <h2>${esc(t("summary"))}</h2>
        <span class="mini-heart" aria-hidden="true">${heartSVG()}</span>
      </div>
      <p class="recent">${esc(t("recent"))} ${esc(recent)}</p>
      ${listBlock(t("history"), s.pastMedicalHistory, 2)}
      ${listBlock(t("meds"), s.medications, 0)}
      ${listBlock(t("allergies"), s.allergies, 2)}
      <p class="disclaimer">${esc(t("caution"))}</p>
    </article>`;
}

function briefText() {
  if (state.busy && state.busyText === t("briefing")) return state.busyText;
  return state.brief || t("briefEmpty");
}

function chatThread() {
  return state.chat.length ? `<div class="thread">${state.chat.map(messageHTML).join("")}</div>` : "";
}

function chatComposer() {
  return `
    <form class="composer" data-form="chat">
      <input name="draft" data-field="chatDraft" data-focus="chat-draft" value="${esc(state.chatDraft)}" placeholder="${esc(t("chatPh"))}" maxlength="600" ${state.chatBusy ? "disabled" : ""}>
      <button type="submit" ${state.chatBusy ? "disabled" : ""}>${esc(state.chatBusy ? "…" : t("send"))}</button>
    </form>`;
}

function consultantBlock() {
  return `
    <section class="consultant" aria-label="${esc(t("consult"))}">
      <h2>${esc(t("consult"))}</h2>
      <a class="expand" href="#consultant" data-focus="expand" aria-label="${esc(t("expand"))}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 6l6 6-6 6H9z"/></svg>
      </a>
      <div class="chat-panel">
        <div class="msg assistant">
          <span class="bubble-logo" aria-hidden="true">${heartSVG()}</span>
          <div class="speech">${rich(briefText())}</div>
        </div>
      </div>
    </section>`;
}

function consultantPage() {
  return `
    <div class="view-chat">
      <a class="back-link" href="${esc(location.pathname)}">${esc(t("back"))}</a>
      <h2>${esc(t("consult"))}</h2>
      <div class="chat-panel">
        <div class="msg assistant">
          <span class="bubble-logo" aria-hidden="true">${heartSVG()}</span>
          <div class="speech">${rich(briefText())}</div>
        </div>
        ${chatThread()}
        ${chatComposer()}
      </div>
    </div>`;
}

function messageHTML(message) {
  if (message.role === "user") {
    return `<div class="msg user"><div class="speech">${rich(message.content)}</div></div>`;
  }
  return `<div class="msg assistant"><span class="bubble-logo" aria-hidden="true">${heartSVG()}</span><div class="speech">${rich(shapeReply(message.content))}</div></div>`;
}

function contactBlock(group, contacts) {
  const rows = contactsFrom(contacts);
  const items = rows.map((contact, index) => `
    <div class="contact-row">
      ${field(`${group}.emergencyContacts.${index}.name`, t("name"), contact.name)}
      ${field(`${group}.emergencyContacts.${index}.relationship`, t("relationship"), contact.relationship)}
      ${field(`${group}.emergencyContacts.${index}.phone`, t("phone"), contact.phone, "tel")}
      <button class="text-btn" type="button" data-action="remove-contact" data-group="${esc(group)}" data-index="${index}">${esc(t("removeContact"))}</button>
    </div>`).join("");
  const add = rows.length >= 3 ? "" : `<button class="text-btn" type="button" data-action="add-contact" data-group="${esc(group)}">${esc(t("addContact"))}</button>`;
  return `
    <div class="contact-block">
      <p class="contact-label">${esc(t("contacts"))}</p>
      ${items}
      ${add}
    </div>`;
}

function adminForm(inModal) {
  return `
    ${state.adminError ? `<p class="form-error">${esc(state.adminError)}</p>` : ""}
    <form data-form="admin">
      <label class="field">${labelSpan(t("password"))}
        <input data-field="adminPassword" data-focus="admin-password" type="password" autocomplete="current-password" value="${esc(state.adminPassword)}">
      </label>
      <div class="actions">
        <button class="${inModal ? "primary" : "pill-btn"}" type="submit" data-focus="admin-unlock">${esc(t("unlock"))}</button>
        ${inModal ? `<button class="ghost" type="button" data-action="close">${esc(t("cancel"))}</button>` : ""}
      </div>
    </form>`;
}

function adminGate() {
  return `
    <div class="view-registry">
      <article class="panel admin-gate">
        <h2>${esc(t("adminTitle"))}</h2>
        <p class="admin-hint">${esc(t("adminHint"))}</p>
        ${adminForm(false)}
      </article>
    </div>`;
}

function adminModal() {
  return `
    <div class="backdrop" data-action="backdrop">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="admin-title" tabindex="-1">
        <div class="set-row">
          <h2 id="admin-title">${esc(t("adminTitle"))}</h2>
          <button class="close" type="button" data-action="close" aria-label="${esc(t("close"))}">×</button>
        </div>
        <p class="who-line">${esc(t("adminHint"))}</p>
        ${adminForm(true)}
      </div>
    </div>`;
}

function registryView() {
  if (!state.adminOk) {
    if (state.adminChecking && adminToken()) {
      return `<div class="view-registry"><p class="intro">${esc(t("checkingRegistry"))}</p></div>`;
    }
    return adminGate();
  }
  const found = state.people.filter((p) => p.status === "found").length;
  const missing = state.people.filter((p) => p.status === "missing").length;
  return `
    <div class="view-registry">
      <p class="intro">${esc(t("regIntro"))}</p>
      <div class="map-wrap">
        <div id="rescue-map" role="region" aria-label="${esc(t("tabRegistry"))}"></div>
      </div>
      <p class="legend"><span class="dot shelter"></span> ${esc(t("legendShelter"))} <span class="dot person"></span> ${esc(t("legendPerson"))}</p>
      ${state.people.some((person) => personCoords(person)) ? "" : `<p class="sync">${esc(t("mapEmpty"))}</p>`}
      <div class="folds">
        ${foldHTML("found", state.showFound, "toggle-found", t("checkedIn"), found, foundListHTML())}
        ${foldHTML("missing", state.showMissing, "toggle-missing", t("notFound"), missing, missingListHTML())}
      </div>
      <p class="sync">${esc(t(state.registryNoteKey))}</p>
      <article class="panel">
        <h2>${esc(t("searchTitle"))}</h2>
        <form data-form="search">
          ${field("search.name", t("name"), state.search.name)}
          <div class="pair">
            ${selectField("search.sex", t("sex"), state.search.sex, sexOptions())}
            <label class="field">${labelSpan(t("age"))}
              <input data-field="search.age" data-focus="search.age" value="${esc(state.search.age)}" inputmode="numeric">
              <span class="hint">${esc(t("ageHint"))}</span>
            </label>
          </div>
          <div class="pair">
            ${field("search.eye", t("eye"), state.search.eye)}
            ${selectField("search.blood", t("blood"), state.search.blood, bloodOptions())}
          </div>
          <button class="text-btn" type="button" data-action="more">${esc(state.search.showMore ? t("less") : t("more"))}</button>
          ${state.search.showMore ? `
            ${field("search.ethnicity", t("ethnicity"), state.search.ethnicity)}
            ${field("search.height", t("height"), state.search.height)}
            ${field("search.bandId", t("bandCode"), state.search.bandId)}
          ` : ""}
          <div class="actions">
            <button class="pill-btn" type="submit">${esc(t("search"))}</button>
          </div>
        </form>
      </article>
      ${resultsHTML()}
    </div>`;
}

function foldHTML(kind, open, action, label, count, body) {
  return `
    <section class="fold ${kind}">
      <button class="fold-head" type="button" data-action="${action}" aria-expanded="${open}">
        <span>${esc(label)}</span>
        <b>${count}</b>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 10l5 5 5-5H7z"/></svg>
      </button>
      ${open ? `<div class="fold-body">${body}</div>` : ""}
    </section>`;
}

function profileFacts(person, nested) {
  const sex = person.sex ? (t("sex_" + person.sex) || person.sex) : "—";
  const row = (label, value) => `<li>${esc(label)}: ${esc(value || "—")}</li>`;
  const place = [person.area, person.shelter].filter(Boolean).join(" · ");
  const point = personCoords(person);
  const where = [place, point ? `${point.lat.toFixed(4)}, ${point.lng.toFixed(4)}` : ""].filter(Boolean).join(" · ");
  const body = `
      ${nested ? "" : `<h3>${esc(person.name || t("unknownName"))}</h3>`}
      <ul>
        ${row(t("sex"), sex)}
        ${row(t("age"), person.age)}
        ${row(t("ethnicity"), person.ethnicity)}
        ${row(t("eye"), person.eyeColor)}
        ${row(t("height"), person.height)}
        ${row(t("weight"), person.weight)}
        ${row(t("blood"), person.bloodType)}
        ${row(t("home"), person.homeAddress)}
        ${row(t("contacts"), contactText(person.emergencyContacts))}
      </ul>
      ${where ? `<p class="traits">${esc(where)}</p>` : ""}`;
  if (nested) return `<div class="profile-mini nested">${body}</div>`;
  return `<article class="profile-mini">${body}</article>`;
}

function foundListHTML() {
  const rows = state.people.filter((person) => person.status === "found");
  if (!rows.length) return `<p class="empty">${esc(t("noFoundList"))}</p>`;
  return rows.map(foundPersonHTML).join("");
}

function foundPersonHTML(person) {
  const open = !!state.openProfiles[person.bandId];
  return `
    <article class="profile-fold">
      <button class="profile-fold-head" type="button" data-action="toggle-person" data-band="${esc(person.bandId)}" aria-expanded="${open}">
        <span>${esc(person.name || t("unknownName"))}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 10l5 5 5-5H7z"/></svg>
      </button>
      ${open ? `<div class="profile-fold-body">${profileFacts(person, true)}</div>` : ""}
    </article>`;
}

function missingListHTML() {
  const draft = state.missingDraft;
  const rows = state.people.filter((person) => person.status === "missing");
  return `
    ${state.missingError ? `<p class="form-error">${esc(state.missingError)}</p>` : ""}
    ${field("missingDraft.name", t("name"), draft.name)}
    <div class="pair">
      ${selectField("missingDraft.sex", t("sex"), draft.sex, sexOptions())}
      ${field("missingDraft.age", t("age"), draft.age, "text")}
    </div>
    ${field("missingDraft.ethnicity", t("ethnicity"), draft.ethnicity)}
    <div class="pair">
      ${field("missingDraft.eyeColor", t("eye"), draft.eyeColor)}
      ${selectField("missingDraft.bloodType", t("blood"), draft.bloodType, bloodOptions())}
    </div>
    <div class="pair">
      ${field("missingDraft.height", t("height"), draft.height)}
      ${field("missingDraft.weight", t("weight"), draft.weight)}
    </div>
    ${field("missingDraft.homeAddress", t("home"), draft.homeAddress || "")}
    ${contactBlock("missingDraft", draft.emergencyContacts)}
    <button class="pill-btn" type="button" data-action="add-missing">${esc(t("addMissing"))}</button>
    ${rows.length ? rows.map(profileFacts).join("") : `<p class="empty">${esc(t("noMissingList"))}</p>`}
  `;
}

function labelSpan(text) { return `<span>${esc(text)}</span>`; }

function field(path, label, value, type = "text", list) {
  const id = path.replace(/\./g, "-");
  const listAttr = list ? ` list="${id}-list"` : "";
  const options = list ? `<datalist id="${id}-list">${list.map((item) => `<option value="${esc(item)}"></option>`).join("")}</datalist>` : "";
  return `<label class="field">${labelSpan(label)}
    <input data-field="${esc(path)}" data-focus="${esc(path)}" value="${esc(value)}" type="${type}"${listAttr}>
    ${options}
  </label>`;
}

function selectField(path, label, value, options) {
  return `<label class="field">${labelSpan(label)}
    <select data-field="${esc(path)}" data-focus="${esc(path)}">
      ${options.map((opt) => `<option value="${esc(opt.value)}" ${opt.value === value ? "selected" : ""}>${esc(opt.label)}</option>`).join("")}
    </select>
  </label>`;
}

function sexOptions() {
  return [{ value: "", label: "—" }].concat(SEX.map((value) => ({ value, label: t("sex_" + value) })));
}

function bloodOptions() {
  return [{ value: "", label: "—" }].concat(BLOOD.map((value) => ({
    value,
    label: value === "Unknown" ? t("sex_unknown") : value,
  })));
}

function personCard(person) {
  const bits = [sexText(person.sex), person.age, person.eyeColor, person.bloodType, person.ethnicity, person.height]
    .filter((bit) => bit && bit !== "—" && bit !== t("sample"));
  const found = person.status === "found";
  const place = person.latitude != null ? locationLabel(person) : (person.shelter || "");
  const where = found
    ? `${t("foundAt")}: ${place || "—"}${person.area ? " · " + person.area : ""}`
    : t("statusMissing");
  return `<article class="result">
    <p class="who">${esc(person.name)} <span class="badge ${found ? "found" : "missing"}">${esc(found ? t("statusFound") : t("statusMissing"))}</span></p>
    ${bits.length ? `<p class="traits">${esc(bits.join(" · "))}</p>` : ""}
    <p class="where">${esc(where)}${person.bandId ? ` · ${esc(person.bandId)}` : ""}</p>
  </article>`;
}

function resultsHTML() {
  if (!state.search.ran) return "";
  if (!state.search.results) return "";
  if (!state.search.results.length) return `<p class="empty">${esc(t("noMatch"))}</p>`;
  return `<section class="results"><h3>${esc(t("results"))}</h3>${state.search.results.map(personCard).join("")}</section>`;
}

function modalHTML() {
  if (state.modal === "settings") return settingsModal();
  if (state.modal === "admin") return adminModal();
  if (state.modal === "edit") return editModal();
  if (state.modal === "add") return addModal();
  return "";
}

function addModal() {
  const pending = state.pendingAdd;
  if (!pending) return "";
  const bits = [sexText(pending.sex), pending.age, pending.bloodType].filter(Boolean);
  let location = t("locWaiting");
  if (pending.locationState === "ready") {
    const bits = [t("locReady")];
    if (pending.place) bits.push(pending.place);
    if (pending.near) bits.push(`${t("near")} ${pending.near}`);
    location = bits.join(". ");
  }
  if (pending.locationState === "denied") location = t("locDenied");
  return `
    <div class="backdrop" data-action="backdrop">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="add-title" tabindex="-1">
        <div class="set-row">
          <h2 id="add-title">${esc(t("addTitle"))}</h2>
          <button class="close" type="button" data-action="close" aria-label="${esc(t("close"))}">×</button>
        </div>
        <p class="who-line">${esc(pending.name)}</p>
        ${bits.length ? `<p class="who-line">${esc(bits.join(" · "))}</p>` : ""}
        <p class="who-line">${esc(location)}</p>
        <div class="actions">
          <button class="primary" type="button" data-action="confirm-add" data-focus="confirm-add">${esc(t("addYes"))}</button>
          <button class="ghost" type="button" data-action="close">${esc(t("addNo"))}</button>
        </div>
      </div>
    </div>`;
}

function settingsModal() {
  const size = state.settings.size;
  const color = state.settings.color;
  const tts = state.settings.tts;
  const sizeBtn = (value, cls) => `<button type="button" class="${cls}" data-action="size" data-value="${value}" data-focus="size-${value}" aria-pressed="${size === value}">Aa</button>`;
  return `
    <div class="backdrop" data-action="backdrop">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="settings-title" tabindex="-1">
        <div class="set-row">
          <span class="aa-mark" aria-hidden="true">Aa</span>
          <h2 id="settings-title">${esc(t("font"))}</h2>
          <button class="close" type="button" data-action="close" data-focus="close-settings" aria-label="${esc(t("close"))}">×</button>
        </div>
        <div class="sizes" role="group" aria-label="${esc(t("font"))}">
          ${sizeBtn("sm", "sm")}${sizeBtn("md", "md")}${sizeBtn("lg", "lg")}
        </div>
        <div class="set-label">
          <span class="wheel" aria-hidden="true"></span>
          <p>${esc(t("color"))}</p>
        </div>
        <div class="pills" role="group" aria-label="${esc(t("color"))}">
          <button type="button" data-action="color" data-value="rg" data-focus="color-rg" aria-pressed="${color === "rg"}"><span class="c-red">${esc(t("rgA"))}</span>-<span class="c-green">${esc(t("rgB"))}</span></button>
          <button type="button" data-action="color" data-value="by" data-focus="color-by" aria-pressed="${color === "by"}"><span class="c-blue">${esc(t("byA"))}</span>-<span class="c-yellow">${esc(t("byB"))}</span></button>
          <button type="button" data-action="color" data-value="mono" data-focus="color-mono" aria-pressed="${color === "mono"}">${esc(t("mono"))}</button>
        </div>
        <div class="set-label">
          <span class="chat-icon" aria-hidden="true">${bubbleIcon()}</span>
          <p>${esc(t("tts"))}</p>
        </div>
        <p class="tts-note">${esc(t("ttsNote"))}</p>
        <div class="tts" role="group" aria-label="${esc(t("tts"))}">
          <button type="button" data-action="tts" data-value="on" data-focus="tts-on" aria-pressed="${tts}">${speakerIcon(false)} ${esc(t("on"))}</button>
          <button type="button" data-action="tts" data-value="off" data-focus="tts-off" aria-pressed="${!tts}">${esc(t("off"))} ${speakerIcon(true)}</button>
        </div>
      </div>
    </div>`;
}

function editModal() {
  const edit = state.edit || defaultProfile();
  const photo = edit.photo ? `<img src="${esc(edit.photo)}" alt="">` : personSVG();
  return `
    <div class="backdrop" data-action="backdrop">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="edit-title" tabindex="-1">
        <div class="set-row">
          <h2 id="edit-title">${esc(t("edit"))}</h2>
          <button class="close" type="button" data-action="close" aria-label="${esc(t("close"))}">×</button>
        </div>
        <div class="photo-field">
          <div class="avatar">${photo}</div>
          <button class="pill-btn" type="button" data-action="pick-photo">${esc(t("photo"))}</button>
          <input id="photo-input" class="file-input" type="file" accept="image/png,image/jpeg,.png,.jpg,.jpeg" data-file="photo">
        </div>
        ${state.editError ? `<p class="form-error">${esc(state.editError)}</p>` : ""}
        ${field("edit.name", t("name"), edit.name)}
        ${selectField("edit.sex", t("sex"), edit.sex, sexOptions())}
        ${field("edit.age", t("age"), edit.age)}
        ${field("edit.ethnicity", t("ethnicity"), edit.ethnicity)}
        ${field("edit.eyeColor", t("eye"), edit.eyeColor)}
        <div class="pair">
          ${field("edit.height", t("height"), edit.height)}
          ${field("edit.weight", t("weight"), edit.weight)}
        </div>
        ${selectField("edit.bloodType", t("blood"), edit.bloodType, bloodOptions())}
        ${field("edit.homeAddress", t("home"), edit.homeAddress || "")}
        ${contactBlock("edit", edit.emergencyContacts)}
        <div class="actions">
          <button class="primary" type="button" data-action="save-edit" data-focus="save-edit">${esc(t("save"))}</button>
          <button class="ghost" type="button" data-action="close">${esc(t("cancel"))}</button>
        </div>
      </div>
    </div>`;
}

function translateIcon() {
  return `<svg viewBox="0 0 32 32" aria-hidden="true">
    <rect x="2" y="4" width="18" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
    <path fill="currentColor" d="M8 18l-2.2 5 6-5z"/>
    <text x="6.2" y="14" font-size="8" font-family="Montserrat,sans-serif" font-weight="700" fill="currentColor">A</text>
    <text x="16" y="27" font-size="9" font-family="Noto Sans TC,sans-serif" font-weight="700" fill="currentColor">文</text>
  </svg>`;
}

function wrenchIcon() {
  return `<svg viewBox="0 0 48 32" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M18 20.5L27 11"/>
    <path d="M26.2 10.2a5.2 5.2 0 0 1 6.6-4.4l-2.7 2.7 2.2 2.2 2.7-2.7a5.2 5.2 0 0 1-6.2 7.4L18.5 25.8a2.6 2.6 0 0 1-3.7-3.7l9.3-9.4"/>
    <circle cx="36" cy="22" r="5.2"/>
    <path d="M36 19.2v5.6M33.2 22h5.6"/>
  </svg>`;
}

function cloudIcon() {
  return `<svg viewBox="0 0 48 32" aria-hidden="true">
    <path fill="#8d98ae" d="M18 27h16.5a7.2 7.2 0 0 0 .6-14.4A10 10 0 0 0 16.2 8.2 7.4 7.4 0 0 0 18 27z"/>
    <path d="M24 13.5v9" fill="none" stroke="#2c2d44" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M20.2 17.2L24 13.2l3.8 4" fill="none" stroke="#2c2d44" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

function docIcon() {
  return `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M16 8h22l12 12v34a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z"/>
    <path d="M38 8v12h12"/>
    <path d="M32 28v16"/>
    <path d="M25 35l7-8 7 8"/>
    <path d="M22 50h20"/>
  </svg>`;
}

function bubbleIcon() {
  return `<svg viewBox="0 0 36 32" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
    <rect x="2" y="3" width="32" height="20" rx="6"/>
    <path d="M10 23l-2 6 8-6" fill="currentColor" stroke="none"/>
    <circle cx="12" cy="13" r="1.4" fill="currentColor" stroke="none"/>
    <circle cx="18" cy="13" r="1.4" fill="currentColor" stroke="none"/>
    <circle cx="24" cy="13" r="1.4" fill="currentColor" stroke="none"/>
  </svg>`;
}

function speakerIcon(muted) {
  const x = muted
    ? `<path d="M18 7l8 10M26 7l-8 10" stroke="#d90429" stroke-width="2.2" stroke-linecap="round"/>`
    : `<path d="M16 8c2 1.4 2 6.6 0 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`;
  return `<svg viewBox="0 0 32 24" aria-hidden="true">
    <path fill="currentColor" d="M3 8h5l6-5v18l-6-5H3z"/>
    ${x}
  </svg>`;
}

function setPath(path, value) {
  if (path === "chatDraft") {
    state.chatDraft = value;
    return;
  }
  if (path === "adminPassword") {
    state.adminPassword = value;
    return;
  }
  const parts = path.split(".");
  if (parts.length === 4 && (parts[0] === "edit" || parts[0] === "missingDraft") && parts[1] === "emergencyContacts") {
    const index = Number(parts[2]);
    const key = parts[3];
    const row = state[parts[0]] && state[parts[0]].emergencyContacts && state[parts[0]].emergencyContacts[index];
    if (!row) return;
    if (key === "name" || key === "relationship" || key === "phone") row[key] = value;
    return;
  }
  const [group, key] = parts;
  if (parts.length === 2 && state[group] && key) state[group][key] = value;
}

function onInput(event) {
  const el = event.target.closest("[data-field]");
  if (!el) return;
  const clean = repairText(el.value);
  if (clean !== el.value) {
    const at = el.selectionStart;
    el.value = clean;
    if (at != null) el.setSelectionRange(at, at);
  }
  setPath(el.dataset.field, clean);
  if (el.dataset.field === "checkin.shelter" || el.dataset.field === "checkin.area") persist();
}

function onClick(event) {
  const closer = event.target.closest("[data-action]");
  if (!closer) return;
  const action = closer.dataset.action;
  if (action === "backdrop" && event.target !== closer) return;
  if (action === "settings") openSettings();
  else if (action === "close" || action === "backdrop") closeModal();
  else if (action === "lang") cycleLang();
  else if (action === "size") setSize(closer.dataset.value);
  else if (action === "color") setColor(closer.dataset.value);
  else if (action === "tts") setTts(closer.dataset.value === "on");
  else if (action === "edit") openEdit();
  else if (action === "save-edit") saveEdit();
  else if (action === "pick-photo") document.getElementById("photo-input")?.click();
  else if (action === "expand") location.hash = "consultant";
  else if (action === "retry") retrySummary();
  else if (action === "share-profile") offerShare();
  else if (action === "copy-link") copyBandLink();
  else if (action === "confirm-add") confirmAdd();
  else if (action === "more") {
    state.search.showMore = !state.search.showMore;
    render();
  }   else if (action === "missing" || action === "toggle-missing") {
    state.showMissing = !state.showMissing;
    render();
  } else if (action === "toggle-found") {
    state.showFound = !state.showFound;
    render();
  } else if (action === "toggle-person") {
    const id = closer.dataset.band;
    state.openProfiles[id] = !state.openProfiles[id];
    render();
  } else if (action === "add-missing") {
    addMissingPerson();
  } else if (action === "add-contact") {
    addContact(closer.dataset.group);
  } else if (action === "remove-contact") {
    removeContact(closer.dataset.group, closer.dataset.index);
  }
}

function onSubmit(event) {
  const form = event.target.closest("form[data-form]");
  if (!form) return;
  event.preventDefault();
  if (form.dataset.form === "chat") sendChat();
  else if (form.dataset.form === "search") runSearch();
  else if (form.dataset.form === "admin") {
    const input = form.querySelector("[data-field='adminPassword']");
    if (input) state.adminPassword = input.value;
    unlockAdmin();
  }
}

function onChange(event) {
  const input = event.target.closest("[data-file]");
  if (!input || !input.files) return;
  if (input.dataset.file === "records") handleFiles(input.files);
  if (input.dataset.file === "photo") setPhoto(input.files[0]);
}

function openSettings() {
  state.modal = "settings";
  state.focusModal = true;
  render();
}

function profileIsShared() {
  const id = state.profile.bandId;
  if (!id) return false;
  return state.people.some((person) => person.bandId === id);
}

function closeModal() {
  const which = state.modal;
  const back = which === "settings" ? "open-settings" : which === "add" ? "share" : which === "admin" && state.adminPurpose === "share" ? "share" : "open-edit";
  if (which === "admin") {
    state.adminPurpose = "";
    state.adminPassword = "";
    state.adminError = "";
  }
  state.modal = null;
  state.edit = null;
  state.pendingAdd = null;
  state.returnFocus = back;
  render();
}

function cycleLang() {
  const index = LANGS.indexOf(state.settings.lang);
  state.settings.lang = LANGS[(index + 1) % LANGS.length];
  persist();
  render();
  if (state.record.mode === "live" && state.record.sourceText) {
    refreshInsights();
  } else if (state.settings.tts) {
    speak(t("langChanged"));
  }
}

function setSize(value) {
  state.settings.size = value;
  persist();
  render();
}

function setColor(value) {
  state.settings.color = state.settings.color === value ? "none" : value;
  persist();
  render();
}

function setTts(on) {
  state.settings.tts = on;
  persist();
  render();
  if (!on) {
    window.speechSynthesis?.cancel();
    return;
  }
  speak(readout());
}

function readout() {
  const bits = [displayName(), `${t("blood")}: ${shown(state.profile.bloodType)}`];
  if (state.record.mode === "live") bits.push(summarySpeech());
  else bits.push(state.brief || t("briefEmpty"));
  return bits.join(". ");
}

function summarySpeech() {
  const s = state.record.summary;
  return [
    t("history"),
    ...(s.pastMedicalHistory.length ? s.pastMedicalHistory : [t("none")]),
    t("meds"),
    ...(s.medications.length ? s.medications : [t("none")]),
    t("allergies"),
    ...(s.allergies.length ? s.allergies : [t("none")]),
    state.brief,
  ].filter(Boolean).join(". ");
}

function speak(text) {
  if (!state.settings.tts || !text || !window.speechSynthesis) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = SPEECH_LANG[state.settings.lang] || "en-GB";
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

function askForAdmin(purpose) {
  state.adminPurpose = purpose;
  state.adminError = "";
  state.adminPassword = "";
  state.modal = "admin";
  state.focusModal = true;
  render();
}

function openEdit() {
  if (!adminToken()) {
    askForAdmin("edit");
    return;
  }
  state.edit = {
    ...state.profile,
    homeAddress: String(state.profile.homeAddress || ""),
    emergencyContacts: contactsFrom(state.profile.emergencyContacts).map((item) => ({ ...item })),
  };
  state.editError = "";
  state.modal = "edit";
  state.focusModal = true;
  render();
}

function addContact(group) {
  const target = state[group];
  if (!target) return;
  if (!Array.isArray(target.emergencyContacts)) target.emergencyContacts = [];
  if (target.emergencyContacts.length >= 3) return;
  target.emergencyContacts.push({ name: "", relationship: "", phone: "" });
  render();
}

function removeContact(group, index) {
  const target = state[group];
  if (!target || !Array.isArray(target.emergencyContacts)) return;
  target.emergencyContacts.splice(Number(index), 1);
  render();
}

async function unlockAdmin() {
  if (state.adminBusy) return;
  const purpose = state.adminPurpose || "registry";
  const password = state.adminPassword;
  state.adminBusy = true;
  state.adminPassword = "";
  state.adminError = "";
  try {
    const res = await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (!res.ok) {
      state.adminError = t("adminFail");
      render();
      return;
    }
    const data = await res.json();
    if (!data || typeof data.token !== "string" || !data.token) {
      state.adminError = t("adminFail");
      render();
      return;
    }
    sessionStorage.setItem(ADMIN_KEY, data.token);
    state.adminPurpose = "";
    if (state.modal === "admin") state.modal = null;
    try {
      await loadPeople();
    } catch (error) {
      if (error.message === "auth") {
        state.adminError = t("adminFail");
        render();
        return;
      }
      state.registryNoteKey = "registryMiss";
      state.adminError = t("registryMiss");
      render();
      return;
    }
    if (purpose === "edit") openEdit();
    else if (purpose === "share") offerShare();
    else render();
  } catch {
    state.adminError = t("adminFail");
    render();
  } finally {
    state.adminBusy = false;
  }
}

function saveEdit() {
  const edit = state.edit;
  if (!edit || !edit.name.trim()) {
    state.editError = t("nameRequired");
    render();
    return;
  }
  const bandId = bandRoute() || state.profile.bandId || uniqueBandId();
  state.profile = {
    ...edit,
    name: edit.name.trim(),
    homeAddress: String(edit.homeAddress || "").trim().slice(0, 160),
    emergencyContacts: filledContacts(edit.emergencyContacts),
    saved: true,
    bandId,
    updatedAt: new Date().toISOString(),
  };
  state.modal = null;
  state.edit = null;
  state.returnFocus = "open-edit";
  persist();
  announce(t("savedProfile"));
  if (state.settings.tts) speak(`${state.profile.name}. ${t("savedProfile")}`);
  render();
}

function uniqueBandId() {
  let id = "";
  const taken = new Set(state.people.map((p) => p.bandId));
  do {
    id = `AB-${Math.floor(1000 + Math.random() * 9000)}`;
  } while (taken.has(id) || RESERVED_BANDS.includes(id));
  return id;
}

async function setPhoto(file) {
  if (!file || !state.edit) return;
  const named = /\.(png|jpe?g|heic|webp)$/i.test(file.name || "");
  if (!/^image\//.test(file.type || "") && !named) {
    state.editError = t("fileType");
    render();
    return;
  }
  const photo = await shrinkImage(file);
  if (!photo) {
    state.editError = t("fileType");
    render();
    return;
  }
  state.edit.photo = photo;
  state.editError = "";
  render();
}

function shrinkImage(file) {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      let edge = 320;
      let quality = 0.68;
      let data = encodePhoto(img, edge, quality);
      while (data.length > 90000 && edge > 96) {
        edge = Math.round(edge * 0.75);
        quality = Math.max(0.46, quality - 0.08);
        data = encodePhoto(img, edge, quality);
      }
      resolve(data.startsWith("data:image/jpeg") ? data : "");
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve("");
    };
    img.src = url;
  });
}

function encodePhoto(img, edge, quality) {
  const scale = Math.min(1, edge / Math.max(img.width, img.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(img.width * scale));
  canvas.height = Math.max(1, Math.round(img.height * scale));
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", quality);
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[data-src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.dataset.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("script"));
    document.head.appendChild(script);
  });
}

async function loadPdfJs() {
  await loadScript("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js");
  window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
}

async function ocrSource(source) {
  await loadScript("https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js");
  const lang = { en: "eng", zh: "chi_tra+eng", ne: "nep+eng", fr: "fra+eng" }[state.settings.lang] || "eng";
  try {
    const result = await window.Tesseract.recognize(source, lang);
    return result.data.text || "";
  } catch {
    const result = await window.Tesseract.recognize(source, "eng");
    return result.data.text || "";
  }
}

async function pdfToText(file) {
  await loadPdfJs();
  const data = new Uint8Array(await file.arrayBuffer());
  const doc = await window.pdfjsLib.getDocument({ data }).promise;
  let text = "";
  const pages = Math.min(doc.numPages, 6);
  for (let i = 1; i <= pages; i += 1) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    text += `${content.items.map((item) => item.str).join(" ")}\n`;
  }
  if (text.replace(/\s/g, "").length >= 40) return text;
  let scanned = "";
  const ocrPages = Math.min(doc.numPages, 2);
  for (let i = 1; i <= ocrPages; i += 1) {
    const page = await doc.getPage(i);
    const viewport = page.getViewport({ scale: 1.4 });
    const canvas = document.createElement("canvas");
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    await page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
    scanned += `${await ocrSource(canvas)}\n`;
  }
  return scanned;
}

async function handleFiles(fileList) {
  const files = [...fileList];
  if (!files.length || state.busy) return;
  for (const file of files) {
    const named = /\.(pdf|png|jpe?g)$/i.test(file.name);
    const typed = ["application/pdf", "image/png", "image/jpeg"].includes(file.type);
    if (!named && !typed) {
      state.aiError = t("fileType");
      announce(state.aiError);
      render();
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      state.aiError = t("fileSize");
      announce(state.aiError);
      render();
      return;
    }
  }
  state.busy = true;
  state.busyText = t("reading");
  state.aiError = "";
  render();
  try {
    const chunks = [];
    for (const file of files) {
      const isPdf = file.type === "application/pdf" || /\.pdf$/i.test(file.name);
      chunks.push(isPdf ? await pdfToText(file) : await ocrSource(file));
    }
    const combined = chunks.join("\n\n").trim();
    if (combined.replace(/\s/g, "").length < 12) {
      const error = new Error("empty");
      throw error;
    }
    state.record.sourceText = combined.slice(0, 20000);
    state.record.uploadedAt = new Date().toISOString();
    persist();
    await refreshInsights();
  } catch (error) {
    state.busy = false;
    state.busyText = "";
    state.aiError = error.message === "empty" ? t("unreadable") : t("aiFail");
    announce(state.aiError);
    render();
  }
}

function retrySummary() {
  if (state.record.sourceText) refreshInsights();
}

function cleanModelText(text) {
  return String(text || "")
    .replace(/<think>[\s\S]*?<\/think>/gi, "")
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();
}

async function askAI(messages) {
  let last = "ai";
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 50000);
    try {
      const res = await fetch("https://text.pollinations.ai/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "openai-fast", messages, temperature: 0.2 }),
        signal: ctrl.signal,
      });
      if (res.status === 402) {
        last = "rate";
      } else if (!res.ok) {
        last = "ai";
      } else {
        const data = await res.json();
        const text = cleanModelText(data?.choices?.[0]?.message?.content || "");
        if (text) return text;
        last = "ai";
      }
    } catch (error) {
      last = error.name === "AbortError" ? "timeout" : "ai";
    } finally {
      clearTimeout(timer);
    }
    if (last === "rate" && attempt === 0) {
      state.busyText = t("aiBusy");
      render();
      await new Promise((resolve) => setTimeout(resolve, 46000));
      continue;
    }
    break;
  }
  throw new Error(last);
}

function languageRule() {
  return `Write in ${AI_LANG[state.settings.lang]}.`;
}

function insightSystem() {
  return `You turn an uploaded medical record into a short summary for a rescue bracelet.
Return JSON only, with this shape:
{"pastMedicalHistory": string[], "medications": string[], "allergies": string[], "briefing": string}

Match this style. The example shows the shape, not words to copy unless the document is that case:
pastMedicalHistory:
- "Chronic obstructive pulmonary disease (COPD)"
- "Recent visit: Acute exacerbation on 18/11/2026"
- "Previous acute exacerbation episodes"
medications:
- "Inhaled Salbutamol through nebuliser - open tight airways"
- "Amoxicillin-Clavulanate for a standard course of 5-7 days"
- "Aminopenicillins prescribed for past acute exacerbation episodes"
allergies:
- "No Known Drug Allergies (NKDA)."

How to build the lists from the document you are given:
- pastMedicalHistory: the diagnosis the record names, then the current visit as "Recent visit: <problem> on <date>" when a date is written, then a separate line for earlier episodes when the record mentions them, such as "Previous acute exacerbation episodes". Keep that history line even if a medicine line also mentions those episodes. Keep the condition name and abbreviation as written. Do not make separate lines for occupation, smoking, vitals, lab numbers, or examination findings.
- medications: each medicine prescribed in this visit, then medicines named for past episodes. When the record says what a medicine is for, add that purpose after a dash in a few plain words. Include a duration only when the record states one. Do not invent a drug, dose, or purpose.
- allergies: the allergy statement as written. If the record says there are no known drug allergies, write "No Known Drug Allergies (NKDA)." Use an empty array only when allergies are not mentioned.
- One line per item, with no numbers inside the string. Maximum 6 items in each array.
- briefing: two or three natural sentences a rescue worker can read quickly. Explain the illness or injury and what the medicines are for, and add practical advice. Do not use markdown, asterisks, or hash headings. Do not invent numbers or thresholds that are not written. Do not say that you cannot diagnose or prescribe.
- ${languageRule()}`;
}

function parseSummary(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end <= start) throw new Error("json");
  const obj = JSON.parse(text.slice(start, end + 1));
  const list = (value) => {
    if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean).slice(0, 6);
    if (typeof value === "string" && value.trim()) return [value.trim()];
    return [];
  };
  return {
    pastMedicalHistory: list(obj.pastMedicalHistory),
    medications: list(obj.medications),
    allergies: list(obj.allergies),
    briefing: String(obj.briefing || "").trim(),
  };
}

function profileLines() {
  const p = state.profile;
  if (!p.saved) return "No saved bracelet profile.";
  return [
    `Name: ${p.name}`,
    p.sex ? `Sex: ${p.sex}` : "",
    p.age ? `Age: ${p.age}` : "",
    p.bloodType ? `Blood type recorded on the bracelet: ${p.bloodType}` : "",
    p.eyeColor ? `Eye color: ${p.eyeColor}` : "",
    p.height ? `Height: ${p.height}` : "",
  ].filter(Boolean).join("\n");
}

function chatSystem() {
  const summary = state.record.mode === "live" ? JSON.stringify(state.record.summary) : "No medical record has been uploaded.";
  return `You are the AID-BAND assistant. Explain illnesses, injuries, and medicines in plain language, and give practical advice when asked.
When the question is about this person, use the bracelet profile and the record summary.
Do not invent allergies, medicines, doses, or measurements that are not in the record.
Do not add a disclaimer that you cannot diagnose.
Talk naturally to a rescue worker. Use complete, flowing sentences, not clipped notes.
A reply can be a few paragraphs. Use a bullet list only when you are listing several separate steps, and make each bullet a full sentence starting with "- ".
Leave a blank line between paragraphs.
Do not use bold, italics, asterisks, or hash headings.
Write contractions with a normal apostrophe.
${languageRule()}
Bracelet profile:
${profileLines()}
Record summary already shown on screen:
${summary}
Rescue briefing already shown:
${state.brief || "None yet."}`;
}

async function refreshInsights() {
  if (!state.record.sourceText || state.insightRunning) return;
  state.insightRunning = true;
  state.busy = true;
  state.busyText = t("summarizing");
  state.aiError = "";
  render();
  try {
    const raw = await askAI([
      { role: "system", content: insightSystem() },
      { role: "user", content: `Bracelet:\n${profileLines()}\n\nDocument:\n${state.record.sourceText.slice(0, 12000)}` },
    ]);
    const parsed = parseSummary(raw);
    state.record.summary = {
      pastMedicalHistory: parsed.pastMedicalHistory,
      medications: parsed.medications,
      allergies: parsed.allergies,
    };
    state.record.mode = "live";
    if (!state.record.uploadedAt) state.record.uploadedAt = new Date().toISOString();
    state.brief = parsed.briefing || t("briefEmpty");
    persist();
    if (state.settings.tts) speak(summarySpeech());
  } catch (error) {
    state.aiError = error.message === "rate" ? t("aiBusy") : t("aiFail");
    announce(state.aiError);
  } finally {
    state.insightRunning = false;
    state.busy = false;
    state.busyText = "";
    persist();
    render();
  }
}

async function sendChat() {
  const text = state.chatDraft.trim();
  if (!text || state.chatBusy) return;
  state.chat.push({ role: "user", content: text });
  state.chatDraft = "";
  state.chatBusy = true;
  persist();
  render();
  try {
    const reply = await askAI([
      { role: "system", content: chatSystem() },
      ...state.chat.slice(-8).map((message) => ({ role: message.role, content: message.content })),
    ]);
    state.chat.push({ role: "assistant", content: shapeReply(reply) });
    if (state.settings.tts) speak(reply);
  } catch (error) {
    state.chat.push({ role: "assistant", content: error.message === "rate" ? t("aiBusy") : t("aiFail") });
  } finally {
    state.chatBusy = false;
    persist();
    render();
  }
}

function norm(value) { return String(value || "").trim().toLowerCase(); }

function matches(person, query) {
  if (query.name && !norm(person.name).includes(norm(query.name))) return false;
  if (query.sex && norm(person.sex) !== norm(query.sex)) return false;
  if (query.ethnicity && !norm(person.ethnicity).includes(norm(query.ethnicity))) return false;
  if (query.eye && !norm(person.eyeColor).includes(norm(query.eye))) return false;
  if (query.height && !norm(person.height).includes(norm(query.height))) return false;
  if (query.blood && norm(person.bloodType) !== norm(query.blood)) return false;
  if (query.bandId && !norm(person.bandId).includes(norm(query.bandId))) return false;
  if (query.age) {
    const left = parseInt(person.age, 10);
    const right = parseInt(query.age, 10);
    if (Number.isFinite(left) && Number.isFinite(right)) {
      if (Math.abs(left - right) > 3) return false;
    } else if (!norm(person.age).includes(norm(query.age))) return false;
  }
  return true;
}

function runSearch() {
  const query = {
    name: state.search.name, sex: state.search.sex, age: state.search.age,
    eye: state.search.eye, blood: state.search.blood, ethnicity: state.search.ethnicity,
    height: state.search.height, bandId: state.search.bandId,
  };
  const any = Object.values(query).some((value) => String(value || "").trim());
  if (!any) {
    state.search.results = [];
    state.search.ran = true;
    announce(t("noQuery"));
    render();
    return;
  }
  state.search.results = state.people.filter((person) => matches(person, query));
  state.search.ran = true;
  announce(state.search.results.length ? `${state.search.results.length}` : t("noMatch"));
  render();
}

function traitsFrom(source) {
  return {
    bandId: String(source.bandId || source.id || "").toUpperCase(),
    name: source.name || "",
    sex: source.sex || "",
    age: source.age || "",
    ethnicity: source.ethnicity || "",
    eyeColor: source.eyeColor || source.eye || "",
    height: source.height || "",
    weight: source.weight || "",
    bloodType: source.bloodType || source.blood || "",
    homeAddress: String(source.homeAddress || "").trim().slice(0, 160),
    emergencyContacts: filledContacts(source.emergencyContacts),
    history: listField(source.history),
    medications: listField(source.medications || source.meds),
    allergies: listField(source.allergies),
  };
}

function listField(value) {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean).slice(0, 6);
  if (typeof value === "string" && value.trim()) {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return listField(parsed);
    } catch { /* plain text */ }
    return [value.trim()];
  }
  return [];
}

function personCoords(person) {
  if (!person || person.latitude == null || person.longitude == null || person.latitude === "" || person.longitude === "") return null;
  const lat = Number(person.latitude);
  const lng = Number(person.longitude);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
  if (lat < -90 || lat > 90 || lng < -180 || lng > 180) return null;
  return { lat, lng, person };
}

function distanceKm(a, b) {
  const toRad = (deg) => deg * Math.PI / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const s = Math.sin(dLat / 2) ** 2
    + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.min(1, Math.sqrt(s)));
}

function localShelters(points) {
  const found = [];
  points.forEach((point) => {
    SHELTER_PINS.forEach((shelter) => {
      if (distanceKm(point, shelter) <= 25) found.push(shelter);
    });
  });
  return found;
}

function nearestShelter(lat, lng, extra = []) {
  const here = { lat, lng };
  let best = null;
  let bestKm = Infinity;
  localShelters([here]).concat(extra).forEach((shelter) => {
    const km = distanceKm(here, shelter);
    if (km < bestKm) {
      best = shelter;
      bestKm = km;
    }
  });
  return bestKm <= 3 ? best : null;
}

function locationLabel(person) {
  if (person.shelter) return person.shelter;
  if (person.area) return person.area;
  const point = personCoords(person);
  if (!point) return "";
  return `${point.lat.toFixed(4)}, ${point.lng.toFixed(4)}`;
}

const placeCache = new Map();

function placeInfo(lat, lng) {
  const key = `${Number(lat).toFixed(2)},${Number(lng).toFixed(2)}`;
  if (!placeCache.has(key)) {
    placeCache.set(key, fetch(`/api/place?lat=${encodeURIComponent(lat)}&lng=${encodeURIComponent(lng)}`)
      .then(async (res) => (res.ok ? res.json() : { place: "", shelters: [] }))
      .catch(() => ({ place: "", shelters: [] })));
  }
  return placeCache.get(key);
}

function uniquePoints(points) {
  const seen = new Set();
  return points.filter((point) => {
    const key = `${point.lat.toFixed(2)},${point.lng.toFixed(2)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function drawShelterMarkers(layer, shelters) {
  layer.clearLayers();
  const drawn = new Set();
  shelters.forEach((shelter) => {
    const key = `${Number(shelter.lat).toFixed(4)},${Number(shelter.lng).toFixed(4)}`;
    if (drawn.has(key) || !Number.isFinite(Number(shelter.lat)) || !Number.isFinite(Number(shelter.lng))) return;
    drawn.add(key);
    window.L.circleMarker([shelter.lat, shelter.lng], {
      radius: 8,
      color: "#1d4fbf",
      fillColor: "#2f6bff",
      fillOpacity: 0.95,
      weight: 2,
    }).bindPopup(`<strong>${esc(shelter.name)}</strong><br>${esc(t("legendShelter"))}`).addTo(layer);
  });
}

function frameMap(map, points) {
  if (points.length === 1) map.setView([points[0].lat, points[0].lng], 14);
  else if (points.length > 1) map.fitBounds(points.map((point) => [point.lat, point.lng]), { padding: [28, 28], maxZoom: 14 });
  else map.setView([20, 0], 2);
}

function mountMap() {
  const el = document.getElementById("rescue-map");
  if (!el || !window.L) return;
  const points = state.people.map(personCoords).filter(Boolean);
  const map = window.L.map(el, { zoomControl: true, minZoom: 2, maxZoom: 18 });
  frameMap(map, points);
  window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap",
  }).addTo(map);
  const shelterLayer = window.L.layerGroup().addTo(map);
  drawShelterMarkers(shelterLayer, localShelters(points));
  points.forEach((point) => {
    const person = point.person;
    const icon = window.L.divIcon({
      className: "person-pin",
      html: `<span class="person-pin-dot">${personPinSVG()}</span>`,
      iconSize: [28, 28],
      iconAnchor: [14, 26],
      popupAnchor: [0, -22],
    });
    window.L.marker([point.lat, point.lng], { icon, title: person.name }).bindPopup(
      `<strong>${esc(person.name)}</strong><br>${esc(locationLabel(person))}`
    ).addTo(map);
  });
  mapHandle = map;
  setTimeout(() => map.invalidateSize(), 150);
  loadNearbyShelters(map, shelterLayer, uniquePoints(points));
}

async function loadNearbyShelters(map, layer, points) {
  const shelters = localShelters(points);
  for (const point of points.slice(0, 6)) {
    if (mapHandle !== map) return;
    const info = await placeInfo(point.lat, point.lng);
    (info.shelters || []).forEach((shelter) => shelters.push(shelter));
    if (mapHandle !== map) return;
    drawShelterMarkers(layer, shelters);
  }
}

function personPinSVG() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7" r="3.2" fill="#fff"/><path fill="#fff" d="M6.2 20c.4-4 2.6-6 5.8-6s5.4 2 5.8 6H6.2z"/></svg>`;
}

async function addMissingPerson() {
  if (!adminToken()) {
    state.adminOk = false;
    state.adminError = t("adminFail");
    render();
    return;
  }
  const draft = state.missingDraft;
  if (!draft.name.trim()) {
    state.missingError = t("nameRequired");
    state.showMissing = true;
    render();
    return;
  }
  const person = {
    bandId: uniqueBandId(),
    name: draft.name.trim(),
    sex: draft.sex,
    age: draft.age.trim(),
    ethnicity: draft.ethnicity.trim(),
    eyeColor: draft.eyeColor.trim(),
    height: draft.height.trim(),
    weight: draft.weight.trim(),
    bloodType: draft.bloodType,
    homeAddress: String(draft.homeAddress || "").trim().slice(0, 160),
    emergencyContacts: filledContacts(draft.emergencyContacts),
    status: "missing",
    shelter: "",
    area: "",
    latitude: null,
    longitude: null,
    history: [],
    medications: [],
    allergies: [],
  };
  try {
    await savePerson(person);
    state.missingDraft = emptyMissingDraft();
    state.missingError = "";
    state.showMissing = true;
    announce(`${person.name}. ${t("notFound")}`);
  } catch (error) {
    if (error.message === "auth") {
      state.adminOk = false;
      state.adminError = t("adminFail");
    } else {
      state.missingError = t("registryMiss");
    }
  }
  render();
}

async function savePerson(person) {
  const token = adminToken();
  if (!token) throw new Error("auth");
  const next = {
    ...person,
    homeAddress: String(person.homeAddress || "").trim().slice(0, 160),
    emergencyContacts: filledContacts(person.emergencyContacts),
    updatedAt: new Date().toISOString(),
  };
  const res = await fetch("/api/people", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(next),
  });
  if (res.status === 401) {
    clearAdminToken();
    throw new Error("auth");
  }
  if (!res.ok) throw new Error("save");
  const data = await res.json();
  const saved = data.person || next;
  saved.homeAddress = String(saved.homeAddress || "");
  saved.emergencyContacts = contactsFrom(saved.emergencyContacts);
  const listed = { ...saved };
  delete listed.photo;
  const index = state.people.findIndex((item) => item.bandId === listed.bandId);
  if (index >= 0) state.people[index] = listed;
  else state.people.unshift(listed);
  state.shared = true;
  state.adminOk = true;
  persist();
}

function askLocation(pending) {
  if (!navigator.geolocation) {
    pending.locationState = "denied";
    render();
    return;
  }
  navigator.geolocation.getCurrentPosition((position) => {
    if (state.pendingAdd !== pending) return;
    pending.latitude = position.coords.latitude;
    pending.longitude = position.coords.longitude;
    pending.locationState = "ready";
    const near = nearestShelter(pending.latitude, pending.longitude);
    pending.near = near ? near.name : "";
    render();
    describeLocation(pending);
  }, () => {
    if (state.pendingAdd !== pending) return;
    pending.locationState = "denied";
    render();
  }, { enableHighAccuracy: true, timeout: 12000, maximumAge: 5000 });
}

function offerShare() {
  if (!adminToken()) {
    askForAdmin("share");
    return;
  }
  if (!state.profile.saved || !state.profile.name || !state.profile.bandId) {
    state.bandNote = t("needProfile");
    render();
    return;
  }
  const summary = state.record.mode === "live" ? state.record.summary : {};
  const pending = {
    ...traitsFrom({
      ...state.profile,
      history: summary.pastMedicalHistory,
      medications: summary.medications,
      allergies: summary.allergies,
    }),
    latitude: null,
    longitude: null,
    locationState: "waiting",
    near: "",
    source: "profile",
    photo: state.profile.photo || "",
  };
  state.pendingAdd = pending;
  state.modal = "add";
  state.focusModal = true;
  state.bandNote = "";
  render();
  askLocation(pending);
}

async function describeLocation(pending) {
  if (pending.latitude == null || pending.longitude == null) return;
  const info = await placeInfo(pending.latitude, pending.longitude);
  if (state.pendingAdd !== pending) return;
  pending.place = info.place || "";
  const near = nearestShelter(pending.latitude, pending.longitude, info.shelters || []);
  pending.near = near ? near.name : "";
  render();
}

async function confirmAdd() {
  const pending = state.pendingAdd;
  if (!pending || !pending.name) return;
  if (pending.latitude != null && pending.longitude != null && !pending.place) {
    const info = await placeInfo(pending.latitude, pending.longitude);
    pending.place = info.place || "";
    if (!pending.near) {
      const near = nearestShelter(pending.latitude, pending.longitude, info.shelters || []);
      pending.near = near ? near.name : "";
    }
  }
  const person = {
    ...traitsFrom(pending),
    status: "found",
    shelter: pending.near || "",
    area: pending.place || "",
    photo: pending.photo || state.profile.photo || "",
    latitude: pending.latitude ?? null,
    longitude: pending.longitude ?? null,
  };
  if (!person.bandId) person.bandId = uniqueBandId();
  try {
    await savePerson(person);
    state.bandNote = state.shared ? `${person.name}. ${t("added")}` : t("deviceOnly");
    announce(state.bandNote);
    if (state.settings.tts) speak(state.bandNote);
  } catch (error) {
    if (error.message === "auth") {
      state.adminOk = false;
      state.bandNote = t("adminFail");
    } else {
      state.bandNote = t("registryMiss");
    }
    announce(state.bandNote);
  }
  state.modal = null;
  state.pendingAdd = null;
  state.returnFocus = "share";
  render();
}

async function loadPeople() {
  const token = adminToken();
  if (!token) {
    state.adminOk = false;
    throw new Error("auth");
  }
  const list = await fetch("/api/people", {
    cache: "no-store",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (list.status === 401) {
    clearAdminToken();
    throw new Error("auth");
  }
  if (!list.ok) throw new Error("list");
  const body = await list.json();
  const people = Array.isArray(body.people) ? body.people : [];
  people.forEach((person) => {
    person.homeAddress = String(person.homeAddress || "");
    person.emergencyContacts = contactsFrom(person.emergencyContacts);
  });
  state.people = people;
  state.adminOk = true;
  state.adminError = "";
  state.registryNoteKey = "sharedOk";
  state.shared = true;
}

async function detectBackend() {
  try {
    const res = await fetch("/api/health", { cache: "no-store" });
    if (!res.ok) throw new Error("health");
    const data = await res.json();
    state.shared = Boolean(data.shared);
    if (adminToken()) {
      try {
        await loadPeople();
      } catch (error) {
        state.adminOk = false;
        if (error.message !== "auth") state.adminError = t("registryMiss");
      }
    } else if (!state.shared) {
      state.registryNoteKey = "deviceOnly";
    }
  } catch {
    state.shared = false;
    state.adminOk = false;
    if (adminToken()) state.adminError = t("registryMiss");
    else state.registryNoteKey = "registryMiss";
  }
  state.adminChecking = false;
  state.triedBackend = true;
  persist();
  render();
}

document.addEventListener("input", onInput);
document.addEventListener("change", onChange);
document.addEventListener("click", onClick);
document.addEventListener("submit", onSubmit);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.modal) closeModal();
});
document.addEventListener("dragover", (event) => {
  const drop = event.target.closest?.(".drop");
  if (!drop) return;
  event.preventDefault();
  drop.classList.add("hot");
});
document.addEventListener("dragleave", (event) => {
  const drop = event.target.closest?.(".drop");
  if (drop) drop.classList.remove("hot");
});
document.addEventListener("drop", (event) => {
  const drop = event.target.closest?.(".drop");
  if (!drop) return;
  event.preventDefault();
  drop.classList.remove("hot");
  if (event.dataTransfer?.files?.length) handleFiles(event.dataTransfer.files);
});
window.addEventListener("hashchange", () => render());

function copyBandLink() {
  const url = bandUrl(state.profile.bandId || "");
  if (!state.profile.bandId) return;
  const done = () => {
    state.bandNote = t("copied");
    announce(state.bandNote);
    render();
  };
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(url).then(done).catch(() => {
      state.bandNote = url;
      render();
    });
    return;
  }
  state.bandNote = url;
  render();
}

load();
if (state.profile.bandId) state.checkin.bandId = state.profile.bandId;
render();
detectBackend();
if (bandRoute()) loadBandPage(bandRoute());
