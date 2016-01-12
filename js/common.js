/*
 * 框架模板
 * version:0.0.1
 */
(function($) {
	/*
	 * 数据配置数组的配置参数
	 * 0为本地数据，1为远程数据
	 */
	var conf = 0;
	var srcPref = ["../src/json/", "http://"];
	var dataArray = [{
		//登录
		"history": srcPref[conf] + "history.json"
	}, {
		//登录
		"history": srcPref[conf] + "history.json?1=1"
	}];
	window.dataUrl = dataArray[conf];
	/*
	 * 扩展jQuery的Ajax方法，用于异步获取数据
	 * get方式，post方式，json返回
	 * 2个比较重要：GetJson  , PostJson
	 */
	$(function() {
		$.extend({
			/*
			 * get方式请求数据。返回的JSON要符合规范。
			 * 引号不能去掉。完整写法：{"key","value"}
			 */
			GetJson: function(url, datas, callback) {
				$.ajax({
					url: url,
					type: "GET",
					data: "_=" + (new Date()).getTime() + (datas == null || datas == "" ? "" : ("&" + datas)),
					cache: false,
					dataType: "json",
					beforeSend: function(xhr) {
						xhr.overrideMimeType("text/plain; charset=utf-8");
					},
					success: function(json) {
						callback("success", json);
					},
					error: function(e) {
						callback("error", {
							"flag": false,
							"errmsg": "Call service failed！"
						});
					}
				});
			},
			/*
			 * post方式提交数据，适用于大数据提交。返回的JSON要符合规范。
			 * 引号不能去掉。完整写法：{"key" , "value"}
			 */
			PostJson: function(url, datas, callback) {
				$.ajax({
					url: url,
					type: "POST",
					data: "_=" + (new Date()).getTime() + (datas == null || datas == "" ? "" : ("&" + datas)),
					cache: false,
					dataType: "json",
					beforeSend: function(xhr) {
						xhr.overrideMimeType("text/plain; charset=utf-8");
					},
					success: function(json) {
						callback("success", json);
					},
					error: function(e) {
						callback("error", {
							"flag": false,
							"errmsg": "Call service failed！"
						});
					}
				});
			}
		});
	});
	/**
	 * 整合handlebars添加到页面的方法
	 */
	$.fn.handlebarsAppendToHtml = function(tpl_id,date){
		var _temp = Handlebars.compile($("#"+tpl_id).html());
		$(this).html(_temp(date));
	}
})(jQuery);