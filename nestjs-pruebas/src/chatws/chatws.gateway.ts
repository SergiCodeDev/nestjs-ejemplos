import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ChatwsService } from './chatws.service';
import { CreateChatwDto } from './dto/create-chatw.dto';
import { UpdateChatwDto } from './dto/update-chatw.dto';

@WebSocketGateway()
export class ChatwsGateway {
  constructor(private readonly chatwsService: ChatwsService) {}

  @SubscribeMessage('createChatw')
  create(@MessageBody() createChatwDto: CreateChatwDto) {
    return this.chatwsService.create(createChatwDto);
  }

  @SubscribeMessage('findAllChatws')
  findAll() {
    return this.chatwsService.findAll();
  }

  @SubscribeMessage('findOneChatw')
  findOne(@MessageBody() id: number) {
    return this.chatwsService.findOne(id);
  }

  @SubscribeMessage('updateChatw')
  update(@MessageBody() updateChatwDto: UpdateChatwDto) {
    return this.chatwsService.update(updateChatwDto.id, updateChatwDto);
  }

  @SubscribeMessage('removeChatw')
  remove(@MessageBody() id: number) {
    return this.chatwsService.remove(id);
  }
}
