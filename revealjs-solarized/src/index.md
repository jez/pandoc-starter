---
title: 'My Title'
author: 'Jake Zimmerman (**`@jez`**)'
date: 'May 5, 2020'

revealjs-url: 'https://revealjs.com'

# This theme doesn't actually exist, but the pandoc template
# defaults to black.css if no theme is given. We have our
# own theme that's not in the Reveal.js distribution, so we
# pretend that empty.css exists. The browser will attempt to
# fetch this and fail, and it will be like there was no
# theme.
#
# TODO(jez) https://github.com/jgm/pandoc/pull/6342
theme: empty

css:
- 'solarized.css'

# See `pandoc -D revealjs` to see more options to the revealjs template.

# These are all strings because they'll be interpolated into
# JS and then become JS values.
progress: 'true'
controlsTutorial: 'false'
history: 'true'
hideAddressBar: 'true'
hideInactiveCursor: 'false'
# The template auto-wraps this one in quotes
transition: 'none'
# This is a quoted string: needs to still have quotes when
# it's interpolated into JS. It's also escaped so that
# pandoc doesn't turn them into curly quotes.
slideNumber: '\"c/t\"'

include-after:
- '<script src="toggle-theme.js"></script>'
---

## Using Reveal.js

- If there are sections, slides within a section go down.
- If there are no sections, slides go across.
- Press **`Space`** to advance to next slide if available,
  or next section if at the end of a section.

# Section Title

## First Slide

- Bullets
    - subitem

## Slide Title

```python
# This does a thing
def foo():
    return 'bar'
```

# Another section

## Third slide

Supports emoji! 🚀

<!-- vim:tw=60
-->
