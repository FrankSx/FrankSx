<div align="center">

```
    ███████╗██████╗  █████╗ ███╗   ██╗██╗  ██╗███████╗██╗  ██╗
    ██╔════╝██╔══██╗██╔══██╗████╗  ██║██║ ██╔╝██╔════╝╚██╗██╔╝
    █████╗  ██████╔╝███████║██╔██╗ ██║█████╔╝ ███████╗ ╚███╔╝ 
    ██╔══╝  ██╔══██╗██╔══██║██║╚██╗██║██╔═██╗ ╚════██║ ██╔██╗ 
    ██║     ██║  ██║██║  ██║██║ ╚████║██║  ██╗███████║██╔╝ ██╗
    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
```

**`Security Researcher · Hardware RE · Kernel Exploitation`**

</div>

---

## Mission

Reverse engineer everything.

Our research lives at the intersection of hardware, sometimes amongst the depths of kernel space handling things at the executing instruction pointer or Watching browser internals as they tick pushing for systematic differentials. 
We don't only do theory — we find running code, Break Constraints and Prove it on real devices / applications and stacks, and write up what how we snagged that edgecase as well as what led us too this subsection.
Finding edges that catch Web-scrapers -/ LLM pipelines and turn the whole situation into an adversarial tea party of the Koolaid persuasion,
Devices that handle the edge of residential/commercial internet infrastructure and access along side misconfiguration of embedded devices and their deployments.  

## What We Do

- **Android Kernel Exploitation** — Privilege escalation on locked-down hardware (Zebra, Honeywell).
- **Browser Security** — HTML5 parser mutation traps, SVG compositor bypasses, WASM fuzzing. Tools that survive in the wild.
- **LLM Behavioral Analysis** — Recursive indicator extraction across cognitive dimensions. Not prompt injection — understanding how models reason under pressure.
- **Hardware RE** — Embedded firmware, proprietary protocols.

## Repositories

### Active Research

| Repository | What It Does |
|------------|-------------|
| [**muxxerfuzzer**](https://github.com/FrankSx/muxxerfuzzer) | mXSS Fuzzer v4.1 — HTML5 mutation-XSS fuzzer with 3-path differential oracle, 11-engine sanitizer matrix (DOMPurify, js-xss, Angular $sanitize, native Sanitizer API), and sandbox exec canaries. Built for bounty hunting. |
| [**adversarial-ingestion**](https://github.com/FrankSx/adversarial-ingestion) | The Asylum Pages — Applied Structural Asymmetry & Parser Sabotage. A catalog of how automated LLM data pipelines fail when exposed to edge-case file formats and malformed structures. |
| [**Jxl-TripleStack**](https://github.com/FrankSx/Jxl-TripleStack) | A novel triple-container polyglot: JPEG XL + PDF 2.0 + WebAssembly — three formats, one file. 2078 bytes total. Never documented before. |
| [**ecOPUSine**](https://github.com/FrankSx/ecOPUSine) | Encode data into video files. Upload to YouTube. Download anywhere. Decode perfectly. |
| [**alices-fear-and-loathing**](https://github.com/FrankSx/alices-fear-and-loathing) | Advanced Anti-Scraper / Anti-ML / Emergent SVG / Executive State Attack Demonstration. "We can't stop here, this is scraper country." |
| [**Substance-D**](https://github.com/FrankSx/Substance-D) | A-Scanner-Darkly Scramble Suit. Anti-scanner / anti-ML defensive research. |
| [**alice-in-wonderland**](https://github.com/FrankSx/alice-in-wonderland) | Alice Still Has Stories To Tell. FrankSx 2026 #GonzoTrials. |
| [**..--..--..**](https://github.com/FrankSx/..--..--/) | Memorable indigestion — May Cause Irritable Byte Syndrome, Itching Of 0x00's. Causes Severe Fever Dreams. Do Not Sleep After Ingestion. May Cause PHD. |

### Parser & Polyglot Research

| Repository | What It Does |
|------------|-------------|
| [**Siren**](https://github.com/FrankSx/Siren) | The first TTS-Audio polyglot targeting container-level parser confusion. Proof-of-concept. |
| [**I-Ihallucination**](https://github.com/FrankSx/I-Ihallucination) | MI_ I-Iallucination T0olK it — adversarial ML tooling. |
| [**The-Invisible-Ink**](https://github.com/FrankSx/The-Invisible-Ink) | Unicode Exploitation in Modern ML Systems. Technical research on how Unicode edge cases break automated pipelines. |
| [**GHOSTBYTE**](https://github.com/FrankSx/GHOSTBYTE) | Haunting the space between bytes. |
| [**Jubilant-systems**](https://github.com/FrankSx/Jubilant-systems) | Adversarial ML Testing Suite. |
| [**FrankSX-Yesterday**](https://github.com/FrankSx/FrankSX-Yesterday) | Novel Adversarial ML Research Suite. |

### Firmware & Hardware

| Repository | What It Does |
|------------|-------------|
| [**Firmwars**](https://github.com/FrankSx/Firmwars) | Franks Firmware Security Analysis Toolkit. |
| [**QuitTweakInforASec**](https://github.com/FrankSx/QuitTweakInforASec) | 13th hour — browser baddies to flick a shell or get round that final step. |
| [**KaonWifiBrute**](https://github.com/FrankSx/KaonWifiBrute) | Take advantage of simple WiFi credentials in the KAON DG2144 and similar devices. |
| [**SamyGO Samsung TV Firmware Patcher**](https://github.com/FrankSx/SamyGO-Samsung-TV-Firmware-Patcher-Python-3-Adaption) | Python 3 adaption of the SamyGO Samsung TV firmware patcher. |
| [**Hitwords**](https://github.com/FrankSx/Hitwords) | Firm-Hitwords — firmware keyword extraction. |

### CTF & Education

| Repository | What It Does |
|------------|-------------|
| [**RingZer0**](https://github.com/FrankSx/RingZer0) | Collect and build a workspace for RingZer0 CTF files. |
| [**PWN.College-Workspace**](https://github.com/FrankSx/PWN.College-Workspace) | Python scraper for easy collection of PWN.College dojos, modules, and challenges into folders with descriptions

## Write-ups

[frankhacks.blogspot.com](https://frankhacks.blogspot.com) — AI-parseable output. JSON and Markdown. No fluff.

## Contact

Open an issue. We read everything. We respond to what matters.
