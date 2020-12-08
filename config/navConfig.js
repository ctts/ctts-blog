const { getFirstFile } = require('../utils/index')
module.exports = [
    { text: '首页', link: '/' },
    {
        text: '博客',
        ariaLabel: '博客',
        items: [
            { text: '日常笔记', link: getFirstFile('/pages/blogs/Daily/') },
            { text: 'JavaScript', link: getFirstFile('/pages/blogs/JavaScript/') },
            { text: 'CSS', link: getFirstFile('/pages/blogs/CSS/') },
            { text: 'Vue', link: getFirstFile('/pages/blogs/Vue/') },
            { text: '设计模式', link: getFirstFile('/pages/blogs/Design/') },
            { text: '其他', link: getFirstFile('/pages/blogs/Others/') }
        ]
    },
    { text: '关于我', link: '/about/'},
    { text: '分类', link: '/guide/' },
    { text: '优秀工具分享', link:'/pages/Share/'},
    { text: '优秀文章分享', link: '/pages/article/' },
    { text: 'GitHub', link: `https://github.com/ctts` },
]