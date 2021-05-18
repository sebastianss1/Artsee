# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Gallery.destroy_all
Artist.destroy_all
Artwork.destroy_all

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
rashidJohnson = Artist.create!(name: "Rashid Johnson", birth_year:"1977", gallery_id: hauserWirth.id, bio: "Rashid Johnson (born 1977) is an American artist who produces conceptual post-black art.")
cindySherman = Artist.create!(name: "Cindy Sherman", birth_year:"1954", gallery_id: metroPictures.id, bio: "Cindy (born January 19, 1954) is an American artist whose work consists primarily of photographic self-portraits, depicting herself in many different contexts and as various imagined characters.")
robertLongo = Artist.create!(name: "Robert Longo", birth_year:"1953", gallery_id: metroPictures.id, bio: "Robert Longo is a Pictures Generation American artist, filmmaker, photographer and musician. Longo became first well known in the 1980s for his Men in the Cities drawing and print series, which depict sharply dressed men and women writhing in contorted emotion")
jamesTurrell = Artist.create!(name: "James Turrell", birth_year:"1943", gallery_id: paceGallery.id, bio: "James Turrell (born May 6, 1943) is an American artist known for his work within the Light and Space movement.")
donaldJudd = Artist.create!(name: "Donald Judd", birth_year:"1928", death_year: "1994", gallery_id: davidZwirner.id, bio: "Donald Clarence Judd was an American artist associated with minimalism. In his work, Judd sought autonomy and clarity for the constructed object and the space created by it, ultimately achieving a rigorously democratic presentation without compositional hierarchy.")
judyChicago = Artist.create!(name: "Judy Chicago", birth_year:"1939", gallery_id: salon94.id, bio: "Judy Chicago is an American feminist artist, art educator, and writer known for her large collaborative art installation pieces about birth and creation images, which examine the role of women in history and culture.")
luciaHierro = Artist.create!(name: "Lucia Hierro", birth_year:"1987", gallery_id: charlieJamesGallery.id, bio: "Lucia Hierro (b. 1987) is a Dominican American conceptual artist born and raised in New York City, Washington Heights/Inwood, and currently based in the South Bronx. Lucia’s practice, which includes sculpture, digital media and installation, confronts twenty-first century capitalism through an intersectional lens.")
sadieBarnette = Artist.create!(name: "Sadie Barnette", birth_year:"1984", gallery_id: charlieJamesGallery.id, bio: "Sadie Barnette is an American artist who works primarily with drawing, photography, and large-scale installation. Her work explores black life, personal histories, and the political through material explorations. She currently lives and works in Oakland, California.")
katieStout = Artist.create!(name: "Katie Stout", birth_year:"1989", gallery_id: rAndCompany.id, bio: "Brooklyn based designer Katie Stout (b. 1989) describes her work as “naïve pop,” a caricaturization of furniture as it is traditionally understood and of the motifs of suburban domestic life.  She utilizes a diverse range of media and often unexpected techniques. Her expansive body of work includes lighting, seating, shelving, mirrors, carpets and curtains.")
theHaasBrothers = Artist.create!(name: "The Haas Brothers", birth_year:"1984", gallery_id: rAndCompany.id, bio: "The Haas Brothers are American artists, noted for their sculptural works that blur the line between art and design. They currently work in Los Angeles, California")
markYang = Artist.create!(name: "Mark Yang", birth_year:"1994", gallery_id: steveTurner.id, bio: "Mark Yang creates paintings that incorporate formal concerns relating to color, line and composition while addressing his identity as an immigrant, a Korean-American and a man. In general, his works depict nude Asian men wrestling. In depicting nude male bodies in close proximity–wrestling, grappling and contorting–Yang aims to convey an aspect of male intimacy that is more common in Korean culture than in American culture.")
williamBrickel = Artist.create!(name: "William Brickel", birth_year:"1994", gallery_id: kohnGallery.id, bio: "William Brickel’s paintings explore how memories of past experiences become embellished through the act of recollection. His domestic compositions depict fig`ures folded and intertwined, as if obeying a harmonic ideal. The characters, however, seem curiously detached, distracted eyes indicating they are enveloped not by each other but by their own thoughts.")


#Mediums
painting = Medium.create!(name: "Painting")
mixed = Medium.create!(name: "Mixed")
drawing = Medium.create!(name: "Drawing")
printEdition = Medium.create!(name: "Print")
ceramic = Medium.create!(name: "Ceramic")
photograph = Medium.create!(name: "Photograph")
installation = Medium.create!(name: "Installation")
sculpture = Medium.create!(name: "Sculpture")


#Artworks
anxiousMenRed = Artwork.create!(title: "Untitled Anxious Red Drawing", year: "2020", artist_id: rashidJohnson.id,  description: "oil on cotton rag", height_dimensions: 38.25, width_dimensions: 50, medium_id: painting.id, availability: true, price: "$200,000", condition: "New", signature: "Signed on the reverse", certificate_of_authenticity: true)

anxiousMenRed.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/1.jpeg"), filename: "1.jpeg")


