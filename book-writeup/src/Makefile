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
# Compile the book:
#
#     make
#
# Compile the LaTeX that Pandoc uses to generate a PDF:
#
#     make $(TARGET).tex
#
# Compile <filename>.tex to a PDF:
#
#     Not supported. Look up the documentation for `pdflatex`
#
# Compile $(TARGET).md to a PDF, then view the compiled PDF:
#
#     make view
#
# Get rid of all intermediate generated files:
#
#     make clean
#
# Get rid of ALL generated files:
#
#     make veryclean
#
# ============================================================================

TARGET = sample

SOURCES = $(shell find . -name '*.md')

PANDOC_FLAGS =\
	--template template.tex \
	-f markdown+tex_math_single_backslash \
	-t latex \

LATEX_FLAGS = \
	--latex-engine=xelatex

all: $(TARGET).pdf

$(TARGET).pdf: $(SOURCES) template.tex
	pandoc $(PANDOC_FLAGS) $(LATEX_FLAGS) -o $@ $(SOURCES)

$(TARGET).tex: $(SOURCES) template.tex
	pandoc --standalone $(PANDOC_FLAGS) -o $@ $(SOURCES)

clean:
	rm -f *.aux *.log *.nav *.out *.snm *.toc *.vrb tags || true

veryclean: clean
	rm -f $(TARGET).pdf

view: $(TARGET).pdf
	if [ "Darwin" = "$(shell uname)" ]; then open $(TARGET).pdf ; else evince $(TARGET).pdf ; fi

.PHONY: all clean veryclean view
