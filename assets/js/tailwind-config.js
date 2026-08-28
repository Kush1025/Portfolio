// Tailwind CDN config (must run after the CDN script has loaded)
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      colors: {
        // Deep, near-black neutrals
        ink: {
          950: '#07080B',   // page background
          900: '#0B0D11',   // alternating band
          800: '#101318',   // cards
          700: '#161A21',   // raised cards / hover
          600: '#1E232C',   // borders (strong)
          500: '#2A303B'
        },
        // Champagne gold accent
        primary: {
          50:  '#FBF7EE',
          100: '#F3E9D3',
          200: '#E7D5AE',
          300: '#DBC189',
          400: '#CFAF6D',
          500: '#C09A52',   // main accent
          600: '#A67F3D',
          700: '#82632F',
          800: '#5E4722',
          900: '#3C2D15'
        }
      },
      letterSpacing: {
        widest2: '0.22em'
      },
      maxWidth: {
        prose2: '68ch'
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both'
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  }
};
