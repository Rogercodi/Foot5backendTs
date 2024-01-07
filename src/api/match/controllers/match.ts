/**
 * match controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::match.match', 
({ strapi }) => ({
    async findAll(ctx) {
        ctx.body = 'Getting all matches'
    }
}));
