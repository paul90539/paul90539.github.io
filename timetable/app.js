/**
 * CONCERT TIMETABLE 2026-2027
 * Multi-Artist Schedule & Timetable Application
 */

const DEFAULT_TOURS = [
  {
    "id": "roselia",
    "name": "Roselia",
    "tourTitle": "Roselia 10th Anniversary LIVE TOUR",
    "subtitle": "全4公演・アリーナ＆ホールツアー",
    "period": "2027年1月30日(土) 〜 2027年4月25日(日)",
    "color": "#6c5ce7",
    "icon": "🌹",
    "badgeClass": "roselia",
    "rawText": "2027年01月30日（土） 東京・TOYOTA ARENA TOKYO OPEN --:-- / START --:--\n2027年02月28日（日） 愛知・愛知県芸術劇場 大ホール OPEN --:-- / START --:--\n2027年03月14日（日） 宮城・仙台サンプラザホール OPEN --:-- / START --:--\n2027年04月25日（日） 福岡・福岡サンパレス OPEN --:-- / START --:--"
  },
  {
  "id": "tour_1787736925601",
  "name": "YOASOBI",
  "tourTitle": "YOASOBI ASIA 10-CITY DOME & STADIUM TOUR 2026-2027",
  "subtitle": "国内公演概要",
  "period": "2026年10月24日(土) 〜 2026年12月6日(日)",
  "color": "#be2edd",
  "icon": "🎤",
  "badgeClass": "custom",
  "rawText": "2026/10/24 (土) 大阪・京セラドーム大阪 OPEN 15:30 / START 18:00\n2026/10/25 (日) 大阪・京セラドーム大阪 OPEN 14:30 / START 17:00\n2026/11/07 (土) 愛知・バンテリンドーム ナゴヤ OPEN 15:30 / START 18:00\n2026/11/08 (日) 愛知・バンテリンドーム ナゴヤ OPEN 14:30 / START 17:00\n2026/11/14 (土) 北海道・大和ハウス プレミストドーム OPEN 15:30 / START 18:00\n2026/11/15 (日) 北海道・大和ハウス プレミストドーム OPEN 14:30 / START 17:00\n2026/11/28 (土) 福岡・みずほPayPayドーム福岡 OPEN 15:30 / START 18:00\n2026/11/29 (日) 福岡・みずほPayPayドーム福岡 OPEN 14:30 / START 17:00\n2026/12/05 (土) 東京・東京ドーム OPEN 15:30 / START 18:00\n2026/12/06 (日) 東京・東京ドーム OPEN 14:30 / START 17:00"
},
  {
  "id": "tour_1787736094569",
  "name": "MYTH & ROID",
  "tourTitle": "MYTH & ROID Tour 2026-2027 “I know your fire”",
  "subtitle": "全13公演",
  "period": "2026年7月17日(金) 〜 2027年2月6日(土)",
  "color": "#ff7979",
  "icon": "🎤",
  "badgeClass": "custom",
  "rawText": "2026/07/17 (金) 東京・BLAZE GOTANDA OPEN 18:15 / START 19:00\n2026/08/09 (日) 群馬・Club JAMMERS OPEN 17:00 / START 17:30\n2026/08/11 (火) 栃木・HEAVEN'S ROCK UTSUNOMIYA VJ-2 OPEN 17:00 / START 17:30\n2026/09/21 (月) 岡山・YEBISU YA PRO OPEN 17:00 / START 17:30\n2026/09/22 (火) 福岡・INSA OPEN 17:00 / START 17:30\n2026/10/04 (日) 大阪・Banana Hall OPEN 17:00 / START 17:30\n2026/10/12 (月) 埼玉・HEAVEN'S ROCK KUMAGAYA VJ-1 OPEN 17:00 / START 17:30\n2026/11/01 (日) 静岡・LIVE ROXY SHIZUOKA OPEN 17:00 / START 17:30\n2026/11/03 (火) 愛知・THE Bottom Line OPEN 17:00 / START 17:30\n2026/12/25 (金) 韓国・KT&G Sangsangmadang Hongdae OPEN --:-- / START --:--\n2027/01/14 (木) 香港・PORTAL OPEN --:-- / START --:--\n2027/01/23 (土) 台湾・Clapper Studio OPEN --:-- / START --:--\n2027/02/06 (土) 神奈川・KT Zepp Yokohama OPEN 17:30 / START 18:30"
},
  {
    "id": "scandal",
    "name": "SCANDAL",
    "tourTitle": "SCANDAL FINAL TOUR 2026-2027 「SCANDALの47都道府県ツアー」",
    "subtitle": "全52公演・47都道府県ツアー",
    "period": "2026年10月22日(木) 〜 2027年5月1日(土)",
    "color": "#ff4757",
    "icon": "🎸",
    "badgeClass": "scandal",
    "rawText": "2026年10月22日（木） 東京・恵比寿 LIQUIDROOM OPEN：18:00 / START：19:00\n2026年10月24日（土） 青森・青森 Quarter OPEN：17:00 / START：17:30\n2026年10月25日（日） 秋田・秋田 Club SWIFT OPEN：16:30 / START：17:00\n2026年10月27日（火） 岩手・盛岡 CLUB CHANGE WAVE OPEN：18:00 / START：18:30\n2026年10月29日（木） 宮城・仙台 RENSA OPEN：18:00 / START：18:30\n2026年10月31日（土） 山形・山形 ミュージック昭和Session OPEN：16:30 / START：17:00\n2026年11月01日（日） 福島・郡山 HIPSHOT JAPAN OPEN：16:30 / START：17:00\n2026年11月06日（金） 山梨・甲府 CONVICTION OPEN：18:00 / START：18:30\n2026年11月07日（土） 長野・長野 CLUB JUNK BOX OPEN：17:00 / START：17:30\n2026年11月08日（日） 新潟・新潟 LOTS OPEN：16:30 / START：17:00\n2026年11月14日（土） 富山・富山 MAIRO OPEN：17:00 / START：17:30\n2026年11月15日（日） 石川・金沢 EIGHT HALL OPEN：16:30 / START：17:00\n2026年11月17日（火） 福井・福井 CHOP OPEN：18:00 / START：18:30\n2026年11月21日（土） 岐阜・岐阜 club-G OPEN：17:00 / START：17:30\n2026年11月23日（月・祝） 三重・四日市 CLUB ROOTS OPEN：16:30 / START：17:00\n2026年11月28日（土） 静岡・LIVE ROXY SHIZUOKA OPEN：17:00 / START：17:30\n2026年11月29日（日） 愛知・名古屋 ダイアモンドホール OPEN：16:00 / START：17:00\n2026年12月05日（土） 滋賀・滋賀 U☆STONE OPEN：17:00 / START：17:30\n2026年12月06日（日） 京都・京都 FANJ OPEN：16:30 / START：17:00\n2026年12月08日（火） 奈良・奈良 EVANS CASTLE HALL OPEN：18:00 / START：18:30\n2026年12月10日（木） 和歌山・和歌山 CLUB GATE OPEN：18:00 / START：18:30\n2026年12月12日（土） 兵庫・神戸 Harbor Studio OPEN：17:00 / START：17:30\n2026年12月13日（日） 大阪・心斎橋 BIGCAT OPEN：16:00 / START：17:00\n2026年12月19日（土） 茨城・水戸 LIGHT HOUSE OPEN：17:00 / START：17:30\n2026年12月20日（日） 栃木・HEAVEN'S ROCK 宇都宮 VJ-2 OPEN：16:30 / START：17:00\n2026年12月23日（水） 群馬・高崎 club FLEEZ OPEN：18:00 / START：18:30\n2026年12月26日（土） 埼玉・HEAVEN'S ROCK さいたま新都心 VJ-3 OPEN：17:00 / START：17:30\n2026年12月27日（日） 千葉・柏 PALOOZA OPEN：16:30 / START：17:00\n2027年01月09日（土） 神奈川・川崎 CLUB CITTA' OPEN：16:30 / START：17:30\n2027年01月16日（土） 鳥取・米子 AZTiC laughs OPEN：17:00 / START：17:30\n2027年01月17日（日） 島根・出雲 APOLLO OPEN：16:30 / START：17:00\n2027年01月23日（土） 岡山・岡山 CRAZYMAMA KINGDOM OPEN：16:30 / START：17:30\n2027年01月24日（日） 広島・広島 CLUB QUATTRO OPEN：16:00 / START：17:00\n2027年01月30日（土） 山口・周南 RISING HALL OPEN：16:45 / START：17:30\n2027年02月06日（土） 徳島・徳島 club GRINDHOUSE OPEN：17:00 / START：17:30\n2027年02月07日（日） 高知・高知 CARAVAN SARY OPEN：16:30 / START：17:00\n2027年02月11日（木・祝） 香川・高松 MONSTER OPEN：16:30 / START：17:00\n2027年02月13日（土） 愛媛・松山 WstudioRED OPEN：16:45 / START：17:30\n2027年02月20日（土） 福岡・福岡 DRUM LOGOS OPEN：16:30 / START：17:30\n2027年02月21日（日） 佐賀・佐賀 GEILS OPEN：16:30 / START：17:00\n2027年02月23日（火・祝） 長崎・長崎 DRUM Be-7 OPEN：16:30 / START：17:00\n2027年02月27日（土） 熊本・熊本 B.9 V1 OPEN：16:30 / START：17:30\n2027年02月28日（日） 大分・大分 DRUM Be-0 OPEN：16:30 / START：17:00\n2027年03月06日（土） 宮崎・宮崎 LAZARUS OPEN：17:00 / START：17:30\n2027年03月07日（日） 鹿児島・鹿児島 CAPARVO HALL OPEN：16:30 / START：17:00\n2027年03月13日（土） 沖縄・桜坂 セントラル OPEN：17:00 / START：17:30\n2027年03月20日（土） 北海道・函館 club COCOA OPEN：17:00 / START：17:30\n2027年03月21日（日） 北海道・札幌 PENNY LANE 24 OPEN：16:30 / START：17:00\n2027年03月23日（火） 北海道・旭川 CASINO DRIVE OPEN：18:00 / START：18:30\n2027年03月25日（木） 北海道・帯広 MEGA STONE OPEN：18:00 / START：18:30\n2027年03月27日（土） 北海道・小樽 GOLDSTONE OPEN：17:00 / START：17:30\n2027年05月01日（土） 東京・日比谷野外大音楽堂 OPEN：16:30 / START：17:30"
  },
  {
    "id": "reona",
    "name": "ReoNa",
    "tourTitle": "ReoNa Concert Tour 2026 “De:TOUR -静脈-” ＆ ぴあアリーナMM ONE-MAN",
    "subtitle": "全国ツアー＆アリーナワンマン (全10公演)",
    "period": "2026年10月3日(土) 〜 2027年3月7日(日)",
    "color": "#a55eea",
    "icon": "🎙️",
    "badgeClass": "reona",
    "rawText": "2026年10月3日(土) 千葉・浦安市文化会館 大ホール OPEN 17:00 / START 18:00\n2026年10月4日(日) 千葉・浦安市文化会館 大ホール OPEN 16:00 / START 17:00\n2026年10月20日(火) 福岡・福岡国際会議場 OPEN 18:00 / START 19:00\n2026年10月24日(土) 兵庫・神戸国際会館 OPEN 17:00 / START 18:00\n2026年10月29日(木) 東京・LINE CUBE SHIBUYA OPEN 17:30 / START 18:30\n2026年11月23日(月・祝) 宮城・トークネットホール仙台（仙台市民会館）大ホール 17:00 / START 18:00\n2026年12月5日(土) 愛知・Niterra日本特殊陶業市民会館 フォレストホール 17:00 / START 18:00\n2026年12月10日(木) 北海道・札幌市教育文化会館 大ホール 18:00 / START 19:00\n2027年3月6日(土) 神奈川・ぴあアリーナMM OPEN 17:00 / START 18:00\n2027年3月7日(日) 神奈川・ぴあアリーナMM OPEN 16:00 / START 17:00"
  },
  {
    "id": "sakanaction",
    "name": "サカナクション",
    "tourTitle": "SAKANAQUARIUM 2026-2027 “透明”",
    "subtitle": "全国アリーナツアー (全31公演)",
    "period": "2026年9月8日(火) 〜 2027年5月9日(日)",
    "color": "#00d2d3",
    "icon": "🐟",
    "badgeClass": "sakanaction",
    "rawText": "2026.09.08 (Tue) 東京・日本武道館 OPEN 17:30 / START 18:30\n2026.09.09 (Wed) 東京・日本武道館 OPEN 17:30 / START 18:30\n2026.09.12 (Sat) 大阪・大阪城ホール OPEN 17:00 / START 18:00\n2026.09.13 (Sun) 大阪・大阪城ホール OPEN 16:00 / START 17:00\n2026.09.18 (Fri) 東京・日本武道館 OPEN 17:30 / START 18:30\n2026.09.19 (Sat) 東京・日本武道館 OPEN 17:00 / START 18:00\n2026.09.29 (Tue) 兵庫・GLION ARENA KOBE OPEN 18:00 / START 19:00\n2026.09.30 (Wed) 兵庫・GLION ARENA KOBE OPEN 18:00 / START 19:00\n2026.10.03 (Sat) 東京・日本武道館 OPEN 17:00 / START 18:00\n2026.10.04 (Sun) 東京・日本武道館 OPEN 16:00 / START 17:00\n2027.02.20 (Sat) 千葉・ららアリーナ 東京ベイ OPEN 17:00 / START 18:00\n2027.02.21 (Sun) 千葉・ららアリーナ 東京ベイ OPEN 16:00 / START 17:00\n2027.02.23 (Tue・祝) 千葉・ららアリーナ 東京ベイ OPEN 16:00 / START 17:00\n2027.02.27 (Sat) 千葉・ららアリーナ 東京ベイ OPEN 17:00 / START 18:00\n2027.02.28 (Sun) 千葉・ららアリーナ 東京ベイ OPEN 16:00 / START 17:00\n2027.03.06 (Sat) 北海道・北海道立総合体育センター 北海きたえーる OPEN 17:00 / START 18:00\n2027.03.07 (Sun) 北海道・北海道立総合体育センター 北海きたえーる OPEN 16:00 / START 17:00\n2027.03.17 (Wed) 兵庫・GLION ARENA KOBE OPEN 17:30 / START 18:30\n2027.03.18 (Thu) 兵庫・GLION ARENA KOBE OPEN 17:30 / START 18:30\n2027.03.27 (Sat) 愛知・ポートメッセなごや 第一展示館 OPEN 17:00 / START 18:00\n2027.03.28 (Sun) 愛知・ポートメッセなごや 第一展示館 OPEN 16:00 / START 17:00\n2027.04.03 (Sat) 香川・あなぶきアリーナ香川 OPEN 17:00 / START 18:00\n2027.04.04 (Sun) 香川・あなぶきアリーナ香川 OPEN 16:00 / START 17:00\n2027.04.17 (Sat) 宮城・ゼビオアリーナ仙台 OPEN 17:00 / START 18:00\n2027.04.18 (Sun) 宮城・ゼビオアリーナ仙台 OPEN 16:00 / START 17:00\n2027.04.24 (Sat) 福井・サンドーム福井 OPEN 17:00 / START 18:00\n2027.04.25 (Sun) 福井・サンドーム福井 OPEN 16:00 / START 17:00\n2027.05.04 (Tue・祝) 福岡・マリンメッセ福岡 A館 OPEN 17:00 / START 18:00\n2027.05.05 (Wed・祝) 福岡・マリンメッセ福岡 A館 OPEN 16:00 / START 17:00\n2027.05.08 (Sat) 広島・広島県立総合体育館 広島グリーンアリーナ OPEN 17:00 / START 18:00\n2027.05.09 (Sun) 広島・広島県立総合体育館 広島グリーンアリーナ OPEN 16:00 / START 17:00"
  },
  {
    "id": "tuki",
    "name": "tuki.",
    "tourTitle": "秋の修学旅行〜天体観測〜",
    "subtitle": "東名阪・仙台・福岡ツアー (全6公演)",
    "period": "2026年10月11日(日) 〜 2026年12月6日(日)",
    "color": "#fdcb6e",
    "icon": "🌙",
    "badgeClass": "tuki",
    "rawText": "■2026年10月11日（日） 東京・SGCホール有明 17:00 OPEN / 18:00 START\n■2026年10月18日（日） 愛知・Niterra日本特殊陶業市民会館 フォレストホール 16:30 OPEN / 17:30 START\n■2026年11月03日（火・祝） 宮城・仙台サンプラザホール 16:30 OPEN / 17:30 START\n■2026年11月08日（日） 福岡・福岡サンパレス 16:30 OPEN / 17:30 START\n■2026年11月22日（日） 大阪・グランキューブ大阪（大阪府立国際会議場）メインホール 16:30 OPEN / 17:30 START\n■2026年12月06日（日） 東京・LINE CUBE SHIBUYA 16:30 OPEN / 17:30 START"
  },
  {
    "id": "sid",
    "name": "SID",
    "tourTitle": "SID HALL TOUR 2026 〜Re:Quest〜",
    "subtitle": "2026年 全国ホールツアー (全7公演)",
    "period": "2026年10月17日(土) 〜 2026年11月29日(日)",
    "color": "#eb3b5a",
    "icon": "🌹",
    "badgeClass": "sid",
    "rawText": "2026年10月17日（土） 神奈川・厚木市文化会館 OPEN 16:00 / START 17:00\n2026年10月31日（土） 愛知・岡谷鋼機名古屋公会堂 OPEN 17:00 / START 18:00\n2026年11月14日（土） 大阪・オリックス劇場 OPEN 17:00 / START 18:00\n2026年11月21日（土） 福岡・久留米シティプラザ ザ・グランドホール OPEN 16:00 / START 17:00\n2026年11月23日（月・祝） 広島・広島文化学園HBGホール OPEN 16:00 / START 17:00\n2026年11月28日（土） 宮城・仙台サンプラザホール OPEN 16:00 / START 17:00\n2026年11月29日（日） 東京・LINE CUBE SHIBUYA OPEN 16:00 / START 17:00"
  },
  {
    "id": "lisa",
    "name": "LiSA",
    "tourTitle": "LiVE is Smile Always～LACE UP～",
    "subtitle": "全国ホール＆アリーナ (全19公演)",
    "period": "2026年10月18日(日) 〜 2027年1月31日(日)",
    "color": "#ff2a70",
    "icon": "⚡",
    "badgeClass": "lisa",
    "rawText": "【2026】\n10/18(日)…ＹＣＣ県民文化ホール(山梨県立県民文化ホール)(開場14:45/開演15:30)\n10/24(土)…大宮ソニックシティ 大ホール(開場17:00/開演18:00)\n10/25(日)…大宮ソニックシティ 大ホール(開場16:00/開演17:00)\n10/31(土)…長良川国際会議場(開場17:00/開演18:00)\n11/1(日)…松山市民会館 大ホール(開場17:00/開演18:00)\n11/7(土)…新潟県民会館(開場17:00/開演18:00)\n11/8(日)...富山県民会館(開場17:00/開演18:00)\n11/14(土)…広島文化学園HBGホール(開場17:00/開演18:00)\n11/15(日)...岡山芸術創造劇場 ハレノワ 大劇場(開場17:00/開演18:00)\n11/20(金)…トークネットホール仙台(仙台市民会館)(開場17:30/開演18:30)\n11/21(土)…あきた芸術劇場ミルハス(開場17:00/開演18:00)\n11/27(金)…福岡サンパレス(開場17:30/開演18:30)\n11/28(土)…福岡サンパレス(開場16:00/開演17:00)\n12/4(金)…札幌文化芸術劇場 hitaru(開場17:30/開演18:30)\n12/5(土)…札幌文化芸術劇場 hitaru(開場16:00/開演17:00)\n12/12(土)…カルッツかわさき(開場17:00/開演18:00)\n12/13(日)…カルッツかわさき(開場16:00/開演17:00)\n【2027】\n1/30(土)…ポートメッセなごや 第1展示館(開場16:00/開演17:30)\n1/31(日)…ポートメッセなごや 第1展示館(開場14:30/開演16:00)"
  },
  {
    "id": "vaundy",
    "name": "Vaundy",
    "tourTitle": "Vaundy JAPAN ARENA TOUR 2027-2028",
    "subtitle": "全国アリーナツアー (全30公演)",
    "period": "2027年8月14日(土) 〜 2028年2月13日(日)",
    "color": "#fa8231",
    "icon": "🧡",
    "badgeClass": "vaundy",
    "rawText": "2027年8月14日(土) 大阪・大阪城ホール OPEN 17:00 / START 18:30\n2027年8月15日(日) 大阪・大阪城ホール OPEN 15:30 / START 17:00\n2027年8月28日(土) 福岡・マリンメッセ福岡 A館 OPEN 17:00 / START 18:30\n2027年8月29日(日) 福岡・マリンメッセ福岡 A館 OPEN 15:30 / START 17:00\n2027年9月11日(土) 広島・広島グリーンアリーナ OPEN 17:00 / START 18:30\n2027年9月12日(日) 広島・広島グリーンアリーナ OPEN 15:30 / START 17:00\n2027年9月18日(土) 宮城・ゼビオアリーナ仙台 OPEN 17:00 / START 18:30\n2027年9月19日(日) 宮城・ゼビオアリーナ仙台 OPEN 15:30 / START 17:00\n2027年10月2日(土) 愛知・ポートメッセなごや 第1展示館 OPEN 17:00 / START 18:30\n2027年10月3日(日) 愛知・ポートメッセなごや 第1展示館 OPEN 15:30 / START 17:00\n2027年10月16日(土) 北海道・真駒内セキスイハイムアイスアリーナ OPEN 17:00 / START 18:30\n2027年10月17日(日) 北海道・真駒内セキスイハイムアイスアリーナ OPEN 15:30 / START 17:00\n2027年10月30日(土) 神奈川・K-Arena Yokohama OPEN 17:00 / START 18:30\n2027年10月31日(日) 神奈川・K-Arena Yokohama OPEN 15:30 / START 17:00\n2027年11月13日(土) 埼玉・さいたまスーパーアリーナ OPEN 17:00 / START 18:30\n2027年11月14日(日) 埼玉・さいたまスーパーアリーナ OPEN 15:30 / START 17:00\n2027年11月27日(土) 新潟・朱鷺メッセ・新潟コンベンションセンター OPEN 17:00 / START 18:30\n2027年11月28日(日) 新潟・朱鷺メッセ・新潟コンベンションセンター OPEN 15:30 / START 17:00\n2027年12月11日(土) 静岡・エコパアリーナ OPEN 17:00 / START 18:30\n2027年12月12日(日) 静岡・エコパアリーナ OPEN 15:30 / START 17:00\n2027年12月25日(土) 福井・サンドーム福井 OPEN 17:00 / START 18:30\n2027年12月26日(日) 福井・サンドーム福井 OPEN 15:30 / START 17:00\n2028年1月15日(土) 香川・あなぶきアリーナ香川 OPEN 17:00 / START 18:30\n2028年1月16日(日) 香川・あなぶきアリーナ香川 OPEN 15:30 / START 17:00\n2028年1月22日(土) 徳島・アスティとくしま OPEN 17:00 / START 18:30\n2028年1月23日(日) 徳島・アスティとくしま OPEN 15:30 / START 17:00\n2028年1月29日(土) 兵庫・神戸ワールド記念ホール OPEN 17:00 / START 18:30\n2028年1月30日(日) 兵庫・神戸ワールド記念ホール OPEN 15:30 / START 17:00\n2028年2月12日(土) 東京・有明アリーナ OPEN 17:00 / START 18:30\n2028年2月13日(日) 東京・有明アリーナ OPEN 15:30 / START 17:00"
  },
  {
    "id": "yonezu",
    "name": "米津玄師",
    "tourTitle": "米津玄師 2026 TOUR / GHOST",
    "subtitle": "全国アリーナツアー (全14公演)",
    "period": "2026年11月6日(金) 〜 2026年12月17日(木)",
    "color": "#10ac84",
    "icon": "🍋",
    "badgeClass": "yonezu",
    "rawText": "11/ 6 (金) 長野：長野ビッグハット OPEN 17:00 / START 18:30\n11/ 7 (土) 長野：長野ビッグハット OPEN 15:30 / START 17:00\n11/11 (水) 神奈川：K-Arena Yokohama OPEN 17:00 / START 18:30\n11/12 (木) 神奈川：K-Arena Yokohama OPEN 17:00 / START 18:30\n11/18 (水) 大阪：大阪城ホール OPEN 17:00 / START 18:30\n11/19 (木) 大阪：大阪城ホール OPEN 17:00 / START 18:30\n11/27 (金) 福岡：マリンメッセ福岡A館 OPEN 17:00 / START 18:30\n11/28 (土) 福岡：マリンメッセ福岡A館 OPEN 15:30 / START 17:00\n12/ 3 (木) 宮城：宮城 セキスイハイムスーパーアリーナ OPEN 17:00 / START 18:30\n12/ 4 (金) 宮城：宮城 セキスイハイムスーパーアリーナ OPEN 17:00 / START 18:30\n12/ 8 (火) 愛知：ポートメッセなごや 第1展示館 OPEN 17:00 / START 18:30\n12/ 9 (水) 愛知：ポートメッセなごや 第1展示館 OPEN 17:00 / START 18:30\n12/16 (水) 神奈川：K-Arena Yokohama OPEN 17:00 / START 18:30\n12/17 (木) 神奈川：K-Arena Yokohama OPEN 17:00 / START 18:30"
  },
  {
    "id": "milet",
    "name": "milet",
    "tourTitle": "milet live tour “Made of Glass”",
    "subtitle": "全国ホールツアー (全19公演)",
    "period": "2026年9月12日(土) 〜 2026年11月22日(日)",
    "color": "#3867d6",
    "icon": "💎",
    "badgeClass": "milet",
    "rawText": "①　9月12日(土)　千葉県・森のホール21 大ホール（開場16:00開演17:00）\n②　9月18日(金)　神奈川県・カルッツかわさき（開場17:30開演18:30）\n③　9月21日(月・祝)　埼玉県・大宮ソニックシティ 大ホール（開場16:00開演17:00）\n④　9月23日(水・祝)　香川県・サンポートホール高松 大ホール（開場16:00開演17:00）\n⑤　9月26日(土)　京都府・ロームシアター京都 メインホール（開場16:00開演17:00）\n⑥　9月27日(日)　静岡県・静岡市清水文化会館 マリナート 大ホール（開場15:00開演16:00）\n⑦　10月3日(土)　広島県・広島文化学園HBGホール（開場16:00開演17:00）\n⑧　10月4日(日)　岡山県・倉敷市民会館（開場16:00開演17:00）\n⑨　10月10日(土)　石川県・本多の森 北電ホール（開場16:00開演17:00）\n⑩　10月17日(土)　東京都・ガーデンシアター（開場17:00開演18:00）\n⑪　10月24日(土)　宮城県・仙台サンプラザホール（開場16:30開演17:30）\n⑫　10月25日(日)　福島県・とうほう みんなの文化センター(福島県文化センター)大ホール（開場16:00開演17:00）\n⑬　11月1日(日)　大阪府・フェスティバルホール（開場16:00開演17:00）\n⑭　11月2日(月)　大阪府・フェスティバルホール（開場18:00開演19:00）\n⑮　11月5日(木)　東京都・NHKホール（開場17:30開演18:30）\n⑯　11月8日(日)　愛知県・Niterra日本特殊陶業市民会館 フォレストホール（開場16:00開演17:00）\n⑰　11月13日(金)　北海道・札幌文化芸術劇場hitaru（開場18:00開演19:00）\n⑱　11月21日(土)　福岡県・福岡サンパレスホテル＆ホール（開場16:00開演17:00）\n⑲　11月22日(日)　大分県・iichikoグランシアタ（開場16:00開演17:00）"
  }
];

