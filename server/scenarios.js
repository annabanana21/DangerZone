const BinarySearchTree = require('./functions/linked');

class Story {
    constructor(value, story, leftOption, rightOption, loss) {
        this.value = value;
        this.story = story;
        this.leftOption = leftOption;
        this.rightOption = rightOption;
        this.left = null;
        this.right = null;
        this.loss = loss;
    }
}

const snakeStory = {
    intro: "You’re on your way to gather supplies and medicine. To conserve the gas left in your car you decide to walk the 2km to the nearest pharmacy. You can shave off a km of the walk by cutting through a ravine, and also avoid and rogue criminals. Halfway there you trip over what you first think is a tree stump but then you feel a sharp pain in your right ankle...",
    title: 'Snake Bite',
    background: 'snakeStory.jpg',
    sound: 'Snake.wav',
    category: 'earth',
    scenario: [
    new Story(8, 'You get bit by a snake', 'run back to base', 'sit down'),
    new Story(10, 'Your leg is aching and begins bleeding', 'Remove any tight clothes or jewlery', 'create a tournequette'),
    new Story(3, 'Your leg goes numb after 5 minutes of running and you fall to the ground', 'Begin sucking poison out', 'Rinse with water and tie shirt'),
    new Story(1, 'You begin foaming at the mouth and fall into a coma', 'Game Over', 'try again'),
    new Story(6, 'The pain subsides and you regain feeling', 'Wait for help', 'keep heading home'),
    new Story(4, 'You sit in the ravene for hours until a pack of raccoons start harrasing you', 'die of rabies', 'Game over'),
    new Story(7, 'You drag yourself home and luckily posion control picks up', 'you survived', 'yay'),
    new Story(14, 'Bite begins swelling 2x the size of your other foot', 'you pass out', 'venom throws through you dead'),
    new Story(9, 'Your leg begins tingling and you fear the venom may be spreading', 'elevate leg on tree stump', 'position legs downwards')
]}

