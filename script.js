/* ============================================================
   WhatsApp CRM Pro — script.js
   Complete CRM logic: Customers, Follow-ups, Payments,
   Broadcast, Reports, Settings, Dashboard
   ============================================================ */
// ===== LANGUAGE TRANSLATIONS =====
const LANGUAGES = {
  en: {
    name: "English",
    dashboard: "Dashboard", customers: "Customers", followups: "Follow-ups",
    payments: "Payments", broadcast: "Broadcast", reports: "Reports", settings: "Settings",
    addCustomer: "Add Customer", addFollowup: "Add Follow-up", addPayment: "Add Payment",
    totalCustomers: "Total Customers", pendingFollowups: "Pending Follow-ups",
    totalCollection: "Total Collection", messagesSent: "Messages Sent",
    save: "Save", cancel: "Cancel", delete: "Delete", edit: "Edit",
    search: "Search...", export: "Export CSV", noData: "No data available"
  },
  hi: {
    name: "हिन्दी",
    dashboard: "डैशबोर्ड", customers: "ग्राहक", followups: "फॉलो-अप",
    payments: "भुगतान", broadcast: "ब्रॉडकास्ट", reports: "रिपोर्ट", settings: "सेटिंग्स",
    addCustomer: "ग्राहक जोड़ें", addFollowup: "फॉलो-अप जोड़ें", addPayment: "भुगतान जोड़ें",
    totalCustomers: "कुल ग्राहक", pendingFollowups: "बकाया फॉलो-अप",
    totalCollection: "कुल संग्रह", messagesSent: "संदेश भेजे",
    save: "सहेजें", cancel: "रद्द करें", delete: "हटाएं", edit: "संपादित करें",
    search: "खोजें...", export: "CSV निर्यात", noData: "कोई डेटा नहीं"
  },
  hinglish: {
    name: "Hinglish",
    dashboard: "Dashboard", customers: "Customers", followups: "Follow-ups",
    payments: "Payments", broadcast: "Broadcast", reports: "Reports", settings: "Settings",
    addCustomer: "Customer Add Karo", addFollowup: "Follow-up Add Karo", addPayment: "Payment Add Karo",
    totalCustomers: "Total Customers", pendingFollowups: "Pending Follow-ups",
    totalCollection: "Total Collection", messagesSent: "Messages Sent",
    save: "Save Karo", cancel: "Cancel", delete: "Delete Karo", edit: "Edit Karo",
    search: "Dhundo...", export: "CSV Export", noData: "Koi data nahi"
  },
  bn: {
    name: "বাংলা",
    dashboard: "ড্যাশবোর্ড", customers: "গ্রাহক", followups: "ফলো-আপ",
    payments: "পেমেন্ট", broadcast: "ব্রডকাস্ট", reports: "রিপোর্ট", settings: "সেটিংস",
    addCustomer: "গ্রাহক যোগ করুন", addFollowup: "ফলো-আপ যোগ করুন", addPayment: "পেমেন্ট যোগ করুন",
    totalCustomers: "মোট গ্রাহক", pendingFollowups: "মুলতুবি ফলো-আপ",
    totalCollection: "মোট সংগ্রহ", messagesSent: "পাঠানো বার্তা",
    save: "সংরক্ষণ করুন", cancel: "বাতিল", delete: "মুছুন", edit: "সম্পাদনা করুন",
    search: "খুঁজুন...", export: "CSV রপ্তানি", noData: "কোনো ডেটা নেই"
  },
  ta: {
    name: "தமிழ்",
    dashboard: "டாஷ்போர்டு", customers: "வாடிக்கையாளர்கள்", followups: "பின்தொடர்தல்",
    payments: "கொடுப்பனவுகள்", broadcast: "ஒளிபரப்பு", reports: "அறிக்கைகள்", settings: "அமைப்புகள்",
    addCustomer: "வாடிக்கையாளரை சேர்க்கவும்", addFollowup: "பின்தொடர்தல் சேர்க்கவும்", addPayment: "கொடுப்பனவு சேர்க்கவும்",
    totalCustomers: "மொத்த வாடிக்கையாளர்கள்", pendingFollowups: "நிலுவையில் உள்ள பின்தொடர்தல்",
    totalCollection: "மொத்த வசூல்", messagesSent: "அனுப்பப்பட்ட செய்திகள்",
    save: "சேமிக்கவும்", cancel: "ரத்து செய்", delete: "நீக்கு", edit: "திருத்து",
    search: "தேடுங்கள்...", export: "CSV ஏற்றுமதி", noData: "தரவு இல்லை"
  },
  te: {
    name: "తెలుగు",
    dashboard: "డాష్‌బోర్డ్", customers: "కస్టమర్లు", followups: "ఫాలో-అప్స్",
    payments: "చెల్లింపులు", broadcast: "ప్రసారం", reports: "నివేదికలు", settings: "సెట్టింగులు",
    addCustomer: "కస్టమర్ జోడించు", addFollowup: "ఫాలో-అప్ జోడించు", addPayment: "చెల్లింపు జోడించు",
    totalCustomers: "మొత్తం కస్టమర్లు", pendingFollowups: "పెండింగ్ ఫాలో-అప్స్",
    totalCollection: "మొత్తం వసూలు", messagesSent: "పంపిన సందేశాలు",
    save: "సేవ్ చేయి", cancel: "రద్దు చేయి", delete: "తొలగించు", edit: "సవరించు",
    search: "వెతకండి...", export: "CSV ఎగుమతి", noData: "డేటా లేదు"
  },
  mr: {
    name: "मराठी",
    dashboard: "डॅशबोर्ड", customers: "ग्राहक", followups: "फॉलो-अप",
    payments: "देयके", broadcast: "प्रसारण", reports: "अहवाल", settings: "सेटिंग्ज",
    addCustomer: "ग्राहक जोडा", addFollowup: "फॉलो-अप जोडा", addPayment: "देयक जोडा",
    totalCustomers: "एकूण ग्राहक", pendingFollowups: "प्रलंबित फॉलो-अप",
    totalCollection: "एकूण संकलन", messagesSent: "पाठवलेले संदेश",
    save: "जतन करा", cancel: "रद्द करा", delete: "हटवा", edit: "संपादित करा",
    search: "शोधा...", export: "CSV निर्यात", noData: "डेटा नाही"
  },
  gu: {
    name: "ગુજરાતી",
    dashboard: "ડેશબોર્ડ", customers: "ગ્રાહકો", followups: "ફોલો-અપ",
    payments: "ચુકવણીઓ", broadcast: "પ્રસારણ", reports: "અહેવાલ", settings: "સેટિંગ્સ",
    addCustomer: "ગ્રાહક ઉમેરો", addFollowup: "ફોલો-અપ ઉમેરો", addPayment: "ચુકવણી ઉમેરો",
    totalCustomers: "કુલ ગ્રાહકો", pendingFollowups: "બાકી ફોલો-અપ",
    totalCollection: "કુલ સંગ્રહ", messagesSent: "મોકલેલ સંદેશ",
    save: "સાચવો", cancel: "રદ કરો", delete: "કાઢો", edit: "સંપાદિત કરો",
    search: "શોધો...", export: "CSV નિકાસ", noData: "કોઈ ડેટા નથી"
  },
  kn: {
    name: "ಕನ್ನಡ",
    dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", customers: "ಗ್ರಾಹಕರು", followups: "ಫಾಲೋ-ಅಪ್",
    payments: "ಪಾವತಿಗಳು", broadcast: "ಪ್ರಸಾರ", reports: "ವರದಿಗಳು", settings: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
    addCustomer: "ಗ್ರಾಹಕ ಸೇರಿಸಿ", addFollowup: "ಫಾಲೋ-ಅಪ್ ಸೇರಿಸಿ", addPayment: "ಪಾವತಿ ಸೇರಿಸಿ",
    totalCustomers: "ಒಟ್ಟು ಗ್ರಾಹಕರು", pendingFollowups: "ಬಾಕಿ ಫಾಲೋ-ಅಪ್",
    totalCollection: "ಒಟ್ಟು ಸಂಗ್ರಹ", messagesSent: "ಕಳುಹಿಸಿದ ಸಂದೇಶಗಳು",
    save: "ಉಳಿಸಿ", cancel: "ರದ್ದು ಮಾಡಿ", delete: "ಅಳಿಸಿ", edit: "ಸಂಪಾದಿಸಿ",
    search: "ಹುಡುಕಿ...", export: "CSV ರಫ್ತು", noData: "ಡೇಟಾ ಇಲ್ಲ"
  },
  ml: {
    name: "മലയാളം",
    dashboard: "ഡാഷ്‌ബോർഡ്", customers: "ഉപഭോക്താക്കൾ", followups: "ഫോളോ-അപ്പ്",
    payments: "പേയ്‌മെന്റുകൾ", broadcast: "പ്രക്ഷേപണം", reports: "റിപ്പോർട്ടുകൾ", settings: "ക്രമീകരണങ്ങൾ",
    addCustomer: "ഉപഭോക്താവിനെ ചേർക്കുക", addFollowup: "ഫോളോ-അപ്പ് ചേർക്കുക", addPayment: "പേയ്‌മെന്റ് ചേർക്കുക",
    totalCustomers: "ആകെ ഉപഭോക്താക്കൾ", pendingFollowups: "കാത്തിരിക്കുന്ന ഫോളോ-അപ്പ്",
    totalCollection: "ആകെ ശേഖരണം", messagesSent: "അയച്ച സന്ദേശങ്ങൾ",
    save: "സംരക്ഷിക്കുക", cancel: "റദ്ദാക്കുക", delete: "ഇല്ലാതാക്കുക", edit: "തിരുത്തുക",
    search: "തിരയുക...", export: "CSV കയറ്റുമതി", noData: "ഡേറ്റ ഇല്ല"
  },
  pa: {
    name: "ਪੰਜਾਬੀ",
    dashboard: "ਡੈਸ਼ਬੋਰਡ", customers: "ਗਾਹਕ", followups: "ਫਾਲੋ-ਅੱਪ",
    payments: "ਭੁਗਤਾਨ", broadcast: "ਪ੍ਰਸਾਰਣ", reports: "ਰਿਪੋਰਟਾਂ", settings: "ਸੈਟਿੰਗਾਂ",
    addCustomer: "ਗਾਹਕ ਜੋੜੋ", addFollowup: "ਫਾਲੋ-ਅੱਪ ਜੋੜੋ", addPayment: "ਭੁਗਤਾਨ ਜੋੜੋ",
    totalCustomers: "ਕੁੱਲ ਗਾਹਕ", pendingFollowups: "ਬਕਾਇਆ ਫਾਲੋ-ਅੱਪ",
    totalCollection: "ਕੁੱਲ ਸੰਗ੍ਰਹਿ", messagesSent: "ਭੇਜੇ ਸੁਨੇਹੇ",
    save: "ਸੇਵ ਕਰੋ", cancel: "ਰੱਦ ਕਰੋ", delete: "ਮਿਟਾਓ", edit: "ਸੋਧੋ",
    search: "ਖੋਜੋ...", export: "CSV ਨਿਰਯਾਤ", noData: "ਕੋਈ ਡੇਟਾ ਨਹੀਂ"
  },
  or: {
    name: "ଓଡ଼ିଆ",
    dashboard: "ଡ୍ୟାସବୋର୍ଡ", customers: "ଗ୍ରାହକ", followups: "ଫଲୋ-ଅପ",
    payments: "ଦେୟ", broadcast: "ସମ୍ପ୍ରଚାର", reports: "ରିପୋର୍ଟ", settings: "ସେଟିଂ",
    addCustomer: "ଗ୍ରାହକ ଯୋଗ କରନ୍ତୁ", addFollowup: "ଫଲୋ-ଅପ ଯୋଗ କରନ୍ତୁ", addPayment: "ଦେୟ ଯୋଗ କରନ୍ତୁ",
    totalCustomers: "ମୋଟ ଗ୍ରାହକ", pendingFollowups: "ବିଳମ୍ବିତ ଫଲୋ-ଅପ",
    totalCollection: "ମୋଟ ସଂଗ୍ରହ", messagesSent: "ପଠାଯାଇଥିବା ବାର୍ତ୍ତା",
    save: "ସଞ୍ଚୟ କରନ୍ତୁ", cancel: "ବାତିଲ", delete: "ଡିଲିଟ", edit: "ସଂପାଦନ",
    search: "ଖୋଜନ୍ତୁ...", export: "CSV ରପ୍ତାନି", noData: "କୌଣସି ଡାଟା ନାହିଁ"
  },
  ur: {
    name: "اردو",
    dashboard: "ڈیش بورڈ", customers: "گاہک", followups: "فالو اپ",
    payments: "ادائیگیاں", broadcast: "نشریات", reports: "رپورٹس", settings: "ترتیبات",
    addCustomer: "گاہک شامل کریں", addFollowup: "فالو اپ شامل کریں", addPayment: "ادائیگی شامل کریں",
    totalCustomers: "کل گاہک", pendingFollowups: "زیر التواء فالو اپ",
    totalCollection: "کل وصولی", messagesSent: "بھیجے گئے پیغامات",
    save: "محفوظ کریں", cancel: "منسوخ", delete: "حذف کریں", edit: "ترمیم",
    search: "تلاش کریں...", export: "CSV برآمد", noData: "کوئی ڈیٹا نہیں"
  }
};

