# Stage 1: Build the application
FROM node:21-alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
#RUN npm ci --only=production
RUN npm ci 
COPY . .
RUN npm run build

# Stage 2: Setup production environment
FROM node:21-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

# Set the environment to production
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "dist/main"]
