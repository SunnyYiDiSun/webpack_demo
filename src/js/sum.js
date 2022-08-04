export default (...args) => {
    return args.reduce((p, next) => p + next, 0);
}