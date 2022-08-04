class CleanPlugins {
    apply(compiler) {
        const path = compiler.options.output.path;
        console.info("this is: %s", compiler.options.output.path);
        const fs = compiler.outputFileSystem;
        compiler.hooks.emit.tap('CleanPlugins', (compilation) => {
            const sizeObject = {};
            Object.entries(compilation.assets).forEach((entry) => {
                const [key, file] = entry;
                console.info(`key is ${key}`);
                const name = key.split("/").pop();
                console.info(`name is ${name}`);
                sizeObject[name] = `${Math.ceil(file.size() / 1000)} kb`
            });
            const string = JSON.stringify(sizeObject) || '';
            compilation.assets['bunldSize.json'] = {
                source() {
                    return string;
                },
                sizeObject() {
                    return string.length
                }
            }
        });
    }
}
module.exports = CleanPlugins;