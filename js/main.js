    var app = new Vue({
            el: '#app',
            data: {
                message: 'Hello Vue!'
            }
        })   

        var app2 = new Vue({
            el: '#app-2',
            data: {
                message: 'You loaded this page on ' + new Date().toLocaleString()
            }
        })   

        var app3 = new Vue({
            el: '#app-3',
            data: {
                message: app.message 
            }
        })   

        var app4 = new Vue({
            el: '#app-4',
            data: {
                todos:[
                    {text: 'Maot'},
                    {text: 'ka'},
                    {text: 'NatNat'}
                ],
                message: 'You loaded this page on ' + new Date().toLocaleString()
            }
        })   

        
        var app5 = new Vue({
            el: '#app-5',
            data: {
                seen: true
            }
        })  

        var app6 = new Vue({
            el: '#app-6',
            data: {
                message: 'Hello Vue.js!'
            },
            methods: {
                reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
                }
            }
        })

        var app7 = new Vue({
            el: '#app-7',
            data:{
                message: 'Hello Tako'
            }
        })

        var app8 = new Vue({
            el: '#app-8',
            data:{
                message: 'test',
                id: 1
            },
            methods:{
                test: function(){
                if(this.id == 1){
                this.message = 'maot ka natnat';
                this.id = 2;
                }
                else if(this.id == 2){
                this.message = 'mas maot ka tako';
                this.id = 1;
                }
            }
            }   
        })

        var app9 = new Vue({
            el: '#app-9',
            data:{
                available:false,
                notavailable:false,
                value1:0,
                value2:0,
                result:0,
                age:0,
                x :0,
                y :0,
                mensahe:"message",
  
            },
            methods:{
                updateXY:function(event){
                    this.x = event.offsetX;
                    this.y = event.offsetY;
                },
                add:function(){
                    this.age++;
                },
                sub:function(){
                    this.age--;
                },
                addV:function(inc){
                    this.age = this.age + inc;
                },
                subV:function(dec){
                    this.age = this.age - dec;
                },
                keyUp:function(){
                    this.mensahe = "You have encoded";
                },
                keyUpEnter:function(){
                    this.mensahe = "You have encoded and enter";
                },
                addValue:function(){
                   this.result = this.value1 + this.value2; 
                },
                changeStatus:function(){
                    if(this.available==false){
                        this.available = true;
                    }
                    else if(this.available==true){
                        this.available = false;
                    }
                }
            }
        })

        var app10 = new Vue({
            el:'#app-10',
            data:{
                Characters:[
                    'Zelda',
                    'Link',
                    'Ganon'
                ],
                Cwskills:[
                    {name: 'Tidus', skill:'blitz'},
                    {name: 'Yuna', skill:'summon'},
                    {name: 'Lulu', skill:'blackmagic'}
                ],
            }
                   
        })

         