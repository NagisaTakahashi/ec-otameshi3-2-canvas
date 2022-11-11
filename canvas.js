//★このJSファイルでは、canvas関連を記述★

// alert(1111);

// キャンバスのサイズ管理
const canvasInfo = {
  size: { //キャンバスの大きさ
      width: 692, 
      height: 1140,
  },
};
const sizeUnit = "px";
const image = {
  position: { //画像が開始する場所
      height: 0,
      width: 0,
  },
  size: { //画像の大きさ
    width: 692,
    height: 1140,
  },
};
const fillStartPosition = { //塗りが開始する場所
  x: 0,
  y: 0,
};


// canvasタグ関連
const canA = $("#canvasA")[0]; //A=アバター用
const ctxA = canA.getContext("2d");

const canB = $("#canvasB")[0]; //B=洋服（ベース）用
const ctxB = canB.getContext("2d");

const canB_eri = $("#canvasB_eri")[0]; //B=洋服（ベース）用-襟
const ctxB_eri = canB_eri.getContext("2d");
const canB_sode = $("#canvasB_sode")[0]; //B=洋服（ベース）用-袖
const ctxB_sode = canB_sode.getContext("2d");
const canB_kata = $("#canvasB_kata")[0]; //B=洋服（ベース）用-袖
const ctxB_kata = canB_kata.getContext("2d");
const canB_kirikae = $("#canvasB_kirikae")[0]; //B=洋服（ベース）用-袖
const ctxB_kirikae = canB_kirikae.getContext("2d");

const canC = $("#canvasC")[0]; //C=洋服（転写）用＝マスキング目的
const ctxC = canC.getContext("2d");

const canC_eri = $("#canvasC_eri")[0]; //C=洋服（転写）用＝マスキング目的-襟
const ctxC_eri = canC_eri.getContext("2d");
const canC_sode = $("#canvasC_sode")[0]; //C=洋服（転写）用＝マスキング目的-袖
const ctxC_sode = canC_sode.getContext("2d");
const canC_kata = $("#canvasC_kata")[0]; //C=洋服（転写）用＝マスキング目的-袖
const ctxC_kata = canC_kata.getContext("2d");
const canC_kirikae = $("#canvasC_kirikae")[0]; //C=洋服（転写）用＝マスキング目的-袖
const ctxC_kirikae = canC_kirikae.getContext("2d");







// 0.カラーの定義
var color_list= [
  {"colornum":"01","colorname":"NVY","color_code":"3A3A49","RGB":"58,58,73",},
  {"colornum":"02","colorname":"KKI","color_code":"5D6402","RGB":"93,100,2",},
  {"colornum":"03","colorname":"LIME","color_code":"CFE375","RGB":"207,207,117",},
  {"colornum":"04","colorname":"PPL","color_code":"C20F7C","RGB":"194,15,124",},
  {"colornum":"05","colorname":"RED","color_code":"F32359","RGB":"243,35,89",},
  {"colornum":"06","colorname":"MNT","color_code":"CBF1EF","RGB":"203,241,239",},
];


// 4-1.デザインの定義
var design_list_eri= [
  {"d_num":"01","d_name":"mockneck","d_code":"MN-01","src":"img/RC-N014/eri_MN-01.png",},
  {"d_num":"02","d_name":"slitv","d_code":"SV-01","src":"img/RC-N014/eri_SV-01.png",},
  {"d_num":"03","d_name":"slitv","d_code":"SV-02","src":"img/RC-N014/eri_SV-02.png",},
  {"d_num":"04","d_name":"vneck","d_code":"V-07","src":"img/RC-N014/eri_V-07.png",},
];

var design_list_sode= [
  {"d_num":"01","d_name":"widecuffs","d_code":"C-01","src":"img/RC-N014/sode_wide-cuffs.png",},
  {"d_num":"02","d_name":"thincuffs","d_code":"C-02","src":"img/RC-N014/sode_short-cuffs.png",},
  {"d_num":"03","d_name":"frill","d_code":"C-03","src":"img/RC-N014/sode_furil.png",},
  {"d_num":"03","d_name":"baloon","d_code":"C-04","src":"img/RC-N014/sode_baloon.png",},
];

var design_list_kata= [
  {"d_num":"01","d_name":"aaa","d_code":"SH-01","src":"img/RC-N014/kata_SH-01_set-in.png",},
  {"d_num":"02","d_name":"aaa","d_code":"SH-02","src":"img/RC-N014/kata_SH-02_puff.png",},
  {"d_num":"03","d_name":"aaa","d_code":"SH-03","src":"img/RC-N014/kata_SH-03_drop.png",},
];

