export interface IInteraction {
    name: string,
    range: number,
    character1advantage: number,
    character2advantage: number,
    character1height: number,
    character2height: number
}

export interface IInteractions extends Array<IInteraction>
{
}