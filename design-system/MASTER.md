# Design System: Hindi Health Blog for Parents

## 1. Aesthetic Direction
**Theme:** "Compassionate Medical Authority"
- **Tone:** Calm, respectful, non-judgmental, practical.
- **Visual Style:** Clean, modern, spacious, soft medical.
- **Audience:** Indian parents (45-65), non-medical background.
- **Key Feeling:** "A wise doctor explaining things gently."

## 2. Color Palette
These colors are chosen to be soothing and trustworthy.

| Role | Color Name | Hex | Tailwind Class | Usage |
|------|------------|-----|----------------|-------|
| **Primary** | Trust Blue | `#3B82F6` | `blue-500` | Primary buttons, links, key highlights. |
| **Secondary** | Calm Green | `#10B981` | `emerald-500` | Success states, natural/safe indicators. |
| **Background** | Soft Cloud | `#F0F9FF` | `sky-50` | Main page background (very light blue tint). |
| **Surface** | Pure White | `#FFFFFF` | `white` | Cards, content blocks. |
| **Text** | Deep Slate | `#334155` | `slate-700` | Primary body text (readable, not harsh black). |
| **Heading** | Dark Navy | `#1E293B` | `slate-800` | Headings, titles. |
| **Accent** | Gentle Warning | `#F59E0B` | `amber-500` | Caution notes, "myth" highlights. |
| **Error** | Soft Red | `#EF4444` | `red-500` | Stop/Danger (use sparingly). |

## 3. Typography
**Font Family:** 'Noto Sans Devanagari', sans-serif.
- **Why:** Excellent readability for Hindi, modern, and clean. Google Font.
- **Weights:**
  - Regular (400): Body text.
  - Medium (500): Subheadings, buttons.
  - Bold (700): Main headings.

**Scale (Mobile First):**
- **H1 (Hero):** 32px (md: 48px) - Bold
- **H2 (Section):** 24px (md: 36px) - Bold
- **H3 (Subsection):** 20px (md: 24px) - Medium
- **Body:** 18px (md: 20px) - Regular (Larger for parents)
- **Small:** 14px (md: 16px) - Regular

## 4. Layout & Spacing
- **Container:** `max-w-4xl` (Reading focus), centered.
- **Section Spacing:** `py-12` or `py-16` (Generous breathing room).
- **Card Padding:** `p-6` or `p-8`.
- **Gap:** `gap-6` or `gap-8`.

## 5. UI Components
- **Cards:** White background, `rounded-2xl`, `shadow-sm` (soft shadow), `border border-slate-100`.
- **Buttons:** `rounded-full` (friendly), `px-6 py-3`, `text-lg`.
  - Primary: Blue bg, white text, hover: brightness-110.
  - Secondary: White bg, Blue border, Blue text.
- **Icons:** Lucide React. Simple, rounded strokes.
- **Dividers:** Soft gradients or simple lines with ample margin.

## 6. Animations (Framer Motion)
- **Scroll Reveal:** Elements fade in and slide up gently (`y: 20 -> 0`, `opacity: 0 -> 1`) as the user scrolls.
- **Micro-interactions:** Buttons scale slightly (`scale: 1.05`) on hover.
- **Accordions:** Smooth height transition for FAQs.
- **Diagrams:** Simple SVG animations (e.g., arrows moving, bars filling).

## 7. Accessibility (Critical for Parents)
- **Contrast:** Ensure text is dark enough against the light background.
- **Touch Targets:** Buttons must be large and easy to tap (min 44px).
- **Language Toggle:** Clear switch at the top (Visual only for Phase 0).

## 8. Specific Visual Metaphors
- **Metabolism:** Battery icon or "Energy" gauge.
- **Hormones:** Simple colorful dots/shapes moving between "Gut" and "Brain".
- **Weight Loss:** Scales, Tape measures (friendly style).
