import loremIpsum from 'lorem-ipsum';

const categories = loremIpsum({count: 5, units: 'words', format: 'plain'}).split(' ');
const authors = loremIpsum({count: 5, units: 'words', format: 'plain'}).split(' ');

function getContent () {
    return loremIpsum({count: 3, units: 'sentence', format: 'plain'});
}

function getTitle () {
    return loremIpsum({count: 4, units: 'words', format: 'plain'});
}

function choice (array) {
    return array[Math.floor(Math.random() * array.length)];
}

const entries = [];

for (let i=0; i < 15; i++) {
    entries.push({
        author: choice(authors),
        title: getTitle(),
        category: choice(categories),
        content: getContent(),
    });
}

module.exports = {
    entries,
    categories,
    authors
};
