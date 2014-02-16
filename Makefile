
build: clean components
	@component build --dev --use component-scss

components: component.json
	@component install --dev

clean:
	rm -fr build components

npm:
	@npm i --quiet

server:
	@open http://localhost:5000
	@node server.js

demo: npm build server

.PHONY: clean
