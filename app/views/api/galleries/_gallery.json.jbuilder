json.extract! gallery, :id, :name, :location

json.photoUrl url_for(gallery.photo)
