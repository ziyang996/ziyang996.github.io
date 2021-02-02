module.exports = {
  title: 'JavaScript LeetCode',
  description: '记录LeetCode的练习',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  themeConfig: {
    logo: 'https://www.vuepress.cn/hero.png',
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
      '/views/medium/': [
        '',
        '2 两数相加', 
        '3 无重复字符的最长子串',
        '34 在排序数组中查找元素的第一个和最后一个位置',
        '46 全排列',
        '94 二叉树的中序遍历'
      ],
      '/views/hard/': [
        '', 
        '65 有效数字', 
        '76 最小覆盖字串'
      ],
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