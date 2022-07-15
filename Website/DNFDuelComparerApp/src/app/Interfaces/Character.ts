export interface ICharacter {
    name: string,
    health: number,
    guardGauge: number,
    manaRegenPerSec: number,
    preJumpFrames: number,
    backDashFrames: number,
    forwardDashFrames: number
}

export interface ICharacters extends Array<ICharacter>
{
}