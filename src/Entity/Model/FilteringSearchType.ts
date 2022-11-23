export type Search = {
  text: string
  value: number
  isChecked: boolean
}

/* ------------------------- 都道府県 ------------------------- */
export const HokkaidoTohokuContent: Search[] = [
  // 北海道・東北
  { text: '北海道', value: 0, isChecked: false },
  { text: '青森県', value: 1, isChecked: false },
  { text: '岩手県', value: 2, isChecked: false },
  { text: '宮城県', value: 3, isChecked: false },
  { text: '秋田県', value: 4, isChecked: false },
  { text: '山形県', value: 5, isChecked: false },
  { text: '福島県', value: 6, isChecked: false },
]

export const KantouContent: Search[] = [
  // 関東
  { text: '茨城県', value: 7, isChecked: false },
  { text: '栃木県', value: 8, isChecked: false },
  { text: '群馬県', value: 9, isChecked: false },
  { text: '埼玉県', value: 10, isChecked: false },
  { text: '千葉県', value: 11, isChecked: false },
  { text: '東京都', value: 12, isChecked: false },
  { text: '神奈川県', value: 13, isChecked: false },
]

export const JyoushinetuHokurikuContent: Search[] = [
  // 上信越・北陸
  { text: '新潟県', value: 14, isChecked: false },
  { text: '富山県', value: 15, isChecked: false },
  { text: '石川県', value: 16, isChecked: false },
  { text: '福井県', value: 17, isChecked: false },
  { text: '山梨県', value: 18, isChecked: false },
  { text: '長野県', value: 19, isChecked: false },
]

export const ToukaiContent: Search[] = [
  // 東海
  { text: '岐阜県', value: 20, isChecked: false },
  { text: '静岡県', value: 21, isChecked: false },
  { text: '愛知県', value: 22, isChecked: false },
  { text: '三重県', value: 23, isChecked: false },
]

export const KansaiContent: Search[] = [
  // 関西
  { text: '滋賀県', value: 24, isChecked: false },
  { text: '京都府', value: 25, isChecked: false },
  { text: '大阪府', value: 26, isChecked: false },
  { text: '兵庫県', value: 27, isChecked: false },
  { text: '奈良県', value: 28, isChecked: false },
  { text: '和歌山県', value: 29, isChecked: false },
]

export const ChugokuContent: Search[] = [
  // 中国
  { text: '鳥取県', value: 30, isChecked: false },
  { text: '島根県', value: 31, isChecked: false },
  { text: '岡山県', value: 32, isChecked: false },
  { text: '広島県', value: 33, isChecked: false },
  { text: '山口県', value: 34, isChecked: false },
]

export const ShikokuContent: Search[] = [
  // 四国
  { text: '徳島県', value: 35, isChecked: false },
  { text: '香川県', value: 36, isChecked: false },
  { text: '愛媛県', value: 37, isChecked: false },
  { text: '高知県', value: 38, isChecked: false },
]

export const KyusyuOkinawaContent: Search[] = [
  // 九州・沖縄
  { text: '福岡県', value: 39, isChecked: false },
  { text: '佐賀県', value: 40, isChecked: false },
  { text: '長崎県', value: 41, isChecked: false },
  { text: '熊本県', value: 42, isChecked: false },
  { text: '大分県', value: 43, isChecked: false },
  { text: '宮崎県', value: 44, isChecked: false },
  { text: '鹿児島県', value: 45, isChecked: false },
  { text: '沖縄県', value: 46, isChecked: false },
]

export const OverSeasContent: Search[] = [
  // 海外・その他
  { text: '海外', value: 47, isChecked: false },
]

/* ------------------------------------------------------------ */

/* --------------------------- 業界 --------------------------- */

export const ITIndustryContent: Search[] = [
  // IT・インターネット・ゲーム
  { text: 'IT', value: 0, isChecked: false },
  { text: '通信キャリア', value: 1, isChecked: false },
  { text: 'インターネット広告・メディア', value: 2, isChecked: false },
  { text: 'WEB制作・WEBデザイン', value: 3, isChecked: false },
  { text: 'ゲーム', value: 4, isChecked: false },
  { text: 'IT・インターネット・ゲーム（その他）', value: 5, isChecked: false },
]