var design_list_kirikae= [
  {"d_num":"01","d_name":"high","d_code":"k-01","src":"img/RC-N014/kirikae_high.png",},
  {"d_num":"02","d_name":"just","d_code":"k-02","src":"img/RC-N014/kirikae_just.png",},
  {"d_num":"03","d_name":"low","d_code":"k-03","src":"img/RC-N014/kirikae_low.png",},
  {"d_num":"04","d_name":"none","d_code":"k-04","src":"img/RC-N014/kirikae_none.png",},
];



// 1.canvasA にアバター表示（ゆくゆくはアバターも可変にするために変数に置き換える）

// 1-1. Image オブジェクトを生成
var imgA_1 = new Image();
imgA_1.src = "img/160cm.png";
// 1-2. 画像読み込み終了してから描画
imgA_1.onload = function(){
    ctxA.drawImage(imgA_1, 0, 0,692,1140);
};


// 2.canvasB+C B=洋服表示（のデザイン決定側）C=塗りレイヤー用
// ※順序を固定するために全画像を読み込み後に描画する設定にしています！


// 2-1.読み込みたい画像のパスの配列

// var srcs = [ //本当はここに選択されたデザインが変数で入るようにする
//   'img/RC-N014/eri_V-07.png',
//   'img/RC-N014/kata_SH-01_set-in.png',
//   'img/RC-N014/kirikae_Just.png',
//   'img/RC-N014/sode_short-cuffs.png',
// ];

// 2-2.ロード済Imageオブジェクト用配列
// var images = [];

// for (var i in srcs) {//入れ子の配列の指定の仕方
//   images[i] = new Image();
//   images[i].src = srcs[i];
// }

// var loadedCount = 1;
// for (var i in images) {
//   images[i].addEventListener('load', function() {
//     if (loadedCount == images.length) {
//       for (var j in images) {
//         ctxB.drawImage(images[j], 0, 0, 692, 1140);
//       }
//     }

//     // canvasBの内容をクローンしてcanvasCに表示する
//     const imageData = ctxB.getImageData(0, 0, 692, 1140);
//     ctxC.putImageData(imageData, 0, 0); //描画場所（canvasBと重ねるため0,0に固定）

//     // canvasCで洋服に対して色を乗算してカラーリング
//     ctxC.fillStyle = `rgba(${color_list[2].RGB}, 1)`; //初期設定カラー（適当、あとで変える）
//     ctxC.fillRect(0,0,692,1140);
//     ctxC.globalCompositeOperation = "source-atop"

//     //ここまでカウントしたら描写？
//     loadedCount++;

//   }, false); //addEventListenerのストップ？
// };


// var srcs = [ design_list_eri, design_list_sode, design_list_kata, design_list_kirikae ];

var srcs = [ //本当はここに選択されたデザインが変数で入るようにする
  'img/RC-N014/eri_V-07.png',
  'img/RC-N014/sode_short-cuffs.png',
  'img/RC-N014/kata_SH-01_set-in.png',
  'img/RC-N014/kirikae_Just.png',
];

// 2-2.ロード済Imageオブジェクト用配列
var images = [];

for (var i in srcs) {//入れ子の配列の指定の仕方
  images[i] = new Image();
  images[i].src = srcs[i];
}

var loadedCount = 1;
for (var i in images) {
  images[i].addEventListener('load', function() {
    if (loadedCount == images.length) {
      for (var j in images) {
        ctxB_eri.drawImage(images[0], 0, 0, 692, 1140);
        ctxB_sode.drawImage(images[1], 0, 0, 692, 1140);
        ctxB_kata.drawImage(images[2], 0, 0, 692, 1140);
        ctxB_kirikae.drawImage(images[3], 0, 0, 692, 1140);
      }
    }

    // canvasBの内容をクローンしてcanvasCに表示する
    const imageData_eri = ctxB_eri.getImageData(0, 0, 692, 1140);
    ctxC_eri.putImageData(imageData_eri, 0, 0); //描画場所（canvasBと重ねるため0,0に固定）

    const imageData_sode = ctxB_sode.getImageData(0, 0, 692, 1140);
    ctxC_sode.putImageData(imageData_sode, 0, 0); //描画場所（canvasBと重ねるため0,0に固定）

    const imageData_kata = ctxB_kata.getImageData(0, 0, 692, 1140);
    ctxC_kata.putImageData(imageData_kata, 0, 0); //描画場所（canvasBと重ねるため0,0に固定）

    const imageData_kirikae = ctxB_kirikae.getImageData(0, 0, 692, 1140);
    ctxC_kirikae.putImageData(imageData_kirikae, 0, 0); //描画場所（canvasBと重ねるため0,0に固定）



    // canvasCで洋服に対して色を乗算してカラーリング
    ctxC_eri.fillStyle = `rgba(${color_list[2].RGB}, 1)`; //初期設定カラー（適当、あとで変える）
    ctxC_eri.fillRect(0,0,692,1140);
    ctxC_eri.globalCompositeOperation = "source-atop"

    ctxC_sode.fillStyle = `rgba(${color_list[2].RGB}, 1)`; //初期設定カラー（適当、あとで変える）
    ctxC_sode.fillRect(0,0,692,1140);
    ctxC_sode.globalCompositeOperation = "source-atop"

    ctxC_kata.fillStyle = `rgba(${color_list[2].RGB}, 1)`; //初期設定カラー（適当、あとで変える）
    ctxC_kata.fillRect(0,0,692,1140);
    ctxC_kata.globalCompositeOperation = "source-atop"

    ctxC_kirikae.fillStyle = `rgba(${color_list[2].RGB}, 1)`; //初期設定カラー（適当、あとで変える）
    ctxC_kirikae.fillRect(0,0,692,1140);
    ctxC_kirikae.globalCompositeOperation = "source-atop"



    //ここまでカウントしたら描写？
    loadedCount++;

  }, false); //addEventListenerのストップ？
};




