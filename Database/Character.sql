create table Character (
	Name varchar(50) CONSTRAINT firstkey PRIMARY KEY,
	Health integer not null,
	GuardGuage integer not null,
	ManaRegenPerSec int not null,
	PreJumpFrames int null,
	BackDashFrames int null,
	ForwardDashFrames int null
);

