.PHONY: build, generate, clean

build:
	cabal install --installdir="bin/"

generate:
	bin/blog generate
	cp static/files/chris_yoon.pdf out/resume/chris_yoon.pdf

clean:
	rm -rf out dist-newstlye

all: clean build generate
