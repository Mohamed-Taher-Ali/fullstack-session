# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Ensure we copy package.json and package-lock.json correctly
COPY package.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 5000

# Start the application
CMD ["npm", "run", "start"]
