import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { hashPassword } from '../utils/password';
import { ReturnUserDto } from './dtos/return-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<ReturnUserDto[]> {
    const users = await this.userRepository.find();
    return users.map((user) => this.toDto(user));
  }

  async findUserByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  async createUser(createUserDto: CreateUserDto): Promise<ReturnUserDto> {
    const existingUser = await this.findUserByEmail(createUserDto.email);
    if (existingUser) {
      throw new ConflictException('Email already registered');
    }

    const hashedPassword = await hashPassword(createUserDto.password);

    const newUser = await this.userRepository.save({
      ...createUserDto,
      password: hashedPassword,
    });

    return this.toDto(newUser);
  }

  private toDto(user: User): ReturnUserDto {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
