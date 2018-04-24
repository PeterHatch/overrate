require 'json'
require_relative 'guid'

def add_achievements_info(items)
  rewards = process_achievements

  rewards.each do |reward_item_id, achievement_description|
    reward_item = items[reward_item_id]
    if reward_item['availability'] != 'unknown'
      raise "Unexpected availability of achievement reward item #{reward_item}"
    end
    reward_item['availability'] = 'achievement'
    reward_item['unlock-condition'] = achievement_description

    {
      'Lúcioball' => 'summer-games',
      'Junkenstein' => 'halloween-terror',
      "Mei's Snowball Offensive" => 'winter-wonderland',
      'Yeti Hunter' => 'winter-wonderland',
      'Uprising' => 'archives',
      'Retribution' => 'archives',
    }.each do |string, event|
      if achievement_description.include?(string)
        reward_item['group'] = event
      end
    end
  end
end

def process_achievements
  achievements = JSON.load(File.read('input/Achievements.json'))
  raise 'Unexpected format' unless validate_achievements(achievements)
  rewards = {}

  achievements.each do |achievement|
    id = get_short_id_from_guid('025', '0A5', achievement['Reward']['GUID'])
    rewards[id] = achievement['Description']
  end

  rewards
end

def validate_achievements(achievements)
  raise 'Expected array of achievements' unless achievements.class == Array

  achievements.each do |achievement|
    raise "Unexpected keys for achievement #{achievement}" unless achievement.keys == ['Name', 'Group', 'Description', 'Hero', 'Reward', 'GUID']
  end
end