let currentLang = 'hinglish'; // default

function t(key) {
  return (LANGUAGES[currentLang] && LANGUAGES[currentLang][key]) || 
         (LANGUAGES['hinglish'][key]) || key;
}

function applyLanguage(langCode) {
  currentLang = langCode;
  db.settings.language = langCode;
  
  // RTL for Urdu
  document.body.setAttribute('dir', langCode === 'ur' ? 'rtl' : 'ltr');
  
  // Sidebar nav labels
  document.querySelector('[data-tab="dashboard"] .nav-label').textContent = t('dashboard');
  document.querySelector('[data-tab="customers"] .nav-label').textContent = t('customers');
  document.querySelector('[data-tab="followup"] .nav-label').textContent = t('followups');
  document.querySelector('[data-tab="payment"] .nav-label').textContent = t('payments');
  document.querySelector('[data-tab="broadcast"] .nav-label').textContent = t('broadcast');
  document.querySelector('[data-tab="reports"] .nav-label').textContent = t('reports');
  document.querySelector('[data-tab="settings"] .nav-label').textContent = t('settings');

  // Dashboard page title
  const dashTitle = document.querySelector('#section-dashboard .page-title');
  if (dashTitle) dashTitle.textContent = t('dashboard');

  // Stat labels
  const statLabels = document.querySelectorAll('.stat-label');
  const statKeys = ['totalCustomers', 'pendingFollowups', 'totalCollection', 'messagesSent'];
  statLabels.forEach((el, i) => { if (statKeys[i]) el.textContent = t(statKeys[i]); });

  saveToStorage();
  showToast(`Language: ${LANGUAGES[langCode].name}`, 'success');
}
// ===== DATA STORE =====
let db = {
  customers: [],
  followups: [],
  payments: [],
  broadcasts: [],
  activities: [],
  settings: {
    name: 'Admin',
    business: '',
    phone: '',
    notifOverdue: true,
    notifPayment: true,
    notifSound: false,
    tmplFollowup: 'Namaste {name}! Aapka follow-up scheduled hai. Please confirm karein. 🙏',
    tmplPayment: 'Namaste {name}! Aapka ₹{amount} payment pending hai. Please clear karein. 🙏'
  },
  messagesSent: 0
};

let currentView = 'grid'; // grid | table

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  setTodayDate();
  refreshDashboard();
  populateCustomerDropdowns();
  setDefaultFollowupDate();
  setupBroadcastListeners();
  startOverdueChecker();
  loadSettingsUI();
});

// ===== LOCAL STORAGE =====
async function saveToStorage() {
  try {
    localStorage.setItem('wacrm_db', JSON.stringify(db));
    // Firebase sync
    if (window.db_fire) {
      const { doc, updateDoc, collection, addDoc } = window.fsModules;
      const ref = window.doc(window.db_fire, 'crm', 'maindata');
      await window.updateDoc(ref, { data: JSON.stringify(db) }).catch(async () => {
        // Document nahi hai toh create karo
        await window.fsModules.addDoc(
          window.fsModules.collection(window.db_fire, 'crm'),
          { id: 'maindata', data: JSON.stringify(db) }
        );
      });
    }
  } catch(e) {
    console.error('Save error:', e);
  }
}
async function loadFromStorage() {
  try {
    // Pehle localStorage se load karo (fast)
    const saved = localStorage.getItem('wacrm_db');
    if (saved) {
      const parsed = JSON.parse(saved);
      db = { ...db, ...parsed };
      db.settings = { ...db.settings, ...parsed.settings };
      if (db.settings.language) applyLanguage(db.settings.language);
    }

    // Firebase se sync karo (latest data)
    if (window.db_fire) {
      const { collection, getDocs } = window.fsModules;
      const snap = await getDocs(collection(window.db_fire, 'crm'));
      snap.forEach(docSnap => {
        const fireData = JSON.parse(docSnap.data().data || '{}');
        if (fireData.customers) {
          db = { ...db, ...fireData };
          localStorage.setItem('wacrm_db', JSON.stringify(db));
          refreshDashboard();
          renderCustomers();
        }
      });
    }
  } catch(e) {
    console.error('Load error:', e);
  }
}

