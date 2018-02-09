//游戏加载页面
var loadingImgs = ["img/0.png", "img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png", "img/9.png", "img/award-bg.png", "img/award.png", "img/backgame.png", "img/baike-b.png", "img/baike-off.png", "img/baike-on.png", "img/baike.png", "img/baoxiang.png", "img/bg.png", "img/bomb.png", "img/bombeffect.png", "img/button-off.png", "img/button-on.png", "img/cake1.png", "img/cake2.png", "img/cake3.png", "img/checkcake1.png", "img/checkcake2.png", "img/choose-1.png", "img/choose-2.png", "img/choose-3.png", "img/choose-4.png", "img/choose-5.png", "img/choose-bg.png", "img/choose-on.png", "img/click-here.png", "img/cover-bg.png", "img/enter-on.png", "img/faguang.png", "img/gameover-bg.png", "img/goods1.png", "img/goods2.png", "img/goods3.png", "img/goods4.png", "img/goods5.png", "img/goods6.png", "img/goods7.png", "img/gunzi.png", "img/hanxue-b.png", "img/hanxue-off.png", "img/hanxue-on.png", "img/hanxue.png", "img/liuyuxi-b.png", "img/liuyuxi-off.png", "img/liuyuxi-on.png", "img/liuyuxi.png", "img/loading.gif", "img/lookscore-btn.png", "img/mingdao-b.png", "img/mingdao-off.png", "img/mingdao-on.png", "img/mingdao.png", "img/playagain.png", "img/rank.png", "img/rusuan3.png", "img/score-bg.png", "img/score.png", "img/share.png", "img/shop-btn.png", "img/start-bg.png", "img/sugar1.png", "img/sugar2.png", "img/sugar3.png", "img/t0.png", "img/t1.png", "img/t2.png", "img/t3.png", "img/t4.png", "img/t5.png", "img/t6.png", "img/t7.png", "img/t8.png", "img/t9.png", "img/time.png", "img/title.png", "img/xipan.png", "img/xukaipin-b.png", "img/xukaipin-off.png", "img/xukaipin-on.png", "img/xukaipin.png", "img/yun1.png", "img/yun2.png", "img/yun3.png", "img/yun4.png", "img/yun5.png", "img/yun6.png", "img/yun7.png"];
var loadingNum = 0; //用来统计加载完的图片的张数
for(var i = 0; i < loadingImgs.length; i++) {
	var img = new Image(); //创建图片对象
	img.src = loadingImgs[i];
	img.onload = function() {
		loadingNum++;
		//判断接近加载完毕的时候进入游戏主页面
		if(loadingNum > loadingImgs.length - 1) {
			$("#loading-page").hide(); //隐藏加载的页面
			$("#p1").show();
			$("#bgm").get(0).play();
		}
	}
}
//进去看看
$("#p1 img").on("touchstart", function() {
		$("#p1").hide();
		console.log($("body").width() * 2);
		$("#p2").show();
	})
	//big-div
	//console.log($("body").width() * 2);
	//	$("#big-div").width($("body").width() * 2);
$(".img").css({
	//	width: $("body").width() * 0.5,
	marginLeft: $("body").width() * 0.25
})
var num = 0; //记录点击图片的下标
var previous = 0; //记录上一次点击图片的下标
//点击小图片
$("#small-div img").on("touchstart", function() {
		num = $("#small-div img").index(this);
		for(var i = 0; i < $("#small-div img").length; i++) {
			$("#small-div img").eq(i).attr("src", "img/small" + (i + 1) + ".png")
			$("#small-div img").eq(i).next().css("color", "black")
		}
		$(this).attr("src", "img/small0" + (num + 1) + ".png")
		$(this).next().css("color", "red")
			//		alert("num" + num)
			//		alert(previous)
		if(num > previous) {
			$(".img").eq(0).animate({
					marginLeft: -$("body").width()
				}, function() {
					$(".img").eq(0).remove()
				})
				//大图
			var img = "<img class='img'/>"
			$("#big-div").append(img)
			$(".img").eq(1).attr("src", "img/choose-" + (num + 1) + ".png")
				//		console.log($("#big-div img"));
			$(".img").eq(1).css({
				//				width: $("body").width() * 0.5,
				marginLeft: $("body").width() * 1.25
			})
			$(".img").eq(1).animate({
				marginLeft: $("body").width() * 0.25
			}, 300)
		}
		if(num < previous) {
			$(".img").eq(0).animate({
					marginLeft: $("body").width() * 1.25
				}, function() {
					$(".img").eq(0).remove()
				})
				//大图
			var img = "<img class='img'/>"
			$("#big-div").append(img)
			$(".img").eq(1).attr("src", "img/choose-" + (num + 1) + ".png")
			console.log($("#big-div img"));
			$(".img").eq(1).css({
				//				width: $("body").width() * 0.5,
				marginLeft: -$("body").width()
			})
			$(".img").eq(1).animate({
				marginLeft: $("body").width() * 0.25
			}, 300)
		}

		previous = num;
	})
	//进入游戏界面选定的人物
