herokuCommands.md

push your commands to heroku:
git push heroku master

make sure app is live:
heroku ps:scale web=1

open app on web:
heroku open

open app locally:
heroku local web

see app logs:
heroku logs --tail

Dyno list (environments running):
heroku ps

how to scale up dynos (add stuff):
heroku ps:scale web=0 (scales to 0)