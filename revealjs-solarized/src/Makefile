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
# make build.zip        Zip up all the files that would be required to serve
#                       a standalone presentation. (i.e., you probably don't
#                       want to deploy the Makefile or serve.sh script to your
#                       web host)
#
# make clean            Delete all generated files
#
# ============================================================================

index.html: index.md solarized.theme default.revealjs
	pandoc --highlight-style solarized.theme -t revealjs --standalone --template=./default.revealjs -o $@ $<

build.zip: index.html $(wildcard css/*.css) $(wildcard js/*.js)
	zip -r $@ $^

# Need to use a custom template because we want to patch the template slightly,
# but not completely fork it (improvements should still be submitted upstream).
default.revealjs:
	curl -O https://raw.githubusercontent.com/jgm/pandoc/master/data/templates/default.revealjs && \
		sed -i.bak -e '/css\/theme\/black.css/d' $@ && \
		rm -f $@.bak

.PHONY: clean
clean:
	rm -f index.html

.PHONY: watch
watch: index.html serve.sh
	./serve.sh
