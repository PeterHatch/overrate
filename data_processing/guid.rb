def get_short_id_from_guid(key_prefix, string_suffix, guid)
  key = guid['Key']
  if key.length != 16
    raise "Unexpected key length for #{guid}"
  end
  if key[0...3] != key_prefix
    raise "Unexpected key prefix for #{guid}; expected #{key_prefix}"
  end
  if key[3...4] != '0'
    raise "Unexpected key character after prefix for #{guid}"
  end
  short_id = key[4...16]

  string = guid['String']
  if string.length != 16
    raise "Unexpected string length for #{guid}"
  end
  if string[0...12] != short_id
    raise "Unexpected mismatch between key & string for #{guid}"
  end
  if string[12...13] != '.'
    raise "Unexpected string missing '.' in #{guid}"
  end
  if string[13...16] != string_suffix
    raise "Unexpected string suffix in #{guid}; expected #{string_suffix}"
  end

  short_id.sub!(/^0*/, '')

  if short_id.length > 4
    raise "Unexpected number of non-zero hex digits in short id #{short_id}"
  end

  short_id
end
