export default () => {
    const a = "";
    console.info('this is a ts test loader', a);
    return () => {
        console.info('return one function!', a);
    }
};