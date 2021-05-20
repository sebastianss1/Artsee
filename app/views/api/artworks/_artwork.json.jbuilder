json.extract! artwork, :id, :title, :year, :description, :height_dimensions, :width_dimensions, :availability, :price, :medium_id, :artist_id
json.photoUrl url_for(artwork.photo)


