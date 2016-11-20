#
# Author: Jake Zimmerman <jake@zimmerman.io>
#
# ===== Usage ================================================================
#
# NOTE:
#   When running these commands at the command line, replace $(TARGET) with
#   the actual value of the TARGET variable.
#
#
# Compile all *.md files to PDFs:
#
#     make
#
# Compile <filename>.md to a PDF:
#
#     make <filename>.pdf
#
# Compile the LaTeX that Pandoc uses to generate a PDF for <filename>.md:
#
#     make <filename>.tex
#
# Compile <filename>.tex to a PDF:
#
#     Not supported. Look up the documentation for `pdflatex`
#
# Compile $(TARGET).md to a PDF, then view the compiled PDF:
#
#     make view
#
# Force everything to recompile:
#
#     make again
#
# Get rid of all intermediate generated files:
#
#     make clean
#
# Get rid of ALL generated files:
#
#     make veryclean
#
# Copy $(TARGET).pdf to the parent directory (sometimes useful):
#
#     make submit
#
# Send $(TARGET).pdf to the default printer:
#
#     make print
#
# ============================================================================

TARGET=sample


PANDOC_FLAGS =\
	-f markdown+tex_math_single_backslash \
	-t beamer \

LATEX_FLAGS = \
	--latex-engine=xelatex

all: $(patsubst %.md,%.pdf,$(wildcard *.md))

# Generalized rule: how to build a .pdf from each .md
%.pdf: %.md pandoc-solarized.sty beamer-includes.tex
	pandoc $(PANDOC_FLAGS) $(LATEX_FLAGS) -o $@ $<

# Generalized rule: how to build a .tex from each .md
%.tex: %.md pandoc-solarized.sty beamer-includes.tex
	pandoc --standalone $(PANDOC_FLAGS) -o $@ $<

touch:
	touch *.md

again: touch all

clean:
	rm -f *.aux *.log *.nav *.out *.snm *.toc *.vrb || true

veryclean: clean
	rm -f *.pdf

view: $(TARGET).pdf
	if [ "Darwin" = "$(shell uname)" ]; then open $(TARGET).pdf ; else evince $(TARGET).pdf ; fi

submit: $(TARGET).pdf
	cp $(TARGET).pdf ../

print: $(TARGET).pdf
	lpr $(TARGET).pdf

.PHONY: all again touch clean veryclean view print
