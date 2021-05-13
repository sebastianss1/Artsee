# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Artist.destroy_all
Artwork.destroy_all
Gallery.destroy_all

# Users
demoUser = User.create!(email: 'test@gmail.com', password: 'test1234', name: 'Demo User', reason_for_using: 'learn about art')

# Galleries
hauserWirth = Gallery.create!(name: "Hauser & Wirth", location: "New York, Los Angeles, London", about: "The gallery represents over 80 artists and estates who have been instrumental in shaping its identity over the past quarter century, and who are the inspiration for Hauser & Wirth’s diverse range of activities that engage with art, education, conservation and sustainability." )
metroPictures = Gallery.create!(name: "Metro Pictures", location: "New York")
paceGallery = Gallery.create!(name: "Pace Gallery", location: "New York, London, Hong Kong", about: "Pace is a leading international art gallery representing some of the most influential contemporary artists and estates from the past century, holding decades-long relationships with Alexander Calder, Jean Dubuffet, Barbara Hepworth, Agnes Martin, Louise Nevelson, and Mark Rothko.")
davidZwirner = Gallery.create!(name: "David Zwirner", location: "New York, London, Paris, Hong Kong")
salon94 = Gallery.create!(name: "Salon 94", location: "New York")
charlieJamesGallery = Gallery.create!(name: "Charlie James Gallery", location: "Los Angeles")
rAndCompany = Gallery.create!(name: "R & Company", location: "New York")
steveTurner = Gallery.create!(name:"Steve Turner Gallery", location: "Los Angeles")
kohnGallery = Gallery.create!(name: "Kohn Gallery", location: "Los Angeles" )

#Artists
rashidJohnson = Artist.create!(name: "Rashid Johnson", birth_year:"1977", gallery_id: 1, bio: "Rashid Johnson (born 1977) is an American artist who produces conceptual post-black art.")
cindySherman = Artist.create!(name: "Cindy Sherman", birth_year:"1954", gallery_id: 2, bio: "Cindy (born January 19, 1954) is an American artist whose work consists primarily of photographic self-portraits, depicting herself in many different contexts and as various imagined characters.")
robertLongo = Artist.create!(name: "Robert Longo", birth_year:"1953", gallery_id: 2, bio: "Robert Longo is a Pictures Generation American artist, filmmaker, photographer and musician. Longo became first well known in the 1980s for his Men in the Cities drawing and print series, which depict sharply dressed men and women writhing in contorted emotion")
jamesTurrell = Artist.create!(name: "James Turrell", birth_year:"1943", gallery_id: 3, bio: "James Turrell (born May 6, 1943) is an American artist known for his work within the Light and Space movement.")
donaldJudd = Artist.create!(name: "Donald Judd", birth_year:"1928", death_year: "1994", gallery_id: 4, bio: "Donald Clarence Judd was an American artist associated with minimalism. In his work, Judd sought autonomy and clarity for the constructed object and the space created by it, ultimately achieving a rigorously democratic presentation without compositional hierarchy.")
judyChicago = Artist.create!(name: "Judy Chicago", birth_year:"1939", gallery_id: 5, bio: "Judy Chicago is an American feminist artist, art educator, and writer known for her large collaborative art installation pieces about birth and creation images, which examine the role of women in history and culture.")
# luciaHierro = Artist.create!(name: "Lucia Hierro", birth_year:"1987", gallery_id: 6, bio: "Lucia Hierro (b. 1987) is a Dominican American conceptual artist born and raised in New York City, Washington Heights/Inwood, and currently based in the South Bronx. Lucia’s practice, which includes sculpture, digital media and installation, confronts twenty-first century capitalism through an intersectional lens.")
sadieBarnette = Artist.create!(name: "Sadie Barnette", birth_year:"1984", gallery_id: 6, bio: "Sadie Barnette is an American artist who works primarily with drawing, photography, and large-scale installation. Her work explores black life, personal histories, and the political through material explorations. She currently lives and works in Oakland, California.")
katieStout = Artist.create!(name: "Katie Stout", birth_year:"1989", gallery_id: 7, bio: "Brooklyn based designer Katie Stout (b. 1989) describes her work as “naïve pop,” a caricaturization of furniture as it is traditionally understood and of the motifs of suburban domestic life.  She utilizes a diverse range of media and often unexpected techniques. Her expansive body of work includes lighting, seating, shelving, mirrors, carpets and curtains.")
katieStout = Artist.create!(name: "The Haas Brothers", birth_year:"1984", gallery_id: 7, bio: "The Haas Brothers are American artists, noted for their sculptural works that blur the line between art and design. They currently work in Los Angeles, California")
markYang = Artist.create!(name: "Mark Yang", birth_year:"1994", gallery_id: 8, bio: "Mark Yang creates paintings that incorporate formal concerns relating to color, line and composition while addressing his identity as an immigrant, a Korean-American and a man. In general, his works depict nude Asian men wrestling. In depicting nude male bodies in close proximity–wrestling, grappling and contorting–Yang aims to convey an aspect of male intimacy that is more common in Korean culture than in American culture.")
williamBrickel = Artist.create!(name: "William Brickel", birth_year:"1994", gallery_id: 9, bio: "William Brickel’s paintings explore how memories of past experiences become embellished through the act of recollection. His domestic compositions depict figures folded and intertwined, as if obeying a harmonic ideal. The characters, however, seem curiously detached, distracted eyes indicating they are enveloped not by each other but by their own thoughts.")






#Mediums

painting = Medium.create!(name: "Painting")
mixed = Medium.create!(name: "Mixed")
drawing = Medium.create!(name: "Drawing")
printEdition = Medium.create!(name: "Print")
ceramic = Medium.create!(name: "Ceramic")

#Artworks

anxiousMenRed = Artwork.create!(title: "Untitled Anxious Red Drawing", year: "2020", artist_id: 1,  description: "oil on cotton rag", height_dimensions: 38.25, width_dimensions: 50, medium_id: 1, availability: true, price: "$200,000", condition: "New", signature: "Signed on the reverse", certificate_of_authenticity: true)
anxiousAudience = Artwork.create!(title: "Untitled Anxious Audience", year: "2017", artist_id: 1,  description: "White ceramic tiles, black soap and wax", height_dimensions: 73, width_dimensions: 94.6 , medium_id: 2, availability: true, price: "Sold", condition: "New", signature: "N/A", certificate_of_authenticity: true)


