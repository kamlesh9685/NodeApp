# Stage 1: Build
FROM node:18 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Run
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm ci --only=production

# Copy compiled JS
COPY --from=builder /app/dist ./dist

EXPOSE 3001
CMD ["node", "dist/index.js"]
