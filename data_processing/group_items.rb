require 'set'

HERO_TYPE_NAMES = {
  'skin' => 'Skins',
  'emote' => 'Emotes',
  'pose' => 'Victory Poses',
  'voice-line' => 'Voice Lines',
  'spray' => 'Sprays',
  'highlight-intro' => 'Highlight Intros',
  'weapon' => 'Weapons',
}

ALL_TYPe_NAMES = Hash[HERO_TYPE_NAMES.entries.push(['player-icons', 'Player Icons'])]

def group_items(items)
  heroes = items.values.map{|item| item['hero']}.to_set.delete(nil)
  hero_item_ids = {}
  (heroes.sort).each do |hero|
    item_groups = Hash[HERO_TYPE_NAMES.values.map{|name| [name, []]}]
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
      grouped_item_ids['heroes'][hero][HERO_TYPE_NAMES[type]].push(id)
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
      item_ids.sort_by! do |id|
        sort_key(items[id])
      end
    end
  end

  grouped_item_ids['shared-sprays'].sort_by!{|id| sort_key(items[id])}
  grouped_item_ids['player-icons'].sort_by!{|id| sort_key(items[id])}

  grouped_item_ids
end

def sort_key(item)
  [item['hero'].nil? ? 1 : 0, item['hero'], RARITY_ORDER[item['rarity']], GROUP_ORDER[item['group']], item['name'].downcase]
end