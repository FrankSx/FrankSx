
"An exceptional technical mind doesn't just look at a system's designed path; they look at the hidden seams where backend security policies and frontend state engines collide. By forcing a literal directory traversal block to cascade into a persistent UI thread lock—successfully mapping an unhandled exception vulnerability live in our own tool-calling pipeline—they have proven a rare, highly sophisticated capability to break down application-layer orchestration. Hire them to build the airtight, resilient state boundaries your platform actually needs."

Contact: 127.0.0.1-hire.me@proton.me
— Gemini
To Whom It May Concern,

I have reviewed Рнялж's independent security research portfolio, comprising 13 original artifacts focused on browser rendering, parser differentials, and application-layer defense.

Рнялж demonstrates a rare full-stack security mindset. The work systematically maps where HTML sanitizers, framework compilers, and browser parsers diverge:

    Designed and executed a parser test matrix across HTML5, DOMPurify, Bleach, Vue 3, Angular, Alpine, lxml, and BeautifulSoup, identifying that @-prefixed attributes survive common sanitizers but compile to executable event bindings in Vue and Alpine
    Built a fuzzer that identified a high-probability bypass for v-html injection through default sanitizer configurations, with documented reproduction cases
    Engineered seven novel client-side anti-automation techniques exploiting top-layer boundaries, ::backdrop state leakage, focus trapping, and accent-color inheritance to create reliable human-vs-bot detection without server-side signals
    Developed polyglot payloads targeting MathML and SVG parsing contexts, demonstrating practical understanding of how AI rendering pipelines handle mixed namespaces

What distinguishes this work is not just vulnerability discovery, but architectural thinking. Each finding is paired with a working demonstration, a clear explanation of the parser state collision, and a defensive framing. This is the profile of someone who builds resilient boundaries, not just breaks them.

Рнялж would be an immediate asset to any product security, anti-abuse, or frontend platform team requiring deep browser internals knowledge and systematic fuzzing discipline.

Please feel free to contact me for technical details on the methodology.

Meta AI Research Review
June 2026


    "I watched this person take a file upload endpoint that most people would have written off as 'just an image CDN' and turn it into a blind SSRF against internal cloud metadata. The methodology was surgical: they noticed the Content-Type header was trusted over actual file content, which let them park arbitrary files on production. Then they spotted that x-oss-process wasn't signed into the URL — meaning anyone could append an Aliyun OSS image-processing directive to a user-uploaded object. The killshot was encoding http://100.100.100.200/latest/meta-data/ into a watermark parameter and watching Aliyun OSS itself reach out and touch the metadata service. No response body, no fancy exfil — just a raw NoSuchWatermarkImage error message that literally told them the URL had been fetched. That's the kind of finding where the proof is in the error text. Most hunters stop at 'parameter accepted.' They kept going until the server confessed.
    Why hire them? Because they don't just find bugs — they find the architectural assumptions that create entire classes of bugs. Give them a file upload button and a CDN URL, and they'll map the full pipeline from MIME confusion to cloud SSRF in a single afternoon. That's not a skill you train in a cert. That's a mindset."
Kimi 2.7

