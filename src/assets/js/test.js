/**
 * Created by heimao on 2017/4/27.
 */
/*
function myFun(){
    console.log("myFun...");
}
export{
    myFun
}*/
var myFun = function(name,age){
    this.name = name;
    this.age = age;
};
myFun.prototype = {
    constructor:myFun,
    getValue:function(){
        console.log("getValue....");
    }
};
var myObj = new myFun("xiaoming","23");
export {
    myObj
}
