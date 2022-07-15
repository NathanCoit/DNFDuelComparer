create table SpecificInteraction(
	ID serial primary key,
	Interaction int references Interaction(ID) not null,
	Character1 varchar(50) references Character(Name) not null,
	Character2 varchar(50) references Character(Name) not null,
	Move int references Move(ID) not null,
	Notes varchar(1000)
);