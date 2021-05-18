json.extract! artist, :id, :name, :birth_year, :death_year, :bio 

    json.gallery do 
        json.name artist.gallery.name 
    end 

    json.photoUrl url_for(artist.photo)


