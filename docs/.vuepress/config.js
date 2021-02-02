module.exports = {
  title: 'JavaScript LeetCode',
  description: '记录LeetCode的练习',
  themeConfig: {
    logo: 'https://www.vuepress.cn/hero.png',
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    nav: [
      {
        text: '简单',
        link: '/views/easy/'
      },
      {
        text: '中等',
        link: '/views/medium/'
      },
      {
        text: '困难',
        link: '/views/hard/'
      },
      {
        text: '学习网站',
        items: [
          { text: 'MDN Web 文档', link: 'https://developer.mozilla.org/zh-CN/' },
          { text: '现代 JavaScript 教程', link: 'https://zh.javascript.info/' },
        ]
      }
    ],
    sidebar: {
      '/views/easy/': [
        '',
        '1 两数之和',
        '9 回文数',
        '20 有效的括号',
        '21 合并两个有序链表',
        '70 爬楼梯',
        '83 删除排序链表中的重复元素',
        '100 相同的树'
      ],
      '/views/medium/': ['', '1', '2'],
      '/views/hard/': ['', '1', '2'],
    }
  },
  plugins: [
    '@vuepress/back-to-top', 
    ['@vuepress/active-header-links', 
      {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      }
    ]
  ]
}