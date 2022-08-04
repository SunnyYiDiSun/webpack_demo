import sum from './js/sum'
console.info(sum(0, 2));
const click = () => {
    import(/* webpackChunkName: Reduce*/'./js/reduce').then((resp) => {
        console.info(resp.default(1, 0));
    });
};
document.getElementById('button').addEventListener('click', click);