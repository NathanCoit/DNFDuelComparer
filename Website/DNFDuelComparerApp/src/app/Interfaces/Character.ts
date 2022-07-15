export interface ICharacter {
    name: String,
    health: Number,
    guardGauge: Number,
    manaRegenPerSec: Number,
    preJumpFrames: Number,
    backDashFrames: Number,
    forwardDashFrames: Number
}

export interface ICharacters extends Array<ICharacter>
{
}