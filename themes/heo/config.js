const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2026-02-12', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到我的博客', url: 'https://notion.ergua.site' },
    { title: '访问文档中心获取更多帮助', url: 'https://docs.tangly1024.com' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '学而时习之',
  HEO_HERO_TITLE_2: '不亦说乎',
  HEO_HERO_TITLE_3: 'ERGUA.SITE',
  HEO_HERO_TITLE_4: '泰语导航',
  HEO_HERO_TITLE_5: '单词本',
  HEO_HERO_TITLE_LINK: 'https://six-aftermath-1bf.notion.site/2bf37bec1db980ea82d9e0c97be5b7c7?pvs=74',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '随便逛逛',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '语言', url: '/tag/语言' },
  HEO_HERO_CATEGORY_2: { title: '笔记', url: '/tag/笔记' },
  HEO_HERO_CATEGORY_3: { title: '小橘子', url: '/tag/小橘子' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  // HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片
  HERO_RECOMMEND_COVER: 'https://img2.baidu.com/it/u=2312606537,3143319302&fm=253&app=138&f=JPEG?w=800&h=500', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🇹🇭  泰语初学者',
    '🎮 游戏又菜又爱玩',
    '📷 业余爱好拍摄',
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about-me',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://github.com/liangsingle',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://notion.ergua.site',
  HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      // title_1: 'AfterEffect',
      // img_1: '/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp',
      title_1: 'Notion',
      img_1: '/images/heo/webp/notion.webp',
      // color_1: '#989bf8',
      color_1: '#ffffff',
      // title_2: 'Sketch',
      title_2: 'Vocat',
      // img_2: '/images/heo/x023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp',
      img_2: '/images/heo/webp/Vocat.webp',
      color_2: '#ffffff'
    },
    {
      // title_1: 'Docker',
      title_1: 'Hellotalk',
      // img_1: '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp',
      img_1: '/images/heo/webp/hellotalk.webp',
      color_1: '#57b6e6',
      // title_2: 'Photoshop',
      title_2: 'Google翻译',
      // img_2: '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp',
      img_2: '/images/heo/webp/Google-fanyi.webp',
      color_2: '#4082c3'
    },
    {
      // title_1: 'FinalCutPro',
      title_1: 'Daxiang Dict',
      // img_1: '/images/heo/20233e777652412247dd57fd9b48cf997c01070702.webp',
      img_1: '/images/heo/webp/Daxiang-dict.webp',
      color_1: '#ffffff',
      // title_2: 'Python',
      title_2: 'Thai-English Dict',
      // img_2: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      img_2: '/images/heo/webp/Thai-english.webp',
      color_2: '#ffffff'
    },
    {
      // title_1: 'illustrator',
      title_1: 'Longdo Dict',
      // img_1: '/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp',
      img_1: '/images/heo/webp/Longdo-dict.webp',
      color_1: '#f29e39',
      // title_2: 'CSS3',
      title_2: 'Ling',
      // img_2: '/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp',
      img_2: '/images/heo/webp/Ling.webp',
      color_2: '#2c51db'
    },
    {
      // title_1: 'JS',
      title_1: 'Drops',
      // img_1: '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp',
      img_1: '/images/heo/webp/Drops.webp',
      color_1: '#f7cb4f',
      // title_2: 'HTML',
      title_2: 'learning-thai',
      // img_2: '/images/heo/202372b4d760fd8a497d442140c295655426070302.webp',
      img_2: '/images/heo/webp/learning-thai.webp',
      color_2: '#e9572b'
    },
    {
      // title_1: 'Swift',
      title_1: '视图阅读',
      // img_1: '/images/heo/202328bbee0b314297917b327df4a704db5c072402.webp',
      img_1: '/images/heo/webp/shituyuedu.webp',
      color_1: '#eb6840',
      // title_2: 'Principle',
      title_2: '喜马拉雅',
      // img_2: '/images/heo/2023f76570d2770c8e84801f7e107cd911b5073202.webp',
      img_2: '/images/heo/webp/ximalaya.webp',
      color_2: '#8f55ba'
    },
    {
      // title_1: 'Git',
      title_1: '多邻国Duolingo',
      // img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      img_1: '/images/heo/webp/duolingguo.webp',
      color_1: '#df5b40',
      // title_2: 'Rhino',
      title_2: '沪江开心词场',
      // img_2: '/images/heo/20231ca53fa0b09a3ff1df89acd7515e9516173302.webp',
      img_2: '/images/heo/webp/hujiangkaixincichang.webp',
      // color_2: '#1f1f1f'
      color_2: '#ffffff'
    }
  ],

  HEO_SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_NOT_BY_AI: false, // 显示非AI写作
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
