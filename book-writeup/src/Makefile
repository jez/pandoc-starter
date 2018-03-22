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
# make                  Compile all *.md files to PDFs
# make <filename>.pdf   Compile <filename>.md to a PDF
# make <filename>.tex   Generate the intermediate LaTeX for <filename>.md
#
# make view             Compile $(TARGET).md to a PDF, then view it
# make again            Force everything to recompile
#
# make clean            Get rid of all intermediate generated files
# make veryclean        Get rid of ALL generated files:
#
# make print            Send $(TARGET).pdf to the default printer:
#
# ============================================================================


TARGET = sample

SOURCES = $(shell find . -name '*.md')

PANDOC_FLAGS =\
	--template template.tex \
	-f markdown+tex_math_single_backslash \
	-t latex \

LATEX_FLAGS = \

PDF_ENGINE = xelatex
PANDOCVERSIONGTEQ2 := $(shell expr `pandoc --version | grep ^pandoc | sed 's/^.* //g' | cut -f1 -d.` \>= 2)
ifeq "$(PANDOCVERSIONGTEQ2)" "1"
    LATEX_FLAGS += --pdf-engine=$(PDF_ENGINE)
else
    LATEX_FLAGS += --latex-engine=$(PDF_ENGINE)
endif

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
	if [ "Darwin" = "$(shell uname)" ]; then open $(TARGET).pdf ; else xdg-open $(TARGET).pdf ; fi

.PHONY: all clean veryclean view