const REGION_MAP = {
  '北海道': '北海道',
  '青森': '東北', '岩手': '東北', '宮城': '東北', '秋田': '東北', '山形': '東北', '福島': '東北',
  '茨城': '関東', '栃木': '関東', '群馬': '関東', '埼玉': '関東', '千葉': '関東', '東京': '関東', '神奈川': '関東',
  '新潟': '中部', '富山': '中部', '石川': '中部', '福井': '中部', '山梨': '中部', '長野': '中部', '岐阜': '中部', '静岡': '中部', '愛知': '中部',
  '三重': '近畿', '滋賀': '近畿', '京都': '近畿', '大阪': '近畿', '兵庫': '近畿', '奈良': '近畿', '和歌山': '近畿',
  '鳥取': '中國', '島根': '中國', '岡山': '中國', '廣島': '中國', '広島': '中國', '山口': '中國',
  '徳島': '四國', '香川': '四國', '愛媛': '四國', '高知': '四國',
  '福岡': '九州・沖繩', '佐賀': '九州・沖繩', '長崎': '九州・沖繩', '熊本': '九州・沖繩', '大分': '九州・沖繩', '宮崎': '九州・沖繩', '鹿児島': '九州・沖繩', '沖繩': '九州・沖繩', '沖縄': '九州・沖繩'
};

const PREFECTURE_TO_REGION = REGION_MAP;

const PREF_COORDS = {
  '北海道': [43.0618, 141.3545],
  '青森': [40.8244, 140.7400],
  '岩手': [39.7036, 141.1527],
  '宮城': [38.2682, 140.8694],
  '秋田': [39.7186, 140.1024],
  '山形': [38.2404, 140.3633],
  '福島': [37.7608, 140.4748],
  '茨城': [36.3418, 140.4468],
  '栃木': [36.5657, 139.8836],
  '群馬': [36.3911, 139.0608],
  '埼玉': [35.8617, 139.6455],
  '千葉': [35.6074, 140.1065],
  '東京': [35.6895, 139.6917],
  '神奈川': [35.4437, 139.6380],
  '新潟': [37.9026, 139.0232],
  '富山': [36.6953, 137.2113],
  '石川': [36.5944, 136.6256],
  '福井': [36.0652, 136.2216],
  '山梨': [35.6639, 138.5683],
  '長野': [36.6513, 138.1810],
  '岐阜': [35.3912, 136.7223],
  '静岡': [34.9756, 138.3828],
  '愛知': [35.1802, 136.9066],
  '三重': [34.7303, 136.5086],
  '滋賀': [35.0045, 135.8686],
  '京都': [35.0116, 135.7681],
  '大阪': [34.6937, 135.5023],
  '兵庫': [34.6913, 135.1830],
  '奈良': [34.6851, 135.8327],
  '和歌山': [34.2260, 135.1675],
  '鳥取': [35.5036, 134.2377],
  '島根': [35.4723, 133.0505],
  '岡山': [34.6618, 133.9350],
  '広島': [34.3963, 132.4594],
  '山口': [34.1858, 131.4714],
  '徳島': [34.0658, 134.5594],
  '香川': [34.3401, 134.0433],
  '愛媛': [33.8416, 132.7657],
  '高知': [33.5597, 133.5311],
  '福岡': [33.6064, 130.4183],
  '佐賀': [33.2494, 130.2988],
  '長崎': [32.7448, 129.8737],
  '熊本': [32.7898, 130.7417],
  '大分': [33.2382, 131.6126],
  '宮崎': [31.9111, 131.4239],
  '鹿児島': [31.5602, 130.5581],
  '沖縄': [26.2124, 127.6809]
};

const VENUE_COORDS = {
  // Tokyo & Kanto
  'TOYOTA ARENA': [35.6264, 139.7828],
  '浦安市文化会館': [35.6535, 139.8978],
  '森のホール21': [35.7972, 139.9328],
  'カルッツかわさき': [35.5312, 139.7036],
  '大宮ソニックシティ': [35.9056, 139.6200],
  'ガーデンシアター': [35.6375, 139.7925],
  '有明アリーナ': [35.6425, 139.7942],
  'SGCホール有明': [35.6375, 139.7925],
  'NHKホール': [35.6657, 139.6974],
  '日本武道館': [35.6933, 139.7497],
  'LINE CUBE': [35.6634, 139.6998],
  'LIQUIDROOM': [35.6506, 139.7118],
  '日比谷野外': [35.6728, 139.7562],
  'ぴあアリーナMM': [35.4590, 139.6275],
  'K-Arena': [35.4633, 139.6288],
  '厚木市文化会館': [35.4428, 139.3564],
  'さいたまスーパーアリーナ': [35.8948, 139.6309],
  'ららアリーナ': [35.6826, 139.9886],
  '柏 PALOOZA': [35.8617, 139.9723],

  // Chubu & Tokai
  '愛知県芸術劇場': [35.1706, 136.9119],
  'Niterra': [35.1458, 136.9004],
  '岡谷鋼機名古屋公会堂': [35.1561, 136.9231],
  'ダイアモンドホール': [35.1692, 136.9189],
  'ポートメッセなごや': [35.0489, 136.8486],
  '静岡市清水文化会館': [35.0230, 138.4890],
  'エコパアリーナ': [34.7430, 137.9710],
  '長良川国際会議場': [35.4428, 136.7725],
  'ＹＣＣ県民文化ホール': [35.6580, 138.5620],
  '長野ビッグハット': [36.6310, 138.1960],
  '本多の森': [36.5570, 136.6620],
  '富山県民会館': [36.6960, 137.2130],
  'サンドーム福井': [35.9080, 136.1820],

  // Kansai
  '大阪城ホール': [34.6897, 135.5303],
  'フェスティバルホール': [34.6933, 135.4969],
  'オリックス劇場': [34.6800, 135.4975],
  'グランキューブ大阪': [34.6908, 135.4883],
  '心斎橋 BIGCAT': [34.6720, 135.4990],
  'ロームシアター京都': [35.0142, 135.7825],
  'GLION ARENA KOBE': [34.6850, 135.1980],
  '神戸国際会館': [34.6910, 135.1950],
  '神戸ワールド記念ホール': [34.6640, 135.2090],

  // Chugoku & Shikoku
  '広島文化学園HBGホール': [34.3860, 132.4510],
  '広島グリーンアリーナ': [34.3980, 132.4540],
  '倉敷市民会館': [34.5960, 133.7740],
  'サンポートホール高松': [34.3520, 134.0480],
  'あなぶきアリーナ香川': [34.3530, 134.0490],
  '松山市民会館': [33.8400, 132.7620],
  'アスティとくしま': [34.0530, 134.5710],

  // Tohoku & Hokkaido
  '仙台サンプラザホール': [38.2570, 140.8930],
  'ゼビオアリーナ仙台': [38.2280, 140.8870],
  'セキスイハイムスーパーアリーナ': [38.3370, 140.9570],
  'トークネットホール仙台': [38.2610, 140.8640],
  'とうほう みんなの文化センター': [37.7710, 140.4790],
  '札幌文化芸術劇場hitaru': [43.0620, 141.3550],
  '北海きたえーる': [43.0370, 141.3850],
  '真駒内セキスイハイム': [42.9960, 141.3510],

  // Kyushu
  '福岡サンパレス': [33.6040, 130.4040],
  'マリンメッセ福岡': [33.6050, 130.4020],
  '久留米シティプラザ': [33.3180, 130.5130],
  'iichikoグランシアタ': [33.2382, 131.6050]
};

function getVenueCoord(item) {
  for (const [k, v] of Object.entries(VENUE_COORDS)) {
    if (item.venue && item.venue.includes(k)) return v;
  }
  return PREF_COORDS[item.prefecture] || [35.6895, 139.6917];
}

