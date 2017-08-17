import ppo from 'ppo.xhtml';

// 适配器
export default class Adapter {

  static compatiblePC() {
    if (ppo.isPC()) {
      const body = document.body;
      body.style.display = 'none';

      ppo.importScript('//mat1.gtimg.com/pingjs/js/TIAP/caiyun/js/lib/qrcode.min.js', () => {
        try {
          body.style.display = 'block';
          body.style.background = '#333';
          document.getElementById('app').style.display = 'none';
        } catch (e) { };

        let qrdiv = this.createQR();
        let title = this.createTitle();

        body.appendChild(title);
        body.appendChild(qrdiv);

      });
    }
  }

  //创建标题
  static createTitle() {
    let title = document.createElement('div');
    title.style.margin = '0px auto';
    title.style.width = '100%';
    title.style.textAlign = 'center';
    title.style.position = 'absolute';
    title.style.top = '50%';
    title.style.marginTop = '-200px';
    title.style.zIndex = 999;
    title.style.color = '#fff';
    title.style.fontSize = '16px';
    title.innerHTML = '<p>请用手机扫描下方二维码，访问页面：</p>';
    return title;
  }

  //create QR
  static createQR() {
    let qrdiv = document.createElement('div');
    qrdiv.style.margin = '0px auto';
    qrdiv.style.position = 'absolute';
    qrdiv.style.marginLeft = '-143px';
    qrdiv.style.marginTop = '-128px';
    qrdiv.style.border = '15px solid #fff';
    qrdiv.style.left = '50%';
    qrdiv.style.top = '50%';
    qrdiv.style.zIndex = 999;

    new QRCode(qrdiv, {
      text: window.location.href,
      width: 128 * 2,
      height: 128 * 2,
      colorDark: "#000000",
      colorLight: "#fff",
      correctLevel: QRCode.CorrectLevel.L
    });

    return qrdiv;
  }

}
