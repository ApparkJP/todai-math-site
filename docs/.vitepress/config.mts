import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '東大数学攻略本',
  description: '東大数学の過去問から、考え方を学ぶ教材',

  base: '/todai-math-site/',

  head: [
    ['meta', { property: 'og:site_name', content: '東大数学攻略本' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '東大数学攻略本｜東大数学の過去問から問題の切り方を学ぶ教材' }],
    ['meta', { property: 'og:description', content: '東大数学の過去問を題材に、座標化・1変数化・領域化・整数・確率・空間図形など、問題の切り方から学ぶ無料教材です。' }],
    ['meta', { property: 'og:url', content: 'https://apparkjp.github.io/todai-math-site/' }],
    ['meta', { property: 'og:image', content: 'https://apparkjp.github.io/todai-math-site/ogp.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: '東大数学攻略本 過去問から問題の切り方を学ぶ' }],

    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: '東大数学攻略本｜問題の切り方を学ぶ教材' }],
    ['meta', { name: 'twitter:description', content: '東大数学の過去問を題材に、座標化・1変数化・領域化・整数・確率などを構造から学ぶ無料教材です。' }],
    ['meta', { name: 'twitter:image', content: 'https://apparkjp.github.io/todai-math-site/ogp.png' }]
  ],

  sitemap: {
    hostname: 'https://apparkjp.github.io/todai-math-site/'
  },

  markdown: {
    math: true
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '更新履歴', link: '/updates' },
      { text: '誤植報告', link: '/feedback' },
      { text: '出典・謝辞', link: '/credits' }
    ],

    sidebar: [
          {
        text: 'はじめに',
        items: [
          { text: '東大数学の勉強法', link: '/articles/todai-math-study-roadmap' }
        ]
      },
      {
        text: 'テーマ別入口',
        items: [
          { text: '座標化・1変数化', link: '/articles/coordinate-one-variable' },
          { text: '領域化・範囲決定', link: '/articles/region-range' },
          { text: '微積分・面積体積・極限', link: '/articles/calculus-area-volume-limit' },
          { text: '整数・合同式・場合分け', link: '/articles/integer-mod-cases' },
          { text: '確率・状態遷移・漸化式', link: '/articles/probability-recurrence' },
          { text: '関数・接線条件', link: '/articles/function-tangent' },
          { text: '空間図形・断面・体積', link: '/articles/spatial-geometry' },
          { text: '対称性・変換・複素数・行列', link: '/articles/symmetry-transform' }
        ]
      },
      {
        text: '本文',
        items: [
          { text: '第1章　座標化・1変数化・最大最小', link: '/chapter-01' },
          { text: '第2章　領域化・範囲決定', link: '/chapter-02' },
          { text: '第3章　微積分・面積体積・極限評価', link: '/chapter-03' },
          { text: '第4章　整数・合同式・場合分け', link: '/chapter-04' },
          { text: '第5章　確率・状態遷移・漸化式', link: '/chapter-05' },
          { text: '第6章　関数決定・係数比較・接線条件', link: '/chapter-06' },
          { text: '第7章　空間図形・断面・体積', link: '/chapter-07' },
          { text: '第8章　対称性・変換・複素数・行列', link: '/chapter-08' },
          { text: '最終章　総合演習', link: '/final-chapter' }
        ]
      },
      {
        text: 'その他',
        items: [
   　　　 { text: 'この教材について', link: '/about' },  
  	　{ text: '更新履歴', link: '/updates' },
          { text: '誤植・改善報告', link: '/feedback' },
          { text: '出典・謝辞', link: '/credits' }
        ]
      }
    ],

    outline: {
      level: [2, 3],
      label: 'このページの目次'
    },

    docFooter: {
      prev: '前へ',
      next: '次へ'
    },

    search: {
      provider: 'local'
    }
  }
})