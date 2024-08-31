import { Injectable } from '@nestjs/common';
import { CreateChatwDto } from './dto/create-chatw.dto';
import { UpdateChatwDto } from './dto/update-chatw.dto';

@Injectable()
export class ChatwsService {
  create(createChatwDto: CreateChatwDto) {
    return 'This action adds a new chatw';
  }

  findAll() {
    return `This action returns all chatws`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chatw`;
  }

  update(id: number, updateChatwDto: UpdateChatwDto) {
    return `This action updates a #${id} chatw`;
  }

  remove(id: number) {
    return `This action removes a #${id} chatw`;
  }
}