const frozenPlunge = {
    intro: 'Your mission to save your friend is a success. However, on the drive home you lose control of the car and it swerves off the road...',
    title: 'Ice Plunge',
    background: 'Frozen-Lake.jpg',
    sound: 'Water.wav',
    category: 'freeze',
    scenario: [
        new Story(50, "Your car has gained incredible momentum and eventually makes impact with what sounds like glass. You hear cracking and suddenly your car plunges into water...", "Luckily you know your exact coordinates so call the police and wait for help", "Roll down your window and escape"),
        new Story(32, "Given it's the end of the world the police are busy and you find yourself in a queue of hundreds", "Stay calm and wait for the car to fully submerge then escape", "Search the car for something to break the window with"),
        new Story(20, "The car is taking it's sweet time to sink and the water begins rushing in", "Stay calm, try meditating.", "Focus on keeping yourself out of the water as much as possible"),
        new Story(16, "Mind over matter can only take you so far. You are neck deep in water and eventually become disoriented due to the cold.", null, null, 0.50),
        new Story(24, "The car is almost completely full and you're readying yourself to open the door", "Strip to your underwear and swim to the surface as fast as you can", "Remove your winter-gear and swim to the surface"),
        new Story(22, "You make it to the break in the ice", "Put your arms on the surface of the ice and thrash your legs", "put your arms out onto the ice and pull yourself up"),
        new Story(21, "You kick your legs bringing your body to a horizontal position as if you are swimming. You've escaped but you've left all your clothes and your skin is exposed", null, null, 0.40),
        new Story(23, "You eventually escape but you've over exerted yourself and now your legs are numb...hypoerthermia is inevtiable since you abandoned your clothes but you'll survive.", null, null, 0.40),
        new Story(30, "You make it to the break in the ice", "Put your arms on the surface of the ice and thrash your legs", "put your arms out onto the ice and pull yourself up"),
        new Story(29, "You kick your legs bringing your body to a horizontal position as if you are swimming. You've escaped", null, null, 0),
        new Story(31, "You eventually escape but you've over exerted yourself and now your legs are numb...hypoerthermia is inevtiable but you'll survive", null, null, 0.35),
        new Story(70, "The window isn't rolling down so it must've disabled when the car hit the water", "Stay calm and wait for the car to fully submerge then escape", "Search the car for something to break the window with"),
        new Story(100, "No luck so far the only thing you have in your car is gum and a pair of sunglasses", "Keep searching there must be something in the trunk...", "Stay calm and wait for pressure in car to equalize then you can make your escape"),
        new Story(85, "You're a genius and remove the headrest from the passenger seat and use the metal portion to break the window.. You can escape the car but are shocked by the freezing water.", "Strip to your underwear and swim to the surface as fast as you can", "Remove your winter-gear and swim to the surface"),
        new Story(83, "You make it to the break in the ice", "Put your arms on the surface of the ice and thrash your legs", "put your arms out onto the ice and pull yourself up"),
        new Story(82, "You kick your legs bringing your body to a horizontal position as if you are swimming. You've escaped but you're naked and hypothermia is inevitable", null, null, 0.40),
        new Story(84, "You eventually escape but you've over exerted yourself and now your legs are numb...hypoerthermia is inevtiable but you'll survive", null, null, 0.35),
        new Story(160, "The car is taking it's sweet time to sink and the water begins rushing in", "Stay calm, try meditating", "Focus on keeping yourself out of the water as much as possible"),
        new Story(120, "Mind over matter can only take you so far. You are neck deep in water and eventually become disoriented due to the cold.", null, null, 0.50),
        new Story(180, "The car is almost completely full and you're readying yourself to open the door", "Strip to your underwear and swim to the surface as fast as you can", "Remove your winter-gear and swim to the surface"),
        new Story(170, "You make it to the break in the ice", "Put your arms on the surface of the ice and thrash your legs", "put your arms out onto the ice and pull yourself up"),
        new Story(190, "You make it to the break in the ice", "Put your arms on the surface of the ice and thrash your legs", "put your arms out onto the ice and pull yourself up"),
        new Story(168, "You kick your legs bringing your body to a horizontal position as if you are swimming. You've escaped but you're naked and hypothermia is inevitable", null, null, 0.40),
        new Story(172, "You eventually escape but you've over exerted yourself and now your legs are numb. Could be becuase you decided to take your clothes off. Hypoerthermia is inevtiable but you'll survive", null, null, 0.50),
        new Story(185, "You kick your legs bringing your body to a horizontal position as if you are swimming. You've escaped", null, null, 0),
        new Story(192, "You eventually escape but you've over exerted yourself and now your legs are numb...hypoerthermia is inevtiable but you'll survive", null, null, 0.35),
        new Story(60, "The car is taking it's sweet time to sink and the water begins rushing in", "Stay calm, try meditating.", "Focus on keeping yourself out of the water as much as possible"),
        new Story(55, "Mind over matter can only take you so far. You are neck deep in water and eventually become disoriented due to the cold.", null, null, 0.50),
        new Story(65, "The car is almost completely full and you're readying yourself to open the door", "Strip to your underwear and swim to the surface as fast as you can", "Remove your winter-gear and swim to the surface"),
        new Story(62, "You make it to the break in the ice", "Put your arms on the surface of the ice and thrash your legs", "put your arms out onto the ice and pull yourself up"),
        new Story(67, "You make it to the break in the ice", "Put your arms on the surface of the ice and thrash your legs", "put your arms out onto the ice and pull yourself up"),
        new Story(61, "You kick your legs bringing your body to a horizontal position as if you are swimming. You've escaped but you're naked and hypothermia is inevitable", null, null, 0.40),
        new Story(63, "You eventually escape but you've over exerted yourself and now your legs are numb. Could be becuase you decided to take your clothes off. Hypoerthermia is inevtiable but you'll survive", null, null, 0.50),
        new Story(66, "You kick your legs bringing your body to a horizontal position as if you are swimming. You've escaped", null, null, 0),
        new Story(68, "You eventually escape but you've over exerted yourself and now your legs are numb...hypoerthermia is inevtiable but you'll survive", null, null, 0.35),
    ]
}