// ===== TABS =====
function showTab(tab) {
  document.querySelectorAll('.tab-section').forEach(s => s.style.display = 'none');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const section = document.getElementById('section-' + tab);
  if (section) section.style.display = 'block';

  const navItem = document.querySelector(`[data-tab="${tab}"]`);
  if (navItem) navItem.classList.add('active');

  // Close sidebar on mobile
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('mobile-overlay').classList.remove('visible');
  }

  // Tab-specific renders
  if (tab === 'dashboard') refreshDashboard();
  if (tab === 'customers') renderCustomers();
  if (tab === 'followup') renderFollowups();
  if (tab === 'payment') renderPayments();
  if (tab === 'broadcast') updateBroadcastRecipientCount();
  if (tab === 'reports') renderReports();
  if (tab === 'settings') loadSettingsUI();
}

// ===== SIDEBAR TOGGLE (Mobile) =====
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('mobile-overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('visible');
}

// ===== DATE HELPERS =====
function setTodayDate() {
  const el = document.getElementById('today-date');
  if (el) {
    const d = new Date();
    el.textContent = d.toLocaleDateString('hi-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }
}

function getTodayStr() {
  return new Date().toISOString().split('T')[0];
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleDateString('hi-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function isOverdue(dateStr) {
  if (!dateStr) return false;
  return dateStr < getTodayStr();
}

function isToday(dateStr) {
  return dateStr === getTodayStr();
}

function setDefaultFollowupDate() {
  const el = document.getElementById('fu-date');
  if (el) el.value = getTodayStr();
}

// ===== MODAL =====
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('open');

  if (id === 'modal-add-followup' || id === 'modal-add-payment') {
    populateCustomerDropdowns();
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
  }
});

// ===== TOAST =====
function showToast(message, type = 'info', duration = 3000) {
  const container = document.getElementById('toast-container');
  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || 'ℹ️'}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, duration);

  // Sound
  if (db.settings.notifSound && type === 'warning') {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      osc.connect(ctx.destination);
      osc.frequency.value = 880;
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch(e) {}
  }
}

// ===== ACTIVITY LOG =====
function addActivity(text) {
  db.activities.unshift({
    id: Date.now(),
    text,
    time: new Date().toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' })
  });
  if (db.activities.length > 50) db.activities = db.activities.slice(0, 50);
  saveToStorage();
}

function renderActivityList() {
  const el = document.getElementById('activity-list');
  if (!el) return;
  if (!db.activities.length) {
    el.innerHTML = `<div class="empty-state"><span>🕐</span><p>Koi activity nahi abhi</p></div>`;
    return;
  }
  el.innerHTML = db.activities.slice(0, 10).map(a => `
    <div class="activity-item">
      <div class="activity-dot"></div>
      <div class="activity-content">
        <div class="activity-text">${a.text}</div>
        <div class="activity-time">${a.time}</div>
      </div>
    </div>
  `).join('');
}

// ===== UNIQUE ID =====
function genId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// ===== DASHBOARD =====
function refreshDashboard() {
  const today = getTodayStr();
  const oneWeekAgo = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];

  // Stats
  document.getElementById('stat-total-customers').textContent = db.customers.length;
  document.getElementById('badge-customers').textContent = db.customers.length;

  const pendingFU = db.followups.filter(f => f.status === 'pending').length;
  const overdueFU = db.followups.filter(f => f.status === 'pending' && isOverdue(f.date)).length;
  document.getElementById('stat-pending-followups').textContent = pendingFU;
  document.getElementById('badge-followup').textContent = overdueFU;
  document.getElementById('mobile-badge').textContent = overdueFU;
  document.getElementById('trend-overdue').textContent = `${overdueFU} overdue`;

  // Payments
  let totalCollection = 0, totalPending = 0;
  db.payments.forEach(p => {
    totalCollection += Number(p.paid) || 0;
    if (p.status !== 'received') totalPending += (Number(p.amount) - Number(p.paid)) || 0;
  });
  document.getElementById('stat-total-collection').textContent = `₹${totalCollection.toLocaleString('hi-IN')}`;
  document.getElementById('trend-pending-amt').textContent = `₹${totalPending.toLocaleString('hi-IN')} pending`;
  document.getElementById('badge-payment').textContent = db.payments.filter(p => p.status === 'pending' || p.status === 'overdue').length;

  document.getElementById('stat-messages-sent').textContent = db.messagesSent || 0;

  // This week customers
  const thisWeek = db.customers.filter(c => c.addedOn >= oneWeekAgo).length;
  document.getElementById('trend-customers').textContent = `+${thisWeek} this week`;

  // Overdue alert
  const alertEl = document.getElementById('overdue-alert');
  if (overdueFU > 0 && db.settings.notifOverdue) {
    alertEl.style.display = 'flex';
    document.getElementById('overdue-text').textContent = `${overdueFU} overdue follow-up${overdueFU > 1 ? 's' : ''} pending hai!`;
  } else {
    alertEl.style.display = 'none';
  }

  // Today's follow-ups
  renderTodaysFollowups();
  renderActivityList();
  updateDataInfo();
}

function renderTodaysFollowups() {
  const el = document.getElementById('todays-followups');
  if (!el) return;
  const today = getTodayStr();
  const todays = db.followups.filter(f => f.date === today && f.status === 'pending');

  if (!todays.length) {
    el.innerHTML = `<div class="empty-state"><span>✅</span><p>Aaj koi follow-up nahi</p></div>`;
    return;
  }

  el.innerHTML = todays.map(f => {
    const cust = db.customers.find(c => c.id === f.customerId);
    return `
      <div class="activity-item">
        <div class="activity-dot" style="background:${f.priority === 'high' ? 'var(--danger)' : f.priority === 'low' ? 'var(--success)' : 'var(--warning)'}"></div>
        <div class="activity-content">
          <div class="activity-text"><strong>${cust ? cust.name : 'Unknown'}</strong> — ${f.message}</div>
          <div class="activity-time">${f.time || ''} · ${f.priority} priority</div>
        </div>
        <button class="btn-wa-small" style="padding:5px 10px;border-radius:6px;border:none;font-size:11px;font-weight:600;cursor:pointer;" onclick="markFollowupDone('${f.id}');refreshDashboard()">✓ Done</button>
      </div>
    `;
  }).join('');
}

// ===== CUSTOMERS =====
function addCustomer() {
  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();

  if (!name) { showToast('Customer ka naam zaroori hai!', 'error'); return; }
  if (!phone) { showToast('Phone number zaroori hai!', 'error'); return; }

  const customer = {
    id: genId(),
    name,
    phone,
    type: document.getElementById('cust-type').value,
    tag: document.getElementById('cust-tag').value,
    city: document.getElementById('cust-city').value.trim(),
    email: document.getElementById('cust-email').value.trim(),
    notes: document.getElementById('cust-notes').value.trim(),
    addedOn: getTodayStr()
  };

  db.customers.push(customer);
  saveToStorage();
  addActivity(`Naya customer add: ${name}`);
  showToast(`${name} successfully add ho gaya! 🎉`, 'success');
  closeModal('modal-add-customer');
  clearCustomerForm();
  populateCustomerDropdowns();
  refreshDashboard();
  renderCustomers();
}

