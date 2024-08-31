import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {

    /* private users: any[] = [
        {
            id: 1,
            name: "Sami Tol",
            phone: "666666666"
        },
        {
            id: 2,
            name: "Sami Tola",
            phone: "666666666"
        }
    ] */

    /* getUsers() {
        return this.users
    }

    createUser(user: CreateUserDto) {
        this.users.push(user)
        return {
            ...user,
            id: this.users.length + 1
        }
    } */

    constructor(private prisma: PrismaService) { }

    getUsers() {
        return this.prisma.user.findMany()
    }

    createUser(user: CreateUserDto) {
        return this.prisma.user.create({data: user})
    }
}
