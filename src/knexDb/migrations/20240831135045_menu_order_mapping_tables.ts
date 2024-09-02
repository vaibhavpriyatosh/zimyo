import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema

		.createTable('menu', (table) => {
			table.increments('id');
			table.string('item_name');
			table.string('price');
			table.integer('user_id');
			table.boolean('is_deleted').defaultTo(false);
			table.timestamp('created_at').defaultTo(knex.fn.now());
			table.timestamp('updated_at').defaultTo(knex.fn.now());
		})
		.createTable('order', (table) => {
			table.increments('id');
			table.text('user_id');
			table.specificType('item_list', 'int[]');
			table.enum('status', [
				'NOTPAID',
				'ACCEPTED',
				'INPROGRESS',
				'READY',
				'CANCEL',
				'COMPLETED',
			]);
			table.boolean('is_deleted').defaultTo(false);
			table.timestamp('created_at').defaultTo(knex.fn.now());
			table.timestamp('updated_at').defaultTo(knex.fn.now());
		});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists('menu').dropTableIfExists('order');
}
