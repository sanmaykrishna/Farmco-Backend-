

import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  location_id: number;

  @Column({ type: 'varchar', unique: true })
  location_name: string;

}