anxiousAudience = Artwork.create!(title: "Untitled Anxious Audience", year: "2017", artist_id: rashidJohnson.id,  description: "White ceramic tiles, black soap and wax", height_dimensions: 73, width_dimensions: 94.6 , medium_id: mixed.id, availability: true, price: "Sold", condition: "New", signature: "N/A", certificate_of_authenticity: true)

anxiousAudience.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/2.jpeg"), filename: "2.jpeg")

untitledFilmStill = Artwork.create!(title: "Untitled Film Still #21", year: "1977", artist_id: cindySherman.id,  description: "Gelatin Silver Print", height_dimensions: 8, width_dimensions: 10 , medium_id: photograph.id, availability: true, price: "Sold", condition: "New", signature: "N/A", certificate_of_authenticity: true)

untitledFilmStill.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/3.jpeg"), filename: "3.jpeg")

untitledMarilyn = Artwork.create!(title: "Untitled Marilyn", year: "1982", artist_id: cindySherman.id,  description: "Chromogenic color print", height_dimensions: 15.5, width_dimensions: 9 , medium_id: photograph.id, availability: true, price: "Sold", condition: "New", signature: "N/A", certificate_of_authenticity: true)

untitledMarilyn.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/4.jpeg"), filename: "4.jpeg")

menInTheCities = Artwork.create!(title: "Untitled, from the Series 'Men in the Cities'", year: "1980", artist_id: robertLongo.id,  description: "Charcoal and Graphite on Paper", height_dimensions: 96, width_dimensions: 60 , medium_id: drawing.id, availability: true, price: "$300,000", condition: "New", signature: "N/A", certificate_of_authenticity: true)

menInTheCities.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/5.jpeg"), filename: "5.jpeg")


untitledCindyMenInTheCities = Artwork.create!(title: "Untitled (Cindy), from the Series 'Men in the Cities'", year: "1981", artist_id: robertLongo.id,  description: "Charcoal and Graphite on Paper", height_dimensions: 96, width_dimensions: 48 , medium_id: drawing.id, availability: true, price: "Sold", condition: "Excellent", signature: "N/A", certificate_of_authenticity: true)

untitledCindyMenInTheCities.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/6.jpeg"), filename: "6.jpeg")


mediumGlassCircle = Artwork.create!(title: "Medium Glass Circle", year: "2017", artist_id: jamesTurrell.id,  description: "L.E.D. light, etched glass and shallow space", height_dimensions: 56, width_dimensions: 56 , medium_id: installation.id, availability: true, price: "Sold", condition: "New", signature: "N/A", certificate_of_authenticity: true)

mediumGlassCircle.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/7.jpeg"), filename: "7.jpeg")


raethroGreen = Artwork.create!(title: "Raethro Green", year: "1968", artist_id: jamesTurrell.id,  description: "MRI wire projector; room size- variable", height_dimensions: 40, width_dimensions: 40 , medium_id: installation.id, availability: true, price: "Sold", condition: "Good", signature: "N/A", certificate_of_authenticity: true)

raethroGreen.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/8.jpeg"), filename: "8.jpeg")


juddUntitled = Artwork.create!(title: "Untitled, 1967", year: "1967", artist_id: donaldJudd.id,  description: "Lacquer on galvanized iron", height_dimensions: 81, width_dimensions: 40 , medium_id: sculpture.id, availability: true, price: "Not For Sale", condition: "Good", signature: "N/A", certificate_of_authenticity: true)

juddUntitled.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/9.jpeg"), filename: "9.jpeg")


juddUntitled73 = Artwork.create!(title: "Untitled, 1973", year: "1973", artist_id: donaldJudd.id,  description: "Brass and Blue Plexiglas", height_dimensions: 33, width_dimensions: 68 , medium_id: sculpture.id, availability: true, price: "Not For Sale", condition: "Excellent", signature: "N/A", certificate_of_authenticity: true)

juddUntitled73.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/10.jpeg"), filename: "10.jpeg")


judyAtmosphere = Artwork.create!(title: "Purple Atmosphere, 1969, Santa Barbara, CA", year: "2018", artist_id: judyChicago.id,  description: "Archival pigment print on paper", height_dimensions: 30, width_dimensions: 40 , medium_id: printEdition.id, availability: true, price: "$40,000", condition: "New", signature: "N/A", certificate_of_authenticity: true)

judyAtmosphere.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/11.jpeg"), filename: "11.jpeg")


theDinnerParty = Artwork.create!(title: "The Dinner Party", year: "1974", artist_id: judyChicago.id,  description: "Ceramic, porcelain, textile", height_dimensions: 576, width_dimensions: 576 , medium_id: mixed.id, availability: true, price: "Not for Sale", condition: "New", signature: "N/A", certificate_of_authenticity: true)

theDinnerParty.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/12.jpg"), filename: "12.jpg")


portraitOfCasey = Artwork.create!(title: "Portrait of Casey as a Young Man", year: "2020", artist_id: luciaHierro.id,  description: "felt, foam,  Digital print on brushed suede", height_dimensions: 22, width_dimensions: 22 , medium_id: mixed.id, availability: true, price: "Not for Sale", condition: "New", signature: "N/A", certificate_of_authenticity: true)

