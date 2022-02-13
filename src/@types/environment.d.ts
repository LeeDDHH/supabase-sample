/// <reference types="node" />

declare namespace NodeJS {
  // 環境変数名の定義
  interface ProcessEnv {
    /** 現在の Node.js 実行環境 */
    readonly NODE_ENV: 'development' | 'production' | 'test';

    /** supabaseの情報 */
    readonly REACT_APP_SUPABASE_URL: string;
    readonly REACT_APP_SUPABASE_ANON_KEY: string;
  }
}
