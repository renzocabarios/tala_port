# FROM node:20-alpine AS base



# ### Dependencies ###
# FROM base AS deps
# RUN apk add --no-cache libc6-compat git



# # Setup pnpm environment
# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable
# RUN corepack prepare pnpm@latest --activate

# WORKDIR /app

# COPY package.json pnpm-lock.yaml ./
# RUN pnpm install --frozen-lockfile --prefer-frozen-lockfile

# # Builder
# FROM base AS builder

# RUN corepack enable
# RUN corepack prepare pnpm@latest --activate

# WORKDIR /app

# COPY --from=deps /app/node_modules ./node_modules
# COPY . .
# RUN pnpm build


# ### Production image runner ###
# FROM base AS runner

# # Set NODE_ENV to production
# # ENV NODE_ENV production

# # Disable Next.js telemetry
# # Learn more here: https://nextjs.org/telemetry
# ENV NEXT_TELEMETRY_DISABLED 1

# # Set correct permissions for nextjs user and don't run as root
# RUN addgroup nodejs
# RUN adduser -SDH nextjs
# RUN mkdir .next
# RUN chown nextjs:nodejs .next

# # Automatically leverage output traces to reduce image size
# # https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# USER nextjs

# # Exposed port (for orchestrators and dynamic reverse proxies)
# EXPOSE 3000
# ENV PORT 3000
# ENV HOSTNAME "0.0.0.0"
# HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "wget", "-q0", "http://localhost:3000/health" ]

# # Run the nextjs app
# CMD ["node", "server.js"]


# Stage 1: Build the app
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm run build

# Stage 2: Serve the built app using a minimal image
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Install pnpm (for running production dependencies)
RUN npm install -g pnpm

# Copy the built application from the builder stage
COPY --from=builder /app ./

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]