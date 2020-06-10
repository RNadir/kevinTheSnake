function kevinZmija(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = VelicinaKvadrata * 1;
    this.ySpeed = 0;
    this.totalPojeden = 0;
    this.rep = [];

    this.prikaz= function() {
        ctx.fillStyle= "#1D428A";

        for(let i = 0; i<this.rep.length; i++){
            ctx.fillRect(this.rep[i].x, this.rep[i].y, VelicinaKvadrata, VelicinaKvadrata);
        }
        ctx.fillRect(this.x, this.y, VelicinaKvadrata, VelicinaKvadrata);
    }
    this.update = function(){
        for(let i = 0; i<this.rep.length - 1; i++){
            this.rep[i] = this.rep[i+1];    
        }
        this.rep[this.totalPojeden - 1] = {x: this.x, y: this.y};
        
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x > canvas.width){
            this.x = 0;
        }
        if(this.y > canvas.height){
            this.y = 0;
        }
        if(this.x < 0){
            this.x = canvas.width;
        }
        if(this.y < 0){
            this.y = canvas.width;
        }
    }

    this.promijeniPutanju = function(putanja){
        switch(putanja){
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -VelicinaKvadrata;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = VelicinaKvadrata;
                break;
            case 'Right':
                this.xSpeed = VelicinaKvadrata;
                this.ySpeed = 0;
                break;
            case 'Left':
                this.xSpeed = -VelicinaKvadrata;
                this.ySpeed = 0;
                break;
        }

    }
    this.pojede = function(boba){
        if(this.x === boba.x && this.y===boba.y){
            this.totalPojeden++; //za povecanje kevina
            return true;
        } 
        return false;
    }
} 