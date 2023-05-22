import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    uid: number;

    @Column({ length: 255 })
    username:string;

    @Column({ length: 255 })
    city:string;

    @Column()
    friend: number;
}