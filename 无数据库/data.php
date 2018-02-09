<?php
$name = $_GET["name"];
$openid = $_GET["openid"];
$headImg = $_GET["headImg"];
$score = $_GET["score"];
echo $openid."<hr>";
echo $headImg."<hr>";
//定义一个空数组存放需要返回的数据
$user_info = array();
//链接数据库("主库名:端口号","用户名","密码")
$con = mysql_connect(SAE_MYSQL_HOST_M.":".SAE_MYSQL_PORT, SAE_MYSQL_USER, SAE_MYSQL_PASS);
mysql_select_db(SAE_MYSQL_DB);
mysql_query("set names utf8");
$sql = "select * from my_users where openid = '{$openid}'";
$result = mysql_query($sql);
//将结果转换成数组
$userArr = mysql_fetch_array($result);
if ($userArr) {
	//数组不为空,说明老用户
	$old_score = $userArr["score"];
	if ($score > $old_score) {
		$update_sql = "update my_users set score='{$score}' where openid = '{$openid}'";
		mysql_query($update_sql);
		$user_info["score"] = $score;
	} else {
		$user_info["score"] = $old_score;
	}
} else {
	$insert_sql = "insert into my_users(openid,name,headImg,score) values('{$openid}','{$name}','{$headImg}','{$score}')";
	mysql_query($insert_sql);
	$user_info["score"] = $score;
}
//所有用户按分值排序,查询排名
$sort_sql = "select count(openid) from my_users where score > {$user_info['score']}";
$rank = mysql_query($sort_sql);
$rank_arr = mysql_fetch_array($rank);
$user_rank = $rank_arr[0] + 1;
$user_info["rank"] = $user_rank;
//将数组转成json格式的字符串
$user_json = json_encode($user_info);
echo $user_json;
?>