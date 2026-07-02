# Font selector fix

## Problem
The font setting was being saved correctly, but the selected option was not rendered as selected in the admin form. Because the lightweight blade-ish renderer does not support conditional selected attributes in the same way as Blade, the select box visually fell back to the first option.

## Fix
- The current font value is passed through a data attribute on each option.
- A tiny inline script sets the select's value after render.

## Result
- Saved font remains selected after save.
- Admin users no longer think the setting reverted to default.
