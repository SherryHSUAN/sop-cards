// 道路救援圖卡的公開資料：只放保險公司公開資訊，圖卡範本與分享網頁共用
// 資料來源：各公司官網（2026-11-09 核對）；和泰取自保單、台灣產物另參考道路救援卡
const ROADSIDE_DEFAULT_TELL = ["車牌號碼", "保戶姓名", "車輛廠牌", "車輛顏色", "車輛事故地點", "車輛事故原因"];
const ROADSIDE_RECEIPT = "有自費：<b>務必留存正本收據</b>";

const ROADSIDE = {
  fubon: {
    name: "富邦", full: "富邦產險",
    site: "https://b2c.518fb.com/FubonCMS/page/19",
    hotlines: [
      { label: "全鋒", num: "0800-013-013", tel: "0800013013" },
      { label: "行遍天下", num: "0800-071-111", tel: "0800071111" },
      { label: "台灣大車隊", small: "快速接電服務", num: "55688 按 851", tel: "55688", dial: "快速接電 55688" }
    ],
    services: ["拖吊到指定或可修復的地點", "送油、送水（油錢自付）", "換備胎（要自備備胎）", "接電（電動、油電車除外）"],
    remember: ["一定要先打專線・要有人陪同拖吊・限本島及澎湖"]
  },
  cathay: {
    name: "國泰", full: "國泰產險",
    site: "https://www.cathay-ins.com.tw/cathayins/personal/services/roadside-assist/",
    hotlines: [{ label: "道路救援專線", num: "0800-020-345", tel: "0800020345" }],
    services: ["拖吊", "代送燃料油（油錢自付）", "送冷卻水", "更換輪胎", "接電啟動"],
    remember: ["一定要先打專線・不含離島及偏遠山區・無開鎖服務"]
  },
  shinkong: {
    name: "新光", full: "新光產險",
    site: "https://www.sk858.com.tw/products/car/roadside-assistance",
    hotlines: [{ label: "24H 救援專線", num: "0800-212-551", tel: "0800212551" }],
    services: ["拖吊"],
    remember: ["一定要先打專線・要陪同拖吊・限本島・無開鎖服務"]
  },
  mingtai: {
    name: "明台", full: "明台產險",
    site: "https://www.msig-mingtai.com.tw/ec/road-assistance.html",
    hotlines: [{ label: "道路救援專線", num: "0800-078-888", tel: "0800078888" }],
    services: ["拖吊", "更換備胎", "接電啟動", "加水", "加油（油錢自付）"],
    remember: ["一定要先打專線・限本島及澎湖"]
  },
  tmnewa: {
    name: "新安東京", full: "新安東京海上產險",
    site: "https://www.tmnewa.com.tw/b2c_v2/commonweb/officialinfo/rescue.aspx",
    hotlines: [{ label: "道路救援專線", num: "0800-050-119", tel: "0800050119" }],
    services: ["拖吊", "加水", "送油（油錢自付）", "換備胎（要自備備胎）", "接電（電動、油電車除外）"],
    remember: ["一定要先打專線・要陪同拖吊・限本島・無開鎖服務"]
  },
  southchina: {
    name: "華南", full: "華南產險",
    site: "https://www.south-china.com.tw/OfficialPub/claims/assistance/car",
    hotlines: [
      { label: "全鋒", num: "0800-212-743", tel: "0800212743" },
      { label: "行遍天下", num: "0800-008-580", tel: "0800008580" }
    ],
    remember: ["服務內容請依保單或拖吊卡權益說明"]
  },
  cki: {
    name: "兆豐", full: "兆豐產險",
    site: "https://www.cki.com.tw/Page/Index/20",
    hotlines: [{ label: "全鋒", num: "0800-005-500", tel: "0800005500" }],
    tell: ["車主名稱", "現場連絡電話", "車牌號碼", "車子顏色", "事故或故障地點", "故障原因及目的地"],
    services: ["拖吊", "接電", "送油", "送水", "換備胎", "充氣"],
    remember: ["一定要先打專線・駕駛人要跟隨拖吊", "到場時出示保險卡或服務卡"]
  },
  hotai: {
    name: "和泰", full: "和泰產險", subtitle: "事故現場服務",
    hotlineTitle: "撥打事故現場服務專線", servicesTitle: "服務內容", noReceipt: true,
    site: "https://www.hotains.com.tw/carrier/else",
    footNote: "依和泰保單記載整理・實際權益以保單為準",
    hotlines: [{ label: "行遍天下", num: "0809-090-128", tel: "0809090128" }],
    services: ["事故現場處理", "記錄現場、協助拍照"],
    remember: ["撥 110 報警，並索取交通事故登記聯單"]
  },
  tfmi: {
    name: "台灣產物", full: "台灣產物",
    site: "https://ec.tfmi.com.tw/Content/RoadAssist/Index.aspx",
    footNote: "依官網及道路救援卡整理・實際權益以保單為準",
    hotlines: [{ label: "24 小時專線", num: "0809-068-888 按 2", tel: "0809068888", dial: "0809-068-888（按 2）" }],
    services: ["平面拖吊", "接電", "代送燃料油（油錢自付）", "送水", "更換輪胎"],
    remember: ["一定要由專線派車・一天限一次免費服務・以空車為限"]
  },
  ctbc: {
    name: "中信", full: "中國信託產險",
    site: "https://www.ctbcins.com/article/%E9%81%93%E8%B7%AF%E6%95%91%E6%8F%B4%E6%9C%8D%E5%8B%99",
    hotlines: [{ label: "24 小時專線", num: "0800-075-777 按 1", tel: "0800075777", dial: "0800-075-777（按 1）" }],
    services: ["拖吊", "送水", "送油（油錢自付）", "換備胎（工具及備胎自備）", "接電（油電車改載運）"],
    remember: ["一定要先打專線・限本島・以空車為限"]
  },
  wwunion: {
    name: "旺旺友聯", full: "旺旺友聯產險",
    site: "https://www.wwunion.com/?page_id=11854",
    hotlines: [
      { label: "道路救援專線", num: "0800-257-885", tel: "0800257885" },
      { label: "客戶服務專線", num: "0800-024-024", tel: "0800024024" }
    ],
    services: ["拖吊", "送水", "送油（油費另計）", "接電啟動", "充氣及更換備胎"],
    remember: ["一定要先打專線・限本島及澎湖・無開鎖服務"]
  },
  first: {
    name: "第一", full: "第一產險",
    site: "https://www.firstins.com.tw/service/road-help/road-help",
    hotlines: [{ label: "救援專線", num: "0800-288-068 按 1", tel: "0800288068", dial: "0800-288-068（按 1）" }],
    services: ["拖吊", "送油、送水（油錢自付）", "換備胎（要自備備胎）", "接電（電動、油電車除外）"],
    remember: ["限本島及澎湖・以空車為限"]
  },
  taian: {
    name: "泰安", full: "泰安產險",
    site: "https://www.taian.com.tw/Vehicle",
    hotlines: [{ label: "24 小時專線", num: "0800-012-080", tel: "0800012080" }],
    services: ["拖吊", "送油、送水（油錢自付）", "換備胎（要自備備胎）", "接電（電動車除外）"],
    remember: ["一定要先打專線・要填服務確認單"]
  },
  nanshan: {
    name: "南山", full: "南山產險",
    site: "https://www.nanshangeneral.com.tw/claimsServices",
    hotlines: [{ label: "24 小時專線", num: "0800-005-678", tel: "0800005678" }],
    remember: ["服務內容請依保單"]
  }
};
