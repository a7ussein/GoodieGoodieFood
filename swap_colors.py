import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

replacements = {
    '--pink-primary': '--red-primary',
    '--pink-hover': '--red-hover',
    '--pink-light': '--red-light',
    '--pink-bg': '--red-bg',
    '--pink-border': '--red-border',
    '#E84393': '#E01F20',
    '#D63384': '#B81313',
    '#F472B6': '#FD7A68',
    '#FBAED2': '#FFCDD2',
    '#FDE8F0': '#FFEBEE',
    'var(--pink': 'var(--red',
    '232, 67, 147': '224, 31, 32',
    '244, 114, 182': '253, 122, 104',
    '251, 174, 210': '255, 205, 210',
    '253, 232, 240': '255, 235, 238'
}

for old, new in replacements.items():
    css = css.replace(old, new)
    if 'var(' not in old:
        css = css.replace(old.lower(), new.lower())

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)
print("Color replacement complete.")
