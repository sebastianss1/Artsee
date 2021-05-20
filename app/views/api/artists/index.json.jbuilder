@artists.each do |artist|
    json.artists do 
        json.set! artist.id do
            json.partial! 'api/artists/artist', artist: artist 
        end 
    end 

    json.gallery do 
        json.set! artist.gallery.id do 
            json.partial! 'api/galleries/gallery', gallery: artist.gallery
        end 
    end 
end 