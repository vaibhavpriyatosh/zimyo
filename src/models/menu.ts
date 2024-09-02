import { createMenuI, searchTextLimitTs } from '../interface';
import * as configuration from '../knexDb/knexfile';
import knex from 'knex';
import logger from '../utils/logger';
const connection = knex(configuration);

export const createMenu = async ({ itemName, price, userId }: createMenuI) =>
	connection('menu')
		.insert({
			item_name: itemName,
			price,
			user_id: userId,
			is_deleted: false,
			updated_at: 'now()',
			created_at: 'now()',
		})
		.returning('id');

export const getMenuList = async ({
	searchText,
	page,
	pageSize,
}: searchTextLimitTs): Promise<any> => {
	try {
		const offset = (page - 1) * pageSize;
		const query = connection('menu')
			.select('id', 'item_name as itemName', 'price')
			.andWhere('is_deleted', false);

		if (searchText?.length !== 0) {
			query.where('item_name', 'like', `%${searchText}%`);
		}
		const total_count = await query.clone().clearSelect().count().first();
		query.limit(pageSize).offset(offset);
		const result = await query;
		return { result, total_count: Number(total_count?.count) ?? 0 };
	} catch (error: any) {
		logger.error(`menu : model : get-menu-list : ${error}`);
		throw error?.constraint ?? 'Something Went Wrong!!';
	}
};