function haversineDist(c1, c2) {
  const R = 6371;
  const dLat = (c2[0] - c1[0]) * Math.PI / 180;
  const dLon = (c2[1] - c1[1]) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(c1[0] * Math.PI / 180) * Math.cos(c2[0] * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

function estimateTransit(showA, showB) {
  const c1 = getVenueCoord(showA);
  const c2 = getVenueCoord(showB);
  const dist = Math.round(haversineDist(c1, c2));
  const p1 = showA.prefecture;
  const p2 = showB.prefecture;

  if (p1 === p2 || dist < 30) {
    return {
      type: 'local',
      icon: '🚃',
      pillClass: 'local',
      timeText: '約 25〜45 分',
      desc: '同都會區 / 近郊電車或計程車',
      dist
    };
  }

  // Tokyo <-> Chiba / Kanagawa / Saitama
  const kanto = ['東京', '神奈川', '千葉', '埼玉'];
  if (kanto.includes(p1) && kanto.includes(p2)) {
    return {
      type: 'kanto_metro',
      icon: '🚆',
      pillClass: 'local',
      timeText: '約 35〜60 分',
      desc: 'JR 首都圈直通電車 / 地下鐵快速',
      dist
    };
  }

  // Kansai metro
  const kansai = ['大阪', '京都', '兵庫', '奈良', '滋賀', '和歌山'];
  if (kansai.includes(p1) && kansai.includes(p2)) {
    if ((p1 === '大阪' && p2 === '京都') || (p1 === '京都' && p2 === '大阪')) {
      return { type: 'jr_special_rapid', icon: '🚅', pillClass: 'shinkansen', timeText: '約 30 分 (新幹線13分)', desc: 'JR 新快速 / 東海道新幹線', dist };
    }
    if ((p1 === '大阪' && p2 === '兵庫') || (p1 === '兵庫' && p2 === '大阪')) {
      return { type: 'jr_special_rapid', icon: '🚆', pillClass: 'local', timeText: '約 25〜35 分', desc: 'JR 神戶線新快速 / 阪神特急', dist };
    }
    return { type: 'kansai_metro', icon: '🚆', pillClass: 'local', timeText: '約 45〜75 分', desc: 'JR 關西網絡 / 私鐵特急', dist };
  }

  // Kanto to Chugoku (Okayama / Hiroshima) via Shinkansen / Flight
  if ((kanto.includes(p1) && (p2 === '岡山' || p2 === '広島')) || (kanto.includes(p2) && (p1 === '岡山' || p1 === '広島'))) {
    const target = (p1 === '岡山' || p2 === '岡山') ? '岡山' : '廣島';
    const sTime = target === '岡山' ? '3h 15m' : '3h 50m';
    const fTime = target === '岡山' ? '1h 15m' : '1h 20m';
    return {
      type: 'shinkansen',
      icon: '🚅',
      pillClass: 'shinkansen',
      timeText: `新幹線 ${sTime} / ✈️ 飛機 ${fTime}`,
      desc: `東海道・山陽新幹線 Nozomi 或是羽田直飛${target}`,
      dist
    };
  }

  // Tokaido & Sanyo Shinkansen corridor
  const shinkansenOrder = ['東京', '神奈川', '静岡', '愛知', '京都', '大阪', '兵庫', '岡山', '広島', '山口', '福岡'];
  const i1 = shinkansenOrder.indexOf(p1);
  const i2 = shinkansenOrder.indexOf(p2);
  if (i1 !== -1 && i2 !== -1) {
    const pair = [p1, p2].sort().join('-');
    const table = {
      '愛知-東京': '約 1h 35m (新幹線 Nozomi)',
      '愛知-神奈川': '約 1h 20m (新幹線 Nozomi)',
      '大阪-愛知': '約 50 分 (新幹線 Nozomi)',
      '京都-愛知': '約 35 分 (新幹線 Nozomi)',
      '大阪-東京': '約 2h 30m (新幹線 Nozomi)',
      '大阪-神奈川': '約 2h 10m (新幹線 Nozomi)',
      '京都-東京': '約 2h 15m (新幹線 Nozomi)',
      '東京-岡山': '約 3h 15m (新幹線 Nozomi) / ✈️ 1h 15m',
      '東京-広島': '約 3h 50m (新幹線 Nozomi) / ✈️ 1h 20m',
      '東京-福岡': '約 4h 50m (新幹線) / ✈️ 1h 55m',
      '大阪-岡山': '約 45 分 (山陽新幹線 Nozomi/Sakura)',
      '大阪-広島': '約 1h 20m (山陽新幹線 Nozomi/Sakura)',
      '大阪-福岡': '約 2h 30m (山陽新幹線 Nozomi/Mizuho)',
      '岡山-広島': '約 35 分 (山陽新幹線 Nozomi)',
      '広島-福岡': '約 1h 05m (山陽新幹線 Nozomi)',
      '岡山-福岡': '約 1h 40m (山陽新幹線 Nozomi)',
      '愛知-広島': '約 2h 10m (新幹線 Nozomi)',
      '愛知-福岡': '約 3h 15m (新幹線 Nozomi)',
      '静岡-東京': '約 1h 00m (新幹線 Hikari)',
      '愛知-静岡': '約 50 分 (新幹線 Hikari)'
    };
    if (table[pair]) {
      return {
        type: 'shinkansen',
        icon: '🚅',
        pillClass: 'shinkansen',
        timeText: table[pair],
        desc: '東海道・山陽新幹線直達',
        dist
      };
    }
  }

  // Tohoku Shinkansen
  const tohoku = ['東京', '埼玉', '栃木', '福島', '宮城', '岩手', '青森'];
  if (tohoku.includes(p1) && tohoku.includes(p2)) {
    const pair = [p1, p2].sort().join('-');
    const table = {
      '東京-宮城': '約 1h 30m (東北新幹線 Hayabusa)',
      '埼玉-宮城': '約 1h 10m (東北新幹線 Hayabusa)',
      '東京-福島': '約 1h 15m (東北新幹線 Yamabiko)',
      '宮城-福島': '約 25 分 (東北新幹線 Yamabiko)',
      '宮城-岩手': '約 40 分 (東北新幹線 Hayabusa)',
      '東京-岩手': '約 2h 10m (東北新幹線 Hayabusa)',
      '東京-青森': '約 3h 10m (東北新幹線 Hayabusa)'
    };
    if (table[pair]) {
      return { type: 'shinkansen', icon: '🚅', pillClass: 'shinkansen', timeText: table[pair], desc: '東北新幹線', dist };
    }
  }

  // Hokuriku Shinkansen
  const hokuriku = ['東京', '埼玉', '群馬', '長野', '富山', '石川', '福井'];
  if (hokuriku.includes(p1) && hokuriku.includes(p2)) {
    const pair = [p1, p2].sort().join('-');
    const table = {
      '東京-長野': '約 1h 20m (北陸新幹線 Kagayaki)',
      '東京-富山': '約 2h 08m (北陸新幹線 Kagayaki)',
      '東京-石川': '約 2h 30m (北陸新幹線 Kagayaki)',
      '東京-福井': '約 2h 50m (北陸新幹線 Kagayaki)',
      '富山-石川': '約 20 分 (北陸新幹線)',
      '石川-福井': '約 25 分 (北陸新幹線)'
    };
    if (table[pair]) {
      return { type: 'shinkansen', icon: '🚅', pillClass: 'shinkansen', timeText: table[pair], desc: '北陸新幹線', dist };
    }
  }

  // Chuo Line Express (Azusa) to Yamanashi/Nagano
  if ((kanto.includes(p1) && p2 === '山梨') || (kanto.includes(p2) && p1 === '山梨')) {
    return { type: 'express', icon: '🚆', pillClass: 'local', timeText: '約 1h 30m (JR 特急 Azusa/Kaiji)', desc: 'JR 中央線特急直達', dist };
  }

  // Dist-based fallback
  if (dist > 650) {
    return {
      type: 'flight',
      icon: '✈️',
      pillClass: 'flight',
      timeText: `約 1h 30m~2h (國內線航班) / 距離 ${dist}km`,
      desc: '建議搭乘羽田/各主要機場國內線班機',
      dist
    };
  } else if (dist > 300) {
    const hrs = Math.round(dist / 200 * 10) / 10;
    return {
      type: 'shinkansen_or_express',
      icon: '🚅',
      pillClass: 'shinkansen',
      timeText: `約 ${hrs} 小時 (新幹線/特急)`,
      desc: `直線距離約 ${dist} km`,
      dist
    };
  } else {
    const hrs = Math.round(dist / 75 * 10) / 10;
    return {
      type: 'express_or_car',
      icon: '🚆',
      pillClass: 'local',
      timeText: `約 ${hrs} 小時 (JR特急/快速)`,
      desc: `直線距離約 ${dist} km`,
      dist
    };
  }
}

let leafletMap = null;
let mapPrefClusterLayer = null;
let mapMarkersLayer = null;
let mapRoutesLayer = null;
let mapActiveMeasureLayer = null;
let mapShowRouteLines = false;
let mapConsecutiveOnly = true;
let mapPrefClusterEnabled = true;
let selectedOriginShow = null;
let selectedDestShow = null;

window.zoomIntoPrefecture = function(pref) {
  const coords = PREF_COORDS[pref] || [35.6895, 139.6917];
  if (leafletMap) {
    leafletMap.closePopup();
    leafletMap.flyTo(coords, 9.5, { duration: 0.8 });
  }
};

let mapTimelineMinDate = null;
let mapTimelineMaxDate = null;
let mapTimelineStartDate = null;
let mapTimelineEndDate = null;
let mapTimelinePlaying = false;
let mapTimelinePlayTimer = null;

function initMapTimeline() {
  if (allShowsList.length === 0) return;

  const dates = allShowsList.map(s => s.dateIso).filter(Boolean).sort();
  if (dates.length === 0) return;

  mapTimelineMinDate = dates[0];
  mapTimelineMaxDate = dates[dates.length - 1];

  const minTime = new Date(mapTimelineMinDate).getTime();
  const maxTime = new Date(mapTimelineMaxDate).getTime();
  const totalDays = Math.max(1, Math.round((maxTime - minTime) / (1000 * 60 * 60 * 24)));

  const startSlider = document.getElementById('timelineStartSlider');
  const endSlider = document.getElementById('timelineEndSlider');
  const ticksContainer = document.getElementById('timelineTicks');

  if (startSlider && endSlider) {
    startSlider.min = 0;
    startSlider.max = totalDays;
    startSlider.value = 0;

    endSlider.min = 0;
    endSlider.max = totalDays;
    endSlider.value = totalDays;
  }

  // Generate milestone ticks
  if (ticksContainer) {
    ticksContainer.innerHTML = '';
    const numTicks = 6;
    for (let i = 0; i < numTicks; i++) {
      const dayOffset = Math.round((totalDays / (numTicks - 1)) * i);
      const d = new Date(minTime + dayOffset * 86400000);
      const label = `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}`;
      const span = document.createElement('span');
      span.textContent = label;
      ticksContainer.appendChild(span);
    }
  }

  updateTimelineFromSliders(true);
}

function updateTimelineFromSliders(skipMapRedraw = false) {
  const startSlider = document.getElementById('timelineStartSlider');
  const endSlider = document.getElementById('timelineEndSlider');
  const highlight = document.getElementById('timelineHighlight');
  const rangeBadge = document.getElementById('timelineRangeBadge');
  const countBadge = document.getElementById('timelineCountBadge');

  if (!startSlider || !endSlider || !mapTimelineMinDate) return;

  let sVal = parseInt(startSlider.value, 10);
  let eVal = parseInt(endSlider.value, 10);

  if (sVal > eVal) {
    if (document.activeElement === startSlider) {
      endSlider.value = sVal;
      eVal = sVal;
    } else {
      startSlider.value = eVal;
      sVal = eVal;
    }
  }

  const minTime = new Date(mapTimelineMinDate).getTime();
  const maxDays = parseInt(startSlider.max, 10) || 1;

  const sDateObj = new Date(minTime + sVal * 86400000);
  const eDateObj = new Date(minTime + eVal * 86400000);

  const formatIsoLocalDate = (d) => {
    const yr = d.getFullYear();
    const mo = String(d.getMonth() + 1).padStart(2, '0');
    const da = String(d.getDate()).padStart(2, '0');
    return `${yr}-${mo}-${da}`;
  };

  mapTimelineStartDate = formatIsoLocalDate(sDateObj);
  mapTimelineEndDate = formatIsoLocalDate(eDateObj);

  if (highlight) {
    const leftPct = (sVal / maxDays) * 100;
    const widthPct = ((eVal - sVal) / maxDays) * 100;
    highlight.style.left = `${leftPct}%`;
    highlight.style.width = `${widthPct}%`;
  }

  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
  const sDay = weekDays[sDateObj.getDay()];
  const eDay = weekDays[eDateObj.getDay()];

  if (rangeBadge) {
    rangeBadge.textContent = `${mapTimelineStartDate.replace(/-/g, '/')} (${sDay}) 〜 ${mapTimelineEndDate.replace(/-/g, '/')} (${eDay})`;
  }

  const currentFiltered = getFilteredAndSortedShows();
  const timelineShows = currentFiltered.filter(s => s.dateIso >= mapTimelineStartDate && s.dateIso <= mapTimelineEndDate);
  if (countBadge) {
    countBadge.textContent = `共 ${timelineShows.length} 場`;
  }

  if (!skipMapRedraw && currentView === 'map') {
    renderMapView(currentFiltered);
  }
}

function setTimelinePreset(presetKey) {
  const startSlider = document.getElementById('timelineStartSlider');
  const endSlider = document.getElementById('timelineEndSlider');
  if (!startSlider || !endSlider || !mapTimelineMinDate) return;

  const minTime = new Date(mapTimelineMinDate).getTime();
  const maxDays = parseInt(startSlider.max, 10) || 1;

  document.querySelectorAll('.btn-timeline-preset').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.preset === presetKey);
  });

  if (presetKey === 'all') {
    startSlider.value = 0;
    endSlider.value = maxDays;
  } else if (presetKey === '2026') {
    const sOffset = Math.max(0, Math.round((new Date('2026-01-01').getTime() - minTime) / 86400000));
    const eOffset = Math.min(maxDays, Math.round((new Date('2026-12-31').getTime() - minTime) / 86400000));
    startSlider.value = sOffset;
    endSlider.value = eOffset;
  } else if (presetKey === '2027') {
    const sOffset = Math.max(0, Math.round((new Date('2027-01-01').getTime() - minTime) / 86400000));
    const eOffset = Math.min(maxDays, Math.round((new Date('2027-12-31').getTime() - minTime) / 86400000));
    startSlider.value = sOffset;
    endSlider.value = eOffset;
  } else if (presetKey === '2028') {
    const sOffset = Math.max(0, Math.round((new Date('2028-01-01').getTime() - minTime) / 86400000));
    const eOffset = maxDays;
    startSlider.value = sOffset;
    endSlider.value = eOffset;
  }

  updateTimelineFromSliders();
}

function togglePlayTourTimeline() {
  const playBtn = document.getElementById('timelinePlayBtn');
  const playIcon = document.getElementById('playBtnIcon');
  const startSlider = document.getElementById('timelineStartSlider');
  const endSlider = document.getElementById('timelineEndSlider');

  if (!startSlider || !endSlider) return;

  if (mapTimelinePlaying) {
    clearInterval(mapTimelinePlayTimer);
    mapTimelinePlaying = false;
    if (playBtn) playBtn.classList.remove('playing');
    if (playIcon) playIcon.textContent = '▶';
    return;
  }

  mapTimelinePlaying = true;
  if (playBtn) playBtn.classList.add('playing');
  if (playIcon) playIcon.textContent = '⏸';

  const maxDays = parseInt(startSlider.max, 10) || 1;
  const windowDays = 45;

  let currentStart = parseInt(startSlider.value, 10);
  if (currentStart >= maxDays - 15) {
    currentStart = 0;
  }

  mapTimelinePlayTimer = setInterval(() => {
    currentStart += 10;
    if (currentStart > maxDays) {
      clearInterval(mapTimelinePlayTimer);
      mapTimelinePlaying = false;
      if (playBtn) playBtn.classList.remove('playing');
      if (playIcon) playIcon.textContent = '▶';
      return;
    }
    startSlider.value = currentStart;
    endSlider.value = Math.min(maxDays, currentStart + windowDays);
    updateTimelineFromSliders();
  }, 400);
}

function clearActiveRoute() {
  selectedOriginShow = null;
  selectedDestShow = null;
  if (mapActiveMeasureLayer) mapActiveMeasureLayer.clearLayers();

  document.querySelectorAll('.custom-map-pin').forEach(el => {
    el.classList.remove('origin-selected', 'dest-selected');
  });

  const banner = document.getElementById('mapFloatingIndicator');
  if (banner) banner.style.display = 'none';

  const clearBtn = document.getElementById('clearMeasureBtn');
  if (clearBtn) clearBtn.style.display = 'none';
}

