// JavaScript Document
$(function(){
	/* 动态响应式轮播图 */
	banner();
	initTab();
	});
var banner = function(){
	/**
	*1、模拟一组数据（从后台去获取数据）  [{},{},{},{}]
	*2、判断当前设备（是移动端还是pc端）   768px
	*3、根据当前的设备把数据转换成html  拼接字符串
	*  3.1 点容器需要动态生成
	*  3.2 图片容器需要动态生成
	*4、添加或渲染到页面中  html中追加
	*5、测试能否响应移动端和pc端   监听页面尺寸改变重新渲染
 	*6、移动端手势切换功能  左滑 右滑 来切换
	*/
	/* 获取相关的元素 */
	/* 轮播图组件 */
	var $banner = $('.carousel');
	/* 点容器 */
	var $point = $banner.find('.carousel-indicators');	
	/* 图片容器 */
	var $image = $banner.find('.carousel-inner');
	/* 当前窗口对象 */
	var $window = $(window);
	/*1*/
	var data = [
		{
			pcSrc:'images/pc-01.jpg',
			mSrc:'images/phone-01.jpg'
		},
		{
			pcSrc:'images/pc-02.jpg',
			mSrc:'images/phone-02.jpg'
		},
		{
			pcSrc:'images/pc-03.jpg',
			mSrc:'images/phone-03.jpg'
		}
	];
	/* 2 */
	var render = function(){
		/* 判断当前设备 */
		var isMobile = $window.width() < 768 ? true : false;
		/* 根据当前设备把数据转换成html */
		/* 点容器需要动态生成 */
		var pointHtml = '';
		/* 图片需要动态生成 */
		var imageHtml = '';
		/* 根据数据来拼接 */
		$.each(data,function(k,v){
			pointHtml +='<li data-target="#carousel-example-generic" data-slide-to="'+k+'" '+(k==0 ? 'class="active"' : '')+'></li>';
			imageHtml +='<div class="item '+(k==0 ? 'active' : '')+'">';
			/* 当前设备的区别 */
			if(isMobile){
				imageHtml +='<a class="m-banner"><img src="'+(v.mSrc)+'" /></a>';
			}else{
				imageHtml +='<a class="pc-banner hidden-xs" style="background-image:url('+(v.pcSrc)+')"></a>';
				}
			imageHtml +='</div>';
			});
			/* 4 */
			$point.html(pointHtml);
			$image.html(imageHtml);
	};
	/* 监听页面尺寸改变重新渲染 */
	$window.on('resize', function(){
		render();
		
		}).trigger('resize');
	/* trigger 主动触发 resize 事件 执行 render 然后进行实时的页面渲染 */
	/* 移动端 手势切换功能 左滑和右滑 */
	/* 通过jquery可以绑定touch事件 */
	/* jquery中没有event对象当中没有触摸点集合 */
	/* 在originalEvent 当中才有触摸点的集合 */
	var startX = 0;
	$banner.on('touchstart', function(e){
		startX = e.originalEvent.touches[0].clientx;
		}).on('touchmove', function(){
			
		}).on('touchend', function(){
			
		});
	
	};
	
var initTab = function(){
	//所以的页签在一行显示 设置父容器的宽度是所有子容器的宽度之和
	//父容器
	var tabs = $('.ly_product .nav-tabs');
	//所有的子容器
	var liList = tabs.find('li');
	
	//计算宽度之和（所有li的宽度之和
	var width = 0;
	$.each(liList, function(i, item){
		//width 获取的是内容的宽度  
		//innerWidth   获取的是内边距和内容的宽度
		//outerWidth   获取的是内容+内边距——边框宽度、
		//outerWidth(true)  获取的是内容+边框+内部距+外边距
		width += $(item).outerWidth(true);
		});
	tabs.width(width);
	
	//2、满足区域滚动的html结构要求 必须有一个大容器套一个小容器
	//3、实现滑动功能
	new IScroll('.ly_nav_parent',{
		scrollX: true,
		scrollY: false
		});  	
	
};