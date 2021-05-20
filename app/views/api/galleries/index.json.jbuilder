@galleries.each do |gallery|
        json.set! gallery.id do
             json.partial! 'api/galleries/gallery', gallery: gallery 
        end 
end 