export const ManufacturerIndustryContent: Search[] = [
  // メーカー
  { text: 'メーカー（コンピューター・通信系）', value: 6, isChecked: false },
  { text: 'メーカー（電気・電子・半導体）', value: 7, isChecked: false },
  { text: 'メーカー（自動車・輸送機器）', value: 8, isChecked: false },
  { text: 'メーカー（機械）', value: 9, isChecked: false },
  { text: 'メーカー（化学・素材）', value: 10, isChecked: false },
  { text: 'メーカー（食品）', value: 11, isChecked: false },
  { text: 'メーカー（医薬品・医療機器）', value: 12, isChecked: false },
  { text: 'メーカー（ファッション・アパレル）', value: 13, isChecked: false },
  { text: 'メーカー（日用品・化粧品）', value: 14, isChecked: false },
  { text: 'メーカー（その他）', value: 15, isChecked: false },
]

export const TradingIndustryContent: Search[] = [
  // 商社
  { text: '商社（総合）', value: 16, isChecked: false },
  {
    text: '商社（化学・石油・ガラス・セラミック・セメント）',
    value: 17,
    isChecked: false,
  },
  { text: '商社（鉄鋼・金属）', value: 18, isChecked: false },
  { text: '商社（住宅・建材・エクステリア）', value: 19, isChecked: false },
  { text: '商社（医薬品・化粧品・バイオ）', value: 20, isChecked: false },
  { text: '商社（食品）', value: 21, isChecked: false },
  { text: '商社（紙・パルプ）', value: 22, isChecked: false },
  { text: '商社（ファッション・アパレル）', value: 23, isChecked: false },
  { text: '商社（インテリア）', value: 24, isChecked: false },
  { text: '商社（紙・パルプ）', value: 25, isChecked: false },
]

export const ServiceIndustryContent: Search[] = [
  // 流通・小売・サービス
  {
    text: '流通・小売（百貨店・スーパー・コンビニ）',
    value: 26,
    isChecked: false,
  },
  { text: '流通・小売（ファッション・アパレル）', value: 27, isChecked: false },
  { text: '流通・小売（医薬品・化粧品）', value: 28, isChecked: false },
  { text: '流通・小売（食品）', value: 29, isChecked: false },
  { text: '流通・小売（家電）', value: 30, isChecked: false },
  { text: '通信販売', value: 31, isChecked: false },
  { text: 'フード・レストラン', value: 32, isChecked: false },
  { text: 'レジャー・アミューズメント', value: 33, isChecked: false },
  { text: '人材ビジネス', value: 34, isChecked: false },
  { text: 'コールセンター', value: 35, isChecked: false },
  { text: 'ホテル・観光', value: 36, isChecked: false },
  { text: '流通・小売・サービス（その他）', value: 37, isChecked: false },
]

export const AdvertisementIndustryContent: Search[] = [
  // 広告・出版・マスコミ
  { text: '放送・広告・印刷・出版', value: 38, isChecked: false },
]

export const ConsultingIndustryContent: Search[] = [
  // コンサルティング
  {
    text: 'コンサルティングファーム・シンクタンク',
    value: 39,
    isChecked: false,
  },
]

export const FinanceIndustryContent: Search[] = [
  // 金融
  { text: '金融（銀行）', value: 40, isChecked: false },
  { text: '金融（保険）', value: 41, isChecked: false },
  { text: '金融（証券）', value: 42, isChecked: false },
  { text: '金融（その他）', value: 43, isChecked: false },
]

export const ConstructionIndustryContent: Search[] = [
  // 建設・不動産
  { text: '不動産', value: 44, isChecked: false },
  { text: '建築・土木', value: 45, isChecked: false },
]

export const MedicalIndustryContent: Search[] = [
  // メディカル
  { text: '医療', value: 46, isChecked: false },
  { text: '福祉・介護', value: 47, isChecked: false },
]

export const DistributionIndustryContent: Search[] = [
  // 流通・運輸
  { text: '物流・倉庫', value: 48, isChecked: false },
  { text: '陸運・海運・航空・鉄道', value: 49, isChecked: false },
]

