.PHONY: build, generate, clean

build:
	cabal build

generate:
	cabal run blog generate
	cp static/files/chris_yoon.pdf out/resume/chris_yoon.pdf

clean:
	rm -rf out dist-newstlye

all: clean build generate