function connectTwoVenues(s1, s2, shouldZoom = true) {
  if (!s1 || !s2 || !leafletMap || !mapActiveMeasureLayer) return;

  clearActiveRoute();
  selectedOriginShow = s1;
  selectedDestShow = s2;

  const c1 = getVenueCoord(s1);
  const c2 = getVenueCoord(s2);
  const transit = estimateTransit(s1, s2);

  // Highlight pins
  const pin1 = document.getElementById(`pin_${s1.globalId || s1.id}`);
  const pin2 = document.getElementById(`pin_${s2.globalId || s2.id}`);
  if (pin1) pin1.classList.add('origin-selected');
  if (pin2) pin2.classList.add('dest-selected');

  // Draw glowing animated polyline
  const color = s1.artistId === s2.artistId ? (s1.artistColor || '#388bfd') : '#f59e0b';
  
  const polylineGlow = L.polyline([c1, c2], {
    color: '#ffffff',
    weight: 9,
    opacity: 0.4
  });

  const polyline = L.polyline([c1, c2], {
    color: color,
    weight: 5,
    opacity: 0.95,
    dashArray: '8, 6'
  });

  const tooltipContent = `
    <div style="font-size:0.86rem; font-weight:700; line-height:1.4;">
      <div style="color:#c9d1d9;">${s1.prefecture}・${s1.venue} ➔ ${s2.prefecture}・${s2.venue}</div>
      <div style="color:#58a6ff; margin-top:2px; font-size:0.92rem;">${transit.icon} ${transit.timeText}</div>
      <div style="color:#8b949e; font-size:0.75rem; font-weight:500;">${transit.desc} (距離約 ${transit.dist} km)</div>
    </div>
  `;

  polyline.bindTooltip(tooltipContent, {
    permanent: true,
    direction: 'center',
    className: 'route-tooltip-label'
  });

  mapActiveMeasureLayer.addLayer(polylineGlow);
  mapActiveMeasureLayer.addLayer(polyline);

  // Update floating banner
  const banner = document.getElementById('mapFloatingIndicator');
  if (banner) {
    banner.innerHTML = `
      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
        <span>📍 <b>【${s1.artistName}】${s1.prefecture}・${s1.venue}</b></span>
        <span style="color:#58a6ff;">➔</span>
        <span>📍 <b>【${s2.artistName}】${s2.prefecture}・${s2.venue}</b></span>
        <span class="route-transit-pill ${transit.pillClass}" style="margin-left:4px;">${transit.icon} ${transit.timeText} (${transit.dist}km)</span>
      </div>
      <button class="btn-clear-route" id="bannerClearBtn">✕ 清除連線</button>
    `;
    banner.style.display = 'flex';
    document.getElementById('bannerClearBtn')?.addEventListener('click', clearActiveRoute);
  }

  const clearBtn = document.getElementById('clearMeasureBtn');
  if (clearBtn) clearBtn.style.display = 'inline-block';

  if (shouldZoom) {
    const routeBounds = L.latLngBounds([c1, c2]);
    leafletMap.fitBounds(routeBounds, { padding: [80, 80], maxZoom: 11 });
  }
}

/**
 * Initialize and render Leaflet Map View
 */
