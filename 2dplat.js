
function controller(p, a) {
    if (keyDown("d")) {
        p.velocityX += a;
        p.changeAnimation("run1")
        p.mirrorX(1)
    }
    else if (keyDown("a")) {
        p.velocityX -= a;
        p.changeAnimation("run1")
        p.mirrorX(-1)
    }
    else {
        p.velocityX = 0;
        p.changeAnimation("idle1")
    }
    if (keyDown("shift")){
        Acceleration = 1.6;
        MaxSpeed = 25;
    }
    else {
        Acceleration = 0.8;
        MaxSpeed = 15;
    }


    if (keyDown("space")&& JumpCount === 1){
        p.velocityY = -20;
        
        JumpCount -= 1;
    }
    if (keyWentDown("space")&& JumpCount === 0&& DoubleJumpCount === 1){
        p.velocityY = -25;
        
        DoubleJumpCount -= 1;
    }

}

function OnGround(){
    JumpCount = 1;
    DoubleJumpCount = 1;
}