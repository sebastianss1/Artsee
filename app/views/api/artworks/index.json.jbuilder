json.array! @artworks do |artwork|
    json.extract! artwork, :id, :title, :year, :artist_id, :description, :height_dimensions, :width_dimensions, :medium_id, :availability, :price
    debugger
    json.photoUrl url_for(artwork.photo)
end 