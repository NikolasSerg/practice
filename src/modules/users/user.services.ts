// import logger from '@/utils/logger';
import logger from '../../app/utils/logger/index.js';

export const getUsersServices = async () => {
    try {
        const result = 'all users';
        return result;
    } catch (e) {
        console.error(e, 'error in service');
        logger.error(`${e}, - 'error in controller'`);
    }
};
