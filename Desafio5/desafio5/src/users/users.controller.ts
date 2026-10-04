import { Post, Body, Get, Controller } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    // Construtor para a classe UsersService
    constructor(
        private readonly usersService: UsersService,
    ) {}

    // Rota POST para criar novos usuários
    @Post()
    criarUsuario(@Body() body: { name: string, email: string }) {
        return this.usersService.createUser(
            body.name,
            body.email,
        );
    }

    // Rota GET para listar todos os usuários
    @Get()
    listarUsuarios() {
        return this.usersService.listUsers()
    }
}