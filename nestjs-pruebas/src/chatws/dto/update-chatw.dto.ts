import { PartialType } from '@nestjs/mapped-types';
import { CreateChatwDto } from './create-chatw.dto';

export class UpdateChatwDto extends PartialType(CreateChatwDto) {
  id: number;
}
