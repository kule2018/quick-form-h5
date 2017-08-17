/**
 * 出场／退场 动画
 *
 * 可以在Anix函数里修改任意出场动画
 * https://a-jie.github.io/AniX/
 */

import ppo from 'ppo.xhtml';
import { AniX } from 'anix';

export default class Animate {

  //向上拉----------------------------------------------------------------
  static pullUp = {
    enter(el, done) {
      AniX.fromTo(el, .75,
        AniX.get({ x: 0, y: 1000, z: 1, normal: { opacity: 1 } }),
        AniX.get({ x: 0, y: 0, z: 0, normal: { opacity: 1, onComplete: done } }));
    },

    leave(el, done) {
      AniX.to(el, .75, AniX.get({ x: 0, y: -1000, normal: { opacity: 0, onComplete: done } }));
    }
  }

  //缩放----------------------------------------------------------------
  static scale = {
    enter(el, done) {
      AniX.fromTo(el, .5,
        AniX.get({ scale: 0.3, z: 1, normal: { opacity: 0 } }),
        AniX.get({ scale: 1, z: 0, normal: { opacity: 1, onComplete: done } }));
    },

    leave(el, done) {
      AniX.to(el, .5, AniX.get({ scale: 0.3, normal: { opacity: 0, onComplete: done } }));
    }
  }

  //选转----------------------------------------------------------------
  static rotate = {
    enter(el, done) {
      AniX.fromTo(el, .5,
        AniX.get({ scale: 0.3, y: 500, rotate: 90, z: 1, normal: { opacity: 0 } }),
        AniX.get({ scale: 1, y: 0, rotate: 0, z: 0, normal: { opacity: 1, onComplete: done } }));
    },

    leave(el, done) {
      AniX.to(el, .5, AniX.get({ scale: 0.3, y: -500, rotate: -90, normal: { opacity: 0, onComplete: done } }));
    }
  }

  //自定义 随便改----------------------------------------------------------------
  static custom = {
    enter(el, done) {
      AniX.fromTo(el, .5,
        AniX.get({ scale: 0.3, y: 500, z: 1, normal: { opacity: 0 } }),
        AniX.get({ scale: 1, y: 0, z: 0, normal: { opacity: 1, onComplete: done } }));
    },

    leave(el, done) {
      AniX.to(el, .5, AniX.get({ scale: 0.3, y: -500, normal: { opacity: 0, onComplete: done } }));
    }
  }

  //没有任何动画----------------------------------------------------------------
  static none = {
    enter(el, done) {
      done();
    },

    leave(el, done) {
      done();
    }
  }

  //安卓无动画兼容
  static adapter(animate) {
    if (ppo.isIos()) {
      return typeof animate == 'string' ? this[animate] : animate;
    } else {
      return this.none;
    }
  }

}
