/*
 * Pathfinding guide data for each Corrupted Zone.
 * Adapted from Knoofle's PD2 Pathfinding Guide:
 * https://docs.google.com/document/d/14fVQEQp4AaI24XEV0CDPwfmnbYhOJQAnRqUh3_A1KGY
 *
 * Keys match the zone names in cz-data.js exactly.
 * Each value is an array of {title, text} sections for the sub-zones.
 */
window.czPathfinding = {
  "Blood Moor and Den of Evil": [
    {
      "title": "Blood Moor",
      "text": "More often than not the Den of Evil is right outside the Rogue Encampment or easy enough to spot forking off the main road. Drop a Town Portal at the fork or the cave entrance and head to the Cold Plains waypoint first. This way you save the walk out of the Den of Evil after completion."
    },
    {
      "title": "Den of Evil",
      "text": "The Den of Evil has an underlying pattern for the map generation: if the entry tile is in the bottom left then Corpsefire will spawn on a tile facing to the top left. The entrance and exit tiles used are the same as for the Underground Passage Level 1."
    }
  ],
  "Cold Plains and the Cave": [
    {
      "title": "Cold Plains",
      "text": "The Cold Plains lead to two new outdoor zones: the Burial Ground you want to avoid and the Stony Field you need to go through. If you imagine the map as a square or rectangle the passage to the Burial Ground will always be close to a corner and the passage to the Stony Field will usually be in the center of one of its sides.\n\nOn Hell difficulty you cannot use any teleport skill in the Cold Plains since it is disabled to allow melee characters to farm Terror Keys by killing Bloodraven."
    }
  ],
  "Stony Field and Tristram": [
    {
      "title": "Stony Field",
      "text": "In the Stony Field you are mostly looking for the Underground Passage Level 1 which connects to the Dark Wood. The entrance is either on the edge of the map (if there is a cliff) or somewhere on the inside.\n\nIf you plan on rescuing Cain or doing Cows later you might want to grab the waypoint or make a Town Portal at the cairns. The cairn formation is almost always somewhere near the road whereas the waypoint can be anywhere close to a border."
    }
  ],
  "Dark Wood and the Underground Passage": [
    {
      "title": "Underground Passage Level 1",
      "text": "You generally want to explore in a straight line from your entry tile since the exit will always have an orientation opposite to that. Don't go in the direction of red Fallen if you see them since it will always be a dead end."
    },
    {
      "title": "Dark Wood",
      "text": "You will leave the Underground Passage through the cliff or through a hole in the field. Follow the road to reach the Black Marsh. Consider picking up the waypoint and/or the Scroll of Inifuss."
    }
  ],
  "Black Marsh and the Hole": [
    {
      "title": "Black Marsh",
      "text": "If you plan on running Countess you want to find the waypoint here. Both the Tower and the waypoint are usually near the edge of the map or more rarely at some of the inner boundary.\n\nSince every Tower Cellar Level has at least one unique monster I would recommend running it at least once."
    }
  ],
  "Tamoe Highland and the Pit": [
    {
      "title": "Tamoe Highland",
      "text": "The Tamoe Highland always ends with the Monastery Gate in the top right. Adjust your direction depending on where you enter and don't rely too much on the road (because of the Pit)."
    }
  ],
  "Burial Ground and Mausoleum": [
    {
      "title": "Burial Ground",
      "text": "The Burial Ground is accessed from the Cold Plains. The passage will always be close to a corner of the Cold Plains map. On Hell difficulty Bloodraven is a key farm here for Terror Keys."
    }
  ],
  "Forgotten Tower": [
    {
      "title": "Tower Cellar Level 1-4",
      "text": "All the Tower Cellar Levels have the same consistent pattern: you generally want to explore in a clockwise fashion."
    },
    {
      "title": "Tower Cellar Level 5",
      "text": "The last level of the Forgotten Tower is home to the Countess and always has the same layout."
    }
  ],
  "Outer Cloister and Barracks": [
    {
      "title": "Outer Cloister",
      "text": "You can choose between three ways to find the Barracks: top left, top right or bottom right.\n\nIf you have bushes in the middle and the waypoint is at the top right: go towards the top right.\nIf there is a statue in the middle and the waypoint to the right of it: go towards the top left.\nIf there is a statue in the middle and the waypoint is left / in front of it: go towards the bottom right."
    },
    {
      "title": "Barracks",
      "text": "The exit tile to Jail Level 1 is either oriented to the left of the tile you entered on OR it has the opposite orientation. You generally want to explore in a clockwise fashion."
    }
  ],
  "Jail, Inner Cloister, and Cathedral": [
    {
      "title": "Jail Level 1",
      "text": "Explore in a straight line from your entry tile since the exit will always have an orientation opposite to that. The waypoint can generally be found by exploring clockwise."
    },
    {
      "title": "Jail Level 2",
      "text": "Just like Level 1, explore in a straight line from your entry tile. If you explore clockwise you will find the superunique Pitspawn Fouldog."
    },
    {
      "title": "Jail Level 3",
      "text": "Explore in a clockwise fashion to find the Inner Cloister faster."
    },
    {
      "title": "Inner Cloister & Cathedral",
      "text": "Always have the same layout. The entrance to the Catacombs can be found in the right wing in the back."
    }
  ],
  "Catacombs": [
    {
      "title": "Catacombs Level 1",
      "text": "No reliable pattern. Explore as fast as possible. It helps to know some of the dead end tiles."
    },
    {
      "title": "Catacombs Level 2",
      "text": "No reliable pattern. If you find the waypoint before the exit to Level 3, explore in a counter-clockwise fashion to find the exit."
    },
    {
      "title": "Catacombs Level 3",
      "text": "No reliable pattern."
    },
    {
      "title": "Catacombs Level 4",
      "text": "Always has the same layout. Kill Andariel and proceed to Act II."
    }
  ],
  "Cow Level": [
    {
      "title": "Cow Level",
      "text": "The Cow Level is a large open field. No specific pathfinding pattern applies here — explore and clear as you go."
    }
  ],
  "Rocky Waste and the Stony Tomb": [
    {
      "title": "Rocky Wastes",
      "text": "Pass through as fast as possible. If leaving Lut Gholein to the top left, check for a close exit to the top right, and vice versa.\n\nOutdoor maps in Act II are shaped like a square or rectangle and the exits are always in corner positions. A full-fledged corner using the full external dimensions means the passage to the next zone is there."
    }
  ],
  "Dry Hills and the Halls of the Dead": [
    {
      "title": "Dry Hills",
      "text": "Find the exit as usual but keep an eye out for the Halls of the Dead, which can be anywhere close to the red rocks on the map."
    },
    {
      "title": "Halls of the Dead Level 1",
      "text": "Explore in a clockwise fashion. The waypoint can be found going straight from the entry tile."
    },
    {
      "title": "Halls of the Dead Level 2",
      "text": "Explore clockwise. On Hell difficulty you cannot teleport on Level 2 and 3 (disabled for Hate Key farming)."
    },
    {
      "title": "Halls of the Dead Level 3",
      "text": "Explore clockwise to find the chest containing the Horadric Cube."
    }
  ],
  "Far Oasis and the Maggot Lair": [
    {
      "title": "Far Oasis",
      "text": "Look for the Maggot Lair entrance and drop a Town Portal before you head down. Try to find the Lost City waypoint first."
    },
    {
      "title": "Maggot Lair Level 1 and 2",
      "text": "Explore in a counter-clockwise fashion."
    },
    {
      "title": "Maggot Lair Level 3",
      "text": "The entry tile is oriented to the bottom left and the objective tile to the top right. Explore in a straight fashion towards the top right corner for the Staff of Kings."
    }
  ],
  "Lost City, Ancient Tunnels, and Claw Viper Temple": [
    {
      "title": "Lost City",
      "text": "The exit to the Valley of Snakes can be in a close position. It cannot be in the lower corner. Look for the exit in the left, top and right corner."
    },
    {
      "title": "Valley of Snakes",
      "text": "Always has a very similar layout with the Claw Viper Temple entrance in the middle."
    },
    {
      "title": "Claw Viper Temple Level 1",
      "text": "Explore in a clockwise fashion."
    },
    {
      "title": "Claw Viper Temple Level 2",
      "text": "Very small map with the same layout every time. Remember to talk to Drognan to enter the palace."
    }
  ],
  "Canyon of the Magi and Tal Rasha's Tomb": [
    {
      "title": "Canyon of Magi",
      "text": "Uses the same layout every time. Grab the waypoint right outside the red portal from Arcane Sanctuary."
    },
    {
      "title": "Tal Rasha's Tomb",
      "text": "Go clockwise to find the objective."
    },
    {
      "title": "Tal Rasha's Chamber",
      "text": "Always has the same layout. Kill Duriel. Bring Thawing Potions."
    }
  ],
  "Lut Gholein Sewers and the Palace Cellars": [
    {
      "title": "Sewers Level 1 (Act II)",
      "text": "Enter through the docks doorway and explore left and right. The exit is mostly near the dock entrance."
    },
    {
      "title": "Sewers Level 2 (Act II)",
      "text": "Explore straight. Waypoint found clockwise."
    },
    {
      "title": "Sewers Level 3 (Act II)",
      "text": "Explore clockwise to find Radament."
    },
    {
      "title": "Harem & Palace Cellar",
      "text": "Similar layout. From Harem Level 2 the maps are squares. Avoid diagonals."
    }
  ],
  "Arcane Sanctuary": [
    {
      "title": "Arcane Sanctuary",
      "text": "No reliable pattern to find the Summoner other than exploring all four ways. Each has a different theme. Once you find the Summoner, the missing 7th symbol floating behind him is the true Tomb."
    }
  ],
  "Spider Forest, Arachnid Lair, and Spider Cavern": [
    {
      "title": "Spider Forest",
      "text": "Take every passage to a side pocket area until you find the Spider Cavern. River forks in 3+ directions indicate the Great Marsh/Flayer Jungle."
    },
    {
      "title": "Spider Cavern",
      "text": "Khalim's Eye chest is always in the bottom left corner, guarded by Sszark the Burning."
    }
  ],
  "Great Marsh and the Swampy Pit": [
    {
      "title": "Great Marsh",
      "text": "Follow the main river until a three-way fork or the Flayer Jungle. Skip side pocket areas."
    }
  ],
  "Flayer Jungle and the Flayer Dungeon": [
    {
      "title": "Flayer Jungle",
      "text": "Check all side pocket areas for Gidbinn and Flayer Dungeon. Drop a TP when found, then find a waypoint."
    },
    {
      "title": "Flayer Dungeon Level 1",
      "text": "Explore clockwise."
    },
    {
      "title": "Flayer Dungeon Level 2",
      "text": "Explore clockwise."
    },
    {
      "title": "Flayer Dungeon Level 3",
      "text": "About 6 fixed layouts. Khalim's Brain chest is in the middle, top, left or bottom corner."
    }
  ],
  "Lower Kurast and the Kurast Sewers": [
    {
      "title": "Lower Kurast",
      "text": "Mostly passing through. Look for a waypoint."
    },
    {
      "title": "Sewers Level 1 (Act III)",
      "text": "No reliable pattern. From the golden chest tile, explore counter-clockwise. Exit tile mostly on the edge."
    },
    {
      "title": "Sewers Level 2 (Act III)",
      "text": "Small map. Khalim's Heart chest is always in the top right."
    }
  ],
  "Kurast Bazaar, Ruined Temple, and Disused Fane": [
    {
      "title": "Kurast Bazaar",
      "text": "Drop a TP at the Sewers and get the Travincal waypoint before going down for Khalim's Heart. The Ruined Temple always looks the same (three stairs, back facing top right)."
    }
  ],
  "Upper Kurast, the Forgotten Reliquary, and Forgotten Temple": [
    {
      "title": "Upper Kurast",
      "text": "Mostly passing through, maybe looking for a waypoint."
    }
  ],
  "Travincal, the Ruined Fane, and Disused Reliquary": [
    {
      "title": "Travincal",
      "text": "Always the same layout. Kill High Council Members for Khalim's Flail. Complete Khalim's Will to access the Durance of Hate."
    }
  ],
  "Durance of Hate": [
    {
      "title": "Durance of Hate Level 1",
      "text": "Explore clockwise."
    },
    {
      "title": "Durance of Hate Level 2",
      "text": "Explore straight. Clockwise finds the waypoint."
    },
    {
      "title": "Durance of Hate Level 3",
      "text": "Home to Mephisto. Kill him and proceed to Act IV."
    }
  ],
  "Outer Steppes and the Plains of Despair": [
    {
      "title": "Outer Steppes",
      "text": "Act IV outdoor maps are squares/rectangles. Passages near corners and center. The exit can be close to the Pandemonium Fortress or on the opposite side."
    },
    {
      "title": "Plains of Despair",
      "text": "Same principles. Consider killing Izual for the skill point quest reward."
    }
  ],
  "City of the Damned and the River of Flame": [
    {
      "title": "City of the Damned",
      "text": "The River of Flame entrance is coupled with the waypoint, which can be anywhere on the grid."
    },
    {
      "title": "River of Flame",
      "text": "Extends to the top right with some turns. Consider killing Hephasto the Armorer for the Hell's Forge quest."
    }
  ],
  "Chaos Sanctuary": [
    {
      "title": "Chaos Sanctuary",
      "text": "Two slightly different layouts. Open the seals, kill super uniques to spawn Diablo. Have lightning resist for his Red Lightning Hose."
    }
  ],
  "Bloody Foothills and the Frigid Highlands": [
    {
      "title": "Bloody Foothills",
      "text": "Always extends from Harrogath to the top left. Consider killing Shenk for the Larzuk quest."
    },
    {
      "title": "Frigid Highlands",
      "text": "Can extend top right or top left. Red portals and stairs indicate direction. Or go straight up until you hit the wall and follow it."
    }
  ],
  "Arreat Plateau, Crystalline Passage, and Frozen River": [
    {
      "title": "Arreat Plateau",
      "text": "Same principle as Frigid Highlands — maps extend to top right OR top left."
    },
    {
      "title": "Crystalline Passage",
      "text": "Clockwise for Glacial Trail. Counter-clockwise for waypoint. Straight for Frozen River."
    },
    {
      "title": "Frozen River",
      "text": "Only four fixed layouts. Use the bridge near the entrance to identify which map. Teleport can skip large parts."
    }
  ],
  "Glacial Trail, Drifter Cavern, and Frozen Tundra": [
    {
      "title": "Glacial Trail",
      "text": "Explore clockwise. Waypoint tile has same orientation as entry tile. Golden chest is opposite. Counter-clockwise finds the Drifter Cavern."
    },
    {
      "title": "Frozen Tundra",
      "text": "Extends top left or top right. Tree line at bottom left = go top right for Ancients' Way. Icy cliff at bottom right = go top left."
    }
  ],
  "Ancients' Way and the Icy Cellar": [
    {
      "title": "Ancients' Way",
      "text": "Explore clockwise like the other ice cave tilesets in Act 5. Counter-clockwise finds the waypoint."
    }
  ],
  "Nihlathak's Temple": [
    {
      "title": "Nihlathak's Temple",
      "text": "Accessed after rescuing Anya. Multiple levels. Nihlathak uses Corpse Explosion which can be deadly."
    }
  ],
  "Abaddon, the Pit of Acheron, and the Infernal Pit": [
    {
      "title": "Abaddon, Pit of Acheron, and Infernal Pit",
      "text": "Red portal areas in Act V. Each is relatively small. No specific pathfinding patterns documented."
    }
  ],
  "Worldstone Keep and Throne of Destruction": [
    {
      "title": "Worldstone Keep Level 1",
      "text": "No reliable pattern. Know the tiles and how they connect."
    },
    {
      "title": "Worldstone Keep Level 2",
      "text": "No reliable pattern. If you find the waypoint, explore counter-clockwise for the exit to Level 3."
    },
    {
      "title": "Worldstone Keep Level 3",
      "text": "No reliable pattern."
    },
    {
      "title": "Throne of Destruction",
      "text": "Always the same layout. Kill Baal's minions, follow him to the Worldstone Chamber and finish the difficulty."
    }
  ]
};
