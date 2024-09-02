import { Request, Response } from 'express';
import logger from '../utils/logger';
import * as menuService from '../service/menu';

export const createMenuItem = async (
	req: Request,
	res: Response
): Promise<Express.Response> => {
	try {
		const {
			body: { itemName, price },
			user,
		} = req;

		const result = await menuService.createMenu({
			itemName,
			price,
			userId: user.id,
		});

		return res.status(200).json({ ok: true });
	} catch (error) {
		logger.error(`menu : controller : error : ${error}`);
		return res.status(200).json({ ok: false, error });
	}
};