function clearCustomerForm() {
  ['cust-name','cust-phone','cust-city','cust-email','cust-notes'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('cust-type').value = '';
  document.getElementById('cust-tag').value = 'active';
}

function editCustomer(id) {
  const c = db.customers.find(c => c.id === id);
  if (!c) return;

  document.getElementById('edit-cust-id').value = c.id;
  document.getElementById('edit-cust-name').value = c.name;
  document.getElementById('edit-cust-phone').value = c.phone;
  document.getElementById('edit-cust-type').value = c.type || '';
  document.getElementById('edit-cust-tag').value = c.tag || 'active';
  document.getElementById('edit-cust-city').value = c.city || '';
  document.getElementById('edit-cust-notes').value = c.notes || '';

  openModal('modal-edit-customer');
}

function saveEditCustomer() {
  const id = document.getElementById('edit-cust-id').value;
  const idx = db.customers.findIndex(c => c.id === id);
  if (idx === -1) return;

  const name = document.getElementById('edit-cust-name').value.trim();
  if (!name) { showToast('Naam zaroori hai!', 'error'); return; }

  db.customers[idx] = {
    ...db.customers[idx],
    name,
    phone: document.getElementById('edit-cust-phone').value.trim(),
    type: document.getElementById('edit-cust-type').value,
    tag: document.getElementById('edit-cust-tag').value,
    city: document.getElementById('edit-cust-city').value.trim(),
    notes: document.getElementById('edit-cust-notes').value.trim()
  };

  saveToStorage();
  addActivity(`Customer update: ${name}`);
  showToast('Customer update ho gaya!', 'success');
  closeModal('modal-edit-customer');
  populateCustomerDropdowns();
  renderCustomers();
  refreshDashboard();
}

function deleteCustomer(id) {
  const c = db.customers.find(c => c.id === id);
  if (!c) return;
  if (!confirm(`"${c.name}" ko delete karna chahte ho? Iske saare follow-ups aur payments bhi delete honge.`)) return;

  db.customers = db.customers.filter(x => x.id !== id);
  db.followups = db.followups.filter(x => x.customerId !== id);
  db.payments = db.payments.filter(x => x.customerId !== id);
  saveToStorage();
  addActivity(`Customer delete: ${c.name}`);
  showToast(`${c.name} delete ho gaya`, 'info');
  populateCustomerDropdowns();
  renderCustomers();
  refreshDashboard();
}

function viewCustomerDetail(id) {
  const c = db.customers.find(c => c.id === id);
  if (!c) return;

  const cFollowups = db.followups.filter(f => f.customerId === id);
  const cPayments = db.payments.filter(p => p.customerId === id);
  const tagClass = { hot: 'tag-hot', cold: 'tag-cold', active: 'tag-active', inactive: 'tag-inactive' }[c.tag] || 'tag-active';
  const tagLabel = { hot: '🔥 Hot Lead', cold: '❄️ Cold Lead', active: '✅ Active', inactive: '😴 Inactive' }[c.tag] || c.tag;

  document.getElementById('detail-modal-title').textContent = `👤 ${c.name}`;
  document.getElementById('customer-detail-body').innerHTML = `
    <div class="detail-section">
      <h3>📋 Basic Info</h3>
      <div class="detail-row"><span class="detail-key">Naam:</span><span class="detail-val">${c.name}</span></div>
      <div class="detail-row"><span class="detail-key">Phone:</span><span class="detail-val"><a href="https://wa.me/${c.phone}" target="_blank">📱 ${c.phone}</a></span></div>
      <div class="detail-row"><span class="detail-key">Business:</span><span class="detail-val">${c.type || '—'}</span></div>
      <div class="detail-row"><span class="detail-key">Tag:</span><span class="detail-val"><span class="cc-tag ${tagClass}">${tagLabel}</span></span></div>
      <div class="detail-row"><span class="detail-key">City:</span><span class="detail-val">${c.city || '—'}</span></div>
      <div class="detail-row"><span class="detail-key">Email:</span><span class="detail-val">${c.email || '—'}</span></div>
      <div class="detail-row"><span class="detail-key">Added:</span><span class="detail-val">${formatDate(c.addedOn)}</span></div>
      ${c.notes ? `<div class="detail-row"><span class="detail-key">Notes:</span><span class="detail-val">${c.notes}</span></div>` : ''}
    </div>

    <div class="detail-section">
      <h3>🔔 Follow-ups (${cFollowups.length})</h3>
      ${cFollowups.length === 0 ? '<p style="color:var(--text-muted);font-size:13px">Koi follow-up nahi</p>' :
        cFollowups.map(f => `
          <div style="background:var(--bg-base);border-radius:8px;padding:10px;margin-bottom:8px;font-size:13px;">
            <div style="font-weight:600;color:var(--text-primary)">${f.message}</div>
            <div style="color:var(--text-muted);margin-top:3px">${formatDate(f.date)} ${f.time ? '· ' + f.time : ''} · <span style="color:${f.status === 'done' ? 'var(--success)' : isOverdue(f.date) && f.status === 'pending' ? 'var(--danger)' : 'var(--warning)'}">${f.status === 'done' ? '✅ Done' : isOverdue(f.date) && f.status === 'pending' ? '🔴 Overdue' : '⏳ Pending'}</span></div>
          </div>
        `).join('')
      }
    </div>

    <div class="detail-section">
      <h3>💰 Payments (${cPayments.length})</h3>
      ${cPayments.length === 0 ? '<p style="color:var(--text-muted);font-size:13px">Koi payment nahi</p>' :
        cPayments.map(p => `
          <div style="background:var(--bg-base);border-radius:8px;padding:10px;margin-bottom:8px;font-size:13px;">
            <div style="display:flex;justify-content:space-between">
              <span style="font-weight:600;color:var(--text-primary)">₹${Number(p.amount).toLocaleString('hi-IN')}</span>
              <span class="badge badge-${p.status}">${p.status}</span>
            </div>
            <div style="color:var(--text-muted);margin-top:3px">Paid: ₹${Number(p.paid || 0).toLocaleString('hi-IN')} · Due: ${formatDate(p.dueDate)}</div>
          </div>
        `).join('')
      }
    </div>

    <div style="display:flex;gap:10px;margin-top:8px;">
      <a href="https://wa.me/${c.phone}" target="_blank" class="btn-primary" style="text-decoration:none;flex:1;justify-content:center">
        💬 WhatsApp Open Karo
      </a>
      <button class="btn-outline" onclick="editCustomer('${c.id}');closeModal('modal-customer-detail')" style="flex:1;justify-content:center">✏️ Edit</button>
    </div>
  `;

  openModal('modal-customer-detail');
}

function renderCustomers() {
  const search = (document.getElementById('search-customers')?.value || '').toLowerCase();
  const typeFilter = document.getElementById('filter-type')?.value || '';
  const tagFilter = document.getElementById('filter-tag')?.value || '';

  let filtered = db.customers.filter(c => {
    const matchSearch = !search || c.name.toLowerCase().includes(search) || c.phone.includes(search);
    const matchType = !typeFilter || c.type === typeFilter;
    const matchTag = !tagFilter || c.tag === tagFilter;
    return matchSearch && matchType && matchTag;
  });

  document.getElementById('customer-count-text').textContent = `${filtered.length} customers`;

  if (currentView === 'grid') {
    renderCustomerGrid(filtered);
    document.getElementById('customer-table-wrap').style.display = 'none';
  } else {
    renderCustomerTable(filtered);
    document.getElementById('customer-table-wrap').style.display = 'block';
  }
}

function renderCustomerGrid(customers) {
  const grid = document.getElementById('customer-grid');
  if (!grid) return;

  if (!customers.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><span>👥</span><p>Koi customer nahi mila</p></div>`;
    return;
  }

  const tagLabel = { hot: '🔥 Hot Lead', cold: '❄️ Cold Lead', active: '✅ Active', inactive: '😴 Inactive' };
  const tagClass = { hot: 'tag-hot', cold: 'tag-cold', active: 'tag-active', inactive: 'tag-inactive' };

  grid.innerHTML = customers.map(c => `
    <div class="customer-card" onclick="viewCustomerDetail('${c.id}')">
      <div class="cc-header">
        <div class="cc-avatar">${c.name.charAt(0).toUpperCase()}</div>
        <div class="cc-info">
          <div class="cc-name">${c.name}</div>
          <div class="cc-business">${c.type || 'Business'}</div>
        </div>
        <span class="cc-tag ${tagClass[c.tag] || 'tag-active'}">${tagLabel[c.tag] || c.tag}</span>
      </div>
      <div class="cc-phone">📱 ${c.phone}</div>
      ${c.city ? `<div class="cc-city">📍 ${c.city}</div>` : ''}
      <div class="cc-actions" onclick="event.stopPropagation()">
        <button class="btn-wa-small" onclick="window.open('https://wa.me/${c.phone}','_blank')">💬 WA</button>
        <button class="btn-edit-small" onclick="editCustomer('${c.id}')">✏️ Edit</button>
        <button class="btn-delete-small" onclick="deleteCustomer('${c.id}')">🗑️</button>
      </div>
    </div>
  `).join('');
}

function renderCustomerTable(customers) {
  const tbody = document.getElementById('customer-table-body');
  if (!tbody) return;

  if (!customers.length) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:30px">Koi customer nahi mila</td></tr>`;
    return;
  }

  const tagLabel = { hot: '🔥 Hot', cold: '❄️ Cold', active: '✅ Active', inactive: '😴 Inactive' };
  const tagClass = { hot: 'tag-hot', cold: 'tag-cold', active: 'tag-active', inactive: 'tag-inactive' };

  tbody.innerHTML = customers.map((c, i) => `
    <tr>
      <td style="color:var(--text-muted)">${i + 1}</td>
      <td>
        <div style="display:flex;align-items:center;gap:8px">
          <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--wa-dark),var(--wa-green));display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;color:white;flex-shrink:0">${c.name.charAt(0).toUpperCase()}</div>
          <span style="font-weight:600">${c.name}</span>
        </div>
      </td>
      <td style="font-family:'JetBrains Mono',monospace;font-size:12px">${c.phone}</td>
      <td>${c.type || '—'}</td>
      <td><span class="cc-tag ${tagClass[c.tag] || 'tag-active'}">${tagLabel[c.tag] || c.tag}</span></td>
      <td style="font-size:12px;color:var(--text-muted)">${formatDate(c.addedOn)}</td>
      <td>
        <div style="display:flex;gap:6px">
          <button class="btn-wa-small" style="padding:5px 8px;border-radius:6px;border:none;font-size:11px;font-weight:600;cursor:pointer" onclick="window.open('https://wa.me/${c.phone}','_blank')">💬</button>
          <button class="btn-edit-small" style="padding:5px 8px;border-radius:6px;border:none;font-size:11px;font-weight:600;cursor:pointer" onclick="editCustomer('${c.id}')">✏️</button>
          <button class="btn-delete-small" style="padding:5px 8px;border-radius:6px;border:none;font-size:11px;font-weight:600;cursor:pointer" onclick="deleteCustomer('${c.id}')">🗑️</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function filterCustomers() {
  renderCustomers();
}

function setView(view) {
  currentView = view;
  document.getElementById('vbtn-grid').classList.toggle('active', view === 'grid');
  document.getElementById('vbtn-table').classList.toggle('active', view === 'table');
  document.getElementById('customer-grid').style.display = view === 'grid' ? 'grid' : 'none';
  renderCustomers();
}

function exportCustomersCSV() {
  if (!db.customers.length) { showToast('Export ke liye koi customer nahi!', 'warning'); return; }
  const headers = ['Naam', 'Phone', 'Business Type', 'Tag', 'City', 'Email', 'Notes', 'Added On'];
  const rows = db.customers.map(c => [c.name, c.phone, c.type || '', c.tag || '', c.city || '', c.email || '', c.notes || '', c.addedOn || '']);
  downloadCSV('customers.csv', headers, rows);
  showToast('CSV export ho gaya!', 'success');
}

// ===== FOLLOW-UPS =====
function addFollowup() {
  const customerId = document.getElementById('fu-customer').value;
  const message = document.getElementById('fu-message').value.trim();
  const date = document.getElementById('fu-date').value;

  if (!customerId) { showToast('Customer select karo!', 'error'); return; }
  if (!message) { showToast('Message zaroori hai!', 'error'); return; }
  if (!date) { showToast('Date zaroori hai!', 'error'); return; }

  const followup = {
    id: genId(),
    customerId,
    message,
    date,
    time: document.getElementById('fu-time').value,
    priority: document.getElementById('fu-priority').value,
    notes: document.getElementById('fu-notes').value.trim(),
    status: 'pending',
    createdOn: getTodayStr()
  };

  db.followups.push(followup);
  saveToStorage();

  const cust = db.customers.find(c => c.id === customerId);
  addActivity(`Follow-up add: ${cust ? cust.name : 'Customer'} — ${message}`);
  showToast('Follow-up add ho gaya!', 'success');
  closeModal('modal-add-followup');

  // Reset form
  document.getElementById('fu-message').value = '';
  document.getElementById('fu-notes').value = '';
  document.getElementById('fu-priority').value = 'medium';
  setDefaultFollowupDate();

  renderFollowups();
  refreshDashboard();
}

function markFollowupDone(id) {
  const idx = db.followups.findIndex(f => f.id === id);
  if (idx === -1) return;
  db.followups[idx].status = 'done';
  saveToStorage();
  const cust = db.customers.find(c => c.id === db.followups[idx].customerId);
  addActivity(`Follow-up done: ${cust ? cust.name : 'Customer'}`);
  showToast('Follow-up complete!', 'success');
  renderFollowups();
  refreshDashboard();
}

function deleteFollowup(id) {
  if (!confirm('Ye follow-up delete karna chahte ho?')) return;
  db.followups = db.followups.filter(f => f.id !== id);
  saveToStorage();
  showToast('Follow-up delete ho gaya', 'info');
  renderFollowups();
  refreshDashboard();
}

function renderFollowups() {
  const search = (document.getElementById('search-followups')?.value || '').toLowerCase();
  const statusFilter = document.getElementById('filter-fu-status')?.value || '';
  const priorityFilter = document.getElementById('filter-fu-priority')?.value || '';
  const today = getTodayStr();

  let filtered = db.followups.filter(f => {
    const cust = db.customers.find(c => c.id === f.customerId);
    const matchSearch = !search || (cust && cust.name.toLowerCase().includes(search)) || f.message.toLowerCase().includes(search);
    const matchPriority = !priorityFilter || f.priority === priorityFilter;

    let computedStatus = f.status;
    if (f.status === 'pending' && isOverdue(f.date)) computedStatus = 'overdue';
    else if (f.status === 'pending' && isToday(f.date)) computedStatus = 'today';
    else if (f.status === 'pending') computedStatus = 'upcoming';

    const matchStatus = !statusFilter ||
      (statusFilter === 'pending' && (computedStatus === 'today' || computedStatus === 'upcoming')) ||
      (statusFilter === 'overdue' && computedStatus === 'overdue') ||
      (statusFilter === 'done' && f.status === 'done');

    return matchSearch && matchStatus && matchPriority;
  });

  // Bucket into kanban columns
  const buckets = { overdue: [], today: [], upcoming: [], done: [] };

  filtered.forEach(f => {
    if (f.status === 'done') {
      buckets.done.push(f);
    } else if (isOverdue(f.date)) {
      buckets.overdue.push(f);
    } else if (isToday(f.date)) {
      buckets.today.push(f);
    } else {
      buckets.upcoming.push(f);
    }
  });

  // Sort overdue and today by priority
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  ['overdue', 'today', 'upcoming'].forEach(b => {
    buckets[b].sort((a, b) => (priorityOrder[a.priority] || 1) - (priorityOrder[b.priority] || 1));
  });

  // Update counts
  document.getElementById('count-overdue').textContent = buckets.overdue.length;
  document.getElementById('count-today').textContent = buckets.today.length;
  document.getElementById('count-upcoming').textContent = buckets.upcoming.length;
  document.getElementById('count-done').textContent = buckets.done.length;

  // Render each kanban column
  renderKanbanCol('kanban-overdue', buckets.overdue, 'overdue');
  renderKanbanCol('kanban-today', buckets.today, 'today');
  renderKanbanCol('kanban-upcoming', buckets.upcoming, 'upcoming');
  renderKanbanCol('kanban-done', buckets.done, 'done');
}

function renderKanbanCol(containerId, items, type) {
  const el = document.getElementById(containerId);
  if (!el) return;

  if (!items.length) {
    el.innerHTML = `<div class="empty-state" style="padding:20px"><span style="font-size:20px">📭</span><p>Koi follow-up nahi</p></div>`;
    return;
  }

  const priorityColors = { high: 'var(--danger)', medium: 'var(--warning)', low: 'var(--success)' };

  el.innerHTML = items.map(f => {
    const cust = db.customers.find(c => c.id === f.customerId);
    const isDone = type === 'done';
    return `
      <div class="kanban-card">
        <div class="kc-customer">${cust ? cust.name : 'Unknown'}</div>
        <div class="kc-message">${f.message}</div>
        <div class="kc-meta">
          <span class="kc-date">${formatDate(f.date)}${f.time ? ' ' + f.time : ''}</span>
          <span class="priority-dot priority-${f.priority}" title="${f.priority} priority"></span>
        </div>
        ${f.notes ? `<div style="font-size:11px;color:var(--text-muted);margin-top:4px">📝 ${f.notes}</div>` : ''}
        <div class="kc-actions">
          ${!isDone ? `<button style="background:var(--success-soft);color:var(--success);cursor:pointer" onclick="markFollowupDone('${f.id}')">✅ Done</button>` : ''}
          ${!isDone && cust ? `<button style="background:rgba(37,211,102,0.1);color:var(--wa-green);cursor:pointer" onclick="window.open('https://wa.me/${cust.phone}','_blank')">💬 WA</button>` : ''}
          <button style="background:var(--danger-soft);color:var(--danger);cursor:pointer" onclick="deleteFollowup('${f.id}')">🗑️</button>
        </div>
      </div>
    `;
  }).join('');
}

function filterFollowups() {
  renderFollowups();
}

// ===== PAYMENTS =====
function addPayment() {
  const customerId = document.getElementById('pay-customer').value;
  const amount = Number(document.getElementById('pay-amount').value);

  if (!customerId) { showToast('Customer select karo!', 'error'); return; }
  if (!amount || amount <= 0) { showToast('Amount daalo!', 'error'); return; }

  const paid = Number(document.getElementById('pay-paid').value) || 0;
  const status = document.getElementById('pay-status').value;

  const payment = {
    id: genId(),
    customerId,
    amount,
    paid,
    status,
    dueDate: document.getElementById('pay-due-date').value,
    method: document.getElementById('pay-method').value,
    notes: document.getElementById('pay-notes').value.trim(),
    createdOn: getTodayStr()
  };

  db.payments.push(payment);
  saveToStorage();

  const cust = db.customers.find(c => c.id === customerId);
  addActivity(`Payment add: ${cust ? cust.name : 'Customer'} — ₹${amount.toLocaleString('hi-IN')}`);
  showToast('Payment record add ho gaya!', 'success');
  closeModal('modal-add-payment');

  // Reset
  ['pay-amount','pay-paid','pay-notes'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  document.getElementById('pay-status').value = 'pending';
  document.getElementById('remaining-preview').style.display = 'none';

  renderPayments();
  refreshDashboard();
}

function updateRemainingPreview() {
  const total = Number(document.getElementById('pay-amount').value) || 0;
  const paid = Number(document.getElementById('pay-paid').value) || 0;
  const remaining = total - paid;
  const preview = document.getElementById('remaining-preview');
  const val = document.getElementById('remaining-val');

  if (total > 0) {
    preview.style.display = 'block';
    val.textContent = `₹${remaining.toLocaleString('hi-IN')}`;
  } else {
    preview.style.display = 'none';
  }
}

function updatePaymentStatus(id, newStatus) {
  const idx = db.payments.findIndex(p => p.id === id);
  if (idx === -1) return;

  if (newStatus === 'received') {
    db.payments[idx].paid = db.payments[idx].amount;
  }
  db.payments[idx].status = newStatus;
  saveToStorage();

  const cust = db.customers.find(c => c.id === db.payments[idx].customerId);
  addActivity(`Payment update: ${cust ? cust.name : 'Customer'} — ${newStatus}`);
  showToast('Payment status update ho gaya!', 'success');
  renderPayments();
  refreshDashboard();
}

function deletePayment(id) {
  if (!confirm('Ye payment delete karna chahte ho?')) return;
  db.payments = db.payments.filter(p => p.id !== id);
  saveToStorage();
  showToast('Payment delete ho gaya', 'info');
  renderPayments();
  refreshDashboard();
}

function renderPayments() {
  const search = (document.getElementById('search-payments')?.value || '').toLowerCase();
  const statusFilter = document.getElementById('filter-pay-status')?.value || '';

  let filtered = db.payments.filter(p => {
    const cust = db.customers.find(c => c.id === p.customerId);
    const matchSearch = !search || (cust && cust.name.toLowerCase().includes(search));
    const matchStatus = !statusFilter || p.status === statusFilter;
    return matchSearch && matchStatus;
  });

  // Update summary bar
  let totalDue = 0, totalReceived = 0, totalPending = 0, totalPartial = 0;
  db.payments.forEach(p => {
    totalDue += Number(p.amount) || 0;
    totalReceived += Number(p.paid) || 0;
    if (p.status === 'pending' || p.status === 'overdue') totalPending += (Number(p.amount) - Number(p.paid)) || 0;
    if (p.status === 'partial') totalPartial += (Number(p.amount) - Number(p.paid)) || 0;
  });

  document.getElementById('pay-total-due').textContent = `₹${totalDue.toLocaleString('hi-IN')}`;
  document.getElementById('pay-total-received').textContent = `₹${totalReceived.toLocaleString('hi-IN')}`;
  document.getElementById('pay-total-pending').textContent = `₹${totalPending.toLocaleString('hi-IN')}`;
  document.getElementById('pay-total-partial').textContent = `₹${totalPartial.toLocaleString('hi-IN')}`;

  const tbody = document.getElementById('payment-table-body');
  if (!tbody) return;

  if (!filtered.length) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;color:var(--text-muted);padding:30px">Koi payment record nahi</td></tr>`;
    return;
  }

  const methodIcons = { cash: '💵', upi: '📱', bank: '🏦', cheque: '📄' };

  tbody.innerHTML = filtered.map((p, i) => {
    const cust = db.customers.find(c => c.id === p.customerId);
    const remaining = Number(p.amount) - Number(p.paid || 0);
    return `
      <tr>
        <td style="color:var(--text-muted)">${i + 1}</td>
        <td>
          <div style="font-weight:600">${cust ? cust.name : 'Unknown'}</div>
          <div style="font-size:11px;color:var(--text-muted)">${methodIcons[p.method] || '💵'} ${p.method || 'cash'}</div>
        </td>
        <td style="font-family:'JetBrains Mono',monospace;font-weight:700">₹${Number(p.amount).toLocaleString('hi-IN')}</td>
        <td style="font-family:'JetBrains Mono',monospace;color:var(--success)">₹${Number(p.paid || 0).toLocaleString('hi-IN')}</td>
        <td style="font-family:'JetBrains Mono',monospace;color:${remaining > 0 ? 'var(--danger)' : 'var(--success)'}">₹${remaining.toLocaleString('hi-IN')}</td>
        <td><span class="badge badge-${p.status}">${p.status}</span></td>
        <td style="font-size:12px;color:var(--text-muted)">${formatDate(p.dueDate)}</td>
        <td>
          <div style="display:flex;gap:4px;flex-wrap:wrap">
            ${p.status !== 'received' ? `<button style="background:var(--success-soft);color:var(--success);border:none;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:600;cursor:pointer" onclick="updatePaymentStatus('${p.id}','received')">✅ Received</button>` : ''}
            ${p.status === 'pending' ? `<button style="background:var(--info-soft);color:var(--info);border:none;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:600;cursor:pointer" onclick="updatePaymentStatus('${p.id}','partial')">🔵 Partial</button>` : ''}
            <button style="background:var(--danger-soft);color:var(--danger);border:none;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:600;cursor:pointer" onclick="deletePayment('${p.id}')">🗑️</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function filterPayments() {
  renderPayments();
}

function exportPaymentsCSV() {
  if (!db.payments.length) { showToast('Export ke liye koi payment nahi!', 'warning'); return; }
  const headers = ['Customer', 'Amount', 'Paid', 'Remaining', 'Status', 'Due Date', 'Method', 'Notes'];
  const rows = db.payments.map(p => {
    const cust = db.customers.find(c => c.id === p.customerId);
    return [
      cust ? cust.name : 'Unknown',
      p.amount,
      p.paid || 0,
      Number(p.amount) - Number(p.paid || 0),
      p.status,
      p.dueDate || '',
      p.method || '',
      p.notes || ''
    ];
  });
  downloadCSV('payments.csv', headers, rows);
  showToast('Payments CSV export ho gaya!', 'success');
}

// ===== BROADCAST =====
function setupBroadcastListeners() {
  const msgEl = document.getElementById('broadcast-message');
  if (msgEl) {
    msgEl.addEventListener('input', () => {
      document.getElementById('char-count').textContent = msgEl.value.length;
      updateBroadcastPreview();
    });
  }
}

const templates = {
  custom: '',
  payment: 'Namaste {name}! 🙏\n\nAapka ₹{amount} payment pending hai.\n\nPlease jald se payment karein.\n\nDhanyawad! 🙏',
  offer: 'Namaste {name}! 🎁\n\nHamari taraf se ek special offer hai aapke liye!\n\nAaj hi contact karein.\n\nDhanyawad! 😊',
  followup: 'Namaste {name}! 🔔\n\nHam aapke baare mein soch rahe the.\n\nKya aap available hain baat karne ke liye?\n\nDhanyawad! 🙏'
};

function setTemplate(type, btn) {
  document.querySelectorAll('.tmpl-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const msgEl = document.getElementById('broadcast-message');
  if (msgEl) {
    msgEl.value = templates[type] || '';
    document.getElementById('char-count').textContent = msgEl.value.length;
    updateBroadcastPreview();
  }
}

function updateBroadcastPreview() {
  const msg = document.getElementById('broadcast-message').value;
  const preview = document.getElementById('broadcast-preview');
  if (!preview) return;

  const sampleCust = db.customers[0];
  const samplePayment = db.payments[0];
  const replaced = msg
    .replace(/{name}/g, sampleCust ? sampleCust.name : 'Rahul Sharma')
    .replace(/{phone}/g, sampleCust ? sampleCust.phone : '919876543210')
    .replace(/{amount}/g, samplePayment ? samplePayment.amount : '1500')
    .replace(/\n/g, '<br>');

  preview.innerHTML = replaced || 'Message preview yahan aayega...';
}

function toggleAllRecipients() {
  const checked = document.getElementById('bc-all').checked;
  ['bc-pending', 'bc-overdue-fu', 'bc-hot'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.checked = checked;
  });
  updateBroadcastRecipientCount();
}

function updateBroadcastRecipientCount() {
  let recipients = new Set();

  if (document.getElementById('bc-all')?.checked) {
    db.customers.forEach(c => recipients.add(c.id));
  }
  if (document.getElementById('bc-pending')?.checked) {
    const pendingCustomerIds = db.payments.filter(p => p.status === 'pending' || p.status === 'overdue').map(p => p.customerId);
    pendingCustomerIds.forEach(id => recipients.add(id));
  }
  if (document.getElementById('bc-overdue-fu')?.checked) {
    const overdueIds = db.followups.filter(f => f.status === 'pending' && isOverdue(f.date)).map(f => f.customerId);
    overdueIds.forEach(id => recipients.add(id));
  }
  if (document.getElementById('bc-hot')?.checked) {
    db.customers.filter(c => c.tag === 'hot').forEach(c => recipients.add(c.id));
  }

  const countEl = document.getElementById('selected-recipients-count');
  if (countEl) countEl.textContent = `${recipients.size} recipients selected`;
  return Array.from(recipients);
}

// Add change listeners to checkboxes
document.addEventListener('change', (e) => {
  if (['bc-pending','bc-overdue-fu','bc-hot'].includes(e.target.id)) {
    updateBroadcastRecipientCount();
  }
});

function startBroadcast() {
  const msg = document.getElementById('broadcast-message').value.trim();
  if (!msg) { showToast('Pehle message likho!', 'error'); return; }

  const recipientIds = updateBroadcastRecipientCount();
  if (!recipientIds.length) { showToast('Koi recipient select nahi hai!', 'warning'); return; }

  const recipients = db.customers.filter(c => recipientIds.includes(c.id));
  if (!recipients.length) { showToast('Valid customers nahi mile!', 'warning'); return; }

  if (!confirm(`${recipients.length} customers ko broadcast karna chahte ho?`)) return;

  let opened = 0;
  recipients.forEach((c, idx) => {
    const personalMsg = msg
      .replace(/{name}/g, c.name)
      .replace(/{phone}/g, c.phone)
      .replace(/{amount}/g, (() => {
        const pay = db.payments.find(p => p.customerId === c.id && p.status !== 'received');
        return pay ? pay.amount : '0';
      })());

    setTimeout(() => {
      window.open(`https://wa.me/${c.phone}?text=${encodeURIComponent(personalMsg)}`, '_blank');
    }, idx * 800);
    opened++;
  });

  db.messagesSent = (db.messagesSent || 0) + opened;
  db.broadcasts.unshift({
    id: genId(),
    message: msg,
    recipientCount: recipients.length,
    date: getTodayStr(),
    time: new Date().toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' })
  });
  saveToStorage();
  addActivity(`Broadcast send: ${recipients.length} customers ko`);
  showToast(`${opened} customers ko broadcast shuru ho gaya! 📢`, 'success');

  renderBroadcastHistory();
  refreshDashboard();
}

