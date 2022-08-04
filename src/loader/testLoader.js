module.exports = (...reset) => {
    //异步loader
    // const callback = this.async();
    // setTimeout(() => {
    //   callback(...reset)
    // });
    // const {content,sourceMap,meta} = reset;
    this.callback(...reset);
    return content;
}
// raw loader 收到二进制数据(Buffer) 一般处理图片
modules.exports.raw = true;


modules.exports.pitch = function (...reset) {
    // const [content,sourceMap,meta] = reset;
    console.info(reset);
    //会中断下一个pitch loader的运行，并执行上一个pitch loader的normal loader
    //normal   1   2   3
    //pitch    1   2   3
    // 执行顺序 1 2 3 3 2 1，pich先执行
    return;
};