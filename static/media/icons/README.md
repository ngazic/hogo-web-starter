# Instructions to extract icons from packages

Designers will prepare icons package(s) in zip files.

## 1. Copy files

- `icomoon-color-mono-and-gradient-X.zip` and
- `icomoon-color-multi-X.zip`

to root of this folder. NOTE: `X` stands here just for the instructions purpose, it indicates number of icons in package and it should be handled by designer. This way we can track number of icons better when packages get updated.

## 2. Extract SVG folder with its content (from each zip file) and copy content to

- `svg-color-mono-and-gradient` and
- `svg-color-multi`

folders. You can reference to these files in case you can not use them by icon macro - meaning direct reference to a file, e.g. `src="/static/media/icons/svg-color-mono-and-gradient/facebook.svg`. But if you can, always use macro - this way you can change size (or color) through CSS properties.

## 3. Extract symbol definition files (from each zip file)

- `symbol-defs-color-mono-and-gradient.svg` and
- `symbol-defs-color-multi.svg`

to root of this folder.

CAUTION: Please do not extract whole icon packages content and add them to repo, only use SVG folders and symbol definition files (as stated at points 2. and 3.).
