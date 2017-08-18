/**
 * 这个Class用来设置分享／上报
 *
 * Share.init();
 * Share.share({
 *  title: 'xxxxx',
 *  desc: 'xxxxx'
 * });
 *
 */

import ppo from 'ppo.xhtml';

export default class Share {

  static init(exports) {
    XQQ.loadInfoNow = false;

    XQQ.setShare({
      title: '标题标题标题标题标题标题',
      desc: '描述描述描述描述描述描述描述描述描述描述描述描述！',
      link: location.href.split("#")[0],
      imgUrl: 'http://mat1.gtimg.com/pingjs/js/tnfe/works/jiuxun/images/icon.jpg',
      success: function () {
        XQQ.report("share");
      },
      cancel: function () {

      }
    });

    XQQ.setBoss({
      sBiz: "qqh5",
      BossId: 2474
    })

    //添加多个上报地址
    XQQ.addBOSSURL("http://btrace.qq.com/kvcollect");
    this.pv();
  }

  static share(config) {
    XQQ.setShare(config);
  }

  //设置id
  static getURLAndID(id) {
    var url = location.href.split("#")[0].split("?")[0];
    url += "?id=" + id;
  }

  static pv() {
    XQQ.report("pv");
  }


}
