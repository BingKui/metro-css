/*常用handlebars扩展函数*/
/**
 * 保留几位小数 value：数值 decimalNu：保留的小数个数
 */
Handlebars.registerHelper('toFixed', function(value, decimalNum) {
	value = Number(value);
	decimalNum = decimalNum || 2;
	return value.toFixed(decimalNum);
});
Handlebars.registerHelper('returnList', function(value) {
	var str = '';
	for(var i = 0;i<vale.length;i++){
		str += value[i] + "<br>";
	}
	return str;
});