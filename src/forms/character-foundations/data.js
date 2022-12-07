export const maxLevel = 20;

export const ancestryOptions = {
  Dragonborn: {
    subancestries: [
      "Black",
      "Blue",
      "Brass",
      "Bronze",
      "Copper",
      "Gold",
      "Green",
      "Red",
      "Silver",
      "White",
    ],
  },
  Dwarf: { subancestries: ["Hill Dwarf", "Mountain Dwarf"] },
  Elf: { subancestries: ["High Elf", "Wood Elf", "Dark Elf/Drow"] },
  Gnome: { subancestries: ["Forest Gnome", "Rock Gnome"] },
  "Half-elf": { subancestries: ["Half-elf"] },
  Halfling: { subancestries: ["Lightfoot", "Stout"] },
  "Half-orc": { subancestries: ["Half-orc"] },
  Human: { subancestries: ["Standard", "Variant"] },
  Tiefling: { subancestries: ["Tiefling"] },
};

export const backgroundOptions = [
  "Acolyte",
  "Charlatan",
  "Criminal",
  "Entertainer",
  "Folk Hero",
  "Guild Artisan",
  "Hermit",
  "Noble",
  "Outlander",
  "Sage",
  "Sailor",
  "Soldier",
  "Urchin",
];

export const classOptions = {
  Barbarian: { subclasses: ["Berserker", "Totem Warrior"] },
  Bard: { subclasses: ["Lore", "Valor"] },
  Cleric: {
    subclasses: [
      "Knowledge",
      "Life",
      "Light",
      "Nature",
      "Tempest",
      "Trickery",
      "War",
    ],
  },
  Druid: { subclasses: ["Land", "Moon"] },
  Fighter: { subclasses: ["Battle Master", "Champion", "Eldritch Knight"] },
  Monk: { subclasses: ["Four Elements", "Open Hand", "Shadow"] },
  Paladin: { subclasses: ["Ancients", "Devotion", "Vengeance"] },
  Ranger: { subclasses: ["Beast Master", "Hunter"] },
  Rogue: { subclasses: ["Arcane Trickster", "Assassin", "Thief"] },
  Sorceror: { subclasses: ["Draconic Bloodline", "Wild Magic"] },
  Warlock: { subclasses: ["Archfey", "Fiend", "Great Old One"] },
  Wizard: {
    subclasses: [
      "Abjuration",
      "Conjuration",
      "Divination",
      "Enchantment",
      "Evocation",
      "Illusion",
      "Necromancy",
      "Transmutation",
    ],
  },
};
