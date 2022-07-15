create table Interaction(
	ID serial primary key,
	Name varchar(200) unique,
	Character1Advantage int default 0,
	Character2Advantage int default 0,
	Character1Height int default 0,
	Character2Height int default 0
);