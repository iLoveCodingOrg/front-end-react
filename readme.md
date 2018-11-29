# React Redux Simple Starter

## Code splitting effectively
- ONLY expose files via index which are referenced outside of the feature-group
- Any file that is referenced more than once in two different trees go to the main src - even if its in a section.

## Critical paths to test
- Login 
  /login
- Buy
  /pricing
- Video complete
  /courses/js2
- Courses view
  /courses/js2
- Course lesson view
  /courses/js2
- Page
  /pages/about
- Page not found
  /pages/123