//生成数组
function creatArr(){
	var num = 30
	var arr = []
	for(var i=0;i<num;i++){
		arr[i] = i+1
	}
	return arr.sort(function(a,b){return 0.5-Math.random()})
}

//事件队列控制
var event = {
	taskList : [],
	push : function(arr,lineArr){
		//使用闭包存储数据
		var cb = (function(arr,lineArr){
		            var _arr = arr.slice()
		            var _lineArr = lineArr.slice()
		            return function(){   
		                setTimeout(function(){
		                    show(_arr,_lineArr)
		                    event.go()
		                },100)
		            }
		        })(arr,lineArr)
		
		this.taskList.push({
			cb:cb
		})
	},
	go : function(){			
		if(this.taskList.length){
			this.taskList.shift().cb()
		}	
	}
}

//插入dom
var arr = creatArr();
function show(arr,changeLine){
	var str = ''
	for(var i=0;i<arr.length;i++){
		str += '<div class="box-flex-item" style="height:'+ arr[i]*10 +'px"></div>'
	}
	$("#dom").html(str)

	if(changeLine){
		$("#dom div").eq(changeLine[0]).addClass("red")
		$("#dom div").eq(changeLine[1]).addClass("red")
	}
}
show(arr)