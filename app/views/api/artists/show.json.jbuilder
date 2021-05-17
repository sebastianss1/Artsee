json.extract! @artist
    json.name @artist.name 
    json.birth_year @artist.birth_year 
    json.death_year @artist.death_year 
    json.bio @artist.bio
    json.gallery do 
        json.name @artist.gallery.name 
    end 
end