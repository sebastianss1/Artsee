json.array! @galleries do |gallery|
    json.extract! gallery, :id, :name, :location, :about
end