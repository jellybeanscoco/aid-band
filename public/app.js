const LANGS = ["en", "zh", "ne", "fr"];
const LANG_CODE = { en: "ENG", zh: "繁", ne: "ने", fr: "FR" };
const HTML_LANG = { en: "en", zh: "zh-Hant", ne: "ne", fr: "fr" };
const SPEECH_LANG = { en: "en-GB", zh: "zh-HK", ne: "ne-NP", fr: "fr-FR" };
const AI_LANG = { en: "English", zh: "Traditional Chinese", ne: "Nepali", fr: "French" };
const SEX = ["female", "male", "other", "unknown"];
const BLOOD = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Unknown"];
const SHELTERS = [
  "Tap Seac Multisport Pavilion",
  "Olympic Sports Centre",
  "Areia Preta Sports Centre",
  "MUST Sports Complex",
  "Cotai East Pavilion",
];
const AREAS = [
  "Macau Peninsula",
  "Taipa",
  "Coloane",
  "Cotai",
  "Nossa Senhora de Fátima",
  "Santo António",
  "São Lázaro",
  "Sé",
  "São Lourenço",
];

const I18N = {
  en: {
    skip: "Skip to content",
    sampleName: "Sample Name",
    sample: "Sample",
    sex: "SEX", age: "AGE", ethnicity: "ETHNICITY", eye: "EYE COLOR",
    height: "HEIGHT", weight: "WEIGHT", blood: "BLOOD TYPE",
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
    consult: "AI CONSULTANT", expand: "Expand chat", collapse: "Collapse chat",
    chatCaution: "THIS ASSISTANT DOES NOT DIAGNOSE OR PRESCRIBE.",
    briefEmpty: "Upload a medical record and I will list what a rescuer should double-check. I will not diagnose.",
    chatPh: "Ask what to double-check", send: "SEND",
    font: "FONT SIZE & ICON SIZE:", color: "COLOR BLINDNESS:",
    rgA: "Red", rgB: "Green", byA: "Blue", byB: "Yellow", mono: "Monochromacy",
    tts: "TEXT TO SPEECH:",
    ttsNote: "CHANGING TEXT LANGUAGE ALSO CHANGES AUDIO LANGUAGE",
    on: "ON", off: "OFF", close: "Close",
    tabBand: "AID-BAND", tabRegistry: "RESCUE REGISTRY",
    regIntro: "This is the registry for the disaster area. Tap a bracelet to check someone in. Search by traits to see if a person has been found, and which shelter they are at.",
    checkedIn: "CHECKED IN", notFound: "NOT YET FOUND",
    checkTitle: "CHECK IN A BRACELET",
    thisBand: "This phone’s bracelet:",
    noBand: "Save a profile on the AID-BAND page to give this phone a bracelet code.",
    bandCode: "BAND CODE", shelter: "SHELTER", area: "AREA",
    tap: "TAP NFC BRACELET", checkIn: "CHECK IN",
    registerMissing: "REGISTER AS NOT YET FOUND",
    writeNfc: "WRITE CODE TO BRACELET",
    nfcUnsupported: "NFC needs Chrome on Android, over HTTPS. Enter the band code to check in from this device.",
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
    hideMissing: "HIDE LIST", emptyRegistry: "No bracelets have been added yet.",
    checkingRegistry: "Checking the registry…",
    sharedOk: "Shared across rescuers in this area.",
    deviceOnly: "Saved on this device only.",
    registryMiss: "Could not reach the shared registry. Showing the last copy saved on this device.",
    needProfile: "Edit and save the bracelet profile before registering it.",
    needShelter: "Add the shelter name before checking in.",
    savedProfile: "Profile saved.", registered: "Bracelet registered as not yet found.",
    alreadyFound: "This bracelet is already checked in.",
    checkedMsg: "Checked in.",
    photo: "PHOTO", save: "SAVE", cancel: "CANCEL",
    nameRequired: "A name is required.",
    sex_female: "Female", sex_male: "Male", sex_other: "Other", sex_unknown: "Unknown",
    ageHint: "Age matches within 3 years.",
    fileType: "Use a PDF, PNG, or JPG file.",
    fileSize: "That file is larger than 10 MB.",
    unreadable: "This file did not contain readable text. Try a clearer photo or a PDF with selectable text.",
    aiFail: "The assistant did not respond. Nothing here is a diagnosis. Try again.",
    aiBusy: "The free assistant is busy. Wait a minute and try again. Nothing here is a diagnosis.",
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
    edit: "編輯資料", updated: "最後更新",
    upload: "上傳病歷", formats1: "支援 PDF／PNG／JPG", formats2: "",
    drop: "上載或拖放檔案", reading: "正在讀取檔案…",
    summarizing: "正在撰寫摘要…", briefing: "正在準備救援核對…",
    summary: "自然語言摘要", recent: "最近上載：", recentPh: "日/月/年 XX:XX",
    history: "過往病歷：", meds: "藥物：", allergies: "過敏：", none: "沒有記錄",
    caution: "以上資料由人工智能摘要，請謹慎使用。",
    consult: "人工智能顧問", expand: "展開對話", collapse: "收合對話",
    chatCaution: "此顧問不會診斷，也不會開藥。",
    briefEmpty: "上載病歷後，我會列出救援人員應核對的事項。我不會作出診斷。",
    chatPh: "詢問應核對的事項", send: "傳送",
    font: "字體大小與圖示大小：", color: "色覺：",
    rgA: "紅", rgB: "綠", byA: "藍", byB: "黃", mono: "全色盲",
    tts: "文字轉語音：", ttsNote: "更改文字語言亦會更改語音語言",
    on: "開", off: "關", close: "關閉",
    tabBand: "護心帶", tabRegistry: "救援名冊",
    regIntro: "這是災區名冊。輕觸手環即可登記入住。可用特徵搜尋某人是否已被找到，以及入住了哪一個庇護站。",
    checkedIn: "已登記", notFound: "尚未找到",
    checkTitle: "手環登記", thisBand: "這部手機的手環：",
    noBand: "請先在護心帶頁面儲存個人資料，以取得手環編號。",
    bandCode: "手環編號", shelter: "庇護站", area: "地區",
    tap: "輕觸 NFC 手環", checkIn: "登記入住",
    registerMissing: "登記為尚未找到", writeNfc: "將編號寫入手環",
    nfcUnsupported: "NFC 需在 Android 的 Chrome 並使用 HTTPS。請在此輸入手環編號。",
    nfcWaiting: "請將手環貼近手機…", nfcDone: "已讀取手環。請確認庇護站，然後登記。",
    nfcWritten: "編號已寫入手環。", nfcErr: "未能讀取手環，請改為輸入編號。",
    searchTitle: "以特徵搜尋", search: "搜尋", more: "更多特徵", less: "較少特徵", name: "姓名",
    noQuery: "請至少輸入一項特徵。", noMatch: "名冊中沒有符合這些特徵的人。",
    statusFound: "已找到", statusMissing: "尚未找到", foundAt: "庇護站",
    showMissing: "顯示尚未找到的人", hideMissing: "隱藏名單",
    emptyRegistry: "尚未加入任何手環。", checkingRegistry: "正在檢查名冊…",
    sharedOk: "此災區的救援人員可共同查看。", deviceOnly: "只儲存在這部裝置。",
    registryMiss: "未能連上共用名冊，現顯示這部裝置最後儲存的副本。",
    needProfile: "請先編輯並儲存手環資料，再進行登記。",
    needShelter: "登記前請填寫庇護站名稱。", savedProfile: "資料已儲存。",
    registered: "已登記為尚未找到。", alreadyFound: "此手環已經登記入住。",
    checkedMsg: "已登記入住。", photo: "相片", save: "儲存", cancel: "取消",
    nameRequired: "必須填寫姓名。",
    sex_female: "女", sex_male: "男", sex_other: "其他", sex_unknown: "不詳",
    ageHint: "年齡會在三年範圍內配對。",
    fileType: "請使用 PDF、PNG 或 JPG 檔案。", fileSize: "檔案超過 10 MB。",
    unreadable: "檔案中沒有可讀文字。請改用更清晰的相片，或可選取文字的 PDF。",
    aiFail: "顧問沒有回應。這裡沒有任何診斷。請再試一次。",
    aiBusy: "免費顧問正忙。請稍候一分鐘再試。這裡沒有任何診斷。", retry: "再試一次",
    results: "結果", missingList: "尚未找到", unknownName: "不詳",
    langChanged: "語言已更改。", openSettings: "無障礙設定", cycleLang: "更改語言",
  },
  ne: {
    skip: "सामग्रीमा जानुहोस्",
    sampleName: "नमूना नाम", sample: "नमूना",
    sex: "लिङ्ग", age: "उमेर", ethnicity: "जातीयता", eye: "आँखाको रंग",
    height: "उचाइ", weight: "तौल", blood: "रक्त समूह",
    edit: "विवरण सम्पादन", updated: "अन्तिम अद्यावधिक",
    upload: "चिकित्सा कागजात अपलोड", formats1: "PDF/PNG/JPG चल्छ", formats2: "",
    drop: "फाइल अपलोड वा झार्नुहोस्", reading: "फाइल पढिँदैछ…",
    summarizing: "सारांश लेखिँदैछ…", briefing: "जाँच सूची तयार हुँदैछ…",
    summary: "सामान्य भाषाको सारांश", recent: "पछिल्लो अपलोड:", recentPh: "दिन/महिना/वर्ष XX:XX",
    history: "पुरानो स्वास्थ्य इतिहास:", meds: "औषधि:", allergies: "एलर्जी:", none: "अभिलेख छैन",
    caution: "माथिको जानकारी एआईले सारांश गरेको हो। सतर्कता अपनाउनुहोस्।",
    consult: "एआई सल्लाहकार", expand: "च्याट खोल्नुहोस्", collapse: "च्याट बन्द गर्नुहोस्",
    chatCaution: "यो सल्लाहकारले निदान गर्दैन र औषधि पनि सिफारिस गर्दैन।",
    briefEmpty: "चिकित्सा कागजात अपलोड गर्नुहोस्। म उद्धारकर्ताले के जाँच्ने भन्ने सूची दिन्छु। म निदान गर्दिन।",
    chatPh: "के जाँच्ने सोध्नुहोस्", send: "पठाउनुहोस्",
    font: "अक्षर र आइकनको आकार:", color: "वर्णान्धता:",
    rgA: "रातो", rgB: "हरियो", byA: "नीलो", byB: "पहेँलो", mono: "पूर्ण वर्णान्धता",
    tts: "पाठबाट आवाज:", ttsNote: "पाठको भाषा बदल्दा आवाजको भाषा पनि बदलिन्छ",
    on: "खुला", off: "बन्द", close: "बन्द गर्नुहोस्",
    tabBand: "एड-ब्यान्ड", tabRegistry: "उद्धार सूची",
    regIntro: "यो विपद् क्षेत्रको सूची हो। ब्रेसलेट छोएर व्यक्तिलाई आश्रयमा दर्ता गर्नुहोस्। लक्षण खोजेर कोही भेटिएका छन् कि, र कुन आश्रयमा छन्, हेर्नुहोस्।",
    checkedIn: "दर्ता भएका", notFound: "अझै नभेटिएका",
    checkTitle: "ब्रेसलेट दर्ता", thisBand: "यो फोनको ब्रेसलेट:",
    noBand: "ब्रेसलेट कोड पाउन पहिले एड-ब्यान्ड पृष्ठमा प्रोफाइल सुरक्षित गर्नुहोस्।",
    bandCode: "ब्यान्ड कोड", shelter: "आश्रय", area: "क्षेत्र",
    tap: "NFC ब्रेसलेट छुनुहोस्", checkIn: "आश्रयमा दर्ता",
    registerMissing: "अझै नभेटिएको रूपमा दर्ता", writeNfc: "कोड ब्रेसलेटमा लेख्नुहोस्",
    nfcUnsupported: "NFC का लागि Android को Chrome र HTTPS चाहिन्छ। यहाँ कोड टाइप गर्नुहोस्।",
    nfcWaiting: "ब्रेसलेट फोनमा टाँस्नुहोस्…",
    nfcDone: "ब्रेसलेट पढियो। आश्रय पुष्टि गरेर दर्ता गर्नुहोस्।",
    nfcWritten: "कोड ब्रेसलेटमा लेखियो।", nfcErr: "ब्रेसलेट पढिएन। कोड टाइप गर्नुहोस्।",
    searchTitle: "लक्षणबाट खोज", search: "खोज", more: "थप लक्षण", less: "कम लक्षण", name: "नाम",
    noQuery: "कम्तीमा एउटा लक्षण लेख्नुहोस्।", noMatch: "यी लक्षणसँग कोही मिलेन।",
    statusFound: "भेटियो", statusMissing: "अझै भेटिएन", foundAt: "आश्रय",
    showMissing: "अझै नभेटिएका मानिस देखाउनुहोस्", hideMissing: "सूची लुकाउनुहोस्",
    emptyRegistry: "अहिलेसम्म कुनै ब्रेसलेट थपिएको छैन।", checkingRegistry: "सूची जाँच हुँदैछ…",
    sharedOk: "यस क्षेत्रका उद्धारकर्ताले सँगै हेर्न सक्छन्।", deviceOnly: "यो उपकरणमा मात्र सुरक्षित छ।",
    registryMiss: "साझा सूची जोडिएन। यस उपकरणको अन्तिम प्रति देखाइँदैछ।",
    needProfile: "दर्ताअघि ब्रेसलेट प्रोफाइल सम्पादन गरेर सुरक्षित गर्नुहोस्।",
    needShelter: "दर्ताअघि आश्रयको नाम लेख्नुहोस्।", savedProfile: "प्रोफाइल सुरक्षित भयो।",
    registered: "अझै नभेटिएको रूपमा दर्ता भयो।", alreadyFound: "यो ब्रेसलेट पहिले नै दर्ता भइसकेको छ।",
    checkedMsg: "दर्ता भयो।", photo: "फोटो", save: "सुरक्षित", cancel: "रद्द",
    nameRequired: "नाम आवश्यक छ।",
    sex_female: "महिला", sex_male: "पुरुष", sex_other: "अन्य", sex_unknown: "अज्ञात",
    ageHint: "उमेर तीन वर्षको फरकभित्र मिल्छ।",
    fileType: "PDF, PNG, वा JPG प्रयोग गर्नुहोस्।", fileSize: "फाइल १० एमबीभन्दा ठूलो छ।",
    unreadable: "फाइलमा पढ्न मिल्ने पाठ भेटिएन। स्पष्ट फोटो वा पाठ छान्न मिल्ने PDF प्रयोग गर्नुहोस्।",
    aiFail: "सल्लाहकारले जवाफ दिएन। यहाँ निदान छैन। फेरि प्रयास गर्नुहोस्।",
    aiBusy: "निःशुल्क सल्लाहकार व्यस्त छ। एक मिनेटपछि फेरि प्रयास गर्नुहोस्। यहाँ निदान छैन।", retry: "फेरि प्रयास",
    results: "नतिजा", missingList: "अझै नभेटिएका", unknownName: "अज्ञात",
    langChanged: "भाषा बदलियो।", openSettings: "पहुँच सेटिङ", cycleLang: "भाषा बदल्नुहोस्",
  },
  fr: {
    skip: "Aller au contenu",
    sampleName: "Nom d’exemple", sample: "Exemple",
    sex: "SEXE", age: "ÂGE", ethnicity: "ORIGINE", eye: "COULEUR DES YEUX",
    height: "TAILLE", weight: "POIDS", blood: "GROUPE SANGUIN",
    edit: "MODIFIER", updated: "DERNIÈRE MISE À JOUR",
    upload: "TÉLÉVERSER LE DOSSIER", formats1: "PDF/PNG/JPG", formats2: "FORMATS ACCEPTÉS",
    drop: "Téléverser ou déposer un fichier", reading: "Lecture du fichier…",
    summarizing: "Rédaction du résumé…", briefing: "Préparation des vérifications…",
    summary: "RÉSUMÉ EN LANGAGE CLAIR", recent: "Dernier envoi :", recentPh: "JOUR/MOIS/ANNÉE XX:XX",
    history: "Antécédents :", meds: "Médicaments :", allergies: "Allergies :", none: "Aucun élément noté",
    caution: "LES INFORMATIONS CI-DESSUS SONT RÉSUMÉES PAR IA. À UTILISER AVEC PRUDENCE.",
    consult: "CONSEILLER IA", expand: "Ouvrir la discussion", collapse: "Réduire la discussion",
    chatCaution: "CET ASSISTANT NE DIAGNOSTIQUE PAS ET NE PRESCRIT PAS.",
    briefEmpty: "Téléversez un dossier et j’indiquerai ce qu’un secouriste doit vérifier. Je ne poserai pas de diagnostic.",
    chatPh: "Demander quoi vérifier", send: "ENVOYER",
    font: "TAILLE DU TEXTE ET DES ICÔNES :", color: "DALTONISME :",
    rgA: "Rouge", rgB: "Vert", byA: "Bleu", byB: "Jaune", mono: "Monochromatisme",
    tts: "LECTURE VOCALE :", ttsNote: "CHANGER LA LANGUE DU TEXTE CHANGE AUSSI LA LANGUE AUDIO",
    on: "OUI", off: "NON", close: "Fermer",
    tabBand: "AID-BAND", tabRegistry: "REGISTRE DE SECOURS",
    regIntro: "Ceci est le registre de la zone sinistrée. Approchez un bracelet pour enregistrer une personne. Cherchez par signes distinctifs pour savoir si quelqu’un a été retrouvé, et dans quel abri.",
    checkedIn: "ENREGISTRÉS", notFound: "PAS ENCORE RETROUVÉS",
    checkTitle: "ENREGISTRER UN BRACELET", thisBand: "Bracelet de ce téléphone :",
    noBand: "Enregistrez un profil sur la page AID-BAND pour obtenir un code.",
    bandCode: "CODE", shelter: "ABRI", area: "ZONE",
    tap: "APPROCHER LE BRACELET", checkIn: "ENREGISTRER",
    registerMissing: "INSCRIRE COMME PAS ENCORE RETROUVÉ",
    writeNfc: "ÉCRIRE LE CODE SUR LE BRACELET",
    nfcUnsupported: "Le NFC nécessite Chrome sur Android, en HTTPS. Saisissez le code sur cet appareil.",
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
    hideMissing: "MASQUER LA LISTE", emptyRegistry: "Aucun bracelet n’a encore été ajouté.",
    checkingRegistry: "Vérification du registre…",
    sharedOk: "Partagé entre les secouristes de cette zone.",
    deviceOnly: "Enregistré uniquement sur cet appareil.",
    registryMiss: "Registre partagé injoignable. Dernière copie de cet appareil affichée.",
    needProfile: "Modifiez et enregistrez le profil avant de l’inscrire.",
    needShelter: "Indiquez le nom de l’abri avant d’enregistrer.",
    savedProfile: "Profil enregistré.", registered: "Inscrit comme pas encore retrouvé.",
    alreadyFound: "Ce bracelet est déjà enregistré dans un abri.",
    checkedMsg: "Enregistré.", photo: "PHOTO", save: "ENREGISTRER", cancel: "ANNULER",
    nameRequired: "Le nom est obligatoire.",
    sex_female: "Femme", sex_male: "Homme", sex_other: "Autre", sex_unknown: "Inconnu",
    ageHint: "L’âge correspond à trois ans près.",
    fileType: "Utilisez un fichier PDF, PNG ou JPG.", fileSize: "Ce fichier dépasse 10 Mo.",
    unreadable: "Aucun texte lisible dans ce fichier. Essayez une photo plus nette ou un PDF avec du texte sélectionnable.",
    aiFail: "L’assistant n’a pas répondu. Ceci n’est pas un diagnostic. Réessayez.",
    aiBusy: "L’assistant gratuit est occupé. Réessayez dans une minute. Ceci n’est pas un diagnostic.",
    retry: "RÉESSAYER", results: "RÉSULTATS", missingList: "PAS ENCORE RETROUVÉS",
    unknownName: "Inconnu", langChanged: "Langue modifiée.",
    openSettings: "Réglages d’accessibilité", cycleLang: "Changer de langue",
  },
};

