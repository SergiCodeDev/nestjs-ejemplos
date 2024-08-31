
/* export interface createTaskDto {
    title: string
    status: boolean
} */

import { IsString, MinLength } from "class-validator"


export class createTaskDto {
    @IsString()
    @MinLength(1)
    title: string
    @IsString()
    @MinLength(1)
    status: boolean
}