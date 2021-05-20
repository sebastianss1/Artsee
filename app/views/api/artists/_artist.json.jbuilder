json.extract! artist, :id, :name, :birth_year, :death_year, :bio, :gallery_id
json.photoUrl url_for(artist.photo)


json.gallery do 
    json.name artist.gallery.name 
end 



json.artworks artist.artworks.each do |artwork|
    json.extract! artwork, :id, :title, :year
        json.photoUrl url_for(artwork.photo)
end


