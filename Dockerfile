# ---- Stage 1: Build the app ----
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy source code and .env file
COPY . .

# Install dependencies
RUN npm install

# Build the Vite app (env vars injected here)
RUN npm run build

# ---- Stage 2: Serve with `serve` ----
FROM node:18-alpine

# Install `serve` globally
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy built app from previous stage
COPY --from=builder /app/dist ./dist

# Expose Railway port
EXPOSE 3000

# Serve the static app using the Railway-provided $PORT
CMD ["serve", "-s", "dist", "-l", "tcp:$PORT"]
