require 'json'
require_relative 'achievements'
require_relative 'hero_unlocks'
require_relative 'group_items'

rewards = process_achievements
hero_items = process_hero_unlocks
item_groups = group_items(hero_items)

IO.write('../src/data/items.json', JSON.pretty_generate(hero_items))
IO.write('../src/data/groups.json', JSON.pretty_generate(item_groups))
