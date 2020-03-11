const BinarySearchTree = require('./functions/linked');

class Story {
    constructor(value, story, leftOption, rightOption) {
        this.value = value;
        this.story = story;
        this.leftOption = leftOption;
        this.rightOption = rightOption;
        this.left = null;
        this.right = null;
    }
}

const firstStory = [
    new Story(8, 'You get bit by a snake', 'run back to base', 'sit down'),
    new Story(10, 'Your leg is aching and begins bleeding', 'Remove any tight clothes or jewlery', 'create a tournequette'),
    new Story(3, 'Your leg goes numb after 5 minutes of running and you fall to the ground', 'Begin sucking poison out', 'Rinse with water and tie shirt'),
    new Story(1, 'You begin foaming at the mouth and fall into a coma', 'Game Over', 'try again'),
    new Story(6, 'The pain subsides and you regain feeling', 'Wait for help', 'keep heading home'),
    new Story(4, 'You sit in the ravene for hours until a pack of raccoons start harrasing you', 'die of rabies', 'Game over'),
    new Story(7, 'You drag yourself home and luckily posion control picks up', 'you survived', 'yay')
]

const storyTree = new BinarySearchTree();

firstStory.forEach(story => {
    storyTree.insert(story)
})

module.exports = storyTree;