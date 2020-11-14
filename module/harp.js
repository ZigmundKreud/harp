// Import Modules
import { HarpActor } from "./actor/actor.js";
import { HarpActorSheet } from "./actor/actor-sheet.js";
import { HarpItem } from "./item/item.js";
import { HarpItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.harp = {
    HarpActor,
    HarpItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = HarpActor;
  CONFIG.Item.entityClass = HarpItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("harp", HarpActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("harp", HarpItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});