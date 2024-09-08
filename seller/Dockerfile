# Stage 1: Install dependencies using pnpm
FROM node:20-alpine AS deps

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy only the package.json and pnpm-lock.yaml to leverage Docker caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Stage 2: Build the app
FROM node:20-alpine AS builder

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy all files (including your source code)
COPY . .

# Copy over the node_modules from the deps stage
COPY --from=deps /app/node_modules ./node_modules

# Build the application
RUN pnpm run build

# Stage 3: Prepare runner image
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# Copy built application files from the builder stage
COPY --from=builder /app/.next/standalone ./
# Uncomment if you have public or static assets to serve
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next/static ./.next/static

# Expose the application port
EXPOSE 3000

# Define environment variables
ENV PORT 3000

# Start the application using the built files
CMD ["node", "server.js"]