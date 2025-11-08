# Font Setup Instructions

## Current Font Configuration

- **Primary Font**: League Spartan (for main content and headings)
- **Secondary Font**: Sanchez (for accent text, subtitles, taglines)

## To See the Fonts

1. **Restart the Development Server**:
   ```bash
   # Stop the current server (Ctrl+C)
   # Then restart:
   npm run dev
   ```

2. **Clear Browser Cache**:
   - Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
   - Or clear browser cache completely

3. **Verify Fonts are Loading**:
   - Open browser DevTools (F12)
   - Go to Network tab
   - Filter by "Font"
   - Refresh the page
   - You should see League Spartan and Sanchez fonts loading

## Font Usage

- **League Spartan** (`font-sans`): Used for all body text, headings, and main content
- **Sanchez** (`font-serif`): Used for:
  - Tagline: "Engineering Tomorrow. Driving Innovation."
  - Section subtitles
  - Footer tagline

## Troubleshooting

If fonts still don't appear:

1. Check browser console for errors
2. Verify fonts are in `app/layout.tsx`
3. Check that `tailwind.config.ts` has the font families configured
4. Try a different browser
5. Check if fonts are blocked by ad blockers

## Testing Fonts

To test if fonts are working, inspect any text element in DevTools and check:
- Computed styles should show "League Spartan" or "Sanchez"
- Font-family in CSS should show the variable names

