/**
 * Created by heimao on 2017/4/27.
 */
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    beforeCreate:function(){
        console.group("beforeCreate创建前的状态========");
        console.log("%c%s","color:red","el   "+this.$el);
        console.log("%c%s","color:red","data   "+this.$data);
        console.log("%c%s","color:red","message   "+this.message);
    },
    created:function(){
        console.group("created创建完毕状态=========");
        console.log("%c%s","color:red","el   "+this.$el);
        console.log("%c%s","color:red","data   "+this.$data);
        console.log("%c%s","color:red","message   "+this.message);
    },
    beforeMount:function(){
        console.group("beforeMount挂载前状态=========");
        console.log("%c%s","color:red","el   "+this.$el);
        console.log("%c%s","color:red","data   "+this.$data);
        console.log("%c%s","color:red","message   "+this.message);
    },
    mounted: function () {
        console.group('mounted 挂载结束状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
        console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    beforeUpdate: function () {
        console.group('beforeUpdate 更新前状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data);
        console.log("%c%s", "color:red","message: " + this.message);
    },
    updated: function () {
        console.group('updated 更新完成状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data);
        console.log("%c%s", "color:red","message: " + this.message);
    },
    beforeDestroy: function () {
        console.log(9999);
        console.group('beforeDestroy 销毁前状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data);
        console.log("%c%s", "color:red","message: " + this.message);
    },
    destroyed: function () {
        console.group('destroyed 销毁完成状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data);
        console.log("%c%s", "color:red","message: " + this.message)
    }
});