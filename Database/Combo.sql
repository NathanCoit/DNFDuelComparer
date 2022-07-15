create table Combo(
	ID serial primary key,
	Character varchar(50) references Character(Name),
	Move int references Move(ID),
	Notation varchar(500) null,
	RequiresCounterHit boolean default false,
	MinRange int null,
	MaxRange int null,
	MinCharacterHeight int null,
	MaxCharacterHeight int null,
	WorksOnAirborne boolean default false,
	WorksOnGrounded boolean default true,
	MinHeighDifference int null,
	MaxHeightDifference int null,
	ComboDamage int not null,
	Oki varchar(20) check(oki in ('good', 'bad', 'mid', 'none')),
	notes varchar(1000) null
);