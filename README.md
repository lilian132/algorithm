# 排序算法

## 冒泡排序

参见 index_MP.html

```
// 1.冒泡排序
// 解析：1.比较相邻的两个元素，如果前一个比后一个大，则交换位置。
// 　　　2.第一轮结束的时候最后一个元素应该是最大的一个。
// 　　　3.按照步骤一的方法进行相邻两个元素的比较，这个时候由于最后一个元素已经是最大的了，所以最后一个元素不用比较。
function MPsrot(arr){
	for(var i=0;i<arr.length-1;i++){
		for(var j=0;j<arr.length-i-1;j++){
			if(arr[j] > arr[j+1]){
				var a = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = a
			}
		}
	}
}

//优化版
// 如果在某次的排序中没有出现交换的情况，
// 那么说明在无序的元素现在已经是有序了，就可以直接返回了。
function MPsrot_1(arr){
    var exchange
    for(var i=0;i<arr.length-1;i++){
        exchange = 0
        for(var j=0;j<arr.length-i-1;j++){
            if(arr[j] > arr[j+1]){
                var a = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = a
                exchange = 1
            }
        }

        if (exchange == 0) return;
    }
}

MPsrot_1([2,3,4,1,7,5,9])
```

## 快速排序

参见 index_KS.html

```
// 快速排序
// 解析：快速排序是对冒泡排序的一种改进，第一趟排序时将数据分成两部分，一部分比另一部分的所有数据都要小。然后递归调用，在两边都实行快速排序。
function  quickSort(arr) { 
　　if (arr.length <= 1) { return arr } 
    var pivotIndex = Math.floor(arr.length / 2) 
    var pivot = arr.splice(pivotIndex, 1)[0]; 
 
　　var left = []; 
　　var right = [];
 
　　for (var i = 0; i < arr.length; i++){ 
　　　　if (arr[i] < pivot) { 
　　　　　　left.push(arr[i]); 
　　　　} else { 
　　　　　　right.push(arr[i]); 
　　　　} 
　　} 
　　return quickSort(left).concat([pivot], quickSort(right)); 
};
 
quickSort([2,3,4,1,7,5,9])
```

## 插入排序

参见 index_KS.html

```
// 插入排序 从下标1开始每增1项排序一次，越往后遍历次数越多
function  insertSort(arr) { 
　for(var i = 0;i < arr.length;i++){
    var next = arr[i+1]
    var insertIndex = -1
    for(var j=0;j<=i;j++){
      if(next < arr[j]){        
        insertIndex = j
        break
      }
    }
    if(insertIndex != -1){      
      arr.splice(i+1,1)
      arr.splice(insertIndex,0,next)
    }    
  }
  return arr
}

// 插入排序 二分插入
function  insertSort_1(arr) { 
　for (var i = 0; i < arr.length-1; i++) {
    var key = arr[i+1], left = 0, right = i
    while (left <= right) {
      var middle = parseInt((left + right) / 2)
      if (key < arr[middle]) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }

    arr.splice(i+1,1)
    arr.splice(left,0,key)
  }
  return arr;
}
 
console.log(insertSort_1([4,8,1,6,9,22,15,7,29]))
```

# 其它算法

## 二分查找

```
// 二分法查找，也称折半查找，是一种在有序数组中查找特定元素的搜索算法。查找过程可以分为以下步骤：
// （1）首先，从有序数组的中间的元素开始搜索，如果该元素正好是目标元素（即要查找的元素），则搜索过程结束，否则进行下一步。
// （2）如果目标元素大于或者小于中间元素，则在数组大于或小于中间元素的那一半区域查找，然后重复第一步的操作。
// （3）如果某一步数组为空，则表示找不到目标元素。
// 参考代码:

     // 非递归算法
        function binary_search(arr, key) {
            var low = 0,
                high = arr.length - 1;
            while(low <= high){
                var mid = parseInt((high + low) / 2);
                if(key == arr[mid]){
                    return  mid;
                }else if(key > arr[mid]){
                    low = mid + 1;
                }else if(key < arr[mid]){
                    high = mid -1;
                }
            }
            return  -1;
        };
        var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
        var result = binary_search(arr,10);
        alert(result); // 9 返回目标元素的索引值       

    // 递归算法
        // function binary_search(arr,low, high, key) {
        //     if (low > high){
        //         return -1;
        //     }
        //     var mid = parseInt((high + low) / 2);
        //     if(arr[mid] == key){
        //         return mid;
        //     }else if (arr[mid] > key){
        //         high = mid - 1;
        //         return binary_search(arr, low, high, key);
        //     }else if (arr[mid] < key){
        //         low = mid + 1;
        //         return binary_search(arr, low, high, key);
        //     }
        // };
        //var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
        //var result = binary_search(arr, 0, 13, 10);
        //alert(result); // 9 返回目标元素的索引值  
```

