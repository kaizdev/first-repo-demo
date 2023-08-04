import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Pokemon {
  @PrimaryKey() // Auto increment is the default behaviour for id when @PrimaryKey() is added
  id: number;

  @Property({ unique: true })
  name: string;
  @Property()
  type: string;
  @Property()
  hp: number;
  @Property()
  imageLink: string;
  @Property({ nullable: true })
  evolutionID: number;
  @Property()
  level: number;
}
