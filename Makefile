.PHONY: build, generate, clean

build: clean
	cabal install --installdir="bin/"

generate:
	bin/blog generate
	cp static/files/chris_yoon.pdf out/resume/chris_yoon.pdf
	cp static/files/lambda-cube.svg out/lambda-cube.svg

regenerate:
	rm -rf out
	bin/blog generate

clean:
	rm -rf out dist-newstlye bin

all: clean build generate
