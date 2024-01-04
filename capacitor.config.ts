import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.esaf.mh',
  appName: 'mh',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
