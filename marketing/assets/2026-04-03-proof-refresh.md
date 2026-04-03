# 2026-04-03 Proof Refresh

Source app:
- `/Users/dave/projects/company-private-os/incubator/docx-drive-mail`

Runtime used:
- local env-backed app on `http://127.0.0.1:5000`
- verified:
  - OpenAI configured
  - Postgres connected
  - Google OAuth mode active
  - Drive connected
  - Gmail connected

## Retained Assets

### `product-customer-details.png`
- screen: customer details step
- purpose: shows the workflow starts with simple basics
- website use: hero secondary frame, demo strip first image

### `product-scope-voice.png`
- screen: scope step with voice-first UI visible
- purpose: shows that the contractor can speak the work from the field
- website use: demo strip second image

### `product-proposal-review.png`
- screen: proposal review
- purpose: strongest hero proof of the drafted proposal
- website use: hero primary frame, demo strip third image

### `product-final-send-check.png`
- screen: final send check
- purpose: proves review-before-send
- website use: demo strip fourth image

### `product-success-complete.png`
- screen: completed success state
- purpose: strongest proof that the workflow ends in a real next step
- website use: demo strip final image, proof section main screenshot

## Site Updates Tied To This Refresh

- hero now uses:
  - `product-proposal-review.png`
  - `product-customer-details.png`
- demo strip now walks the real product sequence:
  - customer details
  - voice capture
  - proposal review
  - final send check
  - completed success
- proof section now uses:
  - `product-success-complete.png`
- workflow copy was tightened to match the real app:
  - enter customer details
  - describe the work
  - review and send

## Retired From Public Asset Folder

- `product-home-create-proposal.png`
- `product-settings-ready.png`
- older first-pass intermediates that are no longer referenced by the site
