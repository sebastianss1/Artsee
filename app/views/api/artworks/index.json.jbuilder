@artworks.each do |artwork|
    json.artworks do 
        json.set! artwork.id do
             json.partial! 'api/artworks/artwork', artwork: artwork 
        end 
    end 

    json.artist do 
        json.set! artwork.artist.id do 
            json.partial! 'api/artists/artist', artist: artwork.artist 
        end 
    end 

    json.gallery do 
        json.set! artwork.artist.gallery.id do 
            json.extract! artwork.artist.gallery, :id, :name
        end 
    end
            
end 