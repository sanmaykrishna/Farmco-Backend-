    import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

    @Entity()
    export class User {

        @PrimaryGeneratedColumn()
        user_id:number;

        @Column({type:"varchar",nullable:false})
        user_name:string;


        @Column({type:"varchar",nullable:false})
        email:string;

        @Column({type:"varchar",nullable:false})
        password:string;
    }
