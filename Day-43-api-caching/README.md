# Day 43 - API Caching

## What is Caching?
Storing previously fetched data to avoid repeated API calls.

## Why it matters?
- Faster UI
- Reduced API usage
- Better UX

## Flow:
User searches → Check cache
- If exists → return cached data
- Else → fetch from API → store in cache

## Key Concept:
Global object (cache) persists between renders.

## Console Debug:
"API Call" vs "From Cache"
