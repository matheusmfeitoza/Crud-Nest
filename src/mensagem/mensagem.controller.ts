import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MensagemService } from './mensagem.service';
import { MensagemDto } from './mensagemDto';

@Controller('mensagem')
export class MensagemController {
  constructor(private readonly mensagemService: MensagemService) {}
  @Get()
  findAll() {
    return this.mensagemService.findAll();
  }

  @Post()
  create(@Body() body: MensagemDto) {
    return this.mensagemService.create(body);
  }

  @Put(':id')
  update(@Param() params, @Body() body: MensagemDto) {
    return this.mensagemService.update(body, +params.id);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.mensagemService.delete(+params.id);
  }
}