const avalanche = {
    intro: 'You’re on your way to gather supplies and medicine. To conserve the gas left in your car you decide to walk to the nearest pharmacy. It’s a quick walk but it’s up a steep mountain (at least it feels that way). Halfway up you notice vibration and hear a rumbling…',
    title: 'Avalanche',
    background: 'Avalanche.mp4',
    sound: 'Avalanche.wav',
    category: 'freeze',
    scenario: [
        new Story(50, 'What began as a small cloud of snow is now a monstrous tidal wave. You never could’ve imagined you’d encounter an avalanche so what do you do…', 'Move sideways hoping the force of the avalanche will mostly miss you and brace for impact', 'Start running down the hill. You’re pretty fast and can most likely outrun it'),
        new Story(70, 'Snow catches up to you and is about to knock you over', 'Hold your arms up above the snow to be as tall as possible', 'Cup Hands to your mouth'),
        new Story(38, "You've moved as far as time would allow. Snow is about to hit you", "Grab and hold on to the nearest tree", "Follow the flow of the avalanche as if you were swimming"),
        new Story(90, "You tumble downwards and eventually find yourself buried. You've given yourself enough breathing room", 'Attempt to melt snow around you with your breathe', 'Start spitting in the snow'),
        new Story(88, "At first it seems like your strategy is working but the snow you melt quickly freezes and soon enough you're still stuck and frozen.", null, null, 0.35),
        new Story(91, "You slowly but surely make your way out of your snowy grave!", null, null, 0),
        new Story(65, "Balance is impossible and the force knocks you off your feet", "Grip your arms to your side to cut through the snow", "Violently thrash around in hopes that you'll stay above the snow"),
        new Story(64, "Your body is overcome by the momentum and you become faster than the avalanche however, you shoot head first into a boulder.", null, null, 0.50),
        new Story(67, "Your strategy works for a few seconds but the snow is much stronger and it pulls you under. You're buried...", 'Attempt to melt snow around you with your breathe', 'Start spitting in the snow'),
        new Story(66, "At first it seems like your strategy is working but the snow you melt quickly freezes and soon enough you're still stuck and frozen", null, null, 0.35),
        new Story(68, "You slowly but surely make your way out of your snowy grave", null, null, 0),
        new Story(20, "The snow is hitting you pretty hard but you're able to stay surface level. You realize the snow is beginning to to build up around you", "Hold on to tree pulling yourself upwards to stay above the snow", "Let go of tree and cup hands to your mouth"),
        new Story(40, "Balance is impossible and the force knocks you off your feet", "Grip your arms to your side to cut through the snow", "Violently thrash around in hopes that you'll stay above the snow"),
        new Story(39, "Your body is overcome by the momentum and you become faster than the avalanche however, you shoot head first into a boulder", null, null, 0.50),
        new Story(45, "Your strategy works for a few seconds but the snow is much stronger and it pulls you under. You're buried...", "Attempt to melt snow around you with your breathe", "Start spitting in the snow"),
        new Story(42, "At first it seems like your strategy is working but the snow you melt quickly freezes and soon enough you're still stuck and frozen", null, null, 0.35),
        new Story(48, "You slowly but surely make your way out of your snowy grave", null, null, 0),
        new Story(16, "You underestimate your strength and the snow ends up burying you.", "Attempt to melt snow around you with your breathe", "Start spitting in the snow"),
        new Story(14, "At first it seems like your strategy is working but the snow you melt quickly freezes and soon enough you're still stuck and frozen", null, null, 0.35),
        new Story(17, "You slowly but surely make your way out of your snowy grave", null, null, 0),
        new Story(24, "You are now buried but you've created sufficient space to breathe", "Attempt to melt snow around you with your breathe", "Start spitting in the snow"),
        new Story(22, "At first it seems like your strategy is working but the snow you melt quickly freezes and soon enough you're still stuck and frozen", null, null, 0.35),
        new Story(26, "You slowly but surely make your way out of your snowy grave", null, null, 0),
    ]
}

