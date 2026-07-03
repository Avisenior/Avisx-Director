# SKILL: landing-update
## פרויקט: AvisX Director - Landing Page

### קובץ עבודה
קובץ יחיד: `C:\Users\avise\Projects\LANDING PAGE\index.html`
לפני כל שינוי - לקרוא את הקטע הרלוונטי בקובץ.

---

### ארכיטקטורה
- HTML + CSS + JS בקובץ אחד (~1450 שורות)
- פריסה: Vercel דרך GitHub (העלאה = push לגיטהאב)
- ספריית Vimeo Player API נטענת ב-`<head>`

---

### סרטוני Vimeo - 8 סרטונים בפורטפוליו

| ID | שם | יחס |
|---|---|---|
| 1177017727 | FREDDY KRUGER | 9:16 |
| 1177019770 | PURIM UPS MOVIE | 9:16 |
| 1177018380 | פרסומת אופניים | 9:16 |
| 1177018722 | REVIVE AD | 9:16 |
| 1177018547 | SAVE THE DATE | 16:9 |
| 1177017155 | Happy 80th Hanna | 16:9 |
| 1177016569 | פרסומת פיצה | 16:9 |
| 1177018091 | Boxing Movie | 16:9 |

**Hero רקע:** Boxing Movie (1177018091) עם `background=1`

---

### כללים קריטיים - אל תשבור אלה

1. **Vimeo params בפורטפוליו:** `autoplay=1&muted=1&loop=1&autopause=0&controls=0&title=0&byline=0&portrait=0&playsinline=1` - אל תשנה
2. **Hero video params:** `background=1&autoplay=1&muted=1&loop=1&autopause=0&playsinline=1` - אל תשנה
3. **body > * rule:** הכלל הנוכחי ממוקד - `body > section, body > .ticker-wrap, body > .video-marquee, body > .mobile-menu, body > .highlight-band` - אל תחזיר לסלקטור הרחב `body > *` כי זה שובר את EqualWeb
4. **EqualWeb:** מטופל ע"י הסרת הכלל הרחב - אל תוסיף CSS שמכוון ל-`[id^="IND"]` כי שובר את הפאנל
5. **`pointer-events:none`** על iframes בפורטפוליו - חובה כדי שה-hover יעבוד

---

### מובייל - הגדרות חשובות

- וידאו Hero **מוצג** במובייל (לא מוסתר) - זה מכוון
- פורטפוליו: lazy loading עם `rootMargin:'80px'`
- Touch בפורטפוליו: טאפ = mute/unmute (לא pause/play)
- Marquee strip: מוסתר במובייל (`display:none`) - 16 iframes כבדים מדי

---

### z-index hierarchy

| אלמנט | z-index |
|---|---|
| `#sky-bg` | 0 |
| `#stars-global` | 1 |
| sections / content | 2 |
| nav | 500 |
| `.film-counter`, `.wa-float` | 600 |
| glowing trail canvas | 9996 |
| `.cursor` | 9998 |
| `#scroll-bar` | 9999 |
| skip-link | 10000 |

---

### פיצ'רים שהושלמו

- Hero: וידאו רקע מלא-מסך (Boxing Movie) + resume בחזרה לhero
- CTA: כפתור "בואו נדבר" עם pulse ring מונפש
- Nav: smart hide (נעלם בגלילה למטה, חוזר למעלה) + active section highlight
- Portfolio: שורה אחת אופקית עם scroll - portrait → landscape
- Cursor: glowing trail canvas (דסקטופ בלבד)
- כפתור חזור למעלה: מופיע אחרי 400px
- EqualWeb: צד ימין, scale 0.7
- WhatsApp float: צד שמאל תחתון
- מייל: `avi@avisx-director.com`
