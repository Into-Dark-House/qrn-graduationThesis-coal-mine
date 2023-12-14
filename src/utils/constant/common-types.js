export const COMMON_TYPES = {
  ROUTER: {
    BASIC_LAYOUT: 'layouts/BasicLayout',
    BLANK_LAYOUT: 'layouts/BlankLayout',
    PAGE_VIEW: 'layouts/PageView',
    BASIC_PATH: '/',
    ROUTER_PREFIX: 'views',
    ROUTER_SUFFIX: '/index'
  },
  APPLICATION: {
    CURR_SYSTEM: 'VISUAL_MODEL_SYSTEM' // 默认平台
  },
  DEMO: {
    CHILDINTERVAL: 3000
  },
  SYSTEM: {
    ALL: -1, // 全部
    DEVELOPMENT: 0, // 开拓
    DRIVING: 1, // 采准
    // DEEP_HOLE: 2, // 中深孔
    STOPING: 3, // 回采
    CHUTE: 4, // 溜井监控
    TRANSPORT: 5, // 运输及提升管控
    VENTILATE: 6, // 通风系统
    WATER: 7, // 供排水系统
    POWER: 8, // 供配电系统
    AIR: 9, // 压气系统
    SUPPORT: 10, // 支护
    BLASTING: 11, // 爆破施工管控
    EVACUATE: 12 // 紧急疏散
  },
  THREE_OBJ_CATE: {
    LEVEL: 0, // 电子地图
    POI: 1, // 兴趣点
    FENCE: 2 // 电子围栏
  },
  TUNNEL_TYPE: {
    TUNNEL: 0, // 巷道
    SURFACE: 1, // 地表
    SHELL: 2, // 轮廓
    GIS: 3, // gis地图数据
    TUNNEL_GROUP: 10, // 巷道集合，为了显示优化(后期处理)
    TUNNEL_GROUP_CHILD: 11 // 巷道集合Child，为了显示优化(后期处理)
  },
  INTEREST_TYPE: { // 暂定
    STAFF: 0, // 员工
    // ------补充巷道、井等------
    JIN_LU: 1, // 进路
    FENG_LIU: 2, // 风流,跟随模型，通过后台计算获取
    WU_FENG: 3, // 污风,跟随模型，通过后台计算获取
    LIU_JING: 4, // 溜井
    FENG_JING: 5, // 风井
    FU_JING: 6, // 副井，电梯间,罐笼
    CABLE_JING: 7, // 管缆井
    // ------安全标签------
    ESCAPE: 21, // 逃生出口
    ACCIDENT: 22, // 事故
    // ------设备、间等------
    CONTROL_MONITOR: 41, // 检测监控
    VIDEO_MONITOR: 42, // 视频监控
    FIXED_EQUIP: 43, // 固定设备
    LOCAL_FAN: 44, // 局扇
    TRAFFIC_LIGHT: 45, // 红绿灯
    FAN_STATION: 46, // 风机站
    PEI_DIAN_SHI: 47, // 配电室
    YA_QI_ZHAN: 48, // 压气站
    SHUI_CHI: 49, // 水池
    BASE_STATION: 50, // 基站
    // ------车辆（有轨、无轨）------
    TRAM: 70, // 有轨机车
    TRAM_CD: 71, // 有轨机车车斗
    TRUCK: 72, // 无轨---铲运机
    TRUCK_JJTC: 73, // 无轨--掘进台车
    TRUCK_ZYTC: 74, // 无轨--凿岩台车
    TRUCK_EXPLOSIVE: 75, // 无轨--炸药车
    // ------计划type暂从100起始，与其他区分------
    PLAN_JJ: 101, // 掘进计划
    PLAN_JJGZM: 102, // 掘进工作面
    PLAN_JJGZM_CHECKED: 103, // 掘进工作面，已验收，应通过WORK_STATE区分，方便加载暂使用type区分
    PLAN_ZSKZY: 104, // 中深孔凿岩计划
    PLAN_ZSKZYGZM: 105, // 中深孔凿岩工作面
    PLAN_BPHC: 106, // 爆破回采计划
    PLAN_BPGZM: 107, // 爆破工作面
    PLAN_HCGZM: 108, // 回采工作面
    PLAN_DZZH: 109, // 地质支护计划
    PLAN_DZZHGZM: 110, // 地质支护工作面
    PLAN_KT: 111, // 开拓计划
    PLAN_KTGZM: 112 // 开拓工作面
  },
  FENCY_TYPE: {
    EXPLOSION: 0, // 装药爆破
    SUPPORT: 1 // 支护
  },
  MODEL_TYPE: {
    GEOMETRIC: 0, // 标准几何体
    FBX: 1,
    OBJ: 2,
    DRACO: 3,
    PLINE: 4,
    PLANE: 5,
    CUBE: 6
  },
  WORK_STATE: {
    TODO: 0, // 待施工
    DOING: 1, // 施工进行中
    DONE_NOCHECKED: 2, // 已施工-未验收
    DONE_CHECKED: 3 // 已施工-已验收
  },
  WORK_STATE_COLOR: {
    // TODO: '#D7D724', // 待施工
    TODO: '#808016', // 待施工
    // DOING: '#CD01F8', // 施工进行中
    DOING: '#ff8a00', // 施工进行中
    // DONE_NOCHECKED: '#0101FA', // 已施工-未验收
    DONE_NOCHECKED: '#010196', // 已施工-未验收
    // DONE_CHECKED: '#00E1FC' // 已施工-已验收
    DONE_CHECKED: '#1E90FF' // 已施工-已验收
  },
  STAFF_PORFESSION: {
    PU_TONG: 0,
    JI_SU: 1,
    GUAN_LI: 2
  },
  STAFF_COLOR: {
    PU_TONG: '#998e00',
    JI_SU: '#4169E1',
    GUAN_LI: '#b6bbbb'
  },
  BASIC_COLOR: {
    MODAL_BG: '#000325',
    FONT_COLOR: '#24fcf0'
  },
  RISK_COLOR: {
    LEVEL_1: '#F5222D', // 1级
    LEVEL_2: '#FA541C', // 2级
    LEVEL_3: '#FAAD14', // 3级
    LEVEL_4: '#1890ff' // 4级
  },
  INTEREST_TITLE: {
    PERSON: '人员',
    VEHICLE: '车辆',
    PLAN: '计划',
    FACE: '工作面',
    DEVICE: '设备',
    CHUTE: '溜井',
    AIR_SHAFT: '风井',
    AUX_SHAFT: '副井',
    LIFT: '罐笼',
    OTHER: '其他',
    FENCE: '围栏'
  },
  FILE_TYPE: {
    VISUAL: {
      FILE_TYPE_CODE: 'visual', // 三维模型
      BUSINESS_TYPE_CODE: {
        VISUAL_MODEL: 'visualModel', // 三维模型文件
        VISUAL_MODEL_IMG: 'visualModelImg', // 三维模型文件缩略图
        VISUAL_MODEL_PREVIEW_IMG: 'visualModelPreviewImg', // 三维模型16张预览图
        VISUALLEVELMODEL: 'visualLevelModel', // 三维水平模型文件
        ICON: 'visualIcon'// 三维图标
      }
    }
  },
  LEVEL_MODE_TYPE: { // 水平模型分类
    SIMPEL: 0, // 独立模型
    CAD_EXCHANGE: 1 // cad交互数据
  },
  LINE2FLOOR_TYPE: { // 巷道底板转模型方式
    CENTERLINE: 0, // 中心线拉伸
    SIDELINE: 1 // 左右腰线创建
  },
  MODEL_FILE_TYPE: ['fbx', 'obj', 'mtl', 'gltf'],
  MODEL_RELEASE_STATUS: {
    PUBLISHED: '2', // 发布
    APPROVAL: '1', // 审批中
    UNFINISHED: '0' // 未发布
  },
  MODEL_FROM_TYPE: {
    SELF_BUILT: '0', // 自建
    ENTERPERSE: '1', // 企业
    PLATFORM: '0' // 平台
  },
  MODEL_PROPERTY: {
    FALLING: '0', // 下架
    SHELVES: '1' // 上架
  }
}
