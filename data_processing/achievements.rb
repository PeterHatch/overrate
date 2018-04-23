require 'json'
require_relative 'guid'

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
