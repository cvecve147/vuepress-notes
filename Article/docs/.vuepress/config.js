module.exports = {
  base:'/vuepress-notes/',
  title: 'Yu jax',
  description: 'test',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/cvecve147' },
      {
        text: '聯絡我',
        link: 'mailto:u0633126@gm.nuu.edu.tw'
      }
    ],
    sidebar: [
      ['/', '內容簡介'],
      ['/menu', '菜單總覽'],
      ['/day0', 'Day0 起步工具'],
      ['/day1', 'Day1 古早味事件燉畫面綁定'],
      ['/day2', 'Day2 清爽表單處理佐雙向資料'],
      ['/day3', 'Day3 使用者輸入焗列表呈現'],
      ['/day4', 'Day4 峰峰相連互動式資料表單'],
      ['/day5', 'Day5 天然 CSS 過場佐 jQuery 動畫'],
      ['/day6', 'Day6 異國風情資料觀測與設定'],
      ['/day7', 'Day7 有機發酵生命週期'],
      ['/day8', 'Day8 家鄉通訊錄佐手作'],
      ['/day9', 'Day9 特製雕花 Vue-cli 3.0 與 Node.js 開發環境'],
      ['/day10', 'Day10 科學單檔模組化料理'],
      ['/day11', 'Day11 清燉嫩煮百頁路由']
    ]
  }
}
