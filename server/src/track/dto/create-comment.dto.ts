import {ObjectId} from "mongoose";

export class createCommentDto {
    readonly username: string;
    readonly text: string;
    readonly trackId: ObjectId;
}