const earthquake = {
    title: 'Earthquake',
    category: 'earth',
    sound: 'Earthquake.wav',
    scenario: [
        new Story(50, 'The ground begins to furiously shake...', 'run for cover', 'run out into the open road'),
        new Story(70, 'You made it safely to the middle of the road and now you', 'stretch your body to absorb the aftershock', 'crouch down staying as low to the ground as possible'),
        new Story(60, 'The quake knocks you off your feet and you falling hitting your head on the pavement.', null, null, 0.25),
        new Story(80, 'You notice debris falling so you', 'Shield your head with your arms', 'Lie flat on the ground with your arms to your side'),
        new Story(77, 'You are able to block any flying debris and survive the earthquake unscathed.', null, null, 0),
        new Story(81, "You survive the earthquake but not without a neighbor's tree branch falling and hitting your head. Always protect your head in an earthquake.", null, null, 0.10),
        new Story(30, 'You feel unsteady with all the motion', 'cling onto the closest tree', 'hide under a nearby overpass'),
        new Story(20, 'The earthquake is quite strong and causes the tree to fall on top of you.', null, null, 0.2),
        new Story(40, "The overpass crumbles due to the earthquake's pressure and some debris falls on top of you.", null, null, 0.1)
    ]
}
const buried = {
    title: 'Buried Alive',
    category: 'earth',
    background: 'dark.jpg',
    scenario: [
        new Story(50, "It's very dark and you realize you around lying down. You try to sit up but hit your head on what feels like wood.", "Feel your surroundings in case there's something you can use to escape", "Start the lighter that's in your pocket to see what's going on around you"),
        new Story(60, 'The lighter quickly eats up any available oxygen you have left. In a small space such as a coffin you have at most 2 hours worth of oxygen.', null, null, 0.5),
        new Story(45, "There isn't anything loose around you but when feeling the top on the space you notice the roof is caving in as if something heavy is placed on top", 'Prepare for the possibility of being buried under dirt', 'Begin kicking the roof in hopes it will break'),
        new Story(48, 'The dirt rushes in and quickly fills the open space. You have a mouthful of dirt and you suffocate.', null, null, 0.5),
        new Story(40, 'You have nothing to use to protect you except you clothes', 'remove your shirt and tie the bottom to create a bag like structure. Place it over your head and begin kicking the roof', 'cover your mouth and nose with the neck of your shirt and begin kicking the roof'),
        new Story(43, 'The dirt rushes in faster than you expect and dirt rushes into your mouth. You suffocate.', null, null, 0.5),
        new Story(30, 'The roof cracks open and dirt begins rushing in', 'scream for help', 'fill the space towards your feet with the incoming dirt'),
        new Story(20, "No one answers making you panic and hyperventilate. You consume what's left of your oxygen supply.", null, null, 0.6),
        new Story(35, 'You keep digging until you are able to stand up. From there you punch through the dirt and climb your way out.', null, null, 0)
    ]
}

