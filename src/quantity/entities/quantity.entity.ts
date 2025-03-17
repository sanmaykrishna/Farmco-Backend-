import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Quantity {
  @PrimaryGeneratedColumn()
  quantitytableid: number;

  @Column({ type: 'int' })
  collabid: number;

  @Column({ type: 'int' })
  empid: number;

  @Column({ type: 'int' })
  qty: number;
}