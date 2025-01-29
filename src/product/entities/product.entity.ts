import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({ type: 'varchar', nullable: false })
  item_name: string;

  @Column({ type: 'varchar', nullable: false })
  location_name: string;

  @Column({ type: 'int', nullable: false })
  quantity: number;

  @Column({ type: 'decimal', nullable: false })
  price: number;

  @Column({ type: 'varchar', nullable: false })
  address: string;

  @Column({ type: 'int', nullable: false })
  pincode: number;

  @Column({ type: 'int', nullable: false })
  user_id: number;
}
