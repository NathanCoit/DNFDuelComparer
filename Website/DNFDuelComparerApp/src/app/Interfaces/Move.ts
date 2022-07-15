export interface IMove {
    id : number, 
    charactername : string, 
    input : string, 
    guardtype : string, 
    startup : number, 
    onblock : number, 
    onhit : number, 
    mustfollowmoveid : number, 
    statedependent : boolean, 
    hitboxminheight : number, 
    hitboxmaxheight : number, 
    hitboxminwidth : number, 
    hitboxmaxwidth : number, 
    damage : number, 
    isairmove : boolean, 
    isinvul : boolean, 
    hitsofarmor : number, 
    active : number, 
    recovery : number, 
    guarddamage : number, 
    horizontalmovement : number, 
    verticalmovement : number
}

export interface IMoves extends Array<IMove>
{
}

