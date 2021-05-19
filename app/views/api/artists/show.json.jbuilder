json.extract! @artist
    json.id @artist.id
    json.name @artist.name 
    json.birth_year @artist.birth_year 
    json.death_year @artist.death_year 
    json.bio @artist.bio
    json.gallery do 
        json.name @artist.gallery.name 
    end 

    json.artworks @artist.artworks.each do |artwork|
        json.extract! artwork
            json.id artwork.id
            json.title artwork.title
            json.year artwork.year
            json.photoUrl url_for(artwork.photo)
    end

