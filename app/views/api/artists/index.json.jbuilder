json.array! @artists do |artist|
    json.extract! artist , :id, :name, :birth_year, :death_year, :bio
end