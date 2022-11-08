//★このJSファイルでは、canvas関連を記述★

// alert(1111);

// キャンバスのサイズ管理
const canvasInfo = {
  size: { //キャンバスの大きさ
      width: 346, 
      height: 570,
  },
};
const sizeUnit = "px";
const image = {
  position: { //画像が開始する場所
      height: 0,
      width: 0,
  },
  size: { //画像の大きさ
    width: 346,
    height: 570,
  },
};
const fillStartPosition = { //塗りが開始する場所
  x: 0,
  y: 0,
};


// canvasタグ関連
const canA = $("#canvasA")[0];
const ctxA = canA.getContext("2d");
const canB = $("#canvasB")[0];
const ctxB = canB.getContext("2d");
const canC = $("#canvasC")[0];
const ctxC = canC.getContext("2d");


// 0.カラーの定義
var color_list= [
  {"colornum":"01","colorname":"NVY","color_code":"3A3A49","RGB":"58,58,73",},
  {"colornum":"02","colorname":"KKI","color_code":"5D6402","RGB":"93,100,2",},
  {"colornum":"03","colorname":"LIME","color_code":"CFE375","RGB":"207,207,117",},
  {"colornum":"04","colorname":"PPL","color_code":"C20F7C","RGB":"194,15,124",},
  {"colornum":"05","colorname":"RED","color_code":"F32359","RGB":"243,35,89",},
  {"colornum":"06","colorname":"MNT","color_code":"CBF1EF","RGB":"203,241,239",},
];



// 1.canvasA にアバター表示（ゆくゆくはアバターも可変にするために変数に置き換える）

// 1-1. Image オブジェクトを生成
var imgA_1 = new Image();
imgA_1.src = "img/160cm.png";
// 1-2. 画像読み込み終了してから描画
imgA_1.onload = function(){
    ctxA.drawImage(imgA_1, 0, 0,346,570);
};


// 2.canvasB+C B=洋服表示（のデザイン決定側）C=塗りレイヤー用
// 読み込み時差がなくレイヤー順序を固定するために読み込み後に描画するシナリオに

(function() {

  var srcs = [ //本当はここに選択されたデザインが変数で入るようにする
    'img/RC-N014/eri_V-07.png',
    'img/RC-N014/kata_SH-01_set-in.png',
    'img/RC-N014/kirikae_Just.png',
    'img/RC-N014/sode_short-cuffs.png',
  ];

  var images = [];
  for (var i in srcs) {
    images[i] = new Image();
    images[i].src = srcs[i];
  }

  var loadedCount = 1;
  for (var i in images) {
    images[i].addEventListener('load', function() {
      if (loadedCount == images.length) {
        for (var j in images) {
          ctxB.drawImage(images[j], 0, 0, 346, 570);
        }
      }

      // canvasBの内容をクローンしてcanvasCに表示する
      const imageData = ctxB.getImageData(0, 0, 346, 570);
      ctxC.putImageData(imageData, 0, 0); //描画場所（canvasBと重ねるため0,0に固定）

      // canvasCで洋服に対して色を乗算してカラーリング
      ctxC.fillStyle = `rgba(${color_list[2].RGB}, 1)`; //初期設定カラー（適当、あとで変える）
      ctxC.fillRect(0,0,346,570);
      ctxC.globalCompositeOperation = "source-atop"

      //ここまでカウントしたら描写？
      loadedCount++;

    }, false); //addEventListenerのストップ？
  }                   
}
)();


// 3.ボタンクリックした際に指定色に塗り替える

for( let A = 0 ; A < color_list.length ; A ++ ){
  $(`#color_${color_list[A].colornum}`).on("click",function(){

    // clearRectしないと描画内容が新規更新されない。色が上塗りされる。１回クリアする。
    // ctxC.clearRect(0, 0, 346, 570);
    //なぜか色が上書きされない仕組みになった。理由は謎。クリア操作を一旦無効化

    //新たに選択したカラーで塗り
    ctxC.fillStyle = `rgba(${color_list[A].RGB}, 1)`; 
    ctxC.fillRect(0,0,346,570);
    ctxC.globalCompositeOperation = "source-atop"
  });
};








