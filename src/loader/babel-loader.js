import babel from '@babel/core';

module.exports = function (content) {
    const options = this.getOptions({
        type: 'object',
        propertyies: {
            presets: 'string'
        },
        addtionalProperties: false
    });
    const callback = this.async;
    console.info('this is my babel loader');
    babel.transform(content, options, function (err, result) {
        if (err) {
            callback(err)
        } else {
            callback(null, result.code);
        }
    })
}