function renderMapView(items) {
  const mapCanvas = document.getElementById('japanLeafletMap');
  const routeListEl = document.getElementById('routeLegsList');
  const subtitleEl = document.getElementById('mapSidebarSubtitle');
  if (!mapCanvas) return;

  if (typeof L === 'undefined') {
    mapCanvas.innerHTML = '<div style="display:flex; align-items:center; justify-content:center; height:100%; color:var(--text-muted); font-size:0.95rem;">⏳ 正在載入 Leaflet 地圖圖資模組...</div>';
    setTimeout(() => {
      if (typeof L !== 'undefined') renderMapView(items);
    }, 300);
    return;
  }

  // Initialize map instance once
  if (!leafletMap) {
    leafletMap = L.map('japanLeafletMap', {
      center: [36.5, 138.0],
      zoom: 6,
      zoomControl: true
    });

    // Clean High-Resolution OpenStreetMap Tiles (Zero Watermark, 100% Free)
    const baseTileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19
    });
    baseTileLayer.addTo(leafletMap);

    mapPrefClusterLayer = L.layerGroup().addTo(leafletMap);
    mapMarkersLayer = L.layerGroup().addTo(leafletMap);
    mapRoutesLayer = L.layerGroup().addTo(leafletMap);
    mapActiveMeasureLayer = L.layerGroup().addTo(leafletMap);

    // Zoom listener to switch between 47 Prefecture Clusters and Detailed Venue Pins
    leafletMap.on('zoomend', updateMapClusterVisibility);
  }

  // Invalidate size immediately so tiles render
  leafletMap.invalidateSize(true);

  // Clear existing layers
  if (mapPrefClusterLayer) mapPrefClusterLayer.clearLayers();
  mapMarkersLayer.clearLayers();
  mapRoutesLayer.clearLayers();
  if (mapActiveMeasureLayer) mapActiveMeasureLayer.clearLayers();

  // Filter shows by interactive Map Timeline range
  const timelineShows = items.filter(s => {
    if (!mapTimelineStartDate || !mapTimelineEndDate) return true;
    return s.dateIso >= mapTimelineStartDate && s.dateIso <= mapTimelineEndDate;
  });

  const countBadge = document.getElementById('timelineCountBadge');
  if (countBadge) {
    countBadge.textContent = `共 ${timelineShows.length} 場`;
  }

  if (timelineShows.length === 0) {
    if (routeListEl) routeListEl.innerHTML = '<div style="color:var(--text-muted); padding:20px; text-align:center;">此時間區間內無符合條件之場館資料</div>';
    return;
  }

  const bounds = L.latLngBounds();
  const sortedShows = [...timelineShows].sort((a, b) => a.dateIso.localeCompare(b.dateIso));
  const markersMap = new Map();

  // 1. Group Shows by 47 Prefectures & Build Cluster Badges
  const prefGroupMap = new Map();
  sortedShows.forEach(show => {
    const pref = show.prefecture || '東京';
    if (!prefGroupMap.has(pref)) {
      prefGroupMap.set(pref, {
        pref,
        shows: [],
        artists: new Map()
      });
    }
    const group = prefGroupMap.get(pref);
    group.shows.push(show);
    const aId = show.artistId || show.artistName;
    if (!group.artists.has(aId)) {
      group.artists.set(aId, { name: show.artistName, color: show.artistColor || '#388bfd', count: 0, badgeClass: show.badgeClass });
    }
    group.artists.get(aId).count++;
  });

  prefGroupMap.forEach((group, pref) => {
    const count = group.shows.length;
    const coords = PREF_COORDS[pref] || [35.6895, 139.6917];
    bounds.extend(coords);

    let tierClass = 'tier-low';
    if (count >= 25) tierClass = 'tier-hot';
    else if (count >= 10) tierClass = 'tier-high';
    else if (count >= 4) tierClass = 'tier-mid';

    const clusterIcon = L.divIcon({
      className: 'pref-cluster-marker-container',
      html: `
        <div class="pref-cluster-badge ${tierClass}" title="【${pref}】共 ${count} 場 LIVE（點擊查看詳情或放大）">
          <span class="pref-cluster-name">${pref}</span>
          <span class="pref-cluster-count">${count}</span>
        </div>
      `,
      iconSize: [64, 28],
      iconAnchor: [32, 14],
      popupAnchor: [0, -16]
    });

    const artistTagsHtml = Array.from(group.artists.values()).map(a => 
      `<span class="pref-artist-tag" style="border-color:${a.color}; color:${a.color};">${a.name} (${a.count})</span>`
    ).join('');

    const showItemsHtml = group.shows.slice(0, 8).map(s => `
      <div class="pref-popup-show-item">
        <span class="badge-artist ${s.badgeClass}" style="font-size:0.7rem; padding:1px 5px; flex-shrink:0;">${s.artistName}</span>
        <span style="font-family:var(--font-mono); font-size:0.72rem; color:#c9d1d9; flex-shrink:0;">${s.dateFormatted}</span>
        <span style="font-size:0.75rem; color:#8b949e; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${s.venue}">${s.venue}</span>
      </div>
    `).join('');

    const moreNoticeHtml = group.shows.length > 8 ? 
      `<div style="font-size:0.72rem; color:#8b949e; text-align:center; padding:3px 0;">...還有其他 ${group.shows.length - 8} 場演出</div>` : '';

    const clusterPopupHtml = `
      <div class="map-popup-card pref-cluster-popup" style="min-width:240px; max-width:280px;">
        <div class="map-popup-header" style="border-bottom:1px solid #30363d; padding-bottom:6px; margin-bottom:8px;">
          <span style="font-weight:800; font-size:0.92rem; color:#fff;">📍【${pref}】巡迴總覽</span>
          <span class="pref-cluster-badge ${tierClass}" style="font-size:0.72rem; padding:2px 6px;">共 ${count} 場</span>
        </div>
        <div style="margin-bottom:8px;">${artistTagsHtml}</div>
        <div style="max-height:140px; overflow-y:auto; display:flex; flex-direction:column; gap:4px; margin-bottom:10px;">
          ${showItemsHtml}
          ${moreNoticeHtml}
        </div>
        <button type="button" class="btn btn-primary btn-sm" style="width:100%; justify-content:center; padding:6px 10px;" onclick="zoomIntoPrefecture('${pref}')">
          🔍 放大展開【${pref}】各會場 Pin 針
        </button>
      </div>
    `;

    const clusterMarker = L.marker(coords, { icon: clusterIcon }).bindPopup(clusterPopupHtml);
    if (mapPrefClusterLayer) mapPrefClusterLayer.addLayer(clusterMarker);
  });

  // 2. Plot Venue Markers
  sortedShows.forEach((show) => {
    const coords = getVenueCoord(show);
    bounds.extend(coords);

    // Custom colored circle icon with artist emoji
    const customIcon = L.divIcon({
      className: 'custom-map-pin-container',
      html: `<div class="custom-map-pin" style="background:${show.artistColor || '#ff4757'};" id="pin_${show.globalId || show.id}" title="${show.artistName} - ${show.prefecture}・${show.venue}">${show.artistName ? show.artistName.charAt(0) : '🎵'}</div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -18]
    });

    const popupHtml = `
      <div class="map-popup-card">
        <div class="map-popup-header">
          <span class="badge-artist ${show.badgeClass}">${show.artistName}</span>
          <span class="map-popup-date">${show.dateFormatted} (${show.dayOfWeek})</span>
        </div>
        <div class="map-popup-venue">${show.prefecture}・${show.venue}</div>
        <div class="map-popup-meta">
          <span>進場 OPEN ${show.openTime}</span>
          <span>開演 START ${show.startTime}</span>
        </div>
        <div class="map-popup-links">
          <a href="${generateGoogleCalendarUrl(show)}" target="_blank" rel="noopener noreferrer" class="btn-cal">加入日曆</a>
          <a href="${generateMapUrl(show)}" target="_blank" rel="noopener noreferrer" class="btn-map">Google 地圖</a>
        </div>
      </div>
    `;

    const marker = L.marker(coords, { icon: customIcon }).bindPopup(popupHtml);

    // Handle pin click for interactive point-to-point connection
    marker.on('click', () => {
      if (!selectedOriginShow) {
        selectedOriginShow = show;
        const pin = document.getElementById(`pin_${show.globalId || show.id}`);
        if (pin) pin.classList.add('origin-selected');

        const banner = document.getElementById('mapFloatingIndicator');
        if (banner) {
          banner.innerHTML = `
            <span>📍 <b>已選取起點</b>：【${show.artistName}】${show.prefecture}・${show.venue}</span>
            <span style="color:#58a6ff;">➔ 請點選地圖上的另一個場館進行連線與計算耗時</span>
            <button class="btn-clear-route" id="bannerClearBtn">✕ 取消</button>
          `;
          banner.style.display = 'flex';
          document.getElementById('bannerClearBtn')?.addEventListener('click', clearActiveRoute);
        }
      } else if (!selectedDestShow) {
        if ((selectedOriginShow.globalId || selectedOriginShow.id) === (show.globalId || show.id)) {
          clearActiveRoute();
        } else {
          connectTwoVenues(selectedOriginShow, show);
        }
      } else {
        clearActiveRoute();
        selectedOriginShow = show;
        const pin = document.getElementById(`pin_${show.globalId || show.id}`);
        if (pin) pin.classList.add('origin-selected');
        const banner = document.getElementById('mapFloatingIndicator');
        if (banner) {
          banner.innerHTML = `
            <span>📍 <b>已選取起點</b>：【${show.artistName}】${show.prefecture}・${show.venue}</span>
            <span style="color:#58a6ff;">➔ 請點選地圖上的另一個場館進行連線與計算耗時</span>
            <button class="btn-clear-route" id="bannerClearBtn">✕ 取消</button>
          `;
          banner.style.display = 'flex';
          document.getElementById('bannerClearBtn')?.addEventListener('click', clearActiveRoute);
        }
      }
    });

    mapMarkersLayer.addLayer(marker);
    markersMap.set(show.globalId || show.id, { marker, coords, show });
  });

  // 2. Draw Sequential Route Polylines (Only if user checked "顯示全巡迴預設連線")
  if (mapShowRouteLines && sortedShows.length > 1) {
    for (let i = 0; i < sortedShows.length - 1; i++) {
      const s1 = sortedShows[i];
      const s2 = sortedShows[i + 1];

      if (mapConsecutiveOnly) {
        const d1 = new Date(s1.dateIso);
        const d2 = new Date(s2.dateIso);
        const diffDays = Math.abs((d2 - d1) / (1000 * 60 * 60 * 24));
        if (diffDays > 7) continue;
      }

      const c1 = getVenueCoord(s1);
      const c2 = getVenueCoord(s2);
      const transit = estimateTransit(s1, s2);

      const color = s1.artistId === s2.artistId ? (s1.artistColor || '#388bfd') : '#f59e0b';

      const polyline = L.polyline([c1, c2], {
        color: color,
        weight: 3.5,
        opacity: 0.7,
        dashArray: '6, 8'
      });

      const tooltipContent = `
        <div style="font-size:0.84rem; font-weight:700; line-height:1.4;">
          <div style="color:#c9d1d9;">${s1.prefecture}・${s1.venue} ➔ ${s2.prefecture}・${s2.venue}</div>
          <div style="color:#58a6ff; margin-top:2px; font-size:0.88rem;">${transit.icon} ${transit.timeText}</div>
          <div style="color:#8b949e; font-size:0.75rem; font-weight:500;">${transit.desc} (約 ${transit.dist} km)</div>
        </div>
      `;

      polyline.bindTooltip(tooltipContent, {
        permanent: false,
        sticky: true,
        direction: 'top',
        className: 'route-tooltip-label'
      });

      polyline.on('mouseover', function() {
        this.setStyle({ weight: 6, opacity: 1, dashArray: null });
      });

      polyline.on('mouseout', function() {
        this.setStyle({ weight: 3.5, opacity: 0.7, dashArray: '6, 8' });
      });

      mapRoutesLayer.addLayer(polyline);
    }
  }

  // 3. Render Route Sequence Sidebar
  if (routeListEl) {
    routeListEl.innerHTML = '';
    if (subtitleEl) {
      subtitleEl.textContent = `顯示中：${sortedShows.length} 場公演 (點擊場館卡片或連線標籤可直接連線)`;
    }

    for (let i = 0; i < sortedShows.length; i++) {
      const show = sortedShows[i];
      const card = document.createElement('div');
      card.className = 'route-stop-card';
      card.innerHTML = `
        <div class="route-stop-top">
          <span class="route-stop-date">${show.dateFormatted} (${show.dayOfWeek})</span>
          <span class="badge-artist ${show.badgeClass}">${show.artistName}</span>
        </div>
        <div class="route-stop-venue" title="${show.venue}">${show.prefecture}・${show.venue}</div>
        <div class="route-stop-meta">
          <span>#${show.globalId || show.id}</span>
          <span>START ${show.startTime}</span>
        </div>
      `;

      card.addEventListener('click', () => {
        if (!selectedOriginShow) {
          selectedOriginShow = show;
          connectTwoVenues(show, show, false);
        } else if ((selectedOriginShow.globalId || selectedOriginShow.id) !== (show.globalId || show.id)) {
          connectTwoVenues(selectedOriginShow, show);
        }
      });

      routeListEl.appendChild(card);

      // Add transit link badge to next show (clickable to connect)
      if (i < sortedShows.length - 1) {
        const nextShow = sortedShows[i + 1];
        const transit = estimateTransit(show, nextShow);

        const badgeWrapper = document.createElement('div');
        badgeWrapper.className = 'route-transit-badge-wrapper';
        badgeWrapper.innerHTML = `
          <div class="route-transit-line"></div>
          <div class="route-transit-pill clickable ${transit.pillClass}" title="點擊在線圖上繪製此段路線">
            <span>${transit.icon}</span>
            <span>${transit.timeText}</span>
            <span style="color:#8b949e; font-size:0.7rem;">(${transit.dist}km)</span>
          </div>
          <div class="route-transit-line"></div>
        `;

        badgeWrapper.querySelector('.route-transit-pill').addEventListener('click', (e) => {
          e.stopPropagation();
          connectTwoVenues(show, nextShow);
        });

        routeListEl.appendChild(badgeWrapper);
      }
    }
  }

  // Fit bounds nicely and safely
  function adjustCamera() {
    if (!leafletMap) return;
    leafletMap.invalidateSize(true);
    const size = leafletMap.getSize();
    if (size.x > 0 && size.y > 0 && sortedShows.length > 0 && bounds.isValid()) {
      try {
        leafletMap.fitBounds(bounds, { padding: [50, 50], maxZoom: 10 });
      } catch (e) {
        leafletMap.setView([36.5, 138.0], 5.5);
      }
    } else {
      leafletMap.setView([36.5, 138.0], 5.5);
    }
    updateMapClusterVisibility();
  }

  adjustCamera();
  setTimeout(adjustCamera, 60);
  setTimeout(adjustCamera, 200);
}

/**
 * Switch visibility between 47 Prefecture Clusters (overview zoom <= 7.5) and Detailed Venue Pins (zoom > 7.5)
 */
function updateMapClusterVisibility() {
  if (!leafletMap) return;
  const currentZoom = leafletMap.getZoom();
  const isOverview = currentZoom <= 7.5;

  if (mapPrefClusterEnabled) {
    if (isOverview) {
      if (mapPrefClusterLayer && !leafletMap.hasLayer(mapPrefClusterLayer)) {
        leafletMap.addLayer(mapPrefClusterLayer);
      }
      if (mapMarkersLayer && leafletMap.hasLayer(mapMarkersLayer)) {
        leafletMap.removeLayer(mapMarkersLayer);
      }
      if (mapRoutesLayer && leafletMap.hasLayer(mapRoutesLayer)) {
        leafletMap.removeLayer(mapRoutesLayer);
      }
    } else {
      if (mapPrefClusterLayer && leafletMap.hasLayer(mapPrefClusterLayer)) {
        leafletMap.removeLayer(mapPrefClusterLayer);
      }
      if (mapMarkersLayer && !leafletMap.hasLayer(mapMarkersLayer)) {
        leafletMap.addLayer(mapMarkersLayer);
      }
      if (mapRoutesLayer && !leafletMap.hasLayer(mapRoutesLayer) && mapShowRouteLines) {
        leafletMap.addLayer(mapRoutesLayer);
      }
    }
  } else {
    // Clustering disabled
    if (mapPrefClusterLayer && leafletMap.hasLayer(mapPrefClusterLayer)) {
      leafletMap.removeLayer(mapPrefClusterLayer);
    }
    if (mapMarkersLayer && !leafletMap.hasLayer(mapMarkersLayer)) {
      leafletMap.addLayer(mapMarkersLayer);
    }
    if (mapRoutesLayer && !leafletMap.hasLayer(mapRoutesLayer) && mapShowRouteLines) {
      leafletMap.addLayer(mapRoutesLayer);
    }
  }
}
let toursData = [];
let allShowsList = [];
let activeArtistFilter = 'all';
let activeRegionFilter = 'all';
let activeTagFilter = null;
let currentSort = 'date-asc';
let currentSearch = '';
let currentView = 'calendar'; // Default to calendar view
let calendarYear = 2026;
let calendarMonth = 10;

/**
 * Universal robust text parser for multi-artist schedules
 */
function parseScheduleText(text, artistInfo = {}) {
  const normalized = text.normalize('NFKC');
  let generalVenue = '';
  let generalPref = '';
  let currentContextYear = 2026;

  const titleYearMatch = normalized.match(/(?:TOUR|LIVE|CONCERT|\s|^)(202[0-9]|203[0-5])(?:[年\s\-\/]|$)/i);
  if (titleYearMatch) currentContextYear = parseInt(titleYearMatch[1], 10);

  const venueMatch = normalized.match(/会場[：:\s]*([^\n\r]+)/i);
  if (venueMatch) {
    generalVenue = venueMatch[1].trim();
    for (const pref of Object.keys(REGION_MAP)) {
      if (generalVenue.includes(pref + '県') || generalVenue.includes(pref + '都') || generalVenue.includes(pref + '府')) {
        generalPref = pref;
        break;
      }
    }
  }

  const rawLines = normalized.split('\n').map(l => l.trim()).filter(Boolean);
  const results = [];

  for (let i = 0; i < rawLines.length; i++) {
    let line = rawLines[i];
    
    const yearHeaderMatch = line.match(/^[【\[\s]*(202[0-9]|203[0-5])[年】\]\s*]*$/);
    if (yearHeaderMatch) {
      currentContextYear = parseInt(yearHeaderMatch[1], 10);
      continue;
    }

    // Clean leading bullets, index numbers, and icons without corrupting date formats
    line = line.replace(/^[①-⑳■●◆★*#\s.、\-\u3000]+/i, '')
               .replace(/^(?:No\.?|#|\d{1,3}[.、)\]])\s*/i, '')
               .replace(/^\d{1,3}\s+(?=\d{1,2}\s*[月/.\-])/i, '')
               .trim();

    let year = currentContextYear;
    let month = '';
    let day = '';
    let dayOfWeekStr = '';
    let dateMatchStr = '';

    const fullDateMatch = line.match(/^(202[0-9]|203[0-5])\s*[年/.\-]\s*(\d{1,2})\s*[月/.\-]\s*(\d{1,2})日?\s*[（(]([^）)]+)[）)]?/);
    const shortDateMatch = line.match(/^(\d{1,2})\s*[月/.\-]\s*(\d{1,2})日?\s*[（(]([^）)]+)[）)]?/);

    if (fullDateMatch) {
      year = fullDateMatch[1];
      month = fullDateMatch[2].padStart(2, '0');
      day = fullDateMatch[3].padStart(2, '0');
      dayOfWeekStr = (fullDateMatch[4] || '').trim();
      dateMatchStr = fullDateMatch[0];
      currentContextYear = parseInt(year, 10);
    } else if (shortDateMatch && !line.startsWith('〒') && !line.startsWith('TEL') && !line.startsWith('問') && !line.startsWith('[問]')) {
      year = String(currentContextYear);
      month = shortDateMatch[1].padStart(2, '0');
      day = shortDateMatch[2].padStart(2, '0');
      dayOfWeekStr = (shortDateMatch[3] || '').trim();
      dateMatchStr = shortDateMatch[0];
    } else {
      continue;
    }

    const dateIso = `${year}-${month}-${day}`;
    let rest = line.substring(line.indexOf(dateMatchStr) + dateMatchStr.length).trim();
    rest = rest.replace(/^[…\.・\-\s]+/, '');

    let blockExtra = '';
    let j = i + 1;
    while (j < rawLines.length) {
      const nxt = rawLines[j];
      if (nxt.match(/^[【\[]?(202[0-9]|203[0-5])[年】\]]?/) || nxt.match(/(?:[①-⑳■●◆★*#\s\d.、-]*?)\d{1,2}[月/.\-]\s*\d{1,2}/) || nxt.match(/^[■●◆★*#\-]/) || nxt.match(/^[━─=]{3,}/)) break;
      if (!nxt.startsWith('問') && !nxt.startsWith('[問]') && !nxt.startsWith('※') && !nxt.startsWith('（S指定') && !nxt.startsWith('(S指定') && !nxt.startsWith('＊＊') && !nxt.startsWith('━')) {
        blockExtra += ' ' + nxt;
      }
      j++;
    }

    const fullStr = (rest + ' ' + blockExtra).trim();

    let openTime = '--:--';
    let startTime = '--:--';

    const kaijoMatch = fullStr.match(/開場[：:\s]*([0-9]{1,2}:[0-9]{2})/i);
    const kaienMatch = fullStr.match(/開演[：:\s]*([0-9]{1,2}:[0-9]{2})/i);
    if (kaijoMatch) openTime = kaijoMatch[1];
    if (kaienMatch) startTime = kaienMatch[1];

    if (openTime === '--:--') {
      const openFirstMatch = fullStr.match(/([0-9]{1,2}:[0-9]{2})\s*OPEN/i);
      if (openFirstMatch) openTime = openFirstMatch[1];
    }
    if (startTime === '--:--') {
      const startFirstMatch = fullStr.match(/([0-9]{1,2}:[0-9]{2})\s*START/i);
      if (startFirstMatch) startTime = startFirstMatch[1];
    }

    if (openTime === '--:--') {
      const openSecond = fullStr.match(/OPEN[：:\s]*([0-9]{1,2}:[0-9]{2})/i);
      if (openSecond) openTime = openSecond[1];
    }
    if (startTime === '--:--') {
      const startSecond = fullStr.match(/START[：:\s]*([0-9]{1,2}:[0-9]{2})/i);
      if (startSecond) startTime = startSecond[1];
    }

    let locVenue = fullStr
      .replace(/[（(]開場[0-9]{1,2}:[0-9]{2}[/／\s]*開演[0-9]{1,2}:[0-9]{2}[）)]/gi, '')
      .replace(/開場[：:\s]*[0-9]{1,2}:[0-9]{2}/gi, '')
      .replace(/開演[：:\s]*[0-9]{1,2}:[0-9]{2}/gi, '')
      .replace(/([0-9]{1,2}:[0-9]{2})\s*(?:OPEN|START)/gi, '')
      .replace(/(?:OPEN|START)[：:\s]*(?:[0-9]{1,2}:[0-9]{2}|--:--|未定|TBD)/gi, '')
      .replace(/OPEN\s*--:--\s*[/／]\s*START\s*--:--/gi, '')
      .replace(/(?:問|\[問\]).*$/g, '')
      .replace(/[/／]\s*START.*$/gi, '')
      .replace(/^[…\.・\-\s\/／]+/, '')
      .trim();

    locVenue = locVenue.replace(/[/／\s]+$/, '').trim();

    let prefecture = generalPref;
    let venue = generalVenue;

    for (const pref of Object.keys(REGION_MAP)) {
      if (locVenue.includes(`(${pref})`) || locVenue.includes(`（${pref}）`) || locVenue.includes(`(${pref}県`) || locVenue.includes(`（${pref}県`) || locVenue.includes(`(${pref}都`) || locVenue.includes(`（${pref}都`) || locVenue.includes(`(${pref}府`) || locVenue.includes(`（${pref}府`)) {
        prefecture = pref;
        locVenue = locVenue.replace(new RegExp(`[（(]${pref}(?:県|都|府)?[^）)]*[）)]`, 'g'), '').trim();
        break;
      }
    }

    let matchedPref = null;
    for (const pref of Object.keys(REGION_MAP)) {
      if (locVenue.startsWith(pref + '県・') || locVenue.startsWith(pref + '都・') || locVenue.startsWith(pref + '府・') || locVenue.startsWith(pref + '県 ') || locVenue.startsWith(pref + '都 ') || locVenue.startsWith(pref + '府 ') || locVenue.startsWith(pref + ' /') || locVenue.startsWith(pref + '/') || locVenue.startsWith(pref + '・') || locVenue.startsWith(pref + ' ') || locVenue.startsWith(pref + '\t') || locVenue.startsWith(pref + '　')) {
        matchedPref = pref;
        break;
      }
    }

    if (matchedPref) {
      prefecture = matchedPref;
      venue = locVenue.substring(matchedPref.length).replace(/^(?:県|都|府)?[\/／・\s　]+/, '').trim();
    } else if (locVenue.includes('・')) {
      const parts = locVenue.split('・');
      const p0 = parts[0].replace(/(?:県|都|府)$/, '').trim();
      if (REGION_MAP[p0]) {
        prefecture = p0;
        venue = parts.slice(1).join('・').trim();
      } else {
        venue = locVenue;
      }
    } else if (locVenue.includes(' / ') || locVenue.includes(' /') || locVenue.includes('/ ')) {
      const parts = locVenue.split('/');
      prefecture = parts[0].trim();
      venue = parts.slice(1).join('/').trim();
    }

    if (!venue && locVenue) {
      venue = locVenue;
    }

    if (!prefecture && venue) {
      for (const pref of Object.keys(REGION_MAP)) {
        if (venue.includes(pref + '県') || venue.includes(pref + '都') || venue.includes(pref + '府') || venue.includes(pref + '市') || venue.startsWith(pref)) {
          prefecture = pref;
          break;
        }
      }
      if (!prefecture) {
        if (venue.includes('ぴあアリーナMM') || venue.includes('横浜') || venue.includes('川崎') || venue.includes('カルッツかわさき') || venue.includes('CLUB CITTA') || venue.includes('K-Arena')) {
          prefecture = '神奈川';
        } else if (venue.includes('ガーデンシアター') || venue.includes('NHKホール') || venue.includes('LINE CUBE') || venue.includes('LIQUIDROOM') || venue.includes('DiverCity') || venue.includes('渋谷') || venue.includes('恵比寿') || venue.includes('有明') || venue.includes('武道館') || venue.includes('TOYOTA ARENA')) {
          prefecture = '東京';
        } else if (venue.includes('グランキューブ大阪') || venue.includes('フェスティバルホール') || venue.includes('大阪城ホール') || venue.includes('オリックス劇場')) {
          prefecture = '大阪';
        } else if (venue.includes('福岡サンパレス') || venue.includes('マリンメッセ福岡') || venue.includes('久留米')) {
          prefecture = '福岡';
        } else if (venue.includes('仙台サンプラザ') || venue.includes('ゼビオアリーナ仙台') || venue.includes('RENSA') || venue.includes('宮城 セキスイハイムスーパーアリーナ')) {
          prefecture = '宮城';
        } else if (venue.includes('盛岡市民文化ホール') || venue.includes('盛岡タカヤアリーナ') || venue.includes('Change WAVE')) {
          prefecture = '岩手';
        } else if (venue.includes('長良川国際会議場') || venue.includes('長良川国際會議場') || venue.includes('club-G')) {
          prefecture = '岐阜';
        } else if (venue.includes('広島文化学園') || venue.includes('広島グリーンアリーナ') || venue.includes('CLUB QUATTRO')) {
          prefecture = '広島';
        } else if (venue.includes('帯広') || venue.includes('札幌') || venue.includes('北海きたえーる') || venue.includes('小樽') || venue.includes('旭川') || venue.includes('真駒内')) {
          prefecture = '北海道';
        } else if (venue.includes('松山市民会館') || venue.includes('WstudioRED')) {
          prefecture = '愛媛';
        } else if (venue.includes('米子コンベンション') || venue.includes('AZTiC laughs')) {
          prefecture = '鳥取';
        } else if (venue.includes('砺波市文化会館') || venue.includes('SOUL POWER')) {
          prefecture = '富山';
        } else if (venue.includes('本多の森') || venue.includes('金沢 EIGHT HALL')) {
          prefecture = '石川';
        } else if (venue.includes('Niterra') || venue.includes('名古屋') || venue.includes('ダイアモンドホール') || venue.includes('ポートメッセなごや') || venue.includes('IGアリーナ')) {
          prefecture = '愛知';
        } else if (venue.includes('ＹＣＣ県民文化ホール') || venue.includes('韮崎文化ホール')) {
          prefecture = '山梨';
        } else if (venue.includes('長野ビッグハット') || venue.includes('CLUB JUNK BOX')) {
          prefecture = '長野';
        } else if (venue.includes('大宮ソニックシティ')) {
          prefecture = '埼玉';
        } else if (venue.includes('森のホール21')) {
          prefecture = '千葉';
        } else if (venue.includes('ロームシアター京都')) {
          prefecture = '京都';
        } else if (venue.includes('サンポートホール高松')) {
          prefecture = '香川';
        } else if (venue.includes('倉敷市民会館')) {
          prefecture = '岡山';
        } else if (venue.includes('とうほう みんなの文化センター') || venue.includes('福島県文化センター')) {
          prefecture = '福島';
        }
      }
    }

    if (!prefecture && venue && !prefecture) prefecture = '其他';
    if (!venue) venue = '詳細未定';

    const yrNum = parseInt(year, 10);
    const moNum = parseInt(month, 10);
    const daNum = parseInt(day, 10);

    const isHoliday = dayOfWeekStr.includes('祝');
    const isSat = dayOfWeekStr.includes('土') || dayOfWeekStr.includes('六');
    const isSun = dayOfWeekStr.includes('日');
    const isWeekend = isSat || isSun || isHoliday;
    const isZepp = venue.toLowerCase().includes('zepp');

    results.push({
      id: results.length + 1,
      artistId: artistInfo.id || 'custom',
      artistName: artistInfo.name || '自訂歌手',
      artistColor: artistInfo.color || '#2ed573',
      badgeClass: artistInfo.badgeClass || 'custom',
      tourTitle: artistInfo.tourTitle || '',
      rawLine: line,
      year: yrNum,
      month: moNum,
      day: daNum,
      dateIso,
      dateFormatted: `${year}.${month}.${day}`,
      dayOfWeek: dayOfWeekStr,
      isSat,
      isSun,
      isHoliday,
      isWeekend,
      prefecture: prefecture || '其他',
      region: PREFECTURE_TO_REGION[prefecture] || '其他',
      venue: venue || '未定',
      openTime,
      startTime,
      isZepp
    });
  }

  return results;
}

/**
 * Rebuild the full shows list from all tours
 */
function rebuildAllShows() {
  allShowsList = [];
  toursData.forEach(tour => {
    const shows = parseScheduleText(tour.rawText, tour);
    allShowsList.push(...shows);
  });

  // Re-index global IDs sequentially by date
  allShowsList.sort((a, b) => a.dateIso.localeCompare(b.dateIso));
  allShowsList.forEach((s, idx) => {
    s.globalId = idx + 1;
  });

  if (typeof initMapTimeline === 'function') {
    initMapTimeline();
  }
}

/**
 * Filter & Sort items
 */
function getFilteredAndSortedShows() {
  return allShowsList.filter(item => {
    // Artist filter
    if (activeArtistFilter !== 'all' && item.artistId !== activeArtistFilter) {
      return false;
    }

    // Search query filter
    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      const matchText = `${item.artistName} ${item.dateIso} ${item.dateFormatted} ${item.prefecture} ${item.region} ${item.venue} ${item.openTime} ${item.startTime} ${item.dayOfWeek}`.toLowerCase();
      if (!matchText.includes(q)) return false;
    }

    // Region filter
    if (activeRegionFilter !== 'all' && item.region !== activeRegionFilter) {
      return false;
    }

    // Tag filter
    if (activeTagFilter === 'year-2026' && item.year !== 2026) return false;
    if (activeTagFilter === 'year-2027' && item.year !== 2027) return false;
    if (activeTagFilter === 'weekend' && !item.isWeekend) return false;
    if (activeTagFilter === 'weekday' && item.isWeekend) return false;
    if (activeTagFilter === 'zepp' && !item.isZepp) return false;

    return true;
  }).sort((a, b) => {
    if (currentSort === 'date-asc') {
      return a.dateIso.localeCompare(b.dateIso);
    } else if (currentSort === 'date-desc') {
      return b.dateIso.localeCompare(a.dateIso);
    } else if (currentSort === 'artist-asc') {
      return a.artistName.localeCompare(b.artistName, 'zh-Hant');
    } else if (currentSort === 'pref-asc') {
      return a.prefecture.localeCompare(b.prefecture, 'zh-Hant');
    } else if (currentSort === 'start-time') {
      return a.startTime.localeCompare(b.startTime);
    }
    return 0;
  });
}

/**
 * Generate Google Calendar Add URL
 */
function generateGoogleCalendarUrl(item) {
  const title = encodeURIComponent(`${item.artistName} 演唱會 - ${item.prefecture} ${item.venue}`);
  const details = encodeURIComponent(`${item.tourTitle || item.artistName}\n歌手：${item.artistName}\n場館：${item.prefecture}・${item.venue}\nOPEN：${item.openTime} / START：${item.startTime}`);
  const location = encodeURIComponent(`${item.prefecture} ${item.venue}`);
  
  const dateCompact = item.dateIso.replace(/-/g, '');
  const startHour = item.startTime !== '--:--' ? item.startTime.replace(':', '') + '00' : '180000';
  const endHour = '213000';
  
  const dates = `${dateCompact}T${startHour}/${dateCompact}T${endHour}`;
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}&ctz=Asia/Tokyo`;
}

/**
 * Generate Google Maps Search URL
 */
function generateMapUrl(item) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.prefecture + ' ' + item.venue)}`;
}

/**
 * Render Day of Week Badge
 */
function renderDayBadge(item) {
  let badgeClass = 'weekday';
  if (item.isHoliday) {
    badgeClass = 'holiday';
  } else if (item.isSun) {
    badgeClass = 'sun';
  } else if (item.isSat) {
    badgeClass = 'sat';
  }
  return `<span class="day-badge ${badgeClass}">${item.dayOfWeek}</span>`;
}

/**
 * Render Artist Badge
 */
function renderArtistBadge(item) {
  return `<span class="badge-artist ${item.badgeClass}">${item.artistName}</span>`;
}

/**
 * Render Table View
 */
function renderTable(items) {
  const tbody = document.getElementById('timetableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  items.forEach((item) => {
    const tr = document.createElement('tr');
    tr.className = item.isZepp ? 'row-zepp' : '';
    
    tr.innerHTML = `
      <td class="col-num"><span class="show-num">${item.globalId || item.id}</span></td>
      <td class="col-artist">${renderArtistBadge(item)}</td>
      <td class="col-date">${item.dateFormatted}</td>
      <td class="col-day">${renderDayBadge(item)}</td>
      <td class="col-region">
        <span class="region-tag">
          ${item.prefecture}
          <span class="pref-badge">${item.region}</span>
        </span>
      </td>
      <td class="col-venue">
        <a href="${generateMapUrl(item)}" target="_blank" rel="noopener noreferrer" class="venue-link" title="在 Google 地圖中查看會場">
          ${item.venue}
        </a>
      </td>
      <td class="col-time"><span class="time-open">${item.openTime}</span></td>
      <td class="col-time"><span class="time-start">${item.startTime}</span></td>
      <td class="col-actions">
        <div class="action-cell">
          <a href="${generateGoogleCalendarUrl(item)}" target="_blank" rel="noopener noreferrer" class="btn-cal" title="加入至 Google 行事曆">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            加入日曆
          </a>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

/**
 * Render Cards / Timeline View
 */
function renderCards(items) {
  const container = document.getElementById('cardViewContainer');
  if (!container) return;
  container.innerHTML = '';

  // Group by Year-Month
  const groups = {};
  items.forEach(item => {
    const key = `${item.year}年 ${item.month}月`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
  });

  Object.keys(groups).forEach(monthKey => {
    const groupSection = document.createElement('div');
    groupSection.className = 'month-group';
    
    groupSection.innerHTML = `
      <div class="month-heading">
        <span>${monthKey}</span>
        <span class="month-badge">${groups[monthKey].length} 場公演</span>
      </div>
      <div class="cards-grid"></div>
    `;
    
    const grid = groupSection.querySelector('.cards-grid');
    groups[monthKey].forEach(item => {
      const card = document.createElement('div');
      card.className = `tour-card ${item.isZepp ? 'is-zepp' : ''}`;
      
      card.innerHTML = `
        <div class="card-top">
          <div class="card-date-badge">
            <span class="card-date-text">${item.dateFormatted}</span>
            ${renderDayBadge(item)}
          </div>
          <div style="display:flex; gap:6px; align-items:center;">
            ${renderArtistBadge(item)}
            <span class="pref-badge">${item.region}</span>
          </div>
        </div>

        <div class="card-venue-row">
          <div class="card-pref">${item.prefecture}</div>
          <a href="${generateMapUrl(item)}" target="_blank" rel="noopener noreferrer" class="venue-link card-venue">
            ${item.venue}
          </a>
        </div>

        <div class="card-time-row">
          <div class="card-time-item">
            <span class="card-time-label">進場 OPEN</span>
            <span class="card-time-val time-open">${item.openTime}</span>
          </div>
          <div class="card-time-item">
            <span class="card-time-label">開演 START</span>
            <span class="card-time-val time-start">${item.startTime}</span>
          </div>
        </div>

        <div class="card-bottom-actions">
          <span class="show-num">#${item.globalId || item.id}</span>
          <a href="${generateGoogleCalendarUrl(item)}" target="_blank" rel="noopener noreferrer" class="btn-cal">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            加入日曆
          </a>
        </div>
      `;
      grid.appendChild(card);
    });

    container.appendChild(groupSection);
  });
}

let currentModalShow = null;

/**
 * Open Show Detail Modal
 */
function openShowDetailModal(item) {
  if (!item) return;
  currentModalShow = item;
  const modal = document.getElementById('showDetailModal');
  document.getElementById('modalShowTag').textContent = `#${item.globalId || item.id} [${item.artistName}] ${item.region}`;
  document.getElementById('modalShowDate').textContent = `${item.year}年${item.month}月${item.day}日 (${item.dayOfWeek})`;
  document.getElementById('modalShowVenue').textContent = `${item.prefecture}・${item.venue}`;
  document.getElementById('modalShowOpen').textContent = item.openTime;
  document.getElementById('modalShowStart').textContent = item.startTime;

  document.getElementById('modalCalLink').href = generateGoogleCalendarUrl(item);
  document.getElementById('modalMapLink').href = generateMapUrl(item);

  // Dynamic button text based on selection state
  const routeBtn = document.getElementById('modalMapRouteBtn');
  if (routeBtn) {
    if (!selectedOriginShow) {
      routeBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" x2="8" y1="2" y2="18"/><line x1="16" x2="16" y1="6" y2="22"/></svg>
        📍 設為連線起點 (Step 1/2)
      `;
      routeBtn.style.background = 'linear-gradient(135deg, #1f6feb, #388bfd)';
    } else if ((selectedOriginShow.globalId || selectedOriginShow.id) === (item.globalId || item.id)) {
      routeBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        ✕ 取消此起點選取
      `;
      routeBtn.style.background = '#21262d';
    } else {
      routeBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" x2="8" y1="2" y2="18"/><line x1="16" x2="16" y1="6" y2="22"/></svg>
        🚀 與起點【${selectedOriginShow.artistName}・${selectedOriginShow.venue}】連線並跳轉地圖
      `;
      routeBtn.style.background = 'linear-gradient(135deg, #238636, #2ea043)';
    }
  }

  modal.classList.add('open');
}

/**
 * Render Monthly Calendar View
 */
function renderCalendar(items) {
  const container = document.getElementById('calendarDaysGrid');
  const monthTitle = document.getElementById('calMonthTitle');
  const monthPills = document.getElementById('calMonthPills');
  const countBadge = document.getElementById('calMonthShowCount');
  const calBanner = document.getElementById('calendarMeasureBanner');
  const calText = document.getElementById('calendarMeasureText');
  
  if (!container || !monthTitle) return;

  container.innerHTML = '';
  monthTitle.textContent = `${calendarYear}年 ${calendarMonth}月`;

  // Update Origin Picked Banner in Calendar View
  if (calBanner) {
    if (selectedOriginShow) {
      calBanner.style.display = 'flex';
      if (calText) {
        calText.innerHTML = `📍 <b>已選取起點</b>：【${selectedOriginShow.artistName}】${selectedOriginShow.dateFormatted} ${selectedOriginShow.prefecture}・${selectedOriginShow.venue} ➔ <span style="color:#ffffff;">請在月曆中點選第二場公演（終點）連線跳轉</span>`;
      }
    } else {
      calBanner.style.display = 'none';
    }
  }

  // Get distinct list of months with tour dates from all current tours
  const monthKeyMap = new Map();
  allShowsList.forEach(s => {
    const key = `${s.year}-${s.month}`;
    if (!monthKeyMap.has(key)) {
      monthKeyMap.set(key, { year: s.year, month: s.month });
    }
  });

  const tourMonths = Array.from(monthKeyMap.values()).sort((a, b) => {
    return (a.year * 100 + a.month) - (b.year * 100 + b.month);
  });

  // Render Month Pills
  if (monthPills) {
    monthPills.innerHTML = '';
    tourMonths.forEach(m => {
      const btn = document.createElement('button');
      btn.className = `cal-pill ${m.year === calendarYear && m.month === calendarMonth ? 'active' : ''}`;
      const mPad = String(m.month).padStart(2, '0');
      btn.textContent = `${m.year}.${mPad}`;
      btn.addEventListener('click', () => {
        calendarYear = m.year;
        calendarMonth = m.month;
        updateUI();
      });
      monthPills.appendChild(btn);
    });
  }

  // Calculate calendar grid days
  const firstDayOfWeek = new Date(calendarYear, calendarMonth - 1, 1).getDay();
  const daysInCurrentMonth = new Date(calendarYear, calendarMonth, 0).getDate();
  const daysInPrevMonth = new Date(calendarYear, calendarMonth - 1, 0).getDate();

  // Shows in this month
  const currentMonthShows = items.filter(s => s.year === calendarYear && s.month === calendarMonth);
  if (countBadge) {
    countBadge.textContent = `本月 ${currentMonthShows.length} 場公演`;
  }

  // 1. Previous Month Leading Days
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    const dayNum = daysInPrevMonth - i;
    const cell = document.createElement('div');
    cell.className = 'cal-day-cell other-month';
    cell.innerHTML = `
      <div class="cal-date-top">
        <span class="cal-date-number">${dayNum}</span>
      </div>
    `;
    container.appendChild(cell);
  }

  // 2. Current Month Days
  for (let d = 1; d <= daysInCurrentMonth; d++) {
    const cell = document.createElement('div');
    const dayOfWeekIdx = (firstDayOfWeek + d - 1) % 7;
    const isSun = dayOfWeekIdx === 0;
    const isSat = dayOfWeekIdx === 6;
    
    // Shows on this day (filtered)
    const dayShows = items.filter(s => s.year === calendarYear && s.month === calendarMonth && s.day === d);
    const hasShow = dayShows.length > 0;

    cell.className = `cal-day-cell ${hasShow ? 'has-show' : ''} ${isSun ? 'is-sun' : ''} ${isSat ? 'is-sat' : ''}`;

    let showsHtml = '';
    dayShows.forEach(s => {
      const artistClass = `artist-${s.artistId}`;
      const isOrigin = selectedOriginShow && ((s.globalId || s.id) === (selectedOriginShow.globalId || selectedOriginShow.id));
      const originClass = isOrigin ? 'is-origin-picked' : '';
      const originBadge = isOrigin ? '<span style="background:#2ed573; color:#000; font-size:0.65rem; font-weight:800; padding:1px 4px; border-radius:3px; margin-right:3px;">📍起點</span>' : '';

      showsHtml += `
        <div class="cal-show-pill ${artistClass} ${s.isZepp ? 'zepp-pill' : ''} ${originClass}" data-id="${s.globalId || s.id}" title="點擊查看詳細資訊與連線">
          <div class="cal-show-header">
            <span class="cal-show-id">[${s.artistName}]</span>
            <span class="cal-show-pref">${originBadge}${s.prefecture}</span>
          </div>
          <div class="cal-show-venue">${s.venue}</div>
          <div class="cal-show-time">${s.startTime} START</div>
        </div>
      `;
    });

    cell.innerHTML = `
      <div class="cal-date-top">
        <span class="cal-date-number">${d}</span>
        ${hasShow ? `<span class="pref-badge">${dayShows.length}場</span>` : ''}
      </div>
      ${showsHtml}
    `;

    // Attach click listener for show pills
    cell.querySelectorAll('.cal-show-pill').forEach(pill => {
      const showId = parseInt(pill.dataset.id, 10);
      const showItem = allShowsList.find(x => (x.globalId || x.id) === showId);
      pill.addEventListener('click', (e) => {
        e.stopPropagation();
        openShowDetailModal(showItem);
      });
    });

    container.appendChild(cell);
  }

  // 3. Next Month Trailing Days
  const totalRendered = firstDayOfWeek + daysInCurrentMonth;
  const remainingSlots = (7 - (totalRendered % 7)) % 7;
  for (let nextD = 1; nextD <= remainingSlots; nextD++) {
    const cell = document.createElement('div');
    cell.className = 'cal-day-cell other-month';
    cell.innerHTML = `
      <div class="cal-date-top">
        <span class="cal-date-number">${nextD}</span>
      </div>
    `;
    container.appendChild(cell);
  }
}

/**
 * Main UI Update
 */
function updateUI() {
  const filtered = getFilteredAndSortedShows();
  if (currentLayoutMode === 'mobile') {
    renderMobile();
  }
  const matchedCountEl = document.getElementById('matchedCount');
  if (matchedCountEl) matchedCountEl.textContent = filtered.length;

  const emptyState = document.getElementById('emptyState');
  const tableContainer = document.getElementById('tableViewContainer');
  const cardContainer = document.getElementById('cardViewContainer');
  const calendarContainer = document.getElementById('calendarViewContainer');

  if (filtered.length === 0 && currentView !== 'calendar') {
    if (emptyState) emptyState.style.display = 'block';
    if (tableContainer) tableContainer.style.display = 'none';
    if (cardContainer) cardContainer.style.display = 'none';
    if (calendarContainer) calendarContainer.style.display = 'none';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  const mapContainer = document.getElementById('mapViewContainer');

  if (currentView === 'table') {
    if (tableContainer) tableContainer.style.display = 'block';
    if (cardContainer) cardContainer.style.display = 'none';
    if (calendarContainer) calendarContainer.style.display = 'none';
    if (mapContainer) mapContainer.style.display = 'none';
    renderTable(filtered);
  } else if (currentView === 'card') {
    if (tableContainer) tableContainer.style.display = 'none';
    if (cardContainer) cardContainer.style.display = 'block';
    if (calendarContainer) calendarContainer.style.display = 'none';
    if (mapContainer) mapContainer.style.display = 'none';
    renderCards(filtered);
  } else if (currentView === 'calendar') {
    if (tableContainer) tableContainer.style.display = 'none';
    if (cardContainer) cardContainer.style.display = 'none';
    if (calendarContainer) calendarContainer.style.display = 'block';
    if (mapContainer) mapContainer.style.display = 'none';
    renderCalendar(filtered);
  } else if (currentView === 'map') {
    if (tableContainer) tableContainer.style.display = 'none';
    if (cardContainer) cardContainer.style.display = 'none';
    if (calendarContainer) calendarContainer.style.display = 'none';
    if (mapContainer) mapContainer.style.display = 'block';
    renderMapView(filtered);
    [0, 50, 150, 350].forEach(delay => {
      setTimeout(() => {
        if (leafletMap) leafletMap.invalidateSize();
      }, delay);
    });
  }
}

/**
 * Update Header Stats and Filter Counts
 */
function updateStats() {
  const currentScopeShows = activeArtistFilter === 'all' 
    ? allShowsList 
    : allShowsList.filter(s => s.artistId === activeArtistFilter);

  // Update Hero Title & Metadata based on selected tour
  const mainTitleEl = document.querySelector('.main-title');
  const subtitleEl = document.querySelector('.subtitle');
  const tourMetaEl = document.querySelector('.tour-meta');

  if (activeArtistFilter === 'all') {
    if (mainTitleEl) mainTitleEl.textContent = 'CONCERT TIMETABLE 2026-2027';
    if (subtitleEl) subtitleEl.textContent = '多歌手日本巡迴演出日程總覽 (全 9 組歌手)';
    if (tourMetaEl) {
      tourMetaEl.innerHTML = `
        <div class="meta-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          <span>2026年9月8日 〜 2028年2月13日</span>
        </div>
        <div class="meta-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <span>共 ${toursData.length} 位歌手 ｜ 全 ${allShowsList.length} 場公演</span>
        </div>
      `;
    }
  } else {
    const curTour = toursData.find(t => t.id === activeArtistFilter);
    if (curTour) {
      if (mainTitleEl) mainTitleEl.textContent = curTour.tourTitle;
      if (subtitleEl) subtitleEl.textContent = curTour.subtitle || curTour.tourTitle;
      if (tourMetaEl) {
        tourMetaEl.innerHTML = `
          <div class="meta-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            <span>${curTour.period || '2026-2027'}</span>
          </div>
          <div class="meta-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span>全 ${currentScopeShows.length} 場公演</span>
          </div>
        `;
      }
    }
  }

  // Stats numbers
  const statTotalEl = document.getElementById('statTotalShows');
  if (statTotalEl) statTotalEl.textContent = currentScopeShows.length;
  
  const prefs = new Set(currentScopeShows.map(s => s.prefecture));
  const statPrefsEl = document.getElementById('statPrefectures');
  if (statPrefsEl) statPrefsEl.textContent = prefs.size;

  const weekendCount = currentScopeShows.filter(s => s.isWeekend).length;
  const ratio = currentScopeShows.length > 0 ? Math.round((weekendCount / currentScopeShows.length) * 100) : 0;
  const statRatioEl = document.getElementById('statWeekendRatio');
  if (statRatioEl) statRatioEl.textContent = `${ratio}%`;

  if (currentScopeShows.length > 0) {
    const monthKeys = new Set(currentScopeShows.map(s => `${s.year}-${s.month}`));
    const statMonthEl = document.getElementById('statMonthSpan');
    if (statMonthEl) statMonthEl.textContent = monthKeys.size;
  }

  // Update Artist Tab Counts
  const tabAll = document.getElementById('tabCountAll');
  if (tabAll) tabAll.textContent = allShowsList.length;

  toursData.forEach(tour => {
    const count = allShowsList.filter(s => s.artistId === tour.id).length;
    const tabEl = document.getElementById(`tabCount${tour.id.charAt(0).toUpperCase() + tour.id.slice(1)}`);
    if (tabEl) tabEl.textContent = count;
  });
}

/**
 * Render Artist Navigation Tabs
 */
function renderArtistNavTabs() {
  const nav = document.getElementById('artistNavBar');
  if (!nav) return;

  let html = `
    <button class="artist-tab ${activeArtistFilter === 'all' ? 'active' : ''}" data-artist="all">
      <span class="tab-icon">🌟</span>
      <span class="tab-name">全部行程</span>
      <span class="tab-count" id="tabCountAll">${allShowsList.length}</span>
    </button>
  `;

  toursData.forEach(tour => {
    const count = allShowsList.filter(s => s.artistId === tour.id).length;
    html += `
      <button class="artist-tab ${activeArtistFilter === tour.id ? 'active' : ''}" data-artist="${tour.id}">
        <span class="tab-icon">${tour.icon || '🎵'}</span>
        <span class="tab-name">${tour.name}</span>
        <span class="tab-count" id="tabCount${tour.id.charAt(0).toUpperCase() + tour.id.slice(1)}">${count}</span>
      </button>
    `;
  });

  html += `
    <button class="artist-tab add-artist-btn" id="addArtistBtn" title="新增其他歌手行程">
      <span class="tab-icon">➕</span>
      <span class="tab-name">新增歌手行程</span>
    </button>
  `;

  nav.innerHTML = html;

  // Bind clicks
  nav.querySelectorAll('.artist-tab:not(.add-artist-btn)').forEach(btn => {
    btn.addEventListener('click', () => {
      activeArtistFilter = btn.dataset.artist;
      renderArtistNavTabs();
      updateStats();
      updateUI();
    });
  });

  const addBtn = document.getElementById('addArtistBtn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const modal = document.getElementById('parserModal');
      document.getElementById('inputArtistName').value = '';
      document.getElementById('inputTourTitle').value = '';
      document.getElementById('rawInputText').value = '';
      if (modal) modal.classList.add('open');
    });
  }
}

/**
 * Export to CSV
 */
function exportCSV() {
  const items = getFilteredAndSortedShows();
  const headers = ['場次', '歌手', '日期', '星期', '都道府縣', '地區', '場館名稱', '進場OPEN', '開演START', '巡迴名稱'];
  const rows = items.map(item => [
    item.globalId || item.id,
    `"${item.artistName}"`,
    item.dateIso,
    item.dayOfWeek,
    `"${item.prefecture}"`,
    `"${item.region}"`,
    `"${item.venue}"`,
    item.openTime,
    item.startTime,
    `"${item.tourTitle}"`
  ]);

  const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Concert_Timetable_${activeArtistFilter}_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Export to iCalendar (.ics)
 */
function exportICS() {
  const items = getFilteredAndSortedShows();
  let icsData = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Multi Artist Concert Timetable//TW',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH'
  ];

  items.forEach(item => {
    const dateCompact = item.dateIso.replace(/-/g, '');
    const startHour = item.startTime !== '--:--' ? item.startTime.replace(':', '') + '00' : '180000';
    const endHour = '213000';
    
    icsData.push(
      'BEGIN:VEVENT',
      `UID:concert-${item.artistId}-${item.id}-${dateCompact}@timetable`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART;TZID=Asia/Tokyo:${dateCompact}T${startHour}`,
      `DTEND;TZID=Asia/Tokyo:${dateCompact}T${endHour}`,
      `SUMMARY:[${item.artistName}] ${item.venue}`,
      `LOCATION:${item.prefecture} ${item.venue}`,
      `DESCRIPTION:${item.tourTitle}\\n歌手: ${item.artistName}\\nOPEN: ${item.openTime} / START: ${item.startTime}`,
      'STATUS:CONFIRMED',
      'END:VEVENT'
    );
  });

  icsData.push('END:VCALENDAR');

  const blob = new Blob([icsData.join('\r\n')], { type: 'text/calendar;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Concert_Schedule_${activeArtistFilter}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}

/* =========================================================
   Mobile View Controller (Google Calendar Mobile Replica)
========================================================= */
let currentLayoutMode = 'mobile';
let mSelectedDate = null;
let mSubView = 'calendar'; // 'calendar' or 'list'

function getArtistTheme(artistId) {
  const tour = (toursData || []).find(t => t.id === artistId) || (DEFAULT_TOURS || []).find(t => t.id === artistId);
  if (tour) {
    return {
      color: tour.color || '#6c5ce7',
      icon: tour.icon || '🎤',
      name: tour.name || artistId
    };
  }
  return { color: '#6c5ce7', icon: '🎤', name: artistId };
}

function renderMobile() {
  const filtered = getFilteredAndSortedShows();

  // 1. Month Header & Navigator
  const monthTitle = document.getElementById('mMonthTitle');
  if (monthTitle) {
    monthTitle.textContent = `${calendarYear}年 ${calendarMonth}月`;
  }

  const resultsCount = document.getElementById('mResultsCount');
  if (resultsCount) {
    resultsCount.textContent = `共 ${filtered.length} 場`;
  }

  const totalBadge = document.getElementById('mTotalShowsBadge');
  if (totalBadge) {
    totalBadge.textContent = `${toursData.length}組歌手・${allShowsList.length}場`;
  }

  // 2. Month Pills Bar
  const monthPillsBar = document.getElementById('mMonthPillsBar');
  if (monthPillsBar) {
    const monthSet = new Set();
    allShowsList.forEach(s => {
      if (s.year && s.month) {
        monthSet.add(`${s.year}-${String(s.month).padStart(2, '0')}`);
      }
    });
    const sortedMonths = Array.from(monthSet).sort();
    const currentMonthKey = `${calendarYear}-${String(calendarMonth).padStart(2, '0')}`;

    monthPillsBar.innerHTML = '';
    sortedMonths.forEach(m => {
      const [y, mo] = m.split('-');
      const btn = document.createElement('button');
      btn.className = `m-month-pill ${m === currentMonthKey ? 'active' : ''}`;
      btn.textContent = (y === '2026') ? `${parseInt(mo, 10)}月` : `${y}/${parseInt(mo, 10)}月`;
      btn.addEventListener('click', () => {
        calendarYear = parseInt(y, 10);
        calendarMonth = parseInt(mo, 10);
        mSelectedDate = null;
        renderMobile();
        updateUI();
      });
      monthPillsBar.appendChild(btn);
    });
  }

  // 3. Artist Filter Chips Bar
  const artistChipsBar = document.getElementById('mArtistChipsBar');
  if (artistChipsBar) {
    artistChipsBar.innerHTML = '';

    // "All" chip
    const allChip = document.createElement('button');
    allChip.className = `m-artist-chip ${activeArtistFilter === 'all' ? 'active' : ''}`;
    allChip.innerHTML = `<span>🌟 全部</span> <small style="opacity:0.85;">(${allShowsList.length})</small>`;
    allChip.addEventListener('click', () => {
      activeArtistFilter = 'all';
      renderArtistNavTabs();
      renderMobile();
      updateUI();
    });
    artistChipsBar.appendChild(allChip);

    // Each Artist chip
    toursData.forEach(tour => {
      const count = allShowsList.filter(s => s.artistId === tour.id).length;
      const chip = document.createElement('button');
      chip.className = `m-artist-chip ${activeArtistFilter === tour.id ? 'active' : ''}`;
      chip.innerHTML = `<span>${tour.icon || '🎤'} ${tour.name}</span> <small style="opacity:0.85;">(${count})</small>`;
      chip.addEventListener('click', () => {
        activeArtistFilter = tour.id;
        renderArtistNavTabs();
        renderMobile();
        updateUI();
      });
      artistChipsBar.appendChild(chip);
    });
  }

  // 4. Sub-view switching (Calendar vs Agenda List)
  const calContainer = document.getElementById('mCalendarContainer');
  const listContainer = document.getElementById('mAgendaListContainer');
  const viewCalBtn = document.getElementById('mViewCalBtn');
  const viewListBtn = document.getElementById('mViewListBtn');

  if (viewCalBtn) viewCalBtn.classList.toggle('active', mSubView === 'calendar');
  if (viewListBtn) viewListBtn.classList.toggle('active', mSubView === 'list');

  if (mSubView === 'calendar') {
    if (calContainer) calContainer.style.display = 'block';
    if (listContainer) listContainer.style.display = 'none';
    renderMobileCalendarGrid(filtered);
  } else {
    if (calContainer) calContainer.style.display = 'none';
    if (listContainer) listContainer.style.display = 'block';
    renderMobileAgendaList(filtered);
  }
}

function renderMobileCalendarGrid(filtered) {
  const grid = document.getElementById('mDaysGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const firstDay = new Date(calendarYear, calendarMonth - 1, 1).getDay();
  const daysInMonth = new Date(calendarYear, calendarMonth, 0).getDate();
  const prevDays = new Date(calendarYear, calendarMonth - 1, 0).getDate();

  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  // Previous month filler days
  for (let i = firstDay - 1; i >= 0; i--) {
    const cell = document.createElement('div');
    cell.className = 'm-day-cell other-month';
    cell.innerHTML = `<div class="m-date-header"><span class="m-date-number">${prevDays - i}</span></div>`;
    grid.appendChild(cell);
  }

  // Shows in this month
  const currentMonthShows = filtered.filter(s => s.year === calendarYear && s.month === calendarMonth);

  // If no selected date, default to the first date with shows in this month
  if (!mSelectedDate && currentMonthShows.length > 0) {
    mSelectedDate = currentMonthShows[0].dateIso;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateIso = `${calendarYear}-${String(calendarMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayOfWeek = new Date(calendarYear, calendarMonth - 1, day).getDay();
    const dayShows = filtered.filter(s => s.dateIso === dateIso);

    const cell = document.createElement('div');
    let cellClass = 'm-day-cell';
    if (dateIso === todayStr) cellClass += ' is-today';
    if (dayOfWeek === 0) cellClass += ' is-sun';
    if (dayOfWeek === 6) cellClass += ' is-sat';
    if (mSelectedDate === dateIso) cellClass += ' is-selected';
    cell.className = cellClass;

    let chipsHtml = '';
    dayShows.forEach(s => {
      const theme = getArtistTheme(s.artistId);
      chipsHtml += `
        <div class="m-event-chip" style="background:${theme.color}; color:#fff;" onclick="event.stopPropagation(); openShowDetailModal(allShowsList.find(x => x.id === ${s.id}))">
          ${theme.icon} ${s.venue}
        </div>
      `;
    });

    cell.innerHTML = `<div class="m-date-header"><span class="m-date-number">${day}</span></div>${chipsHtml}`;
    cell.addEventListener('click', () => {
      mSelectedDate = dateIso;
      const allCells = grid.querySelectorAll('.m-day-cell');
      allCells.forEach(c => c.classList.remove('is-selected'));
      cell.classList.add('is-selected');
      renderMobileDayAgenda(dateIso, dayShows);
    });

    grid.appendChild(cell);
  }

  // Trailing filler days
  const total = firstDay + daysInMonth;
  const remain = (7 - (total % 7)) % 7;
  for (let i = 1; i <= remain; i++) {
    const cell = document.createElement('div');
    cell.className = 'm-day-cell other-month';
    cell.innerHTML = `<div class="m-date-header"><span class="m-date-number">${i}</span></div>`;
    grid.appendChild(cell);
  }

  // Render Day Agenda for selected date
  const selectedDayShows = filtered.filter(s => s.dateIso === mSelectedDate);
  renderMobileDayAgenda(mSelectedDate, selectedDayShows);
}

function renderMobileDayAgenda(dateIso, shows) {
  const titleEl = document.getElementById('mDayAgendaTitle');
  const badgeEl = document.getElementById('mDayAgendaBadge');
  const listEl = document.getElementById('mDayAgendaList');
  if (!listEl) return;

  if (dateIso) {
    const d = new Date(dateIso);
    const dayNames = ['日', '月', '火', '水', '木', '金', '土'];
    if (titleEl) titleEl.textContent = `${dateIso.replace(/-/g, '.')} (${dayNames[d.getDay()]}) 行程`;
  } else {
    if (titleEl) titleEl.textContent = `本月巡迴演出行程`;
  }

  if (badgeEl) badgeEl.textContent = `${(shows || []).length} 場公演`;

  if (!shows || shows.length === 0) {
    listEl.innerHTML = `
      <div style="text-align:center; padding:24px 10px; color:var(--text-muted); font-size:0.85rem;">
        <div style="font-size:1.8rem; margin-bottom:8px;">☕</div>
        <div>該日無巡迴行程</div>
        <div style="font-size:0.75rem; margin-top:4px; opacity:0.8;">點擊上方月曆中有標記的日期查看巡迴詳情</div>
      </div>
    `;
    return;
  }

  let html = '';
  shows.forEach(s => {
    const theme = getArtistTheme(s.artistId);
    const calUrl = generateGoogleCalendarUrl(s);
    const mapUrl = generateMapUrl(s);
    html += `
      <div class="m-show-card" onclick="openShowDetailModal(allShowsList.find(x => x.id === ${s.id}))">
        <div class="m-show-header">
          <span class="m-artist-badge" style="background:${theme.color}; color:#fff;">
            ${theme.icon} ${s.artistName}
          </span>
          <span class="m-show-date">${s.dateFormatted} (${s.dayOfWeek})</span>
        </div>
        <div class="m-show-tour-name">${s.tourTitle}</div>
        <div class="m-show-venue">📍 ${s.prefecture}・${s.venue}</div>
        <div class="m-show-meta">
          <span>⏰ 進場 OPEN ${s.openTime || '--:--'} / 開演 START ${s.startTime || '--:--'}</span>
        </div>
        <div class="m-show-actions" onclick="event.stopPropagation();">
          <a href="${calUrl}" target="_blank" rel="noopener noreferrer" class="m-action-btn primary">
            📅 加入行事曆
          </a>
          <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="m-action-btn">
            🗺️ Google 地圖
          </a>
        </div>
      </div>
    `;
  });

  listEl.innerHTML = html;
}

function renderMobileAgendaList(filtered) {
  const streamEl = document.getElementById('mAgendaStream');
  if (!streamEl) return;

  if (filtered.length === 0) {
    streamEl.innerHTML = `
      <div style="text-align:center; padding:30px; color:var(--text-muted);">
        沒有找到符合條件的巡迴演出
      </div>
    `;
    return;
  }

  // Group shows by year-month
  const groups = {};
  filtered.forEach(s => {
    const key = `${s.year}年 ${s.month}月`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(s);
  });

  let html = '';
  Object.keys(groups).forEach(key => {
    html += `<div class="m-agenda-group-title">📅 ${key} (${groups[key].length} 場)</div>`;
    groups[key].forEach(s => {
      const theme = getArtistTheme(s.artistId);
      const calUrl = generateGoogleCalendarUrl(s);
      const mapUrl = generateMapUrl(s);
      html += `
        <div class="m-show-card" onclick="openShowDetailModal(allShowsList.find(x => x.id === ${s.id}))">
          <div class="m-show-header">
            <span class="m-artist-badge" style="background:${theme.color}; color:#fff;">
              ${theme.icon} ${s.artistName}
            </span>
            <span class="m-show-date">${s.dateFormatted} (${s.dayOfWeek})</span>
          </div>
          <div class="m-show-tour-name">${s.tourTitle}</div>
          <div class="m-show-venue">📍 ${s.prefecture}・${s.venue}</div>
          <div class="m-show-meta">
            <span>⏰ OPEN ${s.openTime || '--:--'} / START ${s.startTime || '--:--'}</span>
          </div>
          <div class="m-show-actions" onclick="event.stopPropagation();">
            <a href="${calUrl}" target="_blank" rel="noopener noreferrer" class="m-action-btn primary">
              📅 加入行事曆
            </a>
            <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="m-action-btn">
              🗺️ Google 地圖
            </a>
          </div>
        </div>
      `;
    });
  });

  streamEl.innerHTML = html;
}

function setLayoutMode(mode) {
  currentLayoutMode = mode;
  try {
    localStorage.setItem('oversea_timetable_layout_mode', mode);
  } catch (e) {}

  const desktopEl = document.getElementById('desktopLayout');
  const mobileEl = document.getElementById('mobileLayout');
  const labelEl = document.getElementById('currentModeLabel');
  const btnEl = document.getElementById('toggleModeBtn');

  if (mode === 'mobile') {
    if (desktopEl) desktopEl.style.display = 'none';
    if (mobileEl) mobileEl.style.display = 'block';
    if (labelEl) labelEl.textContent = '📱 手機版視圖';
    if (btnEl) btnEl.innerHTML = '<span>💻 切換至電腦版</span>';
    renderMobile();
  } else {
    if (desktopEl) desktopEl.style.display = 'block';
    if (mobileEl) mobileEl.style.display = 'none';
    if (labelEl) labelEl.textContent = '💻 電腦版視圖';
    if (btnEl) btnEl.innerHTML = '<span>📱 切換至手機版</span>';
    updateUI();
  }
}

function toggleLayoutMode() {
  setLayoutMode(currentLayoutMode === 'mobile' ? 'desktop' : 'mobile');
}

function initLayoutMode() {
  let mode = null;
  try {
    mode = localStorage.getItem('oversea_timetable_layout_mode');
  } catch (e) {}

  if (mode === 'mobile' || mode === 'desktop') {
    setLayoutMode(mode);
  } else {
    if (window.innerWidth <= 768) {
      setLayoutMode('mobile');
    } else {
      setLayoutMode('desktop');
    }
  }
}

function setView(view) {
  currentView = view;
  const tableBtn = document.getElementById('tableViewBtn');
  const cardBtn = document.getElementById('cardViewBtn');
  const calendarBtn = document.getElementById('calendarViewBtn');
  const mapBtn = document.getElementById('mapViewBtn');

  if (tableBtn) tableBtn.classList.toggle('active', view === 'table');
  if (cardBtn) cardBtn.classList.toggle('active', view === 'card');
  if (calendarBtn) calendarBtn.classList.toggle('active', view === 'calendar');
  if (mapBtn) mapBtn.classList.toggle('active', view === 'map');
  updateUI();
}

/**
 * Setup Event Listeners
 */
function setupEventListeners() {
  // Search
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim();
      if (clearSearchBtn) clearSearchBtn.style.display = currentSearch ? 'block' : 'none';
      updateUI();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentSearch = '';
      clearSearchBtn.style.display = 'none';
      updateUI();
    });
  }

  // Sort
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      updateUI();
    });
  }

  // View Switcher
  const tableBtn = document.getElementById('tableViewBtn');
  const cardBtn = document.getElementById('cardViewBtn');
  const calendarBtn = document.getElementById('calendarViewBtn');
  const mapBtn = document.getElementById('mapViewBtn');

  if (tableBtn) tableBtn.addEventListener('click', () => setView('table'));
  if (cardBtn) cardBtn.addEventListener('click', () => setView('card'));
  if (calendarBtn) calendarBtn.addEventListener('click', () => setView('calendar'));
  if (mapBtn) mapBtn.addEventListener('click', () => setView('map'));

  // Map toolbar controls
  const togglePrefCluster = document.getElementById('togglePrefCluster');
  if (togglePrefCluster) {
    togglePrefCluster.addEventListener('change', (e) => {
      mapPrefClusterEnabled = e.target.checked;
      updateMapClusterVisibility();
    });
  }

  const toggleRouteLines = document.getElementById('toggleRouteLines');
  if (toggleRouteLines) {
    toggleRouteLines.addEventListener('change', (e) => {
      mapShowRouteLines = e.target.checked;
      if (currentView === 'map') updateUI();
    });
  }

  const toggleConsecutiveOnly = document.getElementById('toggleConsecutiveOnly');
  if (toggleConsecutiveOnly) {
    toggleConsecutiveOnly.addEventListener('change', (e) => {
      mapConsecutiveOnly = e.target.checked;
      if (currentView === 'map') updateUI();
    });
  }

  const resetMapZoomBtn = document.getElementById('resetMapZoomBtn');
  if (resetMapZoomBtn) {
    resetMapZoomBtn.addEventListener('click', () => {
      clearActiveRoute();
      if (leafletMap) {
        leafletMap.setView([36.5, 138.0], 5.5, { animate: true });
      }
    });
  }

  const clearMeasureBtn = document.getElementById('clearMeasureBtn');
  if (clearMeasureBtn) {
    clearMeasureBtn.addEventListener('click', () => {
      clearActiveRoute();
    });
  }

  // Map Timeline Slider controls
  const timelineStartSlider = document.getElementById('timelineStartSlider');
  const timelineEndSlider = document.getElementById('timelineEndSlider');

  if (timelineStartSlider && timelineEndSlider) {
    timelineStartSlider.addEventListener('input', () => updateTimelineFromSliders(false));
    timelineEndSlider.addEventListener('input', () => updateTimelineFromSliders(false));
  }

  // Timeline Quick Presets
  document.querySelectorAll('.btn-timeline-preset[data-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimelinePreset(btn.dataset.preset);
    });
  });

  // Timeline Play Button
  const timelinePlayBtn = document.getElementById('timelinePlayBtn');
  if (timelinePlayBtn) {
    timelinePlayBtn.addEventListener('click', togglePlayTourTimeline);
  }

  // Calendar Prev / Next Month Navigation
  const prevMonthBtn = document.getElementById('calPrevMonthBtn');
  const nextMonthBtn = document.getElementById('calNextMonthBtn');

  if (prevMonthBtn) {
    prevMonthBtn.addEventListener('click', () => {
      calendarMonth -= 1;
      if (calendarMonth < 1) {
        calendarMonth = 12;
        calendarYear -= 1;
      }
      updateUI();
    });
  }

  if (nextMonthBtn) {
    nextMonthBtn.addEventListener('click', () => {
      calendarMonth += 1;
      if (calendarMonth > 12) {
        calendarMonth = 1;
        calendarYear += 1;
      }
      updateUI();
    });
  }

  // Show Detail Modal Close
  const showDetailModal = document.getElementById('showDetailModal');
  const closeShowDetailBtn = document.getElementById('closeShowDetailBtn');
  if (closeShowDetailBtn && showDetailModal) {
    closeShowDetailBtn.addEventListener('click', () => {
      showDetailModal.classList.remove('open');
    });
    showDetailModal.addEventListener('click', (e) => {
      if (e.target === showDetailModal) {
        showDetailModal.classList.remove('open');
      }
    });
  }

  // Handle Calendar Modal Map Route Button (Pick Origin in Calendar, Jump on Destination)
  const modalMapRouteBtn = document.getElementById('modalMapRouteBtn');
  if (modalMapRouteBtn) {
    modalMapRouteBtn.addEventListener('click', () => {
      if (!currentModalShow) return;
      if (showDetailModal) showDetailModal.classList.remove('open');

      if (!selectedOriginShow) {
        // Step 1: Set Origin, remain on Calendar view so user can choose destination!
        selectedOriginShow = currentModalShow;
        updateUI();
      } else if ((selectedOriginShow.globalId || selectedOriginShow.id) === (currentModalShow.globalId || currentModalShow.id)) {
        // Cancel Origin
        clearActiveRoute();
        updateUI();
      } else {
        // Step 2: Destination chosen! Jump to Map and connect!
        const origin = selectedOriginShow;
        const dest = currentModalShow;
        setView('map');

        setTimeout(() => {
          connectTwoVenues(origin, dest);
        }, 120);
      }
    });
  }

  // Clear Origin in Calendar View
  const calClearOriginBtn = document.getElementById('calendarClearOriginBtn');
  if (calClearOriginBtn) {
    calClearOriginBtn.addEventListener('click', () => {
      clearActiveRoute();
      updateUI();
    });
  }

  // Region Chips
  document.querySelectorAll('#regionFilters .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#regionFilters .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeRegionFilter = chip.dataset.region;
      updateUI();
    });
  });

  // Tag Chips
  document.querySelectorAll('#tagFilters .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const filterType = chip.dataset.filter;
      if (activeTagFilter === filterType) {
        chip.classList.remove('active');
        activeTagFilter = null;
      } else {
        document.querySelectorAll('#tagFilters .chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeTagFilter = filterType;
      }
      updateUI();
    });
  });

  // Reset Filter Button
  const resetFilterBtn = document.getElementById('resetFilterBtn');
  if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', () => {
      currentSearch = '';
      if (searchInput) searchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.style.display = 'none';
      activeRegionFilter = 'all';
      activeTagFilter = null;
      document.querySelectorAll('#regionFilters .chip').forEach(c => {
        c.classList.toggle('active', c.dataset.region === 'all');
      });
      document.querySelectorAll('#tagFilters .chip').forEach(c => c.classList.remove('active'));
      updateUI();
    });
  }

  // Copy Table
  const copyBtn = document.getElementById('copyTextBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const items = getFilteredAndSortedShows();
      const text = items.map(s => `${s.globalId || s.id}. [${s.artistName}] ${s.dateFormatted} (${s.dayOfWeek}) [${s.region}] ${s.prefecture}・${s.venue} | OPEN ${s.openTime} / START ${s.startTime}`).join('\n');
      navigator.clipboard.writeText(text).then(() => {
        const origText = copyBtn.innerHTML;
        copyBtn.innerHTML = '已複製！';
        setTimeout(() => { copyBtn.innerHTML = origText; }, 1800);
      }).catch(() => {
        alert('複製失敗，請手動選取');
      });
    });
  }

  // Exports
  const expCsv = document.getElementById('exportCsvBtn');
  if (expCsv) expCsv.addEventListener('click', exportCSV);
  const expIcs = document.getElementById('exportIcsBtn');
  if (expIcs) expIcs.addEventListener('click', exportICS);

  // Custom Text Parser Modal
  const modal = document.getElementById('parserModal');
  const openModalBtn = document.getElementById('openParserBtn');
  const closeModalBtn = document.getElementById('closeParserBtn');
  const inputArtistName = document.getElementById('inputArtistName');
  const inputTourTitle = document.getElementById('inputTourTitle');
  const rawInputText = document.getElementById('rawInputText');
  const loadDefaultBtn = document.getElementById('loadDefaultBtn');
  const applyParseBtn = document.getElementById('applyParseBtn');

  if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
      if (modal) modal.classList.add('open');
    });
  }

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }

  if (loadDefaultBtn) {
    loadDefaultBtn.addEventListener('click', () => {
      toursData = JSON.parse(JSON.stringify(DEFAULT_TOURS));
      rebuildAllShows();
      activeArtistFilter = 'all';
      renderArtistNavTabs();
      updateStats();
      updateUI();
      if (modal) modal.classList.remove('open');
    });
  }

  // Parser Modal Tabs (Text vs AGY URL)
  const tabText = document.getElementById('tabTextImport');
  const tabAgy = document.getElementById('tabAgyUrlImport');
  const paneText = document.getElementById('paneTextImport');
  const paneAgy = document.getElementById('paneAgyUrlImport');
  const inputTourUrl = document.getElementById('inputTourUrl');
  const inputUrlArtistName = document.getElementById('inputUrlArtistName');
  const fetchAndParseUrlBtn = document.getElementById('fetchAndParseUrlBtn');
  const openCliGuideBtn = document.getElementById('openCliGuideBtn');
  const cliGuideBox = document.getElementById('cliGuideBox');
  const agyCmdText = document.getElementById('agyCmdText');
  const copyAgyCmdBtn = document.getElementById('copyAgyCmdBtn');

  if (tabText && tabAgy && paneText && paneAgy) {
    tabText.addEventListener('click', () => {
      tabText.classList.add('active');
      tabAgy.classList.remove('active');
      paneText.style.display = 'block';
      paneAgy.style.display = 'none';
    });

    tabAgy.addEventListener('click', () => {
      tabAgy.classList.add('active');
      tabText.classList.remove('active');
      paneAgy.style.display = 'block';
      paneText.style.display = 'none';
    });
  }

  if (openCliGuideBtn && cliGuideBox) {
    openCliGuideBtn.addEventListener('click', () => {
      const isHidden = cliGuideBox.style.display === 'none';
      cliGuideBox.style.display = isHidden ? 'block' : 'none';
      openCliGuideBtn.textContent = isHidden ? '收起 CLI 指令' : '💡 檢視 CLI 離線指令';
    });
  }

  if (inputTourUrl && agyCmdText) {
    inputTourUrl.addEventListener('input', (e) => {
      const url = e.target.value.trim() || '[貼上網址]';
      agyCmdText.textContent = `agy -p "請讀取此網址的演唱會公告，提取場次資訊並加入 timetable: ${url}"`;
    });
  }

  if (copyAgyCmdBtn && agyCmdText) {
    copyAgyCmdBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(agyCmdText.textContent).then(() => {
        const orig = copyAgyCmdBtn.innerHTML;
        copyAgyCmdBtn.innerHTML = '已複製指令！';
        setTimeout(() => { copyAgyCmdBtn.innerHTML = orig; }, 1800);
      });
    });
  }

  // Direct In-Browser Fetch & Parse Button
  if (fetchAndParseUrlBtn && inputTourUrl) {
    fetchAndParseUrlBtn.addEventListener('click', () => {
      const targetUrl = inputTourUrl.value.trim();
      const customArtist = inputUrlArtistName ? inputUrlArtistName.value.trim() : '';
      fetchAndParseConcertUrl(targetUrl, customArtist);
    });
  }

  if (applyParseBtn) {
    applyParseBtn.addEventListener('click', () => {
      const artistName = inputArtistName.value.trim() || '新歌手';
      const tourTitle = inputTourTitle.value.trim() || `${artistName} Live Tour`;
      const text = rawInputText.value.trim();

      if (!text) {
        alert('請先貼上行程文字！');
        return;
      }

      const tourId = 'tour_' + Date.now();
      const newTour = {
        id: tourId,
        name: artistName,
        tourTitle: tourTitle,
        subtitle: tourTitle,
        color: '#2ed573',
        icon: '🎵',
        badgeClass: 'custom',
        rawText: text
      };

      const parsedShows = parseScheduleText(text, newTour);
      if (parsedShows.length === 0) {
        alert('未能解析出有效的行程資料，請確認格式（需包含年月日與時間）');
        return;
      }

      toursData.push(newTour);
      rebuildAllShows();
      activeArtistFilter = tourId;
      renderArtistNavTabs();
      updateStats();
      updateUI();
      if (modal) modal.classList.remove('open');
    });
  }

  // Mode Switcher Toggle
  const toggleModeBtn = document.getElementById('toggleModeBtn');
  if (toggleModeBtn) {
    toggleModeBtn.addEventListener('click', toggleLayoutMode);
  }

  // Mobile Month Controls
  const mPrevMonthBtn = document.getElementById('mPrevMonthBtn');
  const mNextMonthBtn = document.getElementById('mNextMonthBtn');
  const mTodayBtn = document.getElementById('mTodayBtn');

  if (mPrevMonthBtn) {
    mPrevMonthBtn.addEventListener('click', () => {
      calendarMonth -= 1;
      if (calendarMonth < 1) {
        calendarMonth = 12;
        calendarYear -= 1;
      }
      mSelectedDate = null;
      renderMobile();
      updateUI();
    });
  }

  if (mNextMonthBtn) {
    mNextMonthBtn.addEventListener('click', () => {
      calendarMonth += 1;
      if (calendarMonth > 12) {
        calendarMonth = 1;
        calendarYear += 1;
      }
      mSelectedDate = null;
      renderMobile();
      updateUI();
    });
  }

  if (mTodayBtn) {
    mTodayBtn.addEventListener('click', () => {
      calendarYear = 2026;
      calendarMonth = 10;
      mSelectedDate = null;
      renderMobile();
      updateUI();
    });
  }

  // Mobile Search Controls
  const mSearchInput = document.getElementById('mSearchInput');
  const mClearSearchBtn = document.getElementById('mClearSearchBtn');

  if (mSearchInput) {
    mSearchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim();
      if (mClearSearchBtn) mClearSearchBtn.style.display = currentSearch ? 'block' : 'none';
      if (searchInput) searchInput.value = currentSearch;
      renderMobile();
      updateUI();
    });
  }

  if (mClearSearchBtn) {
    mClearSearchBtn.addEventListener('click', () => {
      if (mSearchInput) mSearchInput.value = '';
      if (searchInput) searchInput.value = '';
      currentSearch = '';
      mClearSearchBtn.style.display = 'none';
      renderMobile();
      updateUI();
    });
  }

  // Mobile Sub-View Toggles
  const mViewCalBtn = document.getElementById('mViewCalBtn');
  const mViewListBtn = document.getElementById('mViewListBtn');

  if (mViewCalBtn) {
    mViewCalBtn.addEventListener('click', () => {
      mSubView = 'calendar';
      renderMobile();
    });
  }

  if (mViewListBtn) {
    mViewListBtn.addEventListener('click', () => {
      mSubView = 'list';
      renderMobile();
    });
  }
}

/**
 * Direct In-Browser URL Fetch & AGY Gemini Pro AI Parse
 */
async function fetchAndParseConcertUrl(url, specifiedArtistName = '') {
  const statusEl = document.getElementById('fetchStatusMsg');
  const btn = document.getElementById('fetchAndParseUrlBtn');

  function setStatus(type, msg) {
    if (!statusEl) return;
    statusEl.className = `fetch-status-msg ${type}`;
    statusEl.innerHTML = msg;
    statusEl.style.display = 'block';
  }

  if (!url || !url.startsWith('http')) {
    setStatus('error', '⚠️ 請輸入以 http:// 或 https:// 開頭的有效網址！');
    return;
  }

  setStatus('loading', '🤖 <b>正在呼叫本地 AGY AI (Gemini Pro) 進行深度解析...</b><br><span style="font-size:0.78rem; opacity:0.85;">連線網頁 ➔ 嚴格過濾抽票售票雜訊 ➔ 精準提取場館與時間</span>');
  if (btn) btn.disabled = true;

  try {
    // Call the local AGY bridge server
    const bridgeUrl = 'http://localhost:3000/api/parse';
    const response = await fetch(bridgeUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url: url,
        artistName: specifiedArtistName,
        saveToAppJs: true
      })
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || 'AGY 伺服器解析失敗');
    }

    // Successfully parsed by Gemini Pro via AGY!
    const newTour = data.tour;
    
    // Add into current active memory if not duplicate
    const existingIndex = toursData.findIndex(t => t.id === newTour.id || t.name === newTour.name);
    if (existingIndex !== -1) {
      toursData[existingIndex] = newTour;
    } else {
      toursData.push(newTour);
    }

    rebuildAllShows();
    activeArtistFilter = newTour.id;
    renderArtistNavTabs();
    updateStats();
    updateUI();

    setStatus('success', `🎉 <b>AGY (Gemini Pro) 解析成功！</b><br>已收錄【${newTour.name}】共 <b>${data.showCount}</b> 場巡迴演出，並已自動同步至日曆、表格與地圖中！`);

    setTimeout(() => {
      const modal = document.getElementById('parserModal');
      if (modal) modal.classList.remove('open');
      if (btn) btn.disabled = false;
      statusEl.style.display = 'none';
    }, 1600);

  } catch (bridgeErr) {
    console.error('AGY Bridge connection error:', bridgeErr);
    setStatus('error', `
      ❌ <b>無法連線至本地 AGY AI 伺服器 (http://localhost:3000)</b><br>
      <div style="margin-top: 6px; font-size: 0.8rem; color: #fff;">
        💡 <b>只需 1 秒啟動本地 AI 橋接</b>：<br>
        在終端機中執行：<code style="background:#0d1117; padding:2px 6px; border-radius:4px; color:#79c0ff;">node server.js</code><br>
        即可直接在網頁上呼叫本機最強的 Gemini Pro 大模型！<br><br>
        （或者：您也可以直接在對話中把網址傳給我，我會直接幫您抓取並加入！）
      </div>
    `);
    if (btn) btn.disabled = false;
  }
}

/**
 * Initialize Application
 */
function init() {
  toursData = JSON.parse(JSON.stringify(DEFAULT_TOURS));
  rebuildAllShows();
  renderArtistNavTabs();
  updateStats();
  setupEventListeners();
  initMapTimeline();
  setView('calendar');
  initLayoutMode();
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', init);
