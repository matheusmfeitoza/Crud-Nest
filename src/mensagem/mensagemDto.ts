import { IsDate, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class MensagemDto {
  @IsString()
  @IsNotEmpty()
  content: string;
  @IsEmpty()
  createdAt?: Date;
}
