from pelican import signals

def attach_images (page_generator):
  print(dir(page_generator))

def register():
  signals.page_generator_preread.connect(attach_images)