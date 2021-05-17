json.extract! artwork, :id, :title, :year, :description, :height_dimensions, :width_dimensions, :availability, :price
json.artist do 
    json.id artwork.artist.id 
    json.name artwork.artist.name 
    json.gallery do
        json.name artwork.artist.gallery.name 
    end
end 

json.medium do
    json.name artwork.medium.name 
end 
json.photoUrl url_for(artwork.photo)