var arr = ["baike.png", "hanxue.png", "mingdao.png", "liuyuxi.png", "xukaipin.png"]
	//p2 选定人物
$("#p2>img").on("touchstart", function() {
		$("#p2").hide();
		$(".person").attr("src", "img/" + arr[num])
		$("#p3").show();
		foodMove();
		setInterval(foodMove, 100)
	})
	//p3游戏界面
	//提示按钮
var timer //提示按钮的定时器
timer = setInterval(function() {
		$(".click-here").animate({
			opacity: "0"
		}, 1000)
		$(".click-here").animate({
			opacity: "1"
		}, 1000)
	}, 2000)
	//提示语按钮
$(".b2").on("touchstart", function() {
		$(".mind").hide()
		clearInterval(timer)
		timerCut = setInterval(cutDown, 10)
	})
	//开始按钮
var bool = true;
$(".b1").on("touchstart", function() {
		clearInterval(timerTool)
			//		console.log("bool=" + bool);
		if(bool) {
			$(".start-btn").attr("src", "img/button-on.png");
			bool = false;
			timerAdd = setInterval(addLength, 10);
		}
	})
	//倒计时
var cutdown = 3000;
var timerCut; //记录倒计时的定时器
var score = 0; //分数
function cutDown() {
	//	console.log(cutdown / 1000);
	$(".time img").eq(0).attr("src", "img/t" + parseInt(cutdown / 1000) + ".png");
	$(".time img").eq(1).attr("src", "img/t" + parseInt(cutdown / 100 % 10) + ".png")
	$(".time img").eq(3).attr("src", "img/t" + parseInt(cutdown % 100 / 10) + ".png")
	$(".time img").eq(4).attr("src", "img/t" + parseInt(cutdown % 10) + ".png")
	if(cutdown <= 5) {
		$("#last").get(0).play();
	}
	if(cutdown <= 0) {
		clearInterval(timerCut)
		$("#p4").show();
		$(".record-score img").eq(0).attr("src", "img/" + parseInt(score / 1000) + ".png");
		$(".record-score img").eq(1).attr("src", "img/" + parseInt(score / 100 % 10) + ".png")
		$(".record-score img").eq(2).attr("src", "img/" + parseInt(score % 100 / 10) + ".png")
		$(".record-score img").eq(3).attr("src", "img/" + parseInt(score % 10) + ".png")
			/*//php后台交互
			//获取用户信息
		var name = $("#name").val();
		//获取用户头像
		var headImg = $("#headImg").val();
		//获取openid
		var openid = $("#openid").val();
		//从前台获取数据.通过AJAX
		$myUrl = "data.php?name=" + name + "&openid=" + openid + "&headImg=" + headImg + "&score=" + score;
		$.get($myUrl, function(data) {
			//alert(data);
			//将json格式的字符串转换成对象
			var obj = JSON.parse(data);

		});
		//设置排行榜
		$.get("rank.php", function(data) {
			$("#p5 ul").html(data);
		})*/
		$(".rank img").eq(0).on("touchstart", function() {
			location.reload();
		})
		$(".rank img").eq(1).on("touchstart", function() {
			$("#p3").hide();
			$("#p4").hide();
			$("#p5").show();
			$(".award img").eq(0).on("touchstart", function() {
				location.reload();
			})
			$(".award img").eq(1).on("touchstart", function() {
				$("#p5").hide();
				$("#p6").show();
			})
		})
	}
	cutdown -= 1;
}

//工具的摆动
var angle = 0;
var timerTool; //记录工具旋转的定时器
var bool1 = true; //旋转到一定角度改变方向
function toolMove() {
	if(bool1) {
		angle--;
		if(angle <= -60) {
			bool1 = false
		}
	} else {
		angle++;
		if(angle >= 60) {
			bool1 = true;
		}
	}
	$(".tool").css("transform", "rotate(" + angle + "deg)")
}
timerTool = setInterval(toolMove, 10);
//记录爆炸时候切换的图片
var arrBomb = ["baike-b.png", "hanxue-b.png", "mingdao-b.png", "liuyuxi-b.png", "xukaipin-b.png"]
	//工具的增长
