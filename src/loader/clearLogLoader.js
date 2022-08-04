module.exports = function (content) {
   console.info('clearLoader');
   return content.replace(/console.info\(.*\);?/g, '');
};