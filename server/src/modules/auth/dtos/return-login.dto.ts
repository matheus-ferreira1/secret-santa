import { ReturnUserDto } from 'src/modules/user/dtos/return-user.dto';

export interface ReturnLoginDto {
  token: string;
  user: ReturnUserDto;
}
