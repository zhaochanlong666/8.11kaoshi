export default {
  data() {
    return {
      arr: [
        {
          title: '我的订阅',
          flag: true
        },
        {
          title: '全部',
          flag: false
        },
        {
          title: '综合',
          flag: false
        },
        {
          title: '科技',
          flag: false
        },
        {
          title: '娱乐',
          flag: false
        }
      ],
      list3: [
        { dian: '4', id: 1, xiangqing: '把握三大新核污染风险违反国际法', zhi: 0 },

        { dian: '4', id: 2, xiangqing: '把握三大新核污染风险违反国际法', zhi: 1 },
        {
          zhi: 2,
          id: 3,
          dian: '3',

          xiangqing: '专题学习贯彻习近平新时国代首都发展巡礼李强会见美国总统气候问题特使'
        },
        {
          id: 4,

          xiangqing: '国防部长李台北故宫，马英九陪同看了这些',
          dian: '4'
        },

        {
          dian: '3',
          id: 5,

          xiangqing: '国防部长李尚福会见美国马英九陪同看了这些'
        },
        {
          dian: '5',
          id: 6,

          xiangqing: '专题学习贯彻习近平新时国代首都发展巡礼李强会见美国总统气候问题特使',
          imgs: '../assets/toutiao.png'
        },
        {
          dian: '3',

          xiangqing: '国防部长李尚福会见美国前命案”系谣言，马英九陪同看了这些',

          id: 7,

          imgs: '../assets/WnBe01o371.png'
        },
        {
          dian: '5',
          id: 8,

          xiangqing: '专题学习贯彻习近平新时国代首都发展巡礼李强会见美国总统气候问题特使'
        },
        {
          dian: '3',
          id: 9,

          xiangqing: '国防部长李尚福会见美国前网传“回了台北故宫，马英九陪同看了这些'
        },
        {
          dian: '4',

          xiangqing: '国防部长李尚福会见美国前命案”系谣言，马英九陪同看了这些',

          id: 10,

          imgs: '../assets/WnBe01o371.png'
        },
      ],
      list4: [
        { dian: '马伯庸·推荐', id: 1, xiangqing: '把握三大新核污染风险违反国际法', zhi: 0 },

        { dian: '当年明月·推荐', id: 2, xiangqing: '把握三大新核污染风险违反国际法', zhi: 1 },
        {
          zhi: 2,
          id: 3,
          dian: '余华·推荐',

          xiangqing: '专题学习贯彻习近平新时国代首都发展巡礼李强会见美国总统气候问题特使'
        },
        {
          id: 4,

          xiangqing: '国防部长李台北故宫，马英九陪同看了这些',
          dian: '马伯庸·推荐'
        },

        {
          dian: '余华·推荐',
          id: 5,

          xiangqing: '国防部长李尚福会见美国马英九陪同看了这些'
        },
        {
          dian: '当年明月·推荐',
          id: 6,

          xiangqing: '专题学习贯彻习近平新时国代首都发展巡礼李强会见美国总统气候问题特使',
          imgs: '../assets/toutiao.png'
        },
        {
          dian: '余华·推荐',

          xiangqing: '国防部长李尚福会见美国前命案”系谣言，马英九陪同看了这些',

          id: 7,

          imgs: '../assets/WnBe01o371.png'
        },
        {
          dian: '当年明月·推荐',
          id: 8,

          xiangqing: '专题学习贯彻习近平新时国代首都发展巡礼李强会见美国总统气候问题特使'
        },
        {
          dian: '余华·推荐',
          id: 9,

          xiangqing: '国防部长李尚福会见美国前网传“回了台北故宫，马英九陪同看了这些'
        },
        {
          dian: '马伯庸·推荐',

          xiangqing: '国防部长李尚福会见美国前命案”系谣言，马英九陪同看了这些',

          id: 10,

          imgs: '../assets/WnBe01o371.png'
        },
      ],
      list: [
        { dian: '40.89万', id: 1, xiangqing: '把握三大新核污染风险违反国际法', zhi: 0 },

        { dian: '40.89万', id: 2, xiangqing: '把握三大新核污染风险违反国际法', zhi: 1 },
        {
          zhi: 2,
          id: 3,
          dian: '40.89万',

          xiangqing: '专题学习贯彻习近平新时国代首都发展巡礼李强会见美国总统气候问题特使'
        },
        {
          id: 4,

          xiangqing: '国防部长李台北故宫，马英九陪同看了这些',
          dian: '40.89万'
        },

        {
          dian: '40.89万',
          id: 5,

          xiangqing: '国防部长李尚福会见美国马英九陪同看了这些'
        },
        {
          dian: '50.9万',
          id: 6,

          xiangqing: '专题学习贯彻习近平新时国代首都发展巡礼李强会见美国总统气候问题特使',
          imgs: '../assets/toutiao.png'
        },
        {
          dian: '40.89万',

          xiangqing: '国防部长李尚福会见美国前命案”系谣言，马英九陪同看了这些',

          id: 7,

          imgs: '../assets/WnBe01o371.png'
        },
        {
          dian: '50.9万',
          id: 8,

          xiangqing: '专题学习贯彻习近平新时国代首都发展巡礼李强会见美国总统气候问题特使'
        },
        {
          dian: '40.89万',
          id: 9,

          xiangqing: '国防部长李尚福会见美国前网传“回了台北故宫，马英九陪同看了这些'
        },
        {
          dian: '40.89万',

          xiangqing: '国防部长李尚福会见美国前命案”系谣言，马英九陪同看了这些',

          id: 10,

          imgs: '../assets/WnBe01o371.png'
        },
        {
          dian: '50.9万',
          id: 11,

          xiangqing: '专题学习贯彻习近平新时国代首都发展巡礼李强会见美国总统气候问题特使'
        },
        {
          dian: '40.89万',
          id: 12,

          xiangqing: '国防部长李尚福会见美国前网传“回了台北故宫，马英九陪同看了这些'
        },
        {
          dian: '40.89万',

          xiangqing: '国防部长李尚福会见美国前命案”系谣言，马英九陪同看了这些',

          id: 13,

          imgs: '../assets/WnBe01o371.png'
        },
        {
          dian: '50.9万',
          id: 14,

          xiangqing: '专题学习贯彻习近平新时国代首都发展巡礼李强会见美国总统气候问题特使'
        },
        {
          dian: '50.9万',
          id: 15,

          xiangqing: '专题学习贯彻习近平新时国代首都发展巡礼李强会见美国总统气候问题特使',
          imgs: '../assets/toutiao.png'
        },
        {
          dian: '40.89万',

          xiangqing: '国防部长李尚福会见美国前命案”系谣言，马英九陪同看了这些',

          id: 16,

          imgs: '../assets/WnBe01o371.png'
        },
        {
          dian: '50.9万',
          id: 17,

          xiangqing: '专题学习贯彻习近平新时国代首都发展巡礼李强会见美国总统气候问题特使'
        },
        {
          dian: '40.89万',
          id: 18,

          xiangqing: '国防部长李尚福会见美国前网传“回了台北故宫，马英九陪同看了这些'
        },
        {
          dian: '40.89万',

          xiangqing: '国防部长李尚福会见美国前命案”系谣言，马英九陪同看了这些',

          id: 19,

          imgs: '../assets/WnBe01o371.png'
        },
        {
          dian: '50.9万',
          id: 11,

          xiangqing: '专题学习贯彻习近平新时国代首都发展巡礼李强会见美国总统气候问题特使'
        },
        {
          dian: '40.89万',
          id: 20,

          xiangqing: '国防部长李尚福会见美国前网传“回了台北故宫，马英九陪同看了这些'
        },
        {
          dian: '40.89万',

          xiangqing: '国防部长李尚福会见美国前命案”系谣言，马英九陪同看了这些',

          id: 21,

          imgs: '../assets/WnBe01o371.png'
        },
        {
          dian: '50.9万',
          id: 22,

          xiangqing: '专题学习贯彻习近平新时国代首都发展巡礼李强会见美国总统气候问题特使'
        }
      ]
    }
  }
}