export const OtherIndustryContent: Search[] = [
  // その他（インフラ・教育・官公庁）
  { text: '電気・ガス・水道', value: 50, isChecked: false },
  { text: '教育・学校', value: 51, isChecked: false },
  { text: '団体・連合会・官公庁', value: 52, isChecked: false },
  { text: 'その他の業種', value: 53, isChecked: false },
]

/* ------------------------------------------------------------ */

/* --------------------------- 職種 --------------------------- */
export const CorporatePlanningContent: Search[] = [
  // 経営・経営企画・事業企画系
  {
    text: '経営者・COO・経営幹部・カントリーヘッド',
    value: 0,
    isChecked: false,
  },
  { text: '経営企画・事業企画', value: 1, isChecked: false },
  { text: 'M＆A', value: 2, isChecked: false },
  { text: '新規事業', value: 3, isChecked: false },
  { text: 'その他・経営・経営企画・事業企画系', value: 4, isChecked: false },
]

export const ManagementContent: Search[] = [
  // 管理部門系
  { text: '総務', value: 5, isChecked: false },
  { text: '人事（採用・労務・教育など）', value: 6, isChecked: false },
  { text: '人事制度・企画', value: 7, isChecked: false },
  { text: '法務・コンプライアンス', value: 8, isChecked: false },
  { text: '特許・知的財産関連', value: 9, isChecked: false },
  { text: 'CFO', value: 10, isChecked: false },
  { text: '経理', value: 11, isChecked: false },
  { text: '財務・コントローラー', value: 12, isChecked: false },
  { text: '内部監査', value: 13, isChecked: false },
  { text: '会計・税務', value: 14, isChecked: false },
  { text: '広報・IR', value: 15, isChecked: false },
  { text: '管理部長', value: 16, isChecked: false },
  { text: '秘書・セクレタリー・アシスタント', value: 17, isChecked: false },
  { text: '一般事務・営業事務', value: 18, isChecked: false },
  { text: 'その他・管理部門系', value: 19, isChecked: false },
]

export const SCMContent: Search[] = [
  // SCM・ロジスティクス・物流・購買・貿易系
  { text: '購買・調達', value: 20, isChecked: false },
  { text: 'SCM', value: 21, isChecked: false },
  { text: '物流企画・ロジスティクス', value: 22, isChecked: false },
  { text: '貿易・通関', value: 23, isChecked: false },
  { text: 'センター・倉庫管理・運行・配車管理', value: 24, isChecked: false },
  {
    text: 'その他・SCM・ロジスティクス・物流・貿易系',
    value: 25,
    isChecked: false,
  },
]

export const SalesContent: Search[] = [
  // 営業系
  { text: '営業（個人営業）', value: 26, isChecked: false },
  { text: '営業（法人営業）', value: 27, isChecked: false },
  { text: '海外営業', value: 28, isChecked: false },
  { text: '営業マネージャー・管理職', value: 29, isChecked: false },
  {
    text: 'MR（医療情報担当者）・MS（医療品卸販売担当者）',
    value: 30,
    isChecked: false,
  },
  { text: '人材コンサルタント・コーディネーター', value: 31, isChecked: false },
  { text: 'その他・営業系', value: 32, isChecked: false },
]

export const MarketingContent: Search[] = [
  // マーケティング・販売企画・商品開発系
  { text: '商品企画・開発', value: 33, isChecked: false },
  { text: 'マーケティング・販売企画', value: 34, isChecked: false },
  {
    text: 'マーケティングプランナー・Webプランナー',
    value: 35,
    isChecked: false,
  },
  { text: '営業企画', value: 36, isChecked: false },
  { text: 'ブランド・プロダクトマネージャー', value: 37, isChecked: false },
  { text: 'Web・デジタルマーケティング', value: 38, isChecked: false },
  { text: 'マーケティンリサーチ・分析', value: 39, isChecked: false },
  { text: 'その他・マーケティング系', value: 40, isChecked: false },
]

export const ConsultantContent: Search[] = [
  // コンサルタント系（戦略、財務、組織、その他専門）
  { text: '戦略コンサルタント', value: 41, isChecked: false },
  { text: '財務・会計コンサルタント', value: 42, isChecked: false },
  { text: '組織・人事コンサルタント', value: 43, isChecked: false },
  { text: '調査員・リサーチャー', value: 44, isChecked: false },
  { text: '弁護士・弁理士', value: 45, isChecked: false },
  { text: '会計士・税理士', value: 46, isChecked: false },
  { text: 'その他・コンサルタント系', value: 47, isChecked: false },
]

