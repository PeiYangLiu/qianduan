function add(a:number,b?:number):number{//添加？可以设置可选参数
    return a+b;
}
function add2(a:number,b=1):number{//直接赋值可以添加参数默认值，同时该参数也是可选参数
    return a+b;
}
function add3(a:number,...parmas:number[]):number{//设置可变参数
    let sum:number = 0;
    for(let i=0;i<parmas.length;i++){
        sum+=parmas[i];
    }
    return sum + a;
}
add(1);//由于b是可选参数，所以可以不传b
add2(1,2);
add2(1);
alert(add3(1,2,3,4,5,6,7,87));
