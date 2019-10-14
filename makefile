cat templates/header.html >| output/3-InfiniteLoops/index.html
markdown_py source/3-InfiniteLoops/Readme.md >> output/3-InfiniteLoops/index.html
cat templates/footer.html >> output/3-InfiniteLoops/index.html

cp source/3-InfiniteLoops/*.png output/3-InfiniteLoops/
