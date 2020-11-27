#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
import sys, os
sys.path.append(os.curdir)
from attach_images import PelicanAttachImage
from indexed_words import IndexedWordsExtension

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
PLUGINS = ['page_order', 'elevate_img_class_to_figure' ]

DISPLAY_PAGES_ON_MENU = False

MARKDOWN = {
    'extension_configs': {
        # 'markdown.extensions.codehilite': {'css_class': 'highlight', 'linenums': "True"},
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {},
        'markdown.extensions.toc': {},
        'mdx_figcaption': {},
        'attach_images': {},
        #'indexed_words': {},
    },
    'output_format': 'html5',
}

DEFAULT_METADATA = {
    'p5': 'p5_SampleCode/libraries/p5.js'
}
