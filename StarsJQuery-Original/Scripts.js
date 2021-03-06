$(document).ready( function(){
    
        // CANVAS 
        function callCanvas (canvas) {
            
            // SETTINGS
            var screenpointSplitt = 10000 
            var movingSpeed = 0.1
            
            var viewportWidth = $(window).width();
            var viewportHeight = $(window).height();
            
            // Calculate Screen Dots
            var nbCalculated = Math.round((viewportHeight*viewportWidth/screenpointSplitt))
            
            //CONFIG
            var _this = this,
            
                ctx = canvas.getContext('2d');
        
            _this.config = {
                
                star: {
                    color:  'rgba(255,255,255,1)'
                },
                
                line: {
                    color: 'rgba(255,255,255,1)' ,
                    width: 0.2
                },
                
                position: {
                    x: canvas.width * 0.5,
                    y: canvas.height * 0.5
                },
                
                velocity: movingSpeed,
                length: nbCalculated,
                distance: 100,
                radius: 120,
                stars: []
                
            };
            
            function Star () {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
        
                this.vx = (_this.config.velocity - (Math.random() * 0.3));
                this.vy = (_this.config.velocity - (Math.random() * 0.3));
        
                
            }
        
            Star.prototype = {
                create: function(){
                    ctx.beginPath();
                    ctx.arc(this.x, this.y,1, 0, Math.PI * 2, false);
                    ctx.fill();
                    ctx.closePath();
                },
        
                animate: function(){
                    var i;
                    for(i = 0; i < _this.config.length; i++){
        
                        var star = _this.config.stars[i];
        
                        if(star.y < 0 || star.y > canvas.height){
                            star.vx = star.vx;
                            star.vy = - star.vy;
                        }
                        else if(star.x < 0 || star.x > canvas.width){
                            star.vx = - star.vx;
                            star.vy = star.vy;
                        }
                        star.x += star.vx;
                        star.y += star.vy;
                    }
                },
        
                line: function(){
                    var length = _this.config.length,
                        iStar,
                        jStar,
                        i,
                        j;
        
                    for(i = 0; i < length; i++){
                        for(j = 0; j < length; j++){
                            iStar = _this.config.stars[i];
                            jStar = _this.config.stars[j];
        
                            if(
                                (iStar.x - jStar.x) < _this.config.distance &&
                                (iStar.y - jStar.y) < _this.config.distance &&
                                (iStar.x - jStar.x) > - _this.config.distance &&
                                (iStar.y - jStar.y) > - _this.config.distance
                            ) {
                                if(
                                    (iStar.x - _this.config.position.x) < _this.config.radius &&
                                    (iStar.y - _this.config.position.y) < _this.config.radius &&
                                    (iStar.x - _this.config.position.x) > - _this.config.radius &&
                                    (iStar.y - _this.config.position.y) > - _this.config.radius
                                ) {
                                    ctx.beginPath();
                                    ctx.moveTo(iStar.x, iStar.y);
                                    ctx.lineTo(jStar.x, jStar.y);
                                    ctx.stroke();
                                    ctx.closePath();
                                }
                            }
                        }
                    }
                }
            };
        
            _this.createStars = function () {
                var length = _this.config.length,
                    star,
                    i;
        
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                for(i = 0; i < length; i++){
                    _this.config.stars.push(new Star());
                    star = _this.config.stars[i];
        
                    star.create();
                }
        
                star.line();
                star.animate();
            };
        
            _this.setCanvas = function () {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            };
        
            _this.setContext = function () {
                ctx.fillStyle = _this.config.star.color;
                ctx.strokeStyle = _this.config.line.color;
                ctx.lineWidth = _this.config.line.width;
            };
        
            _this.loop = function (callback) {
                callback();
        
                reqAnimFrame(function () {
                    _this.loop(function () {
                        callback();
                    });
                });
            };
        
            _this.bind = function () {
                $(window).on('mousemove', function(e){
                    _this.config.position.x = e.pageX;
                    _this.config.position.y = e.pageY;
                });
            };
        
            _this.init = function () {
                _this.setCanvas();
                _this.setContext();
        
                _this.loop(function () {
                    _this.createStars();
                });
        
                _this.bind();
            };
          
          return _this;
        }
        
        //requestAnimationFrame
    
        var reqAnimFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
        
        callCanvas($('canvas')[0]).init();	
        
    
    });
    