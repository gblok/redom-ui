import viewController from '../../controllers/pug'

export default router => {
    router
        .get(['/','/:page', '/:page/:action'], viewController())
}