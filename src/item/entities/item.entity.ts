
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';



@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  item_id: number;

  @Column({ type: 'varchar', unique: true })
  item_name: string;


}