create table Move(
	ID serial primary key,
	CharacterName varchar(50) constraint Move_FK_Character references Character(Name) not null,
	input varchar(20) not null,
	GuardType varchar(20) check(GuardType in ('High', 'Low', 'Throw', 'None', 'Mid')) not null,
	Startup int not null,
	OnBlock int not null,
	OnHit int not null,
	MustFollowMoveID integer constraint Move_FK_MustFollowMoveID references Move(ID) null,
	StateDependent boolean default false,
	HitBoxMinHeight int null,
	HitBoxMaxHeight int null,
	HitBoxMinWidth int null,
	HitBoxMaxWidth int null,
	Damage int null,
	IsAirMove boolean default false,
	IsInvul boolean default false,
	HitsOfArmor int default 0,
	Active int null,
	Recovery int null,
	GuardDamage int null,
	HorizontalMovement int null,
	VerticalMovement int null
);