#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = '.'
SITENAME = 'Aesthetic Programming'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

#PAGE_PATHS = ['../source']
STATIC_PATHS = ['content']
TYPOGRIFY = True
THEME = 'theme/aesthetic-programming'

PAGE_ORDER_BY = 'Order'

PLUGIN_PATHS = ['plugins']
PLUGINS = ['page_order', 'attach_images']

DISPLAY_PAGES_ON_MENU = False

MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.codehilite': {'css_class': 'highlight', 'linenums': "True"},
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {},
        'mdx_figcaption': {}
    },
    'output_format': 'html5',
}
