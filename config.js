/**
 * RBAF-SEA Configuration Loader
 * 
 * This file loads Supabase credentials from:
 * 1. Environment variables (production)
 * 2. localStorage (if saved locally)
 * 3. Defaults (empty strings - will warn user)
 * 
 * NEVER hardcode credentials in this file
 */

window.RBAF_CONFIG = {
  // Load from environment variables or localStorage
  SUPABASE_URL: import.meta.env?.VITE_SUPABASE_URL || 
                localStorage.getItem('rbaf_supabase_url') || 
                '',
  
  SUPABASE_ANON: import.meta.env?.VITE_SUPABASE_ANON || 
                 localStorage.getItem('rbaf_supabase_key') || 
                 '',
  
  ADMIN_EMAIL: import.meta.env?.VITE_ADMIN_EMAIL || 
               localStorage.getItem('rbaf_admin_email') || 
               '',
  
  /**
   * Validate configuration is complete
   */
  validate() {
    const missing = [];
    if (!this.SUPABASE_URL) missing.push('SUPABASE_URL');
    if (!this.SUPABASE_ANON) missing.push('SUPABASE_ANON_KEY');
    if (!this.ADMIN_EMAIL) missing.push('ADMIN_EMAIL');
    
    if (missing.length > 0) {
      console.warn('⚠️ RBAF Configuration incomplete. Missing: ' + missing.join(', '));
      console.warn('📋 See SECURITY.md for setup instructions');
      return false;
    }
    return true;
  },
  
  /**
   * Dev-only helper: Set credentials locally (for testing only)
   * Usage: RBAF_CONFIG.setLocal('url', 'anon_key', 'admin@email.com')
   */
  setLocal(url, anon, email) {
    if (!window.location.hostname.includes('localhost')) {
      console.error('❌ Local config can only be set in development');
      return;
    }
    localStorage.setItem('rbaf_supabase_url', url);
    localStorage.setItem('rbaf_supabase_key', anon);
    localStorage.setItem('rbaf_admin_email', email);
    console.log('✅ Credentials saved to localStorage (dev only)');
    window.location.reload();
  }
};

// Validate on load
window.addEventListener('load', () => {
  if (!RBAF_CONFIG.validate()) {
    console.error('🔒 Admin panel will not function without configuration');
  }
});
