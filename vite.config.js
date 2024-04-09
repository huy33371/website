import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Load environment variables
const env = loadEnv(process.env.NODE_ENV, process.cwd());

export default defineConfig(({ mode }) => {
    // Merges process.env with environment variables loaded from .env file
    process.env = {...process.env, ...env};

    return {
        plugins: [react()],
        server: {
            // Use parseInt to convert port to number
            port: parseInt(process.env.VITE_PORT) || 3000,
            host: '0.0.0.0'
        }
    };
});
