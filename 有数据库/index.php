<?php
$code = $_GET["code"];
//echo $code . "<hr>";
$urls = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx8bfa3ed03e8dd220&secret=9a0d4b594940269595ef13d2f0b3898e&code={$code}&grant_type=authorization_code";
//获取到json格式的字符串
$json = httpGet($urls);
//echo $json . "<hr>";
//将字符串转换成关联数组
$arr = json_decode($json, true);
$myToken = $arr["access_token"];
$openid = $arr["openid"];
//echo $myToken . "<hr>";
//echo $openid . "<hr>";
$userInfo = "https://api.weixin.qq.com/sns/userinfo?access_token={$myToken}&openid={$openid}&lang=zh_CN";
$userJson = httpGet($userInfo);
//echo $userJson;
$userArr = json_decode($userJson, true);
$name = $userArr["nickname"];
$headImg = $userArr["headimgurl"];
$openid = $userArr["openid"];
function httpGet($url) {
	$curl = curl_init();
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($curl, CURLOPT_TIMEOUT, 500);
	// 为保证第三方服务器与微信服务器之间数据传输的安全性，所有微信接口采用https方式调用，必须使用下面2行代码打开ssl安全校验。
	// 如果在部署过程中代码在此处验证失败，请到 http://curl.haxx.se/ca/cacert.pem 下载新的证书判别文件。
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);
	curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, true);
	curl_setopt($curl, CURLOPT_URL, $url);

	$res = curl_exec($curl);
	curl_close($curl);

	return $res;
}
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<link rel="stylesheet" type="text/css" href="css/reset.css" />
		<link rel="stylesheet" type="text/css" href="css/main.css" />
		<title>hjkg</title>
	</head>

	<body>

		<input type="hidden" id="name" value="<?php echo $name; ?>" />
		<input type="hidden" id="headImg" value="<?php echo $headImg; ?>" />
		<input type="hidden" id="openid" value="<?php echo $openid; ?>" />
		<!--加载的音乐-->
		<audio id="bgm" src="audio/bgm.mp3" loop></audio>
		<audio id="bomb" src="audio/bomb.mp3"></audio>
		<audio id="got" src="audio/got.mp3"></audio>
		<audio id="last" src="audio/lastfive2.mp3"></audio>
		<audio id="score" src="audio/score.mp3"></audio>
		<!--loading加载页面-->
		<div id="loading-page">
			<img src="img/loading.gif" />
		</div>
		<!--小样挑战吧-->
		<div id="p1">
			<img src="img/enter-on.png" />
		</div>
		<!--选人页面-->
		<div id="p2">
			<div id="big-div">
				<img class="img" src="img/choose-1.png" />
			</div>
			<div id="small-div">
				<div>
					<img src="img/small01.png" />
					<p style="color: red;">
						白 客
					</p>
				</div>
				<div>
					<img src="img/small2.png" />
					<p>
						韩 雪
					</p>
				</div>
				<div>
					<img src="img/small3.png" />
					<p>
						明 道
					</p>
				</div>
				<div>
					<img src="img/small4.png" />
					<p>
						刘语熙
					</p>
				</div>
				<div>
					<img src="img/small5.png" />
					<p>
						徐开聘
					</p>
				</div>
			</div>
			<img src="img/choose-on.png" />
		</div>
		<!--游戏开始页面-->
		<div id="p3">
			<div class="score">
				<img src="img/0.png" />
				<img src="img/0.png" />
				<img src="img/0.png" />
				<img src="img/0.png" />
			</div>
			<img class="person" src="img/mingdao.png" />
			<div class="time">
				<img src="img/t3.png" />
				<img src="img/t0.png" />
				<img src="img/time.png" />
				<img src="img/t0.png" />
				<img src="img/t0.png" />
			</div>
			<div class="tool">
				<img src="img/gunzi.png" />
				<img class="xipai" src="img/xipan.png" />
			</div>
			<div class="food1 food">
				<!--<img src="img/goods1.png" />-->
			</div>
			<div class="food2 food">
				<!--<img src="img/goods2.png" />-->
			</div>
			<div class="food3 food">
				<!--<img src="img/goods3.png" />-->
			</div>
			<div class="food4 food">
				<!--<img src="img/goods4.png" />-->
			</div>
			<div class="food5 food">
				<!--<img src="img/goods5.png" />-->
			</div>
			<div class="food6 food">
				<!--<img src="img/goods6.png" />-->
			</div>
			<div class="food7 food">
				<!--<img src="img/goods7.png" />-->
			</div>
			<!--开始按钮-->
			<img class="start-btn b1" src="img/button-on.png" />
			<!--提示语-->
			<div class="mind">
				<img class="click-here" src="img/click-here.png" />
				<img class="start-btn b2" src="img/button-off.png" />
			</div>
			<!--炸弹爆炸界面-->
			<img class="bomb" src="img/bombeffect.png" />
		</div>
		<!--游戏结束页面-->
		<div id="p4">
			<div class="mask">
				<img src="img/gameover-bg.png" />
			</div>
			<div class="record-score">
				<img src="img/0.png" />
				<img src="img/0.png" />
				<img src="img/0.png" />
				<img src="img/0.png" />
			</div>
			<div class="rank">
				<img src="img/playagain.png" />
				<img src="img/rank.png" />
			</div>
		</div>
		<!--英雄排行榜-->
		<div id="p5">
			<img class="share" src="img/share.png" />
			<ul>
				<!--<li class="ranking">
				<span>1</span>
				<img src="img/title.png" />
				<span>明道</span>
				<span>4522分</span>
				</li>
				<li class="ranking">
				<span>1</span>
				<img src="img/title.png" />
				<span>明道</span>
				<span>4522分</span>
				</li>
				<li class="ranking">
				<span>1</span>
				<img src="img/title.png" />
				<span>明道</span>
				<span>4522分</span>
				</li>
				<li class="ranking">
				<span>1</span>
				<img src="img/title.png" />
				<span>明道</span>
				<span>4522分</span>
				</li>
				<li class="ranking">
				<span>1</span>
				<img src="img/title.png" />
				<span>明道</span>
				<span>4522分</span>
				</li>-->
			</ul>
			<div class="award">
				<img src="img/backgame.png" />
				<img src="img/award.png" />
			</div>
		</div>
		<!--大奖送到家-->
		<div id="p6">
			<div class="shop">
				<img src="img/lookscore-btn.png" />
				<img src="img/shop-btn.png" />
			</div>
		</div>
	</body>
	<script type="text/javascript" src="js/jquery-2.2.3.min.js"></script>
	<script type="text/javascript" src="js/zepto.min.js"></script>
	<script type="text/javascript" src="js/touch.min.js"></script>
	<script type="text/javascript" src="js/main.js"></script>

</html>