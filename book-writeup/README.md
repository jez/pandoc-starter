# book-writeup

Sometimes what you have to write up would benefit from being divided into
chapters, as opposed to just top level headings. When this is the case, you
might want to use Pandoc to format your document into a simple book like this.

## Dependencies

There are a number of build dependencies for these starter files:

- [Pandoc], a universal document converter
- [LaTeX], a document preparation system
- _Optional_: The font Menlo

[Pandoc]: http://pandoc.org/
[LaTeX]: https://www.latex-project.org/

Installation instructions vary depending on your system. See the linked websites
for more information.

## Usage

1. Copy these starter files wherever you'd like.
1. Adjust the metadata like title and author in `00-meta.md`
1. Make some chapters
    - Each chapter is just a Markdown file in `chapters/` with the
      name `XX-<filename>.md`
    - The `XX` is just a number so that chapters are loaded in order. They don't
      have to be sequential
    - The `<filename>` can be anything. It doesn't correspond to a chapter
      title.
1. Edit the `TARGET` variable at the top of the [Makefile] to be `<filename>`
    - This will be the filename of your generated PDF.
    - Don't put the `.pdf` suffix in this variable
1. Write your content in `<filename>.md`
    - Be sure to adjust the information like the `title` and `author` at the top
      of the file
1. Read the [Makefile's documentation][Makefile].


[Makefile]: src/Makefile

## License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://jez.io/MIT-LICENSE.txt)
