import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '東大数学攻略本',
  description: '東大数学の過去問から、考え方を学ぶ教材',

  base: '/todai-math-site/',

  sitemap: {
    hostname: 'https://apparkjp.github.io/todai-math-site/'
  },

  markdown: {
    math: true
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '出典・謝辞', link: '/credits' }
    ],

    sidebar: [
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