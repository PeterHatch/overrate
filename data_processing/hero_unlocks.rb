require 'json'
require_relative 'guid'

ACQUISITION_TYPES = {
  'Default' => {
    expected_available_in: false,
    availability: 'unknown',
  },
  'Standard' => {
    expected_available_in: [nil],
    availability: 'unlocked',
  },
  'Event/Base' => {
    expected_available_in: [nil, ''],
  },
  'Event/Summer Games' => {
    expected_available_in: ['Available in Summer Games Loot Boxes'],
    group: 'summer-games',
  },
  'Event/Halloween' => {
    expected_available_in: ['Available in Halloween Loot Boxes', 'Available for credits during the Halloween Terror event'],
    group: 'halloween-terror',
  },
  'Event/Winter' => {
    expected_available_in: ['Available in Winter Loot Boxes'],
    group: 'winter-wonderland',
  },
  'Event/Lunar New Year' => {
    expected_available_in: ['Available in Lunar Loot Boxes'],
    group: 'lunar-new-year',
  },
  'Event/Archives' => {
    expected_available_in: ['Available in Archives Loot Boxes'],
    group: 'archives',
  },
  'Event/Anniversary' => {
    expected_available_in: ['Available in Anniversary Loot Boxes'],
    group: 'anniversary',
  },
}

def process_hero_unlocks
  result_hero_items = {}

  hero_unlocks = JSON.load(File.read('input/Hero Unlocks.json'))
  hero_unlocks.each do |hero_name, hero_acquisition_types|
    # if it's not a playable hero, just skip over it.
    if hero_acquisition_types.keys == ['Default']
      next
    end
    hero_acquisition_types.each do |acquisition_type, items|
      unless ACQUISITION_TYPES.keys.include?(acquisition_type)
        raise "Unexpected key #{key} for #{hero_name}"
      end

      items.each do |item|
        unless item.keys == ['Name', 'Rarity', 'Type', 'Description', 'AvailableIn', 'GUID']
          raise "Unexpected keys for #{hero_name} #{acquisition_type} item #{item}"
        end

        unless ['Common', 'Rare', 'Epic', 'Legendary'].include?(item['Rarity'])
          raise "Unexpected rarity #{item['Rarity']} for #{hero_name} #{acquisition_type} item #{item}"
        end
        unless ['Skin', 'Emote', 'Pose', 'VoiceLine', 'Spray', 'HighlightIntro', 'Weapon', 'PlayerIcon'].include?(item['Type'])
          raise "Unexpected type #{item['Type']} for #{hero_name} #{acquisition_type} item #{item}"
        end

        if ACQUISITION_TYPES[acquisition_type][:expected_available_in] != false
          unless ACQUISITION_TYPES[acquisition_type][:expected_available_in].include?(item['AvailableIn'])
            puts "Unexpected AvailableIn for #{hero_name} #{acquisition_type} item #{item}"
          end
        end

        id = get_short_id_from_guid('025', '0A5', item['GUID'])

        if special_skip(item)
          next
        end

        new_item_hash = {
          'hero' => hero_name,
          'name' => item['Name'],
          'rarity' => item['Rarity'].downcase,
          'type' => item['Type'].sub(/([a-z])([A-Z])/, '\1-\2').downcase,
          'description' => item['Description'],
          'availability' => ACQUISITION_TYPES[acquisition_type][:availability],
          'group' => ACQUISITION_TYPES[acquisition_type][:group],
        }

        if acquisition_type == 'Default' && item['AvailableIn']
          new_item_hash['unlock-condition'] = item['AvailableIn']
          new_item_hash['availability'] = 'bonus'
          new_item_hash['group'] = 'bonus'
        end

        if special_skip(new_item_hash)
          next
        end

        special_modifications!(new_item_hash)

        new_item_hash.compact!

        result_hero_items[id] = new_item_hash
      end
    end
  end

  result_hero_items
end

def special_skip(item)
  if item['name'] == 'RANDOM'
    return true
  end

  false
end

def special_modifications!(item)
  # Handle Overwatch League items
  if item['availability'] == 'unknown' && item['name'].start_with?('Overwatch League', 'Dragons', 'Dynasty', 'Excelsior', 'Fuel', 'Fusion', 'Gladiators', 'Mayhem', 'Outlaws', 'Shock', 'Spitfire', 'Uprising', 'Valiant')
    item['availability'] = 'overwatch-league-tokens'
    item['group'] = 'overwatch-league'
  end
  # Handle golden weapons
  if item['name'] == 'GOLDEN' && item['type'] == 'weapon'
    item['name'].capitalize!
    item['availability'] = 'competitive-points'
  end
  # Handle default weapons
  if item['name'] == 'DEFAULT' && item['type'] == 'weapon'
    item['name'].capitalize!
  end
end
