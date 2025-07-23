# ------------------------------
# Stage 1: Build the Vite App
# ------------------------------
FROM node:18-alpine AS builder

# Set working directory inside container
WORKDIR /app

# Copy package files and source code
COPY . .

# Copy env variables for Vite (must be named VITE_*)
COPY .env .env

# Install dependencies
RUN npm install

# Build the frontend app (TypeScript + React + Vite)
RUN npm run build


# ------------------------------
# Stage 2: Serve with `serve`
# ------------------------------
FROM node:18-alpine

# Install `serve` globally to serve static files
RUN npm install -g serve

# Set working directory for runtime
WORKDIR /app

# Copy built output from previous stage
COPY --from=builder /app/dist ./dist

# Railway will expose a dynamic port (e.g. 44321, etc)
EXPOSE 3000

# Use shell form CMD so $PORT gets replaced correctly
CMD serve -s dist -l tcp:$PORT
