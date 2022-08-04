import sum from './js/sum';
import './css/css.css';
import './css/css2.css';
import './css/iconfont.css';
console.info(sum(0, 2));
[1,2].includes('1');
const click = () => {
    import(/* webpackChunkName: "Reduce"*/'./js/reduce').then((resp) => {
        console.info(resp.default(1, 0));
    });
};
document.getElementById('button').addEventListener('click', click);
console.info(sum(0, 1, 2, 3, 5));