export const FinanceContent: Search[] = [
  // 金融系専門職
  { text: '法人営業（金融）', value: 48, isChecked: false },
  { text: '個人営業（金融）・FP', value: 49, isChecked: false },
  { text: '代理店営業・ホールセラー', value: 50, isChecked: false },
  { text: '投資研究・アナリスト・エコノミスト', value: 51, isChecked: false },
  {
    text: 'ファンドマネージャー・ディーラー・トレーダー',
    value: 52,
    isChecked: false,
  },
  { text: 'インベストメントバンキング・M＆A', value: 53, isChecked: false },
  { text: 'コーポレートファイナンス', value: 54, isChecked: false },
  { text: 'リスク管理・与信管理・債務管理', value: 55, isChecked: false },
  { text: 'コンプライアンス・監査', value: 56, isChecked: false },
  { text: '金融事務・決済・計理・主計', value: 57, isChecked: false },
  { text: 'アンダーライター・損害調査', value: 58, isChecked: false },
  { text: '金融商品企画・ストラクチャード', value: 59, isChecked: false },
  { text: 'アクチュアリー', value: 60, isChecked: false },
  { text: 'その他・金融系', value: 61, isChecked: false },
]

export const RealEstateContent: Search[] = [
  // 不動産系専門職
  { text: '不動産企画・仕入・開発', value: 62, isChecked: false },
  {
    text: 'アセットマネジメント・ヘッジファンド・PE投資',
    value: 63,
    isChecked: false,
  },
  { text: 'プロパティマネジメント', value: 64, isChecked: false },
  { text: '不動産鑑定評価（デューデリジェンス）', value: 65, isChecked: false },
  { text: 'ファシリティマネジメント・設備管理', value: 66, isChecked: false },
  { text: 'フロント・マンション管理', value: 67, isChecked: false },
  { text: 'その他・不動産系専門職', value: 68, isChecked: false },
]

export const ITContent: Search[] = [
  // 技術系（IT・WEB・通信系）
  { text: 'CTO・CIO', value: 69, isChecked: false },
  { text: 'ITコンサルタント', value: 70, isChecked: false },
  { text: 'ビジネスアナリスト・アーキテクト', value: 71, isChecked: false },
  { text: 'PM（WEB・オープン）', value: 72, isChecked: false },
  { text: 'PM（汎用系）', value: 73, isChecked: false },
  { text: 'PM（パッケージ・ミドルウェア系）', value: 74, isChecked: false },
  { text: 'SE（WEB・オープン）', value: 75, isChecked: false },
  { text: 'SE（汎用系）', value: 76, isChecked: false },
  { text: 'SE（パッケージ・ミドルウェア系）', value: 77, isChecked: false },
  { text: 'サーバー・ネットワークエンジニア', value: 78, isChecked: false },
  { text: 'DBエンジニア', value: 79, isChecked: false },
  { text: 'プリセールス・セールスエンジニア', value: 80, isChecked: false },
  { text: '社内SE・システム管理', value: 81, isChecked: false },
  { text: 'プロダクトマネージャー', value: 82, isChecked: false },
  { text: 'データサイエンティスト', value: 83, isChecked: false },
  { text: '製品開発・研究', value: 84, isChecked: false },
  { text: 'テクニカルサポート', value: 85, isChecked: false },
  { text: 'その他・技術系（IT・WEB・通信系）', value: 86, isChecked: false },
]

