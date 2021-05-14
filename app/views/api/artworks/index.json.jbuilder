# json.array! @artworks do |artwork|
#     json.extract! artwork, :id, :title, :year, :artist_id, :description, :height_dimensions, :width_dimensions, :medium_id, :availability, :price
#     # json.photoUrl url_for(artwork.photo)
# end

json.array! @artworks do |artwork|
    json.title artwork.title
    json.year artwork.year 
    json.artist do 
        json.name artwork.artist.name 
    end 
    json.description artwork.description 
    json.height_dimensions artwork.height_dimensions
    json.width_dimensions artwork.width_dimensions
    json.medium do 
        json.name artwork.medium.name 
    end 
    if artwork.availability  === true 
        return "Available"
    else 
        return "Not Available"
    end 

    json.price artwork.price 

end 