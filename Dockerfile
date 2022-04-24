FROM node:16.14.2-alpine
WORKDIR /app/

# パッケージインストールのためのコマンド追加
COPY ./app/package.json ./app/yarn.lock ./
RUN yarn install --frozen-lockfile
# 全ファイルをコピー
COPY ./app/ ./

RUN yarn build

CMD [ "yarn", "start ]

