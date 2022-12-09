AFRAME.registerComponent("plane", {
    schema:{
        moveX: {type:"number", default:0.1},
        rotationX: {type:"number", default:0},
        rotationY: {type:"number", default:0},
    },
    init: function(){
        window.addEventListener("keydown", (item)=>{
            if(item.key == "j"){
                this.data.moveX = this.data.moveX - 0.1
                this.data.rotationX = this.data.rotationX - 0.5
                this.data.rotationY = this.data.rotationY + 0.5
            }
            if(item.key == "l"){
                this.data.moveX = this.data.moveX + 0.1
                this.data.rotationX = this.data.rotationX + 0.5
                this.data.rotationY = this.data.rotationY - 0.5
            }
        })
    },
    tick: function(){
        var pos = this.el.getAttribute("position")
        var rotation = this.el.getAttribute("rotation")
        pos.x = this.data.moveX
        rotation.x = this.data.rotationX
        rotation.y = this.data.rotationY
        this.el.setAttribute("rotation", {x:rotation.x, y:rotation.y, z:rotation.z})
        // this.el.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z})
    }
})

AFRAME.registerComponent("terrain", {
    schema:{
        moveX: {type:"number", default:0.1},
        rotationX: {type:"number", default:0},
    },
    init: function(){
        window.addEventListener("keydown", (item)=>{
            if(item.key == "j"){
                this.data.moveX = this.data.moveX + 1
                this.data.rotationX = this.data.rotationX - 0.5
            }
            if(item.key == "l"){
                this.data.moveX = this.data.moveX - 1
                this.data.rotationX = this.data.rotationX + 0.5
            }
        })
    },
    tick: function(){
        var pos = this.el.getAttribute("position")
        var rotation = this.el.getAttribute("rotation")
        pos.x = this.data.moveX
        rotation.x = this.data.rotationX
        this.el.setAttribute("rotation", {x:rotation.x, y:rotation.y, z:rotation.z})
        this.el.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z})
    }
})

