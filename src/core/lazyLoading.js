export default (url) => () => import(`@/${url}.vue`)
