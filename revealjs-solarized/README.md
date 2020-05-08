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
1. Run `make watch` to build the site and watch for changes.

   The sample presentation is already built. If you just want to preview it and
   don't want to install Watchman, run `python -m http.server` in `src/`.

1. View the presentation at <http://127.0.0.1:8000>.

   If you just want to see a live example without first cloning this repo:
   <https://jez.io/talks/slides/revealjs-solarized/#/title-slide>

Read the [Makefile's documentation][Makefile] for more commands.

[Makefile]: src/Makefile

To use speaker notes, you **must** either serve the presentation from HTTPS or
use the loopback address, i.e., <http://127.0.0.1:8000>. [Read more about why
and alternatives here][https].

[https]: https://letsencrypt.org/docs/certificates-for-localhost/

In true Solarized fashion, this template supports both **light** and **dark**.
The default is light. To switch to the dark theme, click the title on the
title slide. The presentation writes the most recent preference into local
storage, so even if you refresh it will be saved.

You can generate a PDF from your slides (in Chrome) by tacking `?print-pdf` onto
the URL and using the browser's print diaglog:

- <http://127.0.0.1:8000/?print-pdf>

Note the query string must come **before** the `#slide-number`.

## License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://jez.io/MIT-LICENSE.txt)