export const ElectricityContent: Search[] = [
  // 技術系（電気・電子・半導体）
  {
    text: '設計・開発エンジニア（電気・電子回路）',
    value: 87,
    isChecked: false,
  },
  { text: '設計・開発エンジニア（半導体）', value: 88, isChecked: false },
  {
    text: '設計・開発エンジニア（その他・電気・電子・半導体）',
    value: 89,
    isChecked: false,
  },
  {
    text: 'アプリケーション開発エンジニア（制御・組み込み系）',
    value: 90,
    isChecked: false,
  },
  { text: 'PM（制御・組み込み系）', value: 91, isChecked: false },
  {
    text: '生産技術・製造技術・エンジニアリング（電気・電子）',
    value: 92,
    isChecked: false,
  },
  {
    text: '生産管理・品質管理・品質保証・工場長（電気・電子）',
    value: 93,
    isChecked: false,
  },
  { text: 'セールスエンジニア（電気・電子）', value: 94, isChecked: false },
  { text: 'サポートエンジニア（電気・電子）', value: 95, isChecked: false },
  { text: 'PM（電気・電子）', value: 96, isChecked: false },
  { text: 'その他・技術系（電気・電子・半導体）', value: 97, isChecked: false },
]

export const MachineContent: Search[] = [
  // 技術系（機械・メカトロ・自動車）
  {
    text: '設計・開発エンジニア（自動車・輸送機器）',
    value: 98,
    isChecked: false,
  },
  {
    text: '設計・開発エンジニア（その他・機械・メカトロ・自動車）',
    value: 99,
    isChecked: false,
  },
  {
    text: '生産技術・製造技術・エンジニアリング（機械・自動車）',
    value: 100,
    isChecked: false,
  },
  {
    text: '生産管理・品質管理・品質保証・工場長（機械・自動車）',
    value: 101,
    isChecked: false,
  },
  { text: 'セールスエンジニア（機械・自動車）', value: 102, isChecked: false },
  { text: 'サポートエンジニア（機械・自動車）', value: 103, isChecked: false },
  { text: 'PM（機械・自動車）', value: 104, isChecked: false },
  {
    text: 'その他・技術系（その他・機械・メカトロ・自動車）',
    value: 105,
    isChecked: false,
  },
]

export const ChemistryContent: Search[] = [
  // 技術系（化学・素材・食品・衣料）
  {
    text: '研究・開発（化学・素材・食品・衣料）',
    value: 106,
    isChecked: false,
  },
  {
    text: '研究・開発（その他・化学・素材・食品・衣料）',
    value: 107,
    isChecked: false,
  },
  {
    text: '生産技術・製造技術・エンジニアリング（化学・素材・食品・衣料）',
    value: 108,
    isChecked: false,
  },
  {
    text: '生産管理・品質管理・品質保証・工場長（化学・素材・食品・衣料）',
    value: 109,
    isChecked: false,
  },
  {
    text: 'セールスエンジニア（化学・素材・食品・衣料）',
    value: 110,
    isChecked: false,
  },
  {
    text: 'サポートエンジニア（化学・素材・食品・衣料）',
    value: 111,
    isChecked: false,
  },
  { text: 'PM（化学・素材・食品・衣料）', value: 112, isChecked: false },
  {
    text: 'その他・技術系（その他・化学・素材・食品・衣料）',
    value: 113,
    isChecked: false,
  },
]

export const ConstructionContent: Search[] = [
  // 技術系（建設・設備・土木・プラント）
  { text: '設計（建築）', value: 114, isChecked: false },
  { text: '設計（設備）', value: 115, isChecked: false },
  { text: '設計（土木）', value: 116, isChecked: false },
  { text: '施工管理（建築）', value: 117, isChecked: false },
  { text: '施工管理（設備）', value: 118, isChecked: false },
  { text: '施工管理（土木）', value: 119, isChecked: false },
  { text: 'プラントエンジニアリング', value: 120, isChecked: false },
  {
    text: '建築・土木技術開発・建設コンサルタント',
    value: 121,
    isChecked: false,
  },
  {
    text: 'その他・技術系（建築・設備・土木・プラント）',
    value: 122,
    isChecked: false,
  },
]

