create table StateDependentMove(
	ID serial primary key,
	Move int constraint StateDependentMove_FK_Move references Move(ID),
	State int constraint StateDependentMove_FK_State references CharacterState(ID)
);