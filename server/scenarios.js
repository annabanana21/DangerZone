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

const snakeStory = [
    new Story(8, 'You get bit by a snake', 'run back to base', 'sit down'),
    new Story(10, 'Your leg is aching and begins bleeding', 'Remove any tight clothes or jewlery', 'create a tournequette'),
    new Story(3, 'Your leg goes numb after 5 minutes of running and you fall to the ground', 'Begin sucking poison out', 'Rinse with water and tie shirt'),
    new Story(1, 'You begin foaming at the mouth and fall into a coma', 'Game Over', 'try again'),
    new Story(6, 'The pain subsides and you regain feeling', 'Wait for help', 'keep heading home'),
    new Story(4, 'You sit in the ravene for hours until a pack of raccoons start harrasing you', 'die of rabies', 'Game over'),
    new Story(7, 'You drag yourself home and luckily posion control picks up', 'you survived', 'yay'),
    new Story(14, 'Bite begins swelling 2x the size of your other foot', 'you pass out', 'venom throws through you dead'),
    new Story(9, 'Your leg begins tingling and you fear the venom may be spreading', 'elevate leg on tree stump', 'position legs downwards')
]

const storyTree = new BinarySearchTree();

snakeStory.forEach(story => {
    storyTree.insert(story)
})

const storyGenerator = (category) => {
    
}

module.exports = storyTree;