const plane = {
    title: 'Crash Landing',
    category: 'wind',
    background: 'sky.mp4',
    sound: 'plane.wav',
    scenario: [
        new Story(100, "Once seated you notice there are a bunch of buttons a levers but you have no idea what they do. There's a steering wheel that seems easy enough...", 'Take control of the wheel', 'Look for a guide/manual'),
        new Story(130, "In your state of panic you are able to scan the manual long enough to figure out what the throttle does", 'Look for an open field', 'Start looking for an open body of water'),
        new Story(140, 'Soon enough you approach a lake', 'Just go for the landing before your nerves make you pass out too', 'Turn the plane around to circle the area'),
        new Story(150, "You're less than 100 meters away from the surface of water", 'Approach the water aiming to land rear first with landing gear deactivated.', 'Approach the water nose angled downwards with the landing gear activated'),
        new Story(149, 'The landing is bumpy but you made it to the water. Luckily you circled the area and chose an area close to shore.', null, null, 0),
        new Story(151, 'The plane flips over in the water when landing and you are knocked out on impact. You and your friend drown.', null, null, 0.6),
        new Story(135, "You're less than 100 meters away from the surface of water", 'Approach the water aiming to land rear first with landing gear deactivated.', 'Approach the water nose angled downwards with the landing gear activated'),
        new Story(136, "You are able to land the plane with only a few minor hiccups. However, you landed in the middle of a lake. You'll survive but it'll be a while before you're going anywhere.", null, null, 0.15),
        new Story(134, "The plane flips over in the water when landing and you are knocked out on impact. You and your friend drown.", null, null, 0.6),
        new Story(110, "You approach a relatively flat plain", 'Just go for the landing before your nerves make you pass out too', 'Turn the plane around to circle the area'),
        new Story(115, 'Scanning your route gives you a better idea of where to begin your landing. Pushing back the throttle you...', 'angle the nose of the plane below the horizon', 'pull back on the throttle and angle the nose slightly above the horizon'),
        new Story(120, 'You are less than 100 metres away from the ground', 'engage the landing gear and aim to land the front wheels first', 'engage the landing gear and aim to land the back wheels first'),
        new Story(117, 'You make it to the ground and the plane quickly loses control. Without the wheels firmly on the ground you struggle to bring it to a stop. You eventually crash into a nearby forest.', null, null, 0.4),
        new Story(122, "You bring the plane to a stop and sigh a breath of relief. The plane is banged up but you and your friend survive.", null, null, 0),
        new Story(113, "In what feels like seconds the plane is quickly approaching the ground. The wheel isn't doing very much to steer the plane back into the air. You crashed.", null, null, 0.6),
        new Story(105, "You're quickly approaching your desired landing strip do you...", 'angle the nose of the plane below the horizon', 'pull back on the throttle and angle the nose slightly above the horizon'),
        new Story(104, "In what feels like seconds the plane is quickly approaching the ground. The wheel isn't doing very much to steer the plane back into the air. You crashed.", null, null, 0.6),
        new Story(107, 'You are less than 100 metres away from the ground', 'engage the landing gear and aim to land the front wheels first', 'engage the landing gear and aim to land the back wheels first'),
        new Story(106, "You make it to the ground and the plane quickly loses control. Without the wheels firmly on the ground you struggle to bring it to a stop. You eventually crash into a nearby forest.", null, null, 0.4),
        new Story(109, "You bring the plane to a stop and sigh a breath of relief. The plane is banged up but you and your friend survive.", null, null, 0),
        new Story(80, "For a second you almost lose total control but you're aware that the steering wheel is very sensitive. Do you...", 'Look for an open field', 'Start looking for an open body of water'),
        new Story(90, 'Soon enough you approach a lake', 'Just go for the landing before your nerves make you pass out too', 'Turn the plane around to circle the area'),
        new Story(95, "You're less than 100 meters away from the surface of water", 'Approach the water aiming to land rear first with landing gear deactivated.', 'Approach the water nose angled downwards with the landing gear activated'),
        new Story(94, "The landing is bumpy but you made it to the water. Luckily you circled the area and chose an area close to shore.", null, null, 0),
        new Story(98, "The plane flips over in the water when landing and you are knocked out on impact. You and your friend drown.", null, null, 0.60),
        new Story(85, "You're less than 100 meters away from the surface of water", 'Approach the water aiming to land rear first with landing gear deactivated.', 'Approach the water nose angled downwards with the landing gear activated'),
        new Story(84, "You are able to land the plane with only a few minor hiccups. However, you landed in the middle of a lake. You'll survive but it'll be a while before you're going anywhere.", null, null, 0),
        new Story(86, "The plane flips over in the water when landing and you are knocked out on impact. You and your friend drown.", null, null, 0.6),
        new Story(70, "You approach a relatively flat plain", 'Just go for the landing before your nerves make you pass out too', 'Turn the plane around to circle the area'),
        new Story(65, "You're quickly approaching your desired landing strip do you...", 'angle the nose of the plane below the horizon', 'angle the nose slightly above the horizon and push the lever that looks important'),
        new Story(64, "In what feels like seconds the plane is quickly approaching the ground. The wheel isn't doing very much to steer the plane back into the air. You crashed.", null, null, 0.6),
        new Story(67, "You're approaching the ground...", 'engage the landing gear and aim to land the front wheels first', 'engage the landing gear and aim to land the back wheels first'),
        new Story(66, "You make it to the ground and the plane quickly loses control. Without the wheels firmly on the ground you struggle to bring it to a stop. You eventually crash into a nearby forest.", null, null, 0.4),
        new Story(68, "You land the plane but not without completely demolishing it. Always search the plane for relevant instructions.", null, null, 0.2),
        new Story(75, "Scanning your route gives you a better idea of where to begin your landing", 'angle the nose of the plane below the horizon', 'angle the nose slightly above the horizon'),
        new Story(74, "In what feels like seconds the plane is quickly approaching the ground. The wheel isn't doing very much to steer the plane back into the air. You crashed.", null, null, 0.6),
        new Story(77, "You're approaching the ground...", 'engage the landing gear and aim to land the front wheels first', 'engage the landing gear and aim to land the back wheels first'),
        new Story(76, "You make it to the ground and the plane quickly loses control. Without the wheels firmly on the ground you struggle to bring it to a stop. You eventually crash into a nearby forest.", null, null, 0.4),
        new Story(78, "You land the plane but not without completely demolishing it. Always search the plane for relevant instructions.", null, null, 0.2)
    ]
}