portraitOfCasey.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/13.jpeg"), filename: "13.jpeg")


deTodoUnPoco = Artwork.create!(title: "De Todo Un Poco", year: "2017", artist_id: luciaHierro.id,  description: "PolyOrganza, felt, digital print on brushed nylon", height_dimensions: 67, width_dimensions: 60 , medium_id: mixed.id, availability: true, price: "Not for Sale", condition: "New", signature: "N/A", certificate_of_authenticity: true)

deTodoUnPoco.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/14.jpeg"), filename: "14.jpeg")


observation = Artwork.create!(title: "Observation", year: "2017", artist_id: sadieBarnette.id,  description: "Archival pigment print", height_dimensions: 24, width_dimensions: 18 , medium_id: printEdition.id, availability: true, price: "Not for Sale", condition: "New", signature: "N/A", certificate_of_authenticity: true)

observation.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/15.jpeg"), filename: "15.jpeg")


dear1968 = Artwork.create!(title: "Untitled (Black 1968)", year: "2017", artist_id: sadieBarnette.id,  description: "Pencil on Paper", height_dimensions: 38, width_dimensions: 50 , medium_id: drawing.id, availability: true, price: "$25,000", condition: "New", signature: "N/A", certificate_of_authenticity: true)

dear1968.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/16.jpg"), filename: "16.jpg")


usa = Artwork.create!(title: "USA", year: "2019", artist_id: katieStout.id,  description: "Unique vase in hand-painted and glazed Augarten porcelain with gold leaf details", height_dimensions: 24, width_dimensions: 12 , medium_id: ceramic.id, availability: true, price: "Not for Sale", condition: "New", signature: "N/A", certificate_of_authenticity: true)

usa.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/17.jpeg"), filename: "17.jpeg")


horseLadyLamp = Artwork.create!(title: "Horse Lady Lamp", year: "2020", artist_id: katieStout.id,  description: "Ceramic, paint, glaze, and gold luster", height_dimensions: 24, width_dimensions: 12 , medium_id: ceramic.id, availability: true, price: "$20,000", condition: "New", signature: "N/A", certificate_of_authenticity: true)

horseLadyLamp.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/18.jpeg"), filename: "18.jpeg")


jorgeBowl = Artwork.create!(title: "Jorge Bowl", year: "2020", artist_id: theHaasBrothers.id,  description: "Unique 'Jorge' bowl in cast bronze", height_dimensions: 1.25, width_dimensions: 4.75 , medium_id: sculpture.id, availability: true, price: "Not for Sale", condition: "New", signature: "N/A", certificate_of_authenticity: true)

jorgeBowl.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/19.jpeg"), filename: "19.jpeg")


wetWilly = Artwork.create!(title: "Wet Willy", year: "2019", artist_id: theHaasBrothers.id,  description: "Sheepskin, cast bronze, hand-carved ebony", height_dimensions: 10.5, width_dimensions: 10 , medium_id: sculpture.id, availability: true, price: "Not for Sale", condition: "New", signature: "N/A", certificate_of_authenticity: true)

wetWilly.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/20.jpeg"), filename: "20.jpeg")

waistRoll = Artwork.create!(title: "Waist Roll", year: "2020", artist_id: markYang.id,  description: "Oil on Canvas", height_dimensions: 20.25, width_dimensions: 18.5 , medium_id: painting.id, availability: true, price: "Not for Sale", condition: "New", signature: "N/A", certificate_of_authenticity: true)

waistRoll.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/21.jpeg"), filename: "21.jpeg")


untitledMark = Artwork.create!(title: "Untitled, 2021", year: "2021", artist_id: markYang.id,  description: "Oil on canvas", height_dimensions: 62.5, width_dimensions: 77.5 , medium_id: painting.id, availability: true, price: "10,000", condition: "New", signature: "N/A", certificate_of_authenticity: true)

untitledMark.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/22.jpeg"), filename: "22.jpeg")


canWeStopNow = Artwork.create!(title: "Can We Stop Now", year: "2020", artist_id: williamBrickel.id,  description: "Watercolour on cotton paper", height_dimensions: 61, width_dimensions: 48 , medium_id: painting.id, availability: true, price: "12,000", condition: "New", signature: "N/A", certificate_of_authenticity: true)

canWeStopNow.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/23.jpeg"), filename: "23.jpeg")


manLyingDown = Artwork.create!(title: "Man Lying Down", year: "2019", artist_id: williamBrickel.id,  description: "Watercolour on paper", height_dimensions: 55, width_dimensions: 60 , medium_id: painting.id, availability: true, price: "Not for Sale", condition: "New", signature: "N/A", certificate_of_authenticity: true)

manLyingDown.photo.attach(io: File.open("/Users/sebastiansanchez/Desktop/AppAcademy/Full\ Stack\ Project/artworkimages/24.jpeg"), filename: "24.jpeg")







