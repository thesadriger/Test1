import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  base: '/reactjs-template',
  plugins: [
    // Используйте React dev server вместе с сборкой React приложения с помощью Vite.
    react(),
    // Позволяет использовать свойство compilerOptions.paths в tsconfig.json.
    tsconfigPaths(),
    // Позволяет использовать самоподписанные сертификаты для запуска dev сервера через HTTPS.
    basicSsl({
      name: 'test', // Имя сертификации
      domains: ['*.custom.com'], // Домены доверия
      certDir: '/path/to/your/certs' // Путь к каталогу сертификатов
    }),
  ],
  publicDir: './public',
  server: {
    // Разрешить доступ к dev серверу из других устройств в той же сети.
    host: true,
  },
});
