require 'json'
require_relative 'achievements'
require_relative 'hero_unlocks'
require_relative 'group_items'

rewards = process_achievements
items = process_unlocks
item_groups = group_items(items)

IO.write('../src/data/items.json', JSON.pretty_generate(items))
IO.write('../src/data/groups.json', JSON.pretty_generate(item_groups))
