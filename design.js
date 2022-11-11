//★このJSファイルでは、デザインメニュー関連を記述★

// alert(1111);


//以下、デザインを表示分けするための配列定義


// 4-1.デザインの定義
var design_list_eri= [
  {"d_num":"01","d_name":"モックネック","d_code":"MN-01","src":"img/RC-N014/eri_MN-01.png",},
  {"d_num":"02","d_name":"バンドカラースリットネック","d_code":"SV-01","src":"img/RC-N014/eri_SV-01.png",},
  {"d_num":"03","d_name":"キーネック","d_code":"SV-02","src":"img/RC-N014/eri_SV-02.png",},
  {"d_num":"04","d_name":"ラウンドVネック","d_code":"V-07","src":"img/RC-N014/eri_V-07.png",},
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


//上記のカラー定義から、カラーのサムネイルと、カラー名表記に代入して画面上で表示
for( let A = 0 ; A < design_list_eri.length ; A ++ ){
  $(`#eri_name_${design_list_eri[A].d_num}`).html(`<p>${design_list_eri[A].d_name}</p>`);
}
