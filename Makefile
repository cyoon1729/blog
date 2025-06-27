.PHONY: build, generate, clean

build: clean
	cabal install --installdir="bin/"

generate:
	bin/blog generate
	cp static/files/chris_yoon.pdf out/resume/chris_yoon.pdf

regenerate:
	rm -rf out
	bin/blog generate

clean:
	rm -rf out dist-newstlye bin

all: clean build generate
