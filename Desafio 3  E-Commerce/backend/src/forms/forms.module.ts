import { TypeOrmModule } from "@nestjs/typeorm";
import { Form } from "src/entities/form.entity";
import { FormsService } from "./forms.service";
import { FormsController } from "./form.controller";
import { Module } from "@nestjs/common";

@Module({
  imports: [TypeOrmModule.forFeature([Form])],
  providers: [FormsService],
  controllers: [FormsController],
})
export class FormsModule {}