function defaultProfile() {
  return {
    saved: false, bandId: "", name: "", sex: "", age: "", ethnicity: "",
    eyeColor: "", height: "", weight: "", bloodType: "", photo: "", updatedAt: "",
  };
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
  people: [],
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

function rich(value) {
  return esc(value).replace(/\n/g, "<br>");
}

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem("aidband-state") || "null");
    if (saved) {
      state.profile = { ...defaultProfile(), ...(saved.profile || {}) };
      state.record = { ...defaultRecord(), ...(saved.record || {}) };
      state.record.summary = {
        pastMedicalHistory: [],
        medications: [],
        allergies: [],
        ...(saved.record && saved.record.summary),
      };
      state.brief = saved.brief || "";
      state.chat = Array.isArray(saved.chat) ? saved.chat : [];
      state.settings = { ...state.settings, ...(saved.settings || {}) };
      state.checkin.shelter = saved.shelter || "";
      state.checkin.area = saved.area || "";
    }
    const people = JSON.parse(localStorage.getItem("aidband-people") || "[]");
    if (Array.isArray(people)) state.people = people;
  } catch {
    /* keep defaults */
  }
  if (!LANGS.includes(state.settings.lang)) state.settings.lang = "en";
}

function persist() {
  const record = {
    ...state.record,
    sourceText: (state.record.sourceText || "").slice(0, 20000),
  };
  localStorage.setItem("aidband-state", JSON.stringify({
    profile: state.profile,
    record,
    brief: state.brief,
    chat: state.chat.slice(-40),
    settings: state.settings,
    shelter: state.checkin.shelter,
    area: state.checkin.area,
  }));
  localStorage.setItem("aidband-people", JSON.stringify(state.people));
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
    <path fill="currentColor" d="M32 50.5c-.7 0-16-12-16-23.2C16 21.2 20.1 17 25 17c3.2 0 5.4 1.6 7 4 1.6-2.4 3.8-4 7-4 4.9 0 9 4.2 9 10.3 0 11.2-15.3 23.2-16 23.2z"/>
    <path fill="#fff" d="M29.2 24.4h5.6v5.2h5.2v5.6h-5.2v5.2h-5.6v-5.2h-5.2v-5.6h5.2z"/>
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

function render() {
  const y = window.scrollY;
  const prev = document.activeElement?.dataset?.focus || null;
  applyChrome();
  document.getElementById("app").innerHTML = shell();
  document.getElementById("modal-root").innerHTML = modalHTML();
  window.scrollTo(0, y);
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

function shell() {
  const registry = location.hash === "#registry";
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
      <a href="#band" ${registry ? "" : 'aria-current="page"'}>${esc(t("tabBand"))}</a>
      <a href="#registry" ${registry ? 'aria-current="page"' : ""}>${esc(t("tabRegistry"))}</a>
    </nav>
    <main id="content">
      ${registry ? registryView() : bandView()}
    </main>`;
}

function bandView() {
  const p = state.profile;
  const photo = p.photo
    ? `<img src="${esc(p.photo)}" alt="">`
    : personSVG();
  return `
    <div class="view-band">
      <div class="stack">
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
              </ul>
            </div>
            <p class="updated">${esc(t("updated"))}: ${esc(p.saved ? formatDate(p.updatedAt) : "XX/XX/XXXX")}</p>
            <button class="edit-btn" type="button" data-action="edit" data-focus="open-edit">${esc(t("edit"))}</button>
          </div>
        </article>
        ${uploadBlock()}
        ${summaryBlock()}
      </div>
      ${consultantBlock()}
    </div>`;
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

function consultantBlock() {
  const brief = state.busy && state.busyText === t("briefing")
    ? state.busyText
    : (state.brief || t("briefEmpty"));
  const thread = state.chatExpanded && state.chat.length
    ? `<div class="thread">${state.chat.map(messageHTML).join("")}</div>`
    : "";
  const composer = state.chatExpanded ? `
    <form class="composer" data-form="chat">
      <input name="draft" data-field="chatDraft" data-focus="chat-draft" value="${esc(state.chatDraft)}" placeholder="${esc(t("chatPh"))}" maxlength="600" ${state.chatBusy ? "disabled" : ""}>
      <button type="submit" ${state.chatBusy ? "disabled" : ""}>${esc(state.chatBusy ? "…" : t("send"))}</button>
    </form>` : "";
  return `
    <section class="consultant" aria-label="${esc(t("consult"))}">
      <h2>${esc(t("consult"))}</h2>
      <button class="expand" type="button" data-action="expand" data-focus="expand" aria-expanded="${state.chatExpanded}" aria-label="${esc(state.chatExpanded ? t("collapse") : t("expand"))}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 10l5 5 5-5H7z"/></svg>
      </button>
      <div class="chat-panel">
        <div class="msg assistant">
          <span class="bubble-logo" aria-hidden="true">${heartSVG()}</span>
          <div class="speech">${rich(brief)}</div>
        </div>
        <p class="fine">${esc(t("chatCaution"))}</p>
        ${thread}
        ${composer}
      </div>
    </section>`;
}

function messageHTML(message) {
  if (message.role === "user") {
    return `<div class="msg user"><div class="speech">${rich(message.content)}</div></div>`;
  }
  return `<div class="msg assistant"><span class="bubble-logo" aria-hidden="true">${heartSVG()}</span><div class="speech">${rich(message.content)}</div></div>`;
}

function registryView() {
  const found = state.people.filter((p) => p.status === "found").length;
  const missing = state.people.filter((p) => p.status === "missing").length;
  const bandLine = state.profile.saved && state.profile.bandId
    ? `<p class="this-band">${esc(t("thisBand"))} <span class="band-code">${esc(state.profile.bandId)}</span></p>
       <button class="text-btn" type="button" data-action="write-nfc">${esc(t("writeNfc"))}</button>`
    : `<p class="this-band">${esc(t("noBand"))}</p>`;
  return `
    <div class="view-registry">
      <p class="intro">${esc(t("regIntro"))}</p>
      <div class="stats">
        <div><b>${found}</b><span>${esc(t("checkedIn"))}</span></div>
        <div><b>${missing}</b><span>${esc(t("notFound"))}</span></div>
      </div>
      <p class="sync">${esc(t(state.registryNoteKey))}</p>
      <article class="card">
        <h2>${esc(t("checkTitle"))}</h2>
        ${bandLine}
        <form data-form="checkin">
          ${field("checkin.bandId", t("bandCode"), state.checkin.bandId, "text")}
          ${field("checkin.shelter", t("shelter"), state.checkin.shelter, "text", SHELTERS)}
          ${field("checkin.area", t("area"), state.checkin.area, "text", AREAS)}
          <p class="nfc-status">${esc(state.checkin.nfcStatus)}</p>
          <div class="actions">
            <button class="pill-btn" type="button" data-action="tap">${esc(t("tap"))}</button>
            <button class="pill-btn" type="submit">${esc(t("checkIn"))}</button>
          </div>
        </form>
        <button class="text-btn" type="button" data-action="register-missing">${esc(t("registerMissing"))}</button>
      </article>
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
      <button class="pill-btn" type="button" data-action="missing">${esc(state.showMissing ? t("hideMissing") : t("showMissing"))}</button>
      ${state.showMissing ? missingHTML() : ""}
    </div>`;
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
  const where = found
    ? `${t("foundAt")}: ${person.shelter || "—"}${person.area ? " · " + person.area : ""}`
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

function missingHTML() {
  const rows = state.people.filter((p) => p.status === "missing");
  if (!rows.length) return `<p class="empty">${esc(t("emptyRegistry"))}</p>`;
  return `<section class="results"><h3>${esc(t("missingList"))}</h3>${rows.map(personCard).join("")}</section>`;
}

function modalHTML() {
  if (state.modal === "settings") return settingsModal();
  if (state.modal === "edit") return editModal();
  return "";
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
  const [group, key] = path.split(".");
  if (group === "chatDraft") {
    state.chatDraft = value;
    return;
  }
  if (state[group] && key) state[group][key] = value;
}

function onInput(event) {
  const el = event.target.closest("[data-field]");
  if (!el) return;
  setPath(el.dataset.field, el.value);
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
  else if (action === "expand") toggleChat();
  else if (action === "retry") retrySummary();
  else if (action === "tap") tapBracelet();
  else if (action === "write-nfc") writeBracelet();
  else if (action === "register-missing") registerMissing();
  else if (action === "more") {
    state.search.showMore = !state.search.showMore;
    render();
  } else if (action === "missing") {
    state.showMissing = !state.showMissing;
    render();
  }
}

function onSubmit(event) {
  const form = event.target.closest("form[data-form]");
  if (!form) return;
  event.preventDefault();
  if (form.dataset.form === "chat") sendChat();
  else if (form.dataset.form === "search") runSearch();
  else if (form.dataset.form === "checkin") checkIn();
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

function closeModal() {
  const back = state.modal === "settings" ? "open-settings" : "open-edit";
  state.modal = null;
  state.edit = null;
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

function openEdit() {
  state.edit = { ...state.profile };
  state.editError = "";
  state.modal = "edit";
  state.focusModal = true;
  render();
}

function saveEdit() {
  const edit = state.edit;
  if (!edit || !edit.name.trim()) {
    state.editError = t("nameRequired");
    render();
    return;
  }
  const bandId = state.profile.bandId || uniqueBandId();
  state.profile = {
    ...edit,
    name: edit.name.trim(),
    saved: true,
    bandId,
    updatedAt: new Date().toISOString(),
  };
  state.modal = null;
  state.edit = null;
  state.returnFocus = "open-edit";
  if (!state.checkin.bandId) state.checkin.bandId = bandId;
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
  } while (taken.has(id));
  return id;
}

async function setPhoto(file) {
  if (!file || !state.edit) return;
  if (!/^image\/(png|jpeg)$/.test(file.type)) {
    state.editError = t("fileType");
    render();
    return;
  }
  state.edit.photo = await shrinkImage(file);
  state.editError = "";
  render();
}

function shrinkImage(file) {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const scale = Math.min(1, 800 / Math.max(img.width, img.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(img.width * scale));
      canvas.height = Math.max(1, Math.round(img.height * scale));
      canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL("image/jpeg", 0.82));
    };
    img.onerror = () => resolve("");
    img.src = url;
  });
}

function toggleChat() {
  state.chatExpanded = !state.chatExpanded;
  render();
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
  return `You help rescue workers read an emergency bracelet record during a disaster.
Return JSON only, with this shape:
{"pastMedicalHistory": string[], "medications": string[], "allergies": string[], "briefing": string}
Rules:
- Use only facts explicitly written in the document for the three arrays.
- Do not diagnose, infer a new condition, interpret test results, or recommend treatment or doses.
- Keep each array item a short phrase. Use an empty array when a section is absent. Maximum 6 items.
- briefing is at most 60 words, for a rescuer, and must not repeat those three lists.
- Do not diagnose or prescribe in the briefing. Say "records mention" when you refer to stated history.
- Give concrete checks: what to confirm if the person is responsive, what to flag before any medicine, and what to look for.
- If the record is thin, say what is missing and that you cannot diagnose.
- briefing is plain sentences, with no headings.
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
  return `You are the AID-BAND assistant for rescue workers in a disaster response. You are not a doctor.
You must never:
- give a diagnosis or tell the rescuer what disease the person has
- prescribe medicine, doses, or treatment
- invent allergies, medicines, history, or measurements that are not provided
You may:
- turn recorded history, medicines, and allergies into questions and precautions
- tell the rescuer to confirm details with a responsive person
- say when something should be handed to the on-site medical team
If asked for a diagnosis, refuse in one sentence and offer a safe check instead.
Keep the answer under 120 words.
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
  state.chatExpanded = true;
  state.chatBusy = true;
  persist();
  render();
  try {
    const reply = await askAI([
      { role: "system", content: chatSystem() },
      ...state.chat.slice(-8).map((message) => ({ role: message.role, content: message.content })),
    ]);
    state.chat.push({ role: "assistant", content: reply });
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
    state.checkin.nfcStatus = t("noQuery");
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
    bandId: String(source.bandId || "").toUpperCase(),
    name: source.name || "",
    sex: source.sex || "",
    age: source.age || "",
    ethnicity: source.ethnicity || "",
    eyeColor: source.eyeColor || "",
    height: source.height || "",
    weight: source.weight || "",
    bloodType: source.bloodType || "",
  };
}

function localProfilePayload() {
  return traitsFrom(state.profile);
}

async function savePerson(person) {
  const next = { ...person, updatedAt: new Date().toISOString() };
  if (state.shared) {
    const res = await fetch("/api/people", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(next),
    });
    if (!res.ok) throw new Error("save");
    const data = await res.json();
    const saved = data.person || next;
    const index = state.people.findIndex((item) => item.bandId === saved.bandId);
    if (index >= 0) state.people[index] = saved;
    else state.people.unshift(saved);
  } else {
    const index = state.people.findIndex((item) => item.bandId === next.bandId);
    if (index >= 0) state.people[index] = next;
    else state.people.unshift(next);
  }
  persist();
}

function knownPerson(code, payload) {
  const local = state.profile.saved && state.profile.bandId.toUpperCase() === code
    ? localProfilePayload()
    : null;
  const existing = state.people.find((item) => item.bandId === code);
  const base = { ...(existing || {}), ...(payload || {}), ...(local || {}) };
  base.bandId = code;
  if (!base.name) base.name = local?.name || existing?.name || t("unknownName");
  return base;
}

async function checkIn() {
  const code = state.checkin.bandId.trim().toUpperCase();
  state.checkin.bandId = code;
  if (!/^[A-Za-z0-9-]{3,24}$/.test(code)) {
    state.checkin.nfcStatus = t("nfcErr");
    announce(state.checkin.nfcStatus);
    render();
    return;
  }
  if (!state.checkin.shelter.trim()) {
    state.checkin.nfcStatus = t("needShelter");
    announce(state.checkin.nfcStatus);
    render();
    return;
  }
  const person = knownPerson(code, state.pendingNfc);
  person.status = "found";
  person.shelter = state.checkin.shelter.trim();
  person.area = state.checkin.area.trim();
  try {
    await savePerson(person);
    state.pendingNfc = null;
    state.checkin.nfcStatus = t("checkedMsg");
    announce(`${person.name}. ${t("checkedMsg")} ${person.shelter}`);
    if (state.settings.tts) speak(`${person.name}. ${t("foundAt")}: ${person.shelter}`);
  } catch {
    state.checkin.nfcStatus = t("registryMiss");
  }
  render();
}

async function registerMissing() {
  if (!state.profile.saved || !state.profile.bandId) {
    state.checkin.nfcStatus = t("needProfile");
    announce(state.checkin.nfcStatus);
    render();
    return;
  }
  const existing = state.people.find((item) => item.bandId === state.profile.bandId);
  if (existing && existing.status === "found") {
    state.checkin.nfcStatus = `${t("alreadyFound")} ${existing.shelter || ""}`.trim();
    announce(state.checkin.nfcStatus);
    render();
    return;
  }
  const person = localProfilePayload();
  person.status = "missing";
  person.shelter = "";
  person.area = state.checkin.area.trim();
  try {
    await savePerson(person);
    state.checkin.bandId = person.bandId;
    state.checkin.nfcStatus = t("registered");
    announce(t("registered"));
  } catch {
    state.checkin.nfcStatus = t("registryMiss");
  }
  render();
}

function decodeRecord(record) {
  if (record.recordType !== "text") return "";
  const encoding = record.encoding || "utf-8";
  return new TextDecoder(encoding).decode(record.data).trim();
}

function payloadFromText(text) {
  if (text.startsWith("{")) {
    try {
      const data = JSON.parse(text);
      return { code: String(data.id || data.bandId || "").toUpperCase(), payload: data };
    } catch {
      return { code: "", payload: null };
    }
  }
  return { code: text.toUpperCase(), payload: null };
}

async function tapBracelet() {
  if (!("NDEFReader" in window)) {
    state.checkin.nfcStatus = t("nfcUnsupported");
    announce(state.checkin.nfcStatus);
    render();
    return;
  }
  try {
    const reader = new window.NDEFReader();
    await reader.scan();
    state.checkin.nfcStatus = t("nfcWaiting");
    render();
    reader.onreading = (event) => {
      let text = "";
      for (const record of event.message.records) {
        const decoded = decodeRecord(record);
        if (decoded) text = decoded;
      }
      const { code, payload } = payloadFromText(text);
      if (!code) {
        state.checkin.nfcStatus = t("nfcErr");
      } else {
        state.checkin.bandId = code;
        state.pendingNfc = payload ? {
          bandId: code,
          name: payload.name || "",
          sex: payload.sex || "",
          age: payload.age || "",
          ethnicity: payload.ethnicity || "",
          eyeColor: payload.eye || payload.eyeColor || "",
          height: payload.height || "",
          weight: payload.weight || "",
          bloodType: payload.blood || payload.bloodType || "",
        } : null;
        state.checkin.nfcStatus = t("nfcDone");
        announce(t("nfcDone"));
      }
      render();
    };
  } catch {
    state.checkin.nfcStatus = t("nfcErr");
    announce(state.checkin.nfcStatus);
    render();
  }
}

function braceletPayload() {
  const p = state.profile;
  return JSON.stringify({
    id: p.bandId, name: p.name, sex: p.sex, age: p.age, ethnicity: p.ethnicity,
    eye: p.eyeColor, height: p.height, weight: p.weight, blood: p.bloodType,
  });
}

async function writeBracelet() {
  if (!state.profile.saved || !state.profile.bandId) {
    state.checkin.nfcStatus = t("needProfile");
    render();
    return;
  }
  if (!("NDEFReader" in window)) {
    state.checkin.nfcStatus = t("nfcUnsupported");
    announce(state.checkin.nfcStatus);
    render();
    return;
  }
  try {
    const writer = new window.NDEFReader();
    await writer.write({ records: [{ recordType: "text", data: braceletPayload() }] });
    state.checkin.nfcStatus = t("nfcWritten");
    announce(t("nfcWritten"));
  } catch {
    state.checkin.nfcStatus = t("nfcErr");
  }
  render();
}

async function detectBackend() {
  try {
    const res = await fetch("/api/health", { cache: "no-store" });
    if (!res.ok) throw new Error("health");
    const data = await res.json();
    state.shared = Boolean(data.shared);
    if (state.shared) {
      const local = [...state.people];
      for (const person of local) {
        try {
          await fetch("/api/people", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(person),
          });
        } catch {
          /* keep going */
        }
      }
      const list = await fetch("/api/people", { cache: "no-store" });
      if (!list.ok) throw new Error("list");
      const body = await list.json();
      state.people = body.people || [];
      state.registryNoteKey = "sharedOk";
    } else {
      state.registryNoteKey = "deviceOnly";
    }
  } catch {
    state.shared = false;
    state.registryNoteKey = state.triedBackend ? "registryMiss" : "deviceOnly";
    if (state.triedBackend) state.registryNoteKey = "registryMiss";
    else state.registryNoteKey = "deviceOnly";
  }
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

load();
if (state.profile.bandId) state.checkin.bandId = state.profile.bandId;
render();
detectBackend();
