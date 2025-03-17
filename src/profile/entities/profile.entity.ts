import { Entity, PrimaryColumn,Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
    @PrimaryColumn() // userid is provided, so it shouldn't be auto-generated
    userid: number;

  @Column({ default: 'None' })
  building: string;

  @Column({ default: 'None' })
  place: string;

  @Column({ length: 6, default: '######' })
  pincode: string;

  @Column({ length: 10, default: '##########' })
  phone: string;
}