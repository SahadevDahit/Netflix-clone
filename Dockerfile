# Use the latest Node.js 18 alpine image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (production mode for smaller image)
RUN apk add --no-cache libc6-compat && npm install

# Copy the entire project directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000 (default Next.js port)
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]
