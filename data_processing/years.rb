# This code isn't future-proof, but it should be much simpler to add years to things that come out in the future

require 'json'

def add_years(items)
  items.each do |item_id, item|
    if item['group'] == 'archives'
      item_num = item_id.to_i(16)
      if item_num >= 0xD05 && item_num <= 0x10F5
        item['year'] = 2017
      elsif item_num >= 0x1253 && item_num <= 0x193F
        item['year'] = 2018
      else
        raise "Unexpected id #{item_id} for Archives item #{item}"
      end
    end
  end
end
