module.exports = {
  title: 'JavaScript LeetCode',
  description: '记录LeetCode的练习',
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
      '/views/easy/': ['', '1', '2'],
      '/views/medium/': ['', '1', '2'],
      '/views/hard/': ['', '1', '2'],
    }
  }
}