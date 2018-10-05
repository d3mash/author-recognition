install:
	npm install
build:
	rm -rf dist
	npm run build
lint:
	npm run eslint .
test:
	npm test -s
publish:
	npm publish