//SVGアニメーションの描画
var stroke;
stroke = new Vivus('mask', { //アニメーションをするIDの指定
    start: 'manual', //自動再生をせずスタートをマニュアルに
    type: 'scenario-sync', // アニメーションのタイプを設定
    duration: 10, //アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false, //パスが更新された場合に再レンダリングさせない
    animTimingFunction: Vivus.EASE, //動きの加速減速設定
  },
  function () {
    $("#mask").attr("class", "done"); //描画が終わったらdoneというクラスを追加
  }
);

$(window).on('load', function () {
  $("#splash").delay(3000).fadeOut('slow'); //ローディング画面を3秒（3000ms）待機してからフェイドアウト
  $("#splash_logo").delay(3000).fadeOut('slow'); //ロゴを3秒（3000ms）待機してからフェイドアウト
  stroke.play(); //SVGアニメーションの実行
});
//画面遷移//
$(window).on('load', function () {
  $("#splash-logo").delay(1200).fadeOut('fast'); //ロゴを1.2秒でフェードアウトする記述

  //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  $("#splash").delay(50).fadeOut('slow', function () { //ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

    $('body').addClass('appear'); //フェードアウト後bodyにappearクラス付与

  });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

  //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
  $('.splashbg').on('animationend', function () {
    //この中に動かしたいJSを記載
  });
  //=====ここまで背景が伸びた後に動かしたいJSをまとめる

});

//ハンバーガーメニュー//
$(".openbtn").click(function () { //ボタンがクリックされたら
  $(this).toggleClass('active'); //ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
  $(".circle-bg").toggleClass('circleactive'); //丸背景にcircleactiveクラスを付与
});

$("#g-nav a").click(function () { //ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass('active'); //ボタンの activeクラスを除去し
  $("#g-nav").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスを除去
  $(".circle-bg").removeClass('circleactive'); //丸背景のcircleactiveクラスを除去
});

//スライダー用//

//画像の設定

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 768) {
  var responsiveImage = [ //PC用の画像
    {
      src: './IMG/eiji8.jpg'
    },
    {
      src: './IMG/eiji12.jpg'
    },
    {
      src: './IMG/eiji10_2.jpg'
    }
  ];
} else {
  var responsiveImage = [ //タブレットサイズ（768px）以下用の画像
    {
      src: './IMG/eiji9.jpg'
    },
    {
      src: './IMG/eiji10_2.jpg'
    },
    {
      src: './IMG/eiji11.jpg'
    }
  ];
}

//Vegas全体の設定

$('#slider').vegas({
  overlay: true, //画像の上に網線やドットのオーバーレイパターン画像を指定。
  transition: 'blur', //切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
  transitionDuration: 2000, //切り替わりのアニメーション時間をミリ秒単位で設定
  delay: 10000, //スライド間の遅延をミリ秒単位で。
  animationDuration: 15000, //スライドアニメーション時間をミリ秒単位で設定
  animation: 'kenburns', //スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
  slides: responsiveImage, //画像設定を読む
  timer: true, // プログレスバーを非表示したい場合はこのコメントアウトを外してください
});
//テキストタイピング
$(function () {
  var typed = new Typed(".TextTyping", {
    strings: [
      "お誕生日おめでとう！"
    ],
    typeSpeed: 60,
    startDelay: 6000,
    backSpeed: 40,
      loop:false

  });

});


//紙吹雪//
particlesJS("particles-js",{
	"particles":{
		"number":{
			"value":120,//この数値を変更すると紙吹雪の数が増減できる
			"density":{
				"enable":false,
				"value_area":80
			}
		},
		"color": {
        "value": ["#EA5532", "#F6AD3C", "#FFF33F", "#00A95F", "#00ADA9", "#00AFEC","#4D4398", "#E85298"]//紙吹雪の色の数を増やすことが出来る
		},
		"shape":{
			"type":"polygon",//形状はpolygonを指定
			"stroke":{
				"width":0,
			},
			"polygon":{
				"nb_sides":5//多角形の角の数
			}
			},
			"opacity":{
				"value":1,
				"random":false,
				"anim":{
					"enable":true,
					"speed":30,
					"opacity_min":0,
					"sync":false
				}
			},
			"size":{
				"value":5.305992965476349,
				"random":true,//サイズをランダムに
				"anim":{
					"enable":true,
					"speed":1.345709068776642,
					"size_min":0.8,
					"sync":false
				}
			},
			"line_linked":{
				"enable":false,
			},
			"move":{
				"enable":true,
			"speed":10,//この数値を小さくするとゆっくりな動きになる
			"direction":"bottom",//下に向かって落ちる
			"random":false,//動きはランダムにならないように
			"straight":false,//動きをとどめない
			"out_mode":"out",//画面の外に出るように描写
			"bounce":false,//跳ね返りなし
				"attract":{
					"enable":false,
					"rotateX":600,
					"rotateY":1200
				}
			}
		},
		"interactivity":{
			"detect_on":"canvas",
			"events":{
				"onhover":{
					"enable":false,
				},
				"onclick":{
					"enable":false,
				},
				"resize":true
			},
		},
		"retina_detect":true
	});


//ページトップ//
// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});


