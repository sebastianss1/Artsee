json.artist do 
    json.extract! @artist, :id, :name, :birth_year, :death_year, :bio, :gallery_id
end 

json.gallery do 
    json.extract! @artist.gallery, :id, :name
end 

json.artworks @artist.artworks




# json.extract! @artist
#     json.id @artist.id
#     json.name @artist.name 
#     json.birth_year @artist.birth_year 
#     json.death_year @artist.death_year 
#     json.bio @artist.bio
#     json.gallery do 
#         json.name @artist.gallery.name 
#     end 

#     json.artworks @artist.artworks.each do |artwork|
#         json.extract! artwork
#             json.id artwork.id
#             json.title artwork.title
#             json.year artwork.year

#     end