function renderBroadcastHistory() {
  const el = document.getElementById('broadcast-history-list');
  if (!el) return;

  if (!db.broadcasts.length) {
    el.innerHTML = `<div class="empty-state"><span>📭</span><p>Koi broadcast history nahi</p></div>`;
    return;
  }

  el.innerHTML = db.broadcasts.slice(0, 10).map(b => `
    <div style="padding:10px 0;border-bottom:1px solid var(--border)">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span style="font-size:13px;font-weight:600;color:var(--text-primary)">📢 ${b.recipientCount} recipients</span>
        <span style="font-size:11px;color:var(--text-muted);font-family:'JetBrains Mono',monospace">${formatDate(b.date)} ${b.time}</span>
      </div>
      <div style="font-size:12px;color:var(--text-muted);margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${b.message.substring(0, 60)}${b.message.length > 60 ? '...' : ''}</div>
    </div>
  `).join('');
}

// ===== REPORTS =====
function renderReports() {
  renderBusinessTypeChart();
  renderPaymentStatusChart();
  renderFollowupPerfChart();
  renderMonthlySummary();
}

function renderBusinessTypeChart() {
  const el = document.getElementById('chart-business-type');
  if (!el) return;

  const counts = {};
  db.customers.forEach(c => {
    const type = c.type || 'Other';
    counts[type] = (counts[type] || 0) + 1;
  });

  if (!Object.keys(counts).length) {
    el.innerHTML = `<div class="empty-state"><span>📊</span><p>Data nahi hai</p></div>`;
    return;
  }

  const max = Math.max(...Object.values(counts));
  const colors = ['#25d366','#128c7e','#00bfa5','#3b82f6','#f59e0b','#ef4444','#8b5cf6','#ec4899'];

  el.innerHTML = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([label, val], i) => `
      <div class="chart-bar-row">
        <div class="chart-bar-label">${label}</div>
        <div class="chart-bar-wrap">
          <div class="chart-bar-fill" style="width:${(val/max*100)}%;background:${colors[i % colors.length]}"></div>
        </div>
        <div class="chart-bar-val">${val}</div>
      </div>
    `).join('');
}

