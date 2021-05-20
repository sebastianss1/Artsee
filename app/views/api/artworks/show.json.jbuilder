json.artwork do 
    json.extract! @artwork, :id, :title, :year, :description, :height_dimensions, :width_dimensions, :medium_id, :artist_id, :price, :availability
    json.photoUrl url_for(@artwork.photo)
end 

json.artist do 
    json.extract! @artwork.artist, :id, :name, :birth_year, :gallery_id, :bio, :death_year
end 

json.gallery do
    json.extract! @artwork.artist.gallery, :name, :location, :about
end 