var timerAdd; //记录棍子增长的定时器
var timerReduce; //记录棍子减少的定时器
var path; //记录图片的路径
var flag = true;//判断加分的音乐
function addLength() {
	//	console.log($(".tool").height() - $(".tool img").eq(1).height());
	$(".tool img").eq(0).height($(".tool").height() - $(".tool img").eq(1).height())
	$(".tool").height($(".tool").height() + 10)
	if($(".tool").position().left <= 0 || $(".tool img").eq(1).offset().left >= $("#p3").width() - $(".tool img").eq(1).width() || $(".tool").height() >= $("#p3").height() * 0.85) {
		clearInterval(timerAdd);
		flag =false;
		timerReduce = setInterval(reduceLength, 10)
	}
	$(".food img").each(function(i, e) {
		if(crash(".xipai", e)) {
			$("#got").get(0).play();
			//			console.log("1");
			path = $(e).attr("src");
			//			console.log($(e).parent().attr("val"));
			if($(e).parent().attr("val") == 5000) {
				var img = "<img class = 'shine' />";
				$(e).parent().append(img);
				$(".shine").attr("src", "img/faguang.png")
				setInterval(function() {
					$(".shine").remove()
				}, 900)

			}
			if($(e).parent().attr("val") == 0) {
				$("#bomb").get(0).play();
				$(".bomb").show();
				setTimeout(function() {
					$(".bomb").hide();
					$(".person").attr("src", "img/" + arrBomb[num])
					setTimeout(function() {
						$(".person").attr("src", "img/" + arr[num])
					}, 1000)
				}, 1000)
			}
			score = $(e).parent().attr("val") - 0 + score;
			$(".score  img").eq(0).attr("src", "img/" + parseInt(score / 1000) + ".png");
			$(".score  img").eq(1).attr("src", "img/" + parseInt(score / 100 % 10) + ".png")
			$(".score  img").eq(2).attr("src", "img/" + parseInt(score % 100 / 10) + ".png")
			$(".score  img").eq(3).attr("src", "img/" + parseInt(score % 10) + ".png")
				//			console.log($(e).attr("src"))
				//			console.log($(e).parent().attr("val"));
			if($(e).parent().attr("val") != 0) {
				var img = "<img class = 'goods'  />"
				$(".tool").append(img);
				$(".goods").attr("src", path)
			}
			$(e).remove()
			clearInterval(timerAdd);
			flag =  true;
			timerReduce = setInterval(reduceLength, 10)
			
		}
	})
}

function reduceLength() {
	$(".tool img").eq(0).height($(".tool").height() - $(".tool img").eq(1).height())
	$(".tool").height($(".tool").height() - 10);
	if($(".tool").height() <= $("#p3").height() * 0.21) {
		clearInterval(timerReduce);
		$(".goods").remove()
		timerTool = setInterval(toolMove, 10)
		$(".start-btn").attr("src", "img/button-off.png");
		bool = true;
		console.log($(".xipai").next());
		if (flag) {
			$("#score").get(0).play();
			flag =false;
		}
	}
}
//食物的摆动
var speedArr = [8, 14, 9, 13, 10, 8, 11]
$(".food").attr("speed", "1")

function foodMove() {
	$(".food").each(function(i, e) {
		var x = $(e).position().left;
		if(x >= $("#p3").width() - $(e).width()) {
			$(e).attr("speed", "-1")
		}
		if(x <= 0) {
			$(e).attr("speed", "1")
		}
		x = x + speedArr[i] * $(e).attr("speed");
		$(e).css("left", x)
	})
}
//工具与食物之间的碰撞
var boolCrash = true; //记录是否碰撞
function crash(obj1, obj2) {
	var l1 = $(obj1).offset().left;
	var r1 = l1 + $(obj1).width();
	var t1 = $(obj1).offset().top;
	var b1 = t1 + $(obj1).height();
	var l2 = $(obj2).offset().left;
	var r2 = l2 + $(obj2).width();
	var t2 = $(obj2).offset().top;
	var b2 = t2 + $(obj2).height();
	if(l1 < r2 && r1 > l2 && t1 < b2 && b1 > t2) {
		boolCrash = true;
	} else {
		boolCrash = false;
	}
	return boolCrash;
}
//食物被抓走之后随机出现
//随机数
function random(m, n) {
	return Math.floor(Math.random() * (n - m + 1) + m);
}
var arrPic = ["cake1.png", "cake2.png", "cake3.png", "goods1.png", "goods2.png", "goods3.png", "goods4.png", "goods5.png", "goods6.png", "goods7.png", "rusuan3.png", "sugar1.png", "sugar2.png", "sugar3.png", "baoxiang.png", "bomb.png", "bomb.png"];
var arrPrice = [2, 2, 2, 1000, 200, 2000, 500, 100, 500, 1500, 10, 3, 3, 3, 5000, 0, 0];
setInterval(function() {
	$(".food").each(function(i, e) {
		//		console.log($(e));
		if($(e).children().length == 0) {
			var num = random(0, 16);
			//			console.log("num=" + num);
			var img = "<img class = img" + i + " />";
			$(e).append(img);
			$(".img" + i).attr("src", "img/" + arrPic[num])
			$(e).attr("val", arrPrice[num])
				//			console.log($(e).attr("val"));
		}
	})
}, 1000)