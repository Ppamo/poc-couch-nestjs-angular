FROM node:12.22.12
LABEL maintainer=pablo@ppamo.cl
EXPOSE 4200
WORKDIR /app
COPY src/front /app/
RUN apt update && apt -y upgrade && \
	printf "alias c='cd'; alias l='ls -plh'; alias la='ls -plah'" >> $HOME/.bashrc
RUN npm install -g @angular/cli bootstrap
RUN yes | npm install
CMD ["ng", "serve", "--host", "0.0.0.0"]
