import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { hashPassword } from '../utils/password';
import { ReturnUserDto, toDto } from './dtos/return-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<ReturnUserDto[]> {
    const users = await this.userRepository.find();
    return users.map((user) => toDto(user));
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

    return toDto(newUser);
  }
}
