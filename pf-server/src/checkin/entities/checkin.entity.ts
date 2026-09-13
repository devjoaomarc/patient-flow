import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EPriority } from '../enums/epriority.enum.js';
import { ECheckInStatus } from '../enums/echeckin-status.enum.js';

@Entity('tb_checkin')
export default class Checkin {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: string;

  @Column({
    type: 'enum',
    enum: EPriority,
  })
  priority: EPriority;

  @Column({
    type: 'enum',
    enum: ECheckInStatus,
  })
  status: ECheckInStatus;

  @Column({ unique: true })
  @Generated('uuid')
  validationToken: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @Column({ type: 'timestamptz' })
  expiresAt: Date;
}
