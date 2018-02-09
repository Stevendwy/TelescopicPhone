<?php
//		链接数据库(主库:端口号,用户名,密码)
$con = mysql_connect(SAE_MYSQL_HOST_M . ":" . SAE_MYSQL_PORT, SAE_MYSQL_USER, SAE_MYSQL_PASS);

//		选择数据库
mysql_select_db(SAE_MYSQL_DB);
//		设置编码格式
mysql_query("set names utf8");
$sql = "select * from my_users order by score desc";
//		执行sql语句,将用户按照分数降序排列
$result = mysql_query($sql);
//		将结果以数组形式返回
//		$arr = mysql_fetch_array($result);
//echo $result;
//		获取返回数据的条数
$row_num = mysql_num_rows($result);
$i = 1;

$html = "";
if ($row_num > 0) {
	while ($i <= 5&&$i <= $row_num) {
		//mysql_fetch_array每次获取一条(一个用户)的数据,每次都只是从上次获取的位置开始往下继续获取一条
		$userArr = mysql_fetch_array($result);
		$html .= '<li class="ranking"><span>' . $i . '</span><img src="' . $userArr["headImg"] . '" /><span>' . $userArr["name"] . '</span><span>' . $userArr["score"] . '分</span></li>';
		$i++;
	}
} else {
	//还没人玩
	$html = "<li class='ranking'>暂无数据,等你来开天辟地!</li>";
}

echo $html;
?>