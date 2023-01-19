import { Injectable } from '@nestjs/common';
import { IMensagem } from './IMensagem';
import { MensagemDto } from './mensagemDto';

@Injectable()
export class MensagemService {
  private mensagens: Array<IMensagem> = [
    {
      id: 1,
      content: 'Primeira mensagem',
    },
    {
      id: 2,
      content: 'Segunda mensagem',
    },
  ];
  findAll() {
    return this.mensagens.filter(Boolean);
  }

  create(body: MensagemDto) {
    const id = this.mensagens.length + 1;
    const newMessagem = {
      id,
      ...body,
    };
    this.mensagens.push(newMessagem);
    return this.mensagens;
  }

  update(body: MensagemDto, id: number) {
    const index = this.mensagens.findIndex((value) => value.id === id);
    const mensagem = {
      id,
      ...body,
    };
    this.mensagens[index] = mensagem;
    return `A mensagem de ${id}, foi atualizada com o conteúdo: \n ${mensagem.id} \n ${mensagem.content}  `;
  }

  delete(id: number) {
    const index = this.mensagens.findIndex((value) => value.id === id);
    delete this.mensagens[index];
    return 'Deletado com sucesso!';
  }
}
