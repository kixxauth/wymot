wymot
=====

What You Missed on Twitter uses https://github.com/AvianFlu/ntwitter to stream your feed.

1. Follow the instructions on the repo page for "Setup API"
2. Copy `default.config.json` to `config.json` and enter in all the right keys
3. Run `./manage.sh setup && ./manage.sh test`
4. Run `./manage.sh run`

## Run

	./manage run

Consumes updates from Twitter users you follow, and print out an abridged
version of any updates that contain a link to your console. If you want to get
all gray bearded about it, you can do something like this:

	./manage run > ~/tweets/2013-11-11.txt

## Help
Run the manage script with no arguments to get help:

	./manage.sh

## Test

	./manage test

## Future

It would be cool to output tweets in pretty HTML so the links would be more
clickable and users would smile.

It would be even cooler to push links right from WYMOT to Pocket and Instaper.

