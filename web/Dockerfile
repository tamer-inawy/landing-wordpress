FROM node:20.3-slim

WORKDIR /app

RUN npx create-next-app landingpage --ts --eslint --src-dir --no-tailwind --app --import-alias="@/*"

WORKDIR /app/landingpage

COPY . /app/landingpage/

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