function renderPaymentStatusChart() {
  const el = document.getElementById('chart-payment-status');
  if (!el) return;

  const counts = { pending: 0, received: 0, partial: 0, overdue: 0 };
  db.payments.forEach(p => { if (counts[p.status] !== undefined) counts[p.status]++; });

  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  if (!total) {
    el.innerHTML = `<div class="empty-state"><span>💰</span><p>Data nahi hai</p></div>`;
    return;
  }

  const labels = { pending: '⏳ Pending', received: '✅ Received', partial: '🔵 Partial', overdue: '🔴 Overdue' };
  const colors = { pending: 'var(--warning)', received: 'var(--success)', partial: 'var(--info)', overdue: 'var(--danger)' };

  el.innerHTML = Object.entries(counts).map(([status, count]) => `
    <div class="chart-bar-row">
      <div class="chart-bar-label">${labels[status]}</div>
      <div class="chart-bar-wrap">
        <div class="chart-bar-fill" style="width:${total ? (count/total*100) : 0}%;background:${colors[status]}"></div>
      </div>
      <div class="chart-bar-val">${count}</div>
    </div>
  `).join('');
}

function renderFollowupPerfChart() {
  const el = document.getElementById('chart-followup-perf');
  if (!el) return;

  const total = db.followups.length;
  const done = db.followups.filter(f => f.status === 'done').length;
  const overdue = db.followups.filter(f => f.status === 'pending' && isOverdue(f.date)).length;
  const pending = total - done - overdue;

  if (!total) {
    el.innerHTML = `<div class="empty-state"><span>🔔</span><p>Data nahi hai</p></div>`;
    return;
  }

  const bars = [
    { label: '✅ Done', val: done, color: 'var(--success)' },
    { label: '⏳ Pending', val: pending, color: 'var(--info)' },
    { label: '🔴 Overdue', val: overdue, color: 'var(--danger)' }
  ];

  el.innerHTML = bars.map(b => `
    <div class="chart-bar-row">
      <div class="chart-bar-label">${b.label}</div>
      <div class="chart-bar-wrap">
        <div class="chart-bar-fill" style="width:${(b.val/total*100)}%;background:${b.color}"></div>
      </div>
      <div class="chart-bar-val">${b.val}</div>
    </div>
  `).join('');
}

