import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddQueuePositionToCheckin1790710824593 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'tb_checkin',
      new TableColumn({
        name: 'queuePosition',
        type: 'integer',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('tb_checkin', 'queuePosition');
  }
}
