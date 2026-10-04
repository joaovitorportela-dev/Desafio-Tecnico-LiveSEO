import { BadRequestException, Injectable } from "@nestjs/common";
import { User } from './interface/users.interface'

@Injectable()
export class UsersService {
    // Array users sendo criado já com os usuários informados no enunciado
    private users: User[] = [
        { id: 1, name: 'Ana', email: 'ana@email.com' },
        { id: 2, name: 'Pedro', email: 'pedro@email.com' },
    ]

    // Função para criar novos usuários
    createUser(name: string, email: string): User {

        if (!name || !email) {
            throw new BadRequestException('Nome e e-mail são obrigatórios!')
        }

        const usuario: User = {
            id: this.users.length + 1, // faz um ID auto incrementar
            name, // recebe o campo de nome da rota POST
            email // recebe o campo e-mail da rota POST
        }
        this.users.push(usuario) // inclui ele no array users
        return usuario;
    }

    // Função para retornar todos os usuários
    listUsers(): User[] {
        return this.users;
    }
}