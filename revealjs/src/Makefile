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

index.html: index.md
	pandoc -t revealjs --standalone -o $@ $<

.PHONY: clean
clean:
	rm -f index.html

.PHONY: watch
watch: index.html serve.sh
	./serve.sh --watch
