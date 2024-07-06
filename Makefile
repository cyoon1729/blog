.PHONY: build, generate, clean

build: clean
	cabal install --install-method=copy --installdir="bin/"

generate:
	bin/blog generate
	cp static/files/chris_yoon.pdf out/resume/chris_yoon.pdf

clean:
	rm -rf out dist-newstlye bin

all: clean build generate
