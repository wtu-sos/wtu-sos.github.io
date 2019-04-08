module.exports = {
	title: '个人主页',
	description: 'Personal Website',
	head: [ // 注入到当前页面的 HTML <head> 中的标签
		['link', { rel: 'icon', href: 'favicon.ico' }],
	],
	serviceWorker: true, // 是否开启 PWA
	base: '/', // 部署到github相关的配置
	markdown: {
		toc: { includeLevel: [2, 3, 4] }, // 内置插件设置：目录显示标题的层级。
		config: md => { // 外部插件设置：markdown-it-plugin。
			md.set({ breaks: true })
			md.use(require('markdown-it-xxx')) // 使用 xxx 插件。
		},
		lineNumbers: true // 代码块是否显示行号
	},
	themeConfig: {
		nav:[ // 导航栏配置
			//{text: 'algorithm', link: '/algorithm/'},     
			//{text: 'accumulate', link: '/accumulate/'},      
			//{text: 'baidu', link: 'https://baidu.com'}      
		],
		sidebar:{
			'/catalogue/': [
				{
					title: "Effective Modern C++",
					collapsable: true,
					children: [
						//['', pluginIntro],
						//'using-pluging',
						'chapter_1',
						'item_1',
						'item_2',
						'item_3',
						'item_4'
					]
				},
			]
		},
		//sidebar: 'auto', // 侧边栏配置
		//sidebarDepth: 2
	},
	plugins: [
		['@vuepress/blog'],
		['@vuepress/back-to-top', true],
	],
	"resolutions": { "webpack-dev-middleware": "3.6.1" },
	markdown: {
		lineNumbers: true
	}
};

