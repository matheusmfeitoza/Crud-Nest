import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensagemController } from './mensagem/mensagem.controller';
import { MensagemService } from './mensagem/mensagem.service';

@Module({
  imports: [],
  controllers: [AppController, MensagemController],
  providers: [AppService, MensagemService],
})
export class AppModule {}
