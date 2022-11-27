import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Generated,
  BeforeInsert,
} from 'typeorm';

@Entity()
export class Test {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({
    select: true,
    comment: '注释',
    default: '123',
    nullable: true,
  })
  password: string;

  @Generated('uuid')
  uuid: string;

  @CreateDateColumn({ type: 'timestamp' })
  createTime: Date;

  @Column({
    type: 'enum',
    enum: [1, 2, 3],
    default: 1,
  })
  list: number;

  @Column('simple-array')
  names: string[];

  @Column('simple-json')
  json: { name: string; value: number };
}