function renderMonthlySummary() {
  const el = document.getElementById('monthly-summary');
  if (!el) return;

  // Get last 6 months
  const months = [];
  for (let i = 5; i >= 0; i--) {
    const d = new Date();
    d.setMonth(d.getMonth() - i);
    months.push({
      key: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`,
      label: d.toLocaleDateString('hi-IN', { month: 'short', year: 'numeric' })
    });
  }

  const rows = months.map(m => {
    const newCusts = db.customers.filter(c => c.addedOn && c.addedOn.startsWith(m.key)).length;
    const fuDone = db.followups.filter(f => f.status === 'done' && f.date && f.date.startsWith(m.key)).length;
    const collected = db.payments
      .filter(p => p.status === 'received' && p.createdOn && p.createdOn.startsWith(m.key))
      .reduce((s, p) => s + (Number(p.amount) || 0), 0);
    return { ...m, newCusts, fuDone, collected };
  });

  el.innerHTML = `
    <table class="summary-table">
      <thead>
        <tr>
          <th>Mahina</th>
          <th>Naye Customers</th>
          <th>Follow-ups Done</th>
          <th>Collection</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(r => `
          <tr>
            <td style="font-weight:600;color:var(--text-primary)">${r.label}</td>
            <td style="color:var(--info)">${r.newCusts}</td>
            <td style="color:var(--success)">${r.fuDone}</td>
            <td style="color:var(--wa-green);font-family:'JetBrains Mono',monospace">₹${r.collected.toLocaleString('hi-IN')}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function printReport() {
  window.print();
}

// ===== SETTINGS =====
function loadSettingsUI() {
  const s = db.settings;
  const nameEl = document.getElementById('setting-name');
  const bizEl = document.getElementById('setting-business');
  const phoneEl = document.getElementById('setting-phone');
  if (nameEl) nameEl.value = s.name || '';
  if (bizEl) bizEl.value = s.business || '';
  if (phoneEl) phoneEl.value = s.phone || '';

  const notifOverdue = document.getElementById('notif-overdue');
  const notifPayment = document.getElementById('notif-payment');
  const notifSound = document.getElementById('notif-sound');
  if (notifOverdue) notifOverdue.checked = s.notifOverdue !== false;
  if (notifPayment) notifPayment.checked = s.notifPayment !== false;
  if (notifSound) notifSound.checked = !!s.notifSound;
  const langSelect = document.getElementById('setting-language');
if (langSelect) langSelect.value = db.settings.language || 'hinglish';
  const tmplFU = document.getElementById('tmpl-followup-default');
  const tmplPay = document.getElementById('tmpl-payment-default');
  if (tmplFU) tmplFU.value = s.tmplFollowup || '';
  if (tmplPay) tmplPay.value = s.tmplPayment || '';

  updateDataInfo();
  updateSidebarUser();
}

function saveSettings() {
  db.settings.name = document.getElementById('setting-name')?.value.trim() || 'Admin';
  db.settings.business = document.getElementById('setting-business')?.value.trim() || '';
  db.settings.phone = document.getElementById('setting-phone')?.value.trim() || '';
  db.settings.notifOverdue = document.getElementById('notif-overdue')?.checked ?? true;
  db.settings.notifPayment = document.getElementById('notif-payment')?.checked ?? true;
  db.settings.notifSound = document.getElementById('notif-sound')?.checked ?? false;
   const langEl = document.getElementById('setting-language');
if (langEl && langEl.value) {
  applyLanguage(langEl.value);
}

  saveToStorage();
  updateSidebarUser();
  showToast('Settings save ho gayi!', 'success');
}

function saveTemplates() {
  db.settings.tmplFollowup = document.getElementById('tmpl-followup-default')?.value || '';
  db.settings.tmplPayment = document.getElementById('tmpl-payment-default')?.value || '';
  saveToStorage();
  showToast('Templates save ho gayi!', 'success');
}

function updateSidebarUser() {
  const nameEl = document.getElementById('sidebar-username');
  if (nameEl) nameEl.textContent = db.settings.name || 'Admin';
}

function updateDataInfo() {
  const storageStr = localStorage.getItem('wacrm_db') || '';
  const sizeKB = (new Blob([storageStr]).size / 1024).toFixed(1);

  const infoC = document.getElementById('info-customers');
  const infoF = document.getElementById('info-followups');
  const infoP = document.getElementById('info-payments');
  const infoS = document.getElementById('info-storage');

  if (infoC) infoC.textContent = db.customers.length;
  if (infoF) infoF.textContent = db.followups.length;
  if (infoP) infoP.textContent = db.payments.length;
  if (infoS) infoS.textContent = `${sizeKB} KB`;
}

// ===== DATA MANAGEMENT =====
function exportAllData() {
  const dataStr = JSON.stringify(db, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `wacrm_backup_${getTodayStr()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Data export ho gaya!', 'success');
}

function importData() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(ev.target.result);
        if (!parsed.customers && !parsed.followups) {
          showToast('Invalid backup file!', 'error');
          return;
        }
        if (!confirm('Ye import existing data replace kar dega. Continue?')) return;
        db = { ...db, ...parsed };
        saveToStorage();
        loadSettingsUI();
        refreshDashboard();
        showToast('Data import ho gaya!', 'success');
        addActivity('Data import kiya gaya');
      } catch(err) {
        showToast('Import failed: Invalid JSON!', 'error');
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

function clearAllData() {
  if (!confirm('SARE DATA DELETE HO JAYENGE! Kya aap sure hain?\n\nIs action ko undo nahi kiya ja sakta!')) return;
  if (!confirm('LAST CHANCE: Sach mein sab kuch delete karna chahte ho?')) return;

  db.customers = [];
  db.followups = [];
  db.payments = [];
  db.broadcasts = [];
  db.activities = [];
  db.messagesSent = 0;
  saveToStorage();
  showToast('Sab data clear ho gaya!', 'warning');
  refreshDashboard();
  renderCustomers();
  renderFollowups();
  renderPayments();
  updateDataInfo();
}

// ===== CUSTOMER DROPDOWNS =====
function populateCustomerDropdowns() {
  const dropdowns = ['fu-customer', 'pay-customer'];
  dropdowns.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const current = el.value;
    el.innerHTML = `<option value="">-- Customer Select Karo --</option>`;
    db.customers.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = `${c.name} (${c.phone})`;
      el.appendChild(opt);
    });
    if (current) el.value = current;
  });
}

// ===== CSV DOWNLOAD HELPER =====
function downloadCSV(filename, headers, rows) {
  const csvContent = [
    headers.join(','),
    ...rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(','))
  ].join('\n');

  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// ===== OVERDUE CHECKER =====
function startOverdueChecker() {
  // Check on load
  checkOverdueNotifications();
  // Check every 5 minutes
  setInterval(checkOverdueNotifications, 5 * 60 * 1000);
}

function checkOverdueNotifications() {
  if (!db.settings.notifOverdue) return;
  const overdue = db.followups.filter(f => f.status === 'pending' && isOverdue(f.date));
  if (overdue.length > 0) {
    const alertEl = document.getElementById('overdue-alert');
    if (alertEl && alertEl.style.display === 'none') {
      alertEl.style.display = 'flex';
    }
  }
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
  // ESC to close modals
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
  }
  // Ctrl+N to add customer
  if (e.ctrlKey && e.key === 'n') {
    e.preventDefault();
    openModal('modal-add-customer');
  }
});

// ===== INIT TAB (default: dashboard) =====
showTab('dashboard');
// PWA Service Worker Register
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('PWA ready!'))
      .catch(e => console.log('SW error:', e));
  });
}

// PWA Install Prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // Install button show karo
  const btn = document.createElement('button');
  btn.textContent = '📲 App Install Karo';
  btn.className = 'btn-primary';
  btn.style.cssText = 'position:fixed;bottom:80px;right:24px;z-index:998;box-shadow:0 4px 20px rgba(37,211,102,0.4)';
  btn.onclick = () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => btn.remove());
  };
  document.body.appendChild(btn);
});