export const MedicalContent: Search[] = [
  // 技術系（メディカル）
  { text: '研究・開発（医薬品）', value: 123, isChecked: false },
  { text: '研究・開発（医療用具・医療機器）', value: 124, isChecked: false },
  { text: '研究・開発（その他・メディカル）', value: 125, isChecked: false },
  { text: '臨床開発・治験', value: 126, isChecked: false },
  { text: '薬事', value: 127, isChecked: false },
  { text: '学術', value: 128, isChecked: false },
  {
    text: '生産技術・製造技術・エンジニアリング（メディカル）',
    value: 129,
    isChecked: false,
  },
  {
    text: '生産管理・品質管理・品質保証・工場長（メディカル）',
    value: 130,
    isChecked: false,
  },
  { text: 'セールスエンジニア（メディカル）', value: 131, isChecked: false },
  { text: 'サポートエンジニア（メディカル）', value: 132, isChecked: false },
  { text: 'PM（メディカル）', value: 133, isChecked: false },
  { text: 'CRA・CRC', value: 134, isChecked: false },
  { text: 'その他・技術系（メディカル）', value: 135, isChecked: false },
]

export const ServiceContent: Search[] = [
  // 接客・販売・サービス・流通系
  { text: 'SV', value: 136, isChecked: false },
  { text: 'バイヤー、マーチャンダイザー、VMD', value: 137, isChecked: false },
  { text: '支配人・ホテルフロント', value: 138, isChecked: false },
  { text: '施設長・事務長・その他介護福祉系職', value: 139, isChecked: false },
  { text: '店舗開発・FC開発', value: 140, isChecked: false },
  { text: '講師・教師・インストラクター', value: 141, isChecked: false },
  { text: 'コールセンター運営・管理', value: 142, isChecked: false },
  {
    text: '料理長・シェフ・調理師・メニュー開発',
    value: 143,
    isChecked: false,
  },
  { text: '通訳・翻訳', value: 144, isChecked: false },
  { text: 'その他・サービス・流通系', value: 145, isChecked: false },
]

export const CreativeContent: Search[] = [
  // クリエイティブ系
  { text: 'プランナー', value: 146, isChecked: false },
  { text: 'プロデューサー・ディレクター', value: 147, isChecked: false },
  { text: 'デザイナー', value: 148, isChecked: false },
  { text: 'Webサイト運営・コンテンツ企画', value: 149, isChecked: false },
  { text: '編集・コピーライター', value: 150, isChecked: false },
  { text: 'その他・クリエイティブ', value: 151, isChecked: false },
]

export const useOccupationSearchList = () => {
  return CorporatePlanningContent.concat(
    ManagementContent,
    SCMContent,
    SalesContent,
    MarketingContent,
    ConsultantContent,
    FinanceContent,
    RealEstateContent,
    ITContent,
    ElectricityContent,
    MachineContent,
    ChemistryContent,
    MedicalContent,
    ConstructionContent,
    ServiceContent,
    CreativeContent
  )
}
/* ------------------------------------------------------------ */

/* --------------------------- 募集対象 --------------------------- */

export const TargetContent: Search[] = [
  // 対象
  { text: '中途', value: 0, isChecked: false },
  { text: '既卒', value: 1, isChecked: false },
  { text: '新卒', value: 2, isChecked: false },
]
/* ---------------------------------------------------------- */

/* --------------------------- 最終学歴 --------------------------- */

export const EducationContent: Search[] = [
  // 最終学歴
  { text: '中卒以上', value: 0, isChecked: false },
  { text: '高卒以上', value: 1, isChecked: false },
  { text: '専卒以上（短大含む）', value: 2, isChecked: false },
  { text: '専卒以上（短大除く）', value: 3, isChecked: false },
  { text: '短卒以上（専卒含む）', value: 4, isChecked: false },
  { text: '短卒以上（専卒除く）', value: 5, isChecked: false },
  { text: '大卒以上', value: 6, isChecked: false },
  { text: '院卒以上', value: 7, isChecked: false },
]
/* ---------------------------------------------------------- */

/* --------------------------- 人物タイプ --------------------------- */

export const HumanTypeContent: Search[] = [
  // 人物タイプ
  { text: 'ロジカル系（頭脳明晰、インテリ）', value: 0, isChecked: false },
  { text: '体育会系（元気ハツラツ、行動型）', value: 1, isChecked: false },
  {
    text: '生徒会長系（堅実、真面目、リーダーシップ）',
    value: 2,
    isChecked: false,
  },
  { text: 'バランサー系（協調協力・人当たり）', value: 3, isChecked: false },
  { text: '研究者系（オタク気質）', value: 4, isChecked: false },
]

/* ---------------------------------------------------------- */
