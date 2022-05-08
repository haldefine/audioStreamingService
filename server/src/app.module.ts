import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://fsndhuhk:aj9ofj3iwfj90@cluster0.thsze.mongodb.net/audioService?retryWrites=true&w=majority'),
        TrackModule,
        FileModule
    ]
})
export class AppModule {}