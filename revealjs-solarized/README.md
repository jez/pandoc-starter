# revealjs-solarized

These starter files can be used to generate an opinionated
[Reveal.js](https://revealjs.com/#/) slide deck.

## Dependencies

There are no other dependencies other than [Pandoc]. Optional functionality to
watch the file system and rebuild on changes requires [Watchman]. Optional
functionality to serve and preview the files locally uses [Python 3].

- [Pandoc], a universal document converter
- [Watchman], a file watching service
- [Python 3], for `http.server`

[Pandoc]: http://pandoc.org/
[Watchman]: https://facebook.github.io/watchman/
[Python 3]: https://docs.python.org/3/library/http.server.html

Installation instructions vary depending on your system. See the linked websites
for more information.

## Usage

1. Copy these starter files wherever you'd like.
1. Write your content in `index.md`
    - Be sure to adjust the information like the `title` and `author` at the top
      of the file
    - Start a new slide with `#`
1. Read the [Makefile's documentation][Makefile].

The sample presentation is already built to HTML. Run `python -m http.server` to
preview it locally.

In true Solarized fashion, this template supports both **light** and **dark**.
The default is light. To switch to the dark theme, click the title on the
title slide. The presentation writes the most recent preference into local
storage, so even if you refresh it will be saved.

[Makefile]: src/Makefile

## License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://jez.io/MIT-LICENSE.txt)
