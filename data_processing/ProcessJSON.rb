require 'json'
require_relative 'achievements'
require_relative 'unlocks'
require_relative 'group_items'
require_relative 'new_items'

items = process_unlocks
add_achievements_info(items)
mark_new(items)
item_groups = group_items(items)

IO.write('../src/data/items.json', JSON.pretty_generate(items))
IO.write('../src/data/groups.json', JSON.pretty_generate(item_groups))
