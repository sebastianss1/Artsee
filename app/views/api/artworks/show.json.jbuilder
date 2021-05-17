json.extract! @artwork 
    json.id @artwork.id
    json.title @artwork.title
    json.year @artwork.year 
    json.artist do 
        json.name @artwork.artist.name 
    end 
    json.description @artwork.description 
    json.height_dimensions @artwork.height_dimensions
    json.width_dimensions @artwork.width_dimensions
    json.medium do 
        json.name @artwork.medium.name 
    end 
    json.availability @artwork.availability
    json.price @artwork.price 

json.photoUrl url_for(@artwork.photo)



