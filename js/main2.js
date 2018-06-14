var data = {
    name:'Tako'
};

Vue.component('greeting',{
    template:'<p>Hey there, I am {{ name }} <button @click="changeName">Change Name</button>',
    data:function(){
        return data;
    },
    methods:{
        changeName:function(){
            this.name = "Maot"
        }
    }
});

new Vue({
    el:'#vue-app-one'
}); 

new Vue({
    el:'#vue-app-two'
})