def group_items(hero_items)
  grouped_item_ids = {
    'heroes' => Hash.new do |hash, key|
       hash[key] = Hash.new do |hash, key|
         hash[key] = []
       end
     end,
  }
  hero_items.each do |id, item|
    hero = item['hero']
    type = item['type']
    if type == 'player-icon'
      next
    end
    grouped_item_ids['heroes'][hero][type + 's'].push(id)
  end

  sort_items(hero_items, grouped_item_ids)
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
        [RARITY_ORDER[a['rarity']], GROUP_ORDER[a['group']], a['name']] <=> [RARITY_ORDER[b['rarity']], GROUP_ORDER[b['group']], b['name']]
      end
    end
  end

  grouped_item_ids
end
