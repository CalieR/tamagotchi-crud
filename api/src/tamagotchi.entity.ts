import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tamagotchi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  species: string;

  @Column({ default: new Date() })
  dateOfBirth: Date;

  @Column({ default: 100 })
  hunger: number;

  @Column({ default: 100 })
  health: number;

  @Column({ default: 50 })
  happiness: number;

  @Column({ default: 50 })
  energy: number;

  @Column({ default: 50 })
  cleanliness: number;
}