const tornado = {
    title: "Tornado", 
    category: 'wind',
    background: 'Tornado.mp4',
    sound: 'Wind.wav',
    scenario: [
        new Story(50, "Before you have time to drive out of it's way the tornado is within 100 meters of you", 'Abandon your car', "Stay in your car hoping it'll miss you"),
        new Story(60, "The tornado is quickly approaching and will most likely strike your car", 'buckle your seat belt and curl up on your chair', 'Move to the seat farthest to the back right and buckle your seat belt'),
        new Story(55, "Vehicles are extremely dangerous in a tornado. The tornado lifts up your car sending it flying several hundred meters away. When it's done with your car looks like a pancake and so do you.", null, null, 0.5),
        new Story(65, "Vehicles are extremely dangerous in a tornado. The tornado lifts up your car sending it flying several hundred meters away. When it's done with your car looks like a pancake and so do you.", null, null, 0.5),
        new Story(40, "You park your car at the side of the road and look around. The nearest building is about a 5 minute run away.", 'Find somewhere closer where you can avoid the storm', 'Sprint to the shelter hoping you outrun the tornado'),
        new Story(45, "The tornado is faster than you thought. You've only been running for a minute when it sweeps you off your feet and flings you several hundred meters away.", null, null, 0.5),
        new Story(30, "Where do you go?", 'Stay on the main road', 'Divert into nearby patch of trees'),
        new Story(35, "You're holding onto a tree for dear life. When the storm hits, the trees seems to take most of the force but a tree parallel to you snaps in half and lands on your head. Try to avoid trees and vehicles as they can be picked up from the storm.", null, null, 0.4),
        new Story(20, "You don't feel comfortable staying out here in the open", 'Huddle underneath a nearby overpass', 'Find a dip in the side of the road and lay flat'),
        new Story(15, "Your spot blocks most of the wind however you are an easy target for flying debris. You survive with a few injuries.", null, null, 0.2),
        new Story(25, "You are low enough that the storm passes over you without issue. Always lay face down to prevent harm from flying debris.", null, null, 0)
    ]
}

