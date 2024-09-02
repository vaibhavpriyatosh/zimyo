import { createMenuI } from '../interface';
import logger from '../utils/logger';
import * as menuModel from '../models/menu';

const createMenu = async ({ itemName, price, userId }: createMenuI) => {
	try {
		const result = await menuModel.createMenu({ itemName, price, userId });
		console.log('>>', { itemName, price, result });
		return { ok: true, data: {} };
	} catch (e) {
		logger.error(`user : service : create : ${e}`);
		throw e;
	}
};

export { createMenu };
