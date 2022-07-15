create table SpecificMoveInteraction(
	ID serial primary key,
	LosingMove int references Move(ID) not null,
	WinningMove int references Move(ID) not null,
	IsRangeDependent boolean not null,
	MinRange int null,
	MaxRange int null,
	IsHeightDependent boolean not null,
	MinHeight int null,
	MaxHeight int null,
	Notes varchar(1000)
);