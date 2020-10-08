# Sodelovalnica

# Install

If you don't already have [Hugo](https://gohugo.io) installed, please go to [releases](https://github.com/gohugoio/hugo/releases) page and download the latest hugo extended for your operating system..

Also you need to install normalize, etc. via
``` bash
npm i
```

In addition you need support for Git LFS on your machine.

## Git LFS TLDR

Firstly, you can clone this without LFS (if you're in a hurry):

```bash
GIT_LFS_SKIP_SMUDGE=1 git clone https://github.com/renderspace/sodelovalnica.git
```

Make sure that you have modern git.

``` bash
git lfs version
```

Install netlify-cli
``` bash
npm install netlify-cli -g

# opt out of sharing usage data
netlify --telemetry-disable

```

Make sure your computer is linked with appropriate netlify account
```bash
# if not logged in
netlify login

netlify status
```

Install netlify LFS plugin

```bash
netlify plugins:install netlify-lm-plugin
netlify lm:install
```

## Windows

In my case that was [Windows 64-bit](https://github.com/gohugoio/hugo/releases/download/v0.74.3/hugo_extended_0.74.3_Windows-64bit.zip). Then unzip it to *C:\Program Files\Hugo* and add it to *PATH*.

# Development

Run development:

``` bash
hugo server
```
or
``` bash
npm run dev
```

Add new static page from lore ipsum template:

```
hugo new newpage.md -k lore
```

# Random links

- [Building a hugo site with nice debug footer](https://willschenk.com/articles/2018/building-a-hugo-site/)
- [walktrough](https://zwbetz.com/make-a-hugo-blog-from-scratch/)

# Specification

## 27.7.2020

Homepage: https://invis.io/XAY5VP8FUJQ (to so že potrdili)
Homepage mobile: https://invis.io/KXY705HDUFG

O projektu: https://invis.io/4GY705NPFBT

Natečaj Mega: https://invis.io/GTY705UNEDY
Natečaj Mega (opcija 2): https://invis.io/NGY706CXD7M

Razcepna stran: https://invis.io/49Y5VS9KEB5
Razcepna stran mobile: https://invis.io/JAY707GY9F4

Članek: https://invis.io/37Y5VV3K8BF
Članek mobile: https://invis.io/58Y7083ZS2Y

## TODO

- [x] og image default ali image; og:url
- [x] description
- [ ] coming soon
- [ ] hide lang, search, kako zmagujem skrijemo. iz homea
- [ ] delavnice ostanejo, ampak je coming soon
- [ ] komentar poglej sort na novicah
- [x] domena ready
- [x] 404
- [ ] ce je 0 novic: coming soon
- [x] breadcrumbs
- [x] bodyClass
- [x] /o-projektu/ ne nastavi active na menuju
- [ ] default title, description - site wide

