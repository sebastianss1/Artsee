json.array! @artworks do 
  json.extract! @artwork, :id, :title, :year, :artist_id, :description, :height_dimensions, :width-dimensions, :medium_id, :availability, :price
end


json.photo do 
  @artwork.photo do 
        json.extract! photo
    end
  end
end


