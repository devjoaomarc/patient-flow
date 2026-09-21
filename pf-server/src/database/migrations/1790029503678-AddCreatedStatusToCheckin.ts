import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCreatedStatusToCheckin1790029503678 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TYPE "tb_checkin_status_enum"
        ADD VALUE 'CREATED'
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
