# React Redux Simple Starter

Code splitting effectively
- ONLY expose files via index which are referenced outside of the feature-group
- Any file that is referenced more than once in two different trees go to the main src - even if its in a section.