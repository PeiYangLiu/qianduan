function demo(){
    var a = 0;
    let b = 0
    if(true){
        let c = 0;//let为块内变量，块外无法访问
        var d = 1;
    }
    console.log(c);//报错
    console.log(d);//不报错
    const e = 9;//const为常量，不可再被赋值
    e = 10;//报错
}