const blizzard = {
    title: "Blizzard",
    category: 'freeze',
    background: 'snow.mp4',
    sound: 'Blizzard.wav',
    scenario: [
        new Story(80, "The snow begins falling fast and temperatures are hitting all time lows. Do you...", 'Start looking for wood to build a fire', 'Look for materials to build a shelter'),
        new Story(40, "Luckily the pond your car plunged into was surrounded by plenty of trees", 'Look for dying trees or decayed logs', 'Break thin branches off nearby trees'),
        new Story(10, "You have a lighter and it survived the plunge in the water. Lighting a fire without tinder is hard enough but the wind chill makes it impossible. So you...", "You've already walked quite a distance. If you keep heading south opposite the wind you're bound to find a building", 'Start thinking about building a shelter'),
        new Story(5, "While you're walking the wind chill quickly makes your body temperature plummet. The risk of  hypothermia increases every minute you are exposed to the cold weather. You and your partner become irrationally hot and remove your clothes. You both freeze to death and even worse are found naked.", null, null, 0.70),
        new Story(42, "Most of the surrounding wood is too wet to light even with the best survival gear", "You've already walked quite a distance. If you keep heading south opposite the wind you're bound to find a building", 'Start thinking about building a shelter'),
        new Story(41, "While you're walking the wind chill quickly makes your body temperature plummet. The risk of  hypothermia increases every minute you are exposed to the cold weather. You and your partner become irrationally hot and remove your clothes. You both freeze to death and even worse are found naked.", null, null, 0.70),
        new Story(45, "Lucky for you there is pre-existing snow on the ground which you are able to shape and mold", "You and your partner start rolling/packing snow to create an igloo", 'Dig a snow cave into a nearby snow bank or drift'),
        new Story(44, "Before you have enough packed snow to make one wall you and your partner have exerted enough energy to justify a break. Little do you know lying down on snow eliminates all your body heat. You take a nap but never wake up.", null, null, 0.75),
        new Story(55, "When building your shelter there's conflicting opinions on how to ventilate it. Your partner believes the shelter should be packed as tight as possible with little to no opening while you suggest poking holes in the shelter. Do you...", "Follow your partner he's camped and hiked many more times than you", 'Poke holes in the shelter anyways'),
        new Story(50, "Your shelter is nearly complete. While your partner is finishing his last shift digging it out you decide to prepare for a long storm ", "Search for clean snow to hydrate yourselves.", 'Search for branches and leaves to fortify your snow cave'),
        new Story(46, "It seems like a good idea at first and you could really use something to drink. However, your body must melt the ice before it can be consumed. Consuming the snow exhausts you and your body temperature continue to drop until you pass out and eventually freeze.", null, null, 0.75),
        new Story(52, "You are able to find some movable boulders and weathered wooden planks from a nearby dock.", "Once you and your partner are huddled inside the snow cave, stack the rocks in front of the opening to block any wind.", 'Once you and your partner are huddled inside tightly stack the planks in front of the opening to block any wind'),
        new Story(51, "Your strategy is a success! The boulders block the wind while leaving enough room to let you and your partner breathe. The storm eventually dies down and the temperature rises enough for you to find your way home. You could've used some more air circulation though.", null, null, 0.15),
        new Story(53, "Your snow cave is warm enough however when you stacked the planks you blocked any incoming oxygen. Fun Fact: many people stranded in blizzards actually die of carbon monoxide poisoning.", null, null, 0.75),
        new Story(65, "Your shelter is nearly complete. While your partner is finishing his last shift digging it out you decide to prepare for a long storm ", "Search for clean snow to hydrate yourselves.", 'Search for branches and leaves to fortify your snow cave'),
        new Story(64, "It seems like a good idea at first and you could really use something to drink. However, your body must melt the ice before it can be consumed. Consuming the snow exhausts you and your body temperature continue to drop until you pass out and eventually freeze.", null, null, 0.75),
        new Story(68, "You are able to find some movable boulders and weathered wooden planks from a nearby dock.", "Once you and your partner are huddled inside the snow cave, stack the rocks in front of the opening to block any wind.", 'Once you and your partner are huddled inside tightly stack the planks in front of the opening to block any wind'),
        new Story(66, "Your strategy is a success! The boulders block the wind while leaving enough room to let you and your partner breathe. The storm eventually dies down and the temperature rises enough for you to find your way home.", null, null, 0),
        new Story(69, "Your snow cave is warm enough however when you stacked the planks you blocked any incoming oxygen. Fun Fact: many people stranded in blizzards actually die of carbon monoxide poisoning.", null, null, 0.75),
        new Story(15, "Lucky for you there is pre-existing snow on the ground which you are able to shape and mold", "You and your partner start rolling/packing snow to create an igloo", 'Dig a snow cave into a nearby snow bank or drift'),
        new Story(13, "Before you have enough packed snow to make one wall you and your partner have exerted enough energy to justify a break. Little do you know lying down on snow eliminates all your body heat. You take a nap but never wake up.", null, null, 0.75),
        new Story(25, "When building your shelter there's conflicting opinions on how to ventilate it. Your partner believes the shelter should be packed as tight as possible with little to no opening while you suggest poking holes in the shelter. Do you...", "Follow your partner he's camped and hiked many more times than you", 'Poke holes in the shelter anyways'),
        new Story(18, "Your shelter is nearly complete. While your partner is finishing his last shift digging it out you decide to prepare for a long storm ", "Search for clean snow to hydrate yourselves.", 'Search for branches and leaves to fortify your snow cave'),
        new Story(17, "It seems like a good idea at first and you could really use something to drink. However, your body must melt the ice before it can be consumed. Consuming the snow exhausts you and your body temperature continue to drop until you pass out and eventually freeze.", null, null, 0.75),
        new Story(21, "You are able to find some movable boulders and weathered wooden planks from a nearby dock.", "Once you and your partner are huddled inside the snow cave, stack the rocks in front of the opening to block any wind.", 'Once you and your partner are huddled inside tightly stack the planks in front of the opening to block any wind'),
        new Story(20, "Your strategy is a success! The boulders block the wind while leaving enough room to let you and your partner breathe. The storm eventually dies down and the temperature rises enough for you to find your way home. You could've used some more air circulation though.", null, null, 0.15),
        new Story(22, "Your snow cave is warm enough however when you stacked the planks you blocked any incoming oxygen. Fun Fact: many people stranded in blizzards actually die of carbon monoxide poisoning.", null, null, 0.75),
        new Story(28, "Your shelter is nearly complete. While your partner is finishing his last shift digging it out you decide to prepare for a long storm ", "Search for clean snow to hydrate yourselves.", 'Search for branches and leaves to fortify your snow cave'),
        new Story(26, "It seems like a good idea at first and you could really use something to drink. However, your body must melt the ice before it can be consumed. Consuming the snow exhausts you and your body temperature continue to drop until you pass out and eventually freeze.", null, null, 0.75),
        new Story(30, "You are able to find some movable boulders and weathered wooden planks from a nearby dock.", "Once you and your partner are huddled inside the snow cave, stack the rocks in front of the opening to block any wind.", 'Once you and your partner are huddled inside tightly stack the planks in front of the opening to block any wind'),
        new Story(29, "Your strategy is a success! The boulders block the wind while leaving enough room to let you and your partner breathe. The storm eventually dies down and the temperature rises enough for you to find your way home.", null, null, 0),
        new Story(32, "Your snow cave is warm enough however when you stacked the planks you blocked any incoming oxygen. Fun Fact: many people stranded in blizzards actually die of carbon monoxide poisoning.", null, null, 0.75),
        new Story(150, "There's not a lot of loose branches and neither you nor your partner has a machete", 'Work with the snow around you', "Keep walking. You were close to home so you're bound to reach some sort of building. Hopefully people will be kind enough to let you in"),
        new Story(155, "While you're walking the wind chill quickly makes your body temperature plummet. The risk of  hypothermia increases every minute you are exposed to the cold weather. You and your partner become irrationally hot and remove your clothes. You both freeze to death and even worse are found naked.", null, null, 0.75),
        new Story(120, "Lucky for you there is pre-existing snow on the ground which you are able to shape and mold", "You and your partner start rolling/packing snow to create an igloo", 'Dig a snow cave into a nearby snow bank or drift'),
        new Story(115, "Before you have enough packed snow to make one wall you and your partner have exerted enough energy to justify a break. Little do you know lying down on snow eliminates all your body heat. You take a nap but never wake up.", null, null, 0.75),
        new Story(125, "When building your shelter there's conflicting opinions on how to ventilate it. Your partner believes the shelter should be packed as tight as possible with little to no opening while you suggest poking holes in the shelter. Do you...", "Follow your partner he's camped and hiked many more times than you", 'Poke holes in the shelter anyways'),
        new Story(128, "Your shelter is nearly complete. While your partner is finishing his last shift digging it out you decide to prepare for a long storm ", "Search for clean snow to hydrate yourselves.", 'Search for branches and leaves to fortify your snow cave'),
        new Story(127, "It seems like a good idea at first and you could really use something to drink. However, your body must melt the ice before it can be consumed. Consuming the snow exhausts you and your body temperature continue to drop until you pass out and eventually freeze.", null, null, 0.75),
        new Story(130, "You are able to find some movable boulders and weathered wooden planks from a nearby dock.", "Once you and your partner are huddled inside the snow cave, stack the rocks in front of the opening to block any wind.", 'Once you and your partner are huddled inside tightly stack the planks in front of the opening to block any wind'),
        new Story(129, "Your strategy is a success! The boulders block the wind while leaving enough room to let you and your partner breathe. The storm eventually dies down and the temperature rises enough for you to find your way home. You could've used some more air circulation though.", null, null, 0.15),
        new Story(132, "Your snow cave is warm enough however when you stacked the planks you blocked any incoming oxygen. Fun Fact: many people stranded in blizzards actually die of carbon monoxide poisoning.", null, null, 0.75),
        new Story(140, "Your shelter is nearly complete. While your partner is finishing his last shift digging it out you decide to prepare for a long storm ", "Search for clean snow to hydrate yourselves.", 'Search for branches and leaves to fortify your snow cave'),
        new Story(136, "It seems like a good idea at first and you could really use something to drink. However, your body must melt the ice before it can be consumed. Consuming the snow exhausts you and your body temperature continue to drop until you pass out and eventually freeze.", null, null, 0.75),
        new Story(142, "You are able to find some movable boulders and weathered wooden planks from a nearby dock.", "Once you and your partner are huddled inside the snow cave, stack the rocks in front of the opening to block any wind.", 'Once you and your partner are huddled inside tightly stack the planks in front of the opening to block any wind'),
        new Story(141, "Your strategy is a success! The boulders block the wind while leaving enough room to let you and your partner breathe. The storm eventually dies down and the temperature rises enough for you to find your way home.", null, null, 0),
        new Story(143, "Your snow cave is warm enough however when you stacked the planks you blocked any incoming oxygen. Fun Fact: many people stranded in blizzards actually die of carbon monoxide poisoning.", null, null, 0.75),
    ]
}

const bear = {
    title: 'Bear Fight',
    category: 'wind',
    background: 'snakeStory.jpg',
    sound: 'bear.mp4',
    scenario: [
    ]
}

const scenarios = [tornado, plane, buried, earthquake, avalanche, frozenPlunge, snakeStory, blizzard];

const createBinaryObject = (story) => {
    let newTree = new BinarySearchTree();
    story.scenario.forEach(slide => {
        newTree.insert(slide)
    })

    return {
        title: story.title,
        category: story.category,
        tree: newTree
    }
}

const generateBinary = (key) => {
    let filteredArray = scenarios.filter(story => story.category === key);
    return filteredArray;
}

exports.generateBinary = generateBinary;