// //キャンバスBー襟に初期設定の襟を表示（何でも良い）
//   // Image オブジェクトを生成
//   var img_d_eri = new Image();
//   img_d_eri.src = `${design_list_eri[3].src}`;
//   // 画像読み込み終了してから描画
//   img_d_eri.onload = function(){
//     ctxB_eri.drawImage(img_d_eri, 0, 0,692,1140);
//     //canvasBの内容をクローンしてcanvasCに表示する
//     const imageData_eri = ctxB_eri.getImageData(0, 0, 692, 1140);
     
//     ctxC_eri.putImageData(imageData_eri, 0, 0); //描画場所（canvasBと重ねるため0,0に固定）

//     // canvasCで洋服に対して色を乗算してカラーリング
//     ctxC_eri.fillStyle = `rgba(${color_list[2].RGB}, 0.5)`; //初期設定カラー（適当、あとで変える）
//     ctxC_eri.fillRect(0,0,692,1140);
//     ctxC_eri.globalCompositeOperation = "source-in"


//   };

// //キャンバスBー袖に初期設定の襟を表示（何でも良い）
//   // Image オブジェクトを生成
//   var img_d_sode = new Image();
//   img_d_sode.src = `${design_list_sode[1].src}`;
//   // 画像読み込み終了してから描画
//   img_d_sode.onload = function(){
//     ctxB_sode.drawImage(img_d_sode, 0, 0,692,1140);
//     // //canvasBの内容をクローンしてcanvasCに表示する
//     // const imageData_sode = ctxB_sode.getImageData(0, 0, 692, 1140);

//     //         // canvasCで洋服に対して色を乗算してカラーリング
//     //         ctxC.fillStyle = `rgba(${color_list[2].RGB}, 1)`; //初期設定カラー（適当、あとで変える）
//     //         ctxC.fillRect(0,0,692,1140);
//     //         ctxC.globalCompositeOperation = "source-atop"

//     // ctxC.putImageData(imageData_sode, 0, 0); //描画場所（canvasBと重ねるため0,0に固定）

//   };

// //キャンバスBー肩に初期設定の襟を表示（何でも良い）
//   // Image オブジェクトを生成
//   var img_d_kata = new Image();
//   img_d_kata.src = `${design_list_kata[0].src}`;
//   // 画像読み込み終了してから描画
//   img_d_kata.onload = function(){
//     ctxB_kata.drawImage(img_d_kata, 0, 0,692,1140);
//     // //canvasBの内容をクローンしてcanvasCに表示する
//     // const imageData_kata = ctxB_kata.getImageData(0, 0, 692, 1140);

//     //         // canvasCで洋服に対して色を乗算してカラーリング
//     //         ctxC.fillStyle = `rgba(${color_list[2].RGB}, 1)`; //初期設定カラー（適当、あとで変える）
//     //         ctxC.fillRect(0,0,692,1140);
//     //         ctxC.globalCompositeOperation = "source-atop"

//     // ctxC.putImageData(imageData_kata, 0, 0); //描画場所（canvasBと重ねるため0,0に固定）

//   };

  // //キャンバスBー切替に初期設定の襟を表示（何でも良い）
  // // Image オブジェクトを生成
  // var img_d_kirikae = new Image();
  // img_d_kirikae.src = `${design_list_kirikae[1].src}`;
  // // 画像読み込み終了してから描画
  // img_d_kirikae.onload = function(){
  //   ctxB_kirikae.drawImage(img_d_kirikae, 0, 0,692,1140);
  //   // //canvasBの内容をクローンしてcanvasCに表示する
  //   // const imageData_kirikae = ctxB_kirikae.getImageData(0, 0, 692, 1140);

  //   // // canvasCで洋服に対して色を乗算してカラーリング
  //   // ctxC.fillStyle = `rgba(${color_list[2].RGB}, 1)`; //初期設定カラー（適当、あとで変える）
  //   // ctxC.fillRect(0,0,692,1140);
  //   // ctxC.globalCompositeOperation = "source-atop"

  //   // ctxC.putImageData(imageData_kirikae, 0, 0); //描画場所（canvasBと重ねるため0,0に固定）

  // };


//４つのキャンバスBの内容を一斉にキャンバスCに転送・複製する
//canvasBの内容をクローンしてcanvasCに表示する





// // canvasCで洋服に対して色を乗算してカラーリング
//   ctxC.fillStyle = `rgba(${color_list[2].RGB}, 1)`; //初期設定カラー（適当、あとで変える）
//   ctxC.fillRect(0,0,692,1140);
//   ctxC.globalCompositeOperation = "source-atop"



//これは後で、キャンバスBの中身がかわるたびにキャンバスCにも再転送されるようにする（クリックファンクションのところで）





// 3.ボタンクリックした際に指定色に塗り替える


let B = 2; //あとでAの結果を4.デザイン変更で利用するためにAの受け皿として変数Bを用意しておく（B=2の初期設定は初期設定が色ライムの意図）

for( let A = 0 ; A < color_list.length ; A ++ ){
  $(`#color_${color_list[A].colornum}`).on("click",function(){

    // clearRectしないと描画内容が新規更新されない。色が上塗りされる。１回クリアする。
    // ctxC.clearRect(0, 0, 692, 1140);
    //なぜか色が上書きされない仕組みになった。理由は謎。クリア操作を一旦無効化

    //新たに選択したカラーで塗り
    ctxC_eri.fillStyle = `rgba(${color_list[A].RGB}, 1)`; 
    ctxC_eri.fillRect(0,0,692,1140);
    ctxC_eri.globalCompositeOperation = "source-atop"

    ctxC_sode.fillStyle = `rgba(${color_list[A].RGB}, 1)`; 
    ctxC_sode.fillRect(0,0,692,1140);
    ctxC_sode.globalCompositeOperation = "source-atop"

    ctxC_kata.fillStyle = `rgba(${color_list[A].RGB}, 1)`; 
    ctxC_kata.fillRect(0,0,692,1140);
    ctxC_kata.globalCompositeOperation = "source-atop"

    ctxC_kirikae.fillStyle = `rgba(${color_list[A].RGB}, 1)`; 
    ctxC_kirikae.fillRect(0,0,692,1140);
    ctxC_kirikae.globalCompositeOperation = "source-atop"

    B = A; //変数Aを外で使うためにBにAを代入する
  
  });
};

console.log(B); //Bを書き出しチェック



// 4.ボタンクリックした際に表示するデザインを変える

for( let D = 0 ; D < design_list_eri.length ; D ++ ){

  $(`#d_${design_list_eri[D].d_num}`).on("click",function(){

    console.log(`${design_list_eri[D].src}`);

    // clearRectしないと描画内容が上乗せされるので、毎回１回クリアする。
    ctxB_eri.clearRect(0, 0, 692, 1140);
    // ctxC_eri.clearRect(0, 0, 692, 1140);

    //新たに選択したデザインをBに新たに描画

    // Image オブジェクトを生成
    var img_d_eri = new Image();
    img_d_eri.src = `${design_list_eri[D].src}`;
    // 画像読み込み終了してから描画
    img_d_eri.onload = function(){
      ctxB_eri.drawImage(img_d_eri, 0, 0,692,1140);


      //キャンバスCに新たに選択した内容を転送する

      //★ロードしたらに込みにしたらできた！！【要注意ポイント！！】

      //canvasBの新しい内容をクローンしてcanvasCに表示する
      const imageData_eri_new = ctxB_eri.getImageData(0, 0, 692, 1140);
      ctxC_eri.putImageData(imageData_eri_new, 0, 0); //描画場所（canvasBと重ねるため0,0に固定）

      // canvasCで洋服に対して色を乗算してカラーリング
      ctxC_eri.fillStyle = `rgba(${color_list[B].RGB}, 1)`; //ここにBを入れることによってAの結果をここで使える！！（クリック時に色味が即時反映）
      ctxC_eri.fillRect(0,0,692,1140);
      ctxC_eri.globalCompositeOperation = "source-atop"

    };

  });
};





