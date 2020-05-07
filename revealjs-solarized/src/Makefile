#
# Author: Jake Zimmerman <jake@zimmerman.io>
#
# ===== Usage ================================================================
#
# make                  Compile index.html to a Beamer.js presentation
#
# make watch            Start a local HTTP server and rebuild on changes
# PORT=4242 make watch  Like above, but use port 4242
#
# make clean            Delete all generated files
#
# ============================================================================

# Need to use a custom template because Reveal.js has added options Pandoc doesn't yet know about.
# TODO(jez) https://github.com/jgm/pandoc/pull/6347
index.html: index.md solarized.theme
	pandoc --highlight-style solarized.theme -t revealjs --standalone --template=./default.revealjs -o $@ $<

.PHONY: clean
clean:
	rm -f index.html

.PHONY: watch
watch: index.html serve.sh
	./serve.sh --watch
