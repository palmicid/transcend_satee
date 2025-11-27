# FROM node:20-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# CMD ["node", "src/main.js"]

FROM node:20-alpine
WORKDIR /app

# Copy package metadata and install
COPY package*.json ./
RUN npm ci

# Copy rest of the code
COPY . .

# Create log directory (for Logstash mount)
RUN mkdir -p /var/log/app

EXPOSE 3000
CMD ["node", "main.js"]
