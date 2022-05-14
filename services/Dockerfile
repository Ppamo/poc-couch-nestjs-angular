FROM node:18.1.0-buster
LABEL maintainer=pablo@ppamo.cl
EXPOSE 3000
WORKDIR /app
COPY src/app /app/
RUN apt update && apt -y upgrade && \
	printf "alias c='cd'; alias l='ls -plh'; alias la='ls -plah'" >> $HOME/.bashrc
RUN npm i -g @nestjs/cli
RUN yes | npm install
CMD ["nest", "start"]
