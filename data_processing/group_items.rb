require 'pry'
require 'set'

TYPE_NAMES = {
  'skin' => 'Skins',
  'emote' => 'Emotes',
  'pose' => 'Victory Poses',
  'voice-line' => 'Voice Lines',
  'spray' => 'Sprays',
  'highlight-intro' => 'Highlight Intros',
  'weapon' => 'Weapons',
  'player-icon' => 'Player Icons',
}

EVENTS = [
  'summer-games',
  'halloween-terror',
  'winter-wonderland',
  'lunar-new-year',
  'archives',
  'anniversary',
]

def group_items(items)
  heroes = items.values.map{|item| item['hero']}.to_set.delete(nil)
  hero_item_ids = {}
  (heroes.sort).each do |hero|
    item_groups = Hash[TYPE_NAMES.values.map{|name| [name, []]}]
    hero_item_ids[hero] = item_groups
  end

  event_item_ids = {}
  EVENTS.each do |name|
    item_groups = Hash[TYPE_NAMES.values.map{|name| [name, []]}]
    event_item_ids[name] = item_groups
  end

  grouped_item_ids = {
    'heroes' => hero_item_ids,
    'shared-sprays' => [],
    'player-icons' => [],
    'events' => event_item_ids,
  }
  items.each do |id, item|
    hero = item['hero']
    type = item['type']
    if type == 'player-icon'
      grouped_item_ids['player-icons'].push(id)
    elsif hero.nil?
      grouped_item_ids['shared-sprays'].push(id)
    else
      hero_item_ids[hero][TYPE_NAMES[type]].push(id)
    end

    group = item['group']
    if EVENTS.include?(group)
      event_item_ids[group][TYPE_NAMES[type]].push(id)
    end
  end

  (hero_item_ids.values + event_item_ids.values).each do |item_groups|
    item_groups.delete_if do |_, item_ids|
      item_ids.empty?
    end
  end

  sort_item_ids_in_hash(items, grouped_item_ids)

  grouped_item_ids
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

def sort_item_ids_in_hash(items, hash_with_item_id_arrays)
  hash_with_item_id_arrays.values.each do |value|
    if value.is_a? Hash
      sort_item_ids_in_hash(items, value)
    else
      value.sort_by! do |id|
        sort_key(items[id])
      end
    end
  end
end

def sort_key(item)
  [item['hero'].nil? ? 1 : 0, item['hero'], RARITY_ORDER[item['rarity']], GROUP_ORDER[item['group']], item['name'].downcase]
end
