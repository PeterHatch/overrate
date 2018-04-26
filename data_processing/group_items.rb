require 'set'

TYPE_NAMES = {
  'skin' => 'Skins',
  'emote' => 'Emotes',
  'pose' => 'Victory Poses',
  'voice-line' => 'Voice Lines',
  'spray' => 'Sprays',
  'highlight-intro' => 'Highlight Intros',
  'weapon' => 'Weapons',
}

def group_items(items)
  heroes = items.values.map{|item| item['hero']}.to_set.delete(nil)
  hero_item_ids = {}
  (heroes.sort).each do |hero|
    item_groups = Hash[TYPE_NAMES.values.map{|name| [name, []]}]
    hero_item_ids[hero] = item_groups
  end

  grouped_item_ids = {
    'heroes' => hero_item_ids,
    'shared-sprays' => [],
    'player-icons' => [],
  }
  items.each do |id, item|
    hero = item['hero']
    type = item['type']
    if type == 'player-icon'
      grouped_item_ids['player-icons'].push(id)
    elsif hero.nil?
      grouped_item_ids['shared-sprays'].push(id)
    else
      grouped_item_ids['heroes'][hero][TYPE_NAMES[type]].push(id)
    end
  end

  sort_items(items, grouped_item_ids)
end

RARITY_ORDER = {
  'common' => 0,
  'rare' => 1,
  'epic' => 2,
  'legendary' => 3,
}

GROUP_ORDER = {
  nil => 0,
  'bonus' => 1,
  'summer-games' => 2,
  'halloween-terror' => 3,
  'winter-wonderland' => 4,
  'lunar-new-year' => 5,
  'archives' => 6,
  'anniversary' => 7,
  'overwatch-league' => 8,
}

def sort_items(items, grouped_item_ids)
  heroes_item_ids = grouped_item_ids['heroes']
  heroes_item_ids.each do |hero, hero_item_ids|
    hero_item_ids.each do |type, item_ids|
      item_ids.sort! do |a_id, b_id|
        a = items[a_id]
        b = items[b_id]
        [RARITY_ORDER[a['rarity']], GROUP_ORDER[a['group']], a['name'].downcase] <=> [RARITY_ORDER[b['rarity']], GROUP_ORDER[b['group']], b['name'].downcase]
      end
    end
  end

  grouped_item_ids
end
