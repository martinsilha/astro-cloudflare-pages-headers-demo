// @ts-check
import { defineConfig } from 'astro/config'
import { astroCloudflarePagesHeaders } from '../index'

// https://astro.build/config
export default defineConfig({
  server: {
    headers: {
      'cache-control': 'public, max-age=0, must-revalidate',
      'x-frame-options': 'DENY',
      'x-content-type-options': 'nosniff',
      'x-xss-protection': '1; mode=block',
      'referrer-policy': 'same-origin',
      'feature-policy': "geolocation 'self'; microphone 'self'; camera 'self'",
      'content-security-policy': `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; media-src 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests; block-all-mixed-content;`,
      'strict-transport-security': 'max-age=31536000; includeSubDomains',
      'permissions-policy': "geolocation=(self), microphone=(self), camera=(self)"
    },
  },
  integrations: [astroCloudflarePagesHeaders()],
})
