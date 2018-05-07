# This code isn't future-proof, but it should be easier to add years to things that come out in the future

require 'json'

def mark_new(items)
  items.each do |item_id, item|
    if item['group'] == 'archives'
      item_num = item_id.to_i(16)
      if item_num >= 0x1253 && item_num <= 0x193F
        item['new'] = true
      end
    end
  end
end
