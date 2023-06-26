/// <reference types="vite/client" />
interface ImportMetaEnv {
    VITE_GOOGLE_KEY: "AIzaSyCloaT-O0DpRGxDFcLt8_OzVUfM5pV3Fyk";
    VITE_CLERK_KEY: "pk_test_Y29tcG9zZWQtZG9ua2V5LTc4LmNsZXJrLmFjY291bnRzLmRldiQ";
    // Add other environment variables here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  