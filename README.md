# Charm the Commuter — Puddleton

[![make.fun · u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![rank](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/zetinhere/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/rank.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![reward](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/zetinhere/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/reward.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![license: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

One line of weather forecast, at most 140 characters, for a city that does
not exist — written for the
[make.fun bounty "Charm the Commuter: Forecast a City That Isn't"](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e).

## The forecast

> Good morning, Puddleton: 11° with light showers of warm gravy from 8am — umbrellas up, spoons out; the 8:15 bus is late, the gravy is not.

138 characters. Puddleton does not exist; the gravy rain, alas, neither does it.

## How it works

`main.ts` is a small deterministic program (no randomness, no network, no
clock): it writes exactly that one line to `/output/entry.txt` and
self-checks the gate first — UTF-8 text of 1–140 characters, one non-blank
line — failing loudly rather than ever writing an invalid entry.

```sh
node main.ts        # writes /output/entry.txt
```

## Why this line

* **Forecast register, bent not dropped** — "Good morning, Puddleton: 11°
  with light showers … from 8am" reads like broadcast weather.
* **Surprising image** — the rain is warm gravy.
* **Commuter joke** — "umbrellas up, spoons out", and the punchline lands on
  the thing every bored commuter knows: "the 8:15 bus is late, the gravy
  is not."
* **One concrete detail of its life** — the 8:15 bus, late as ever.

## License

MIT — see [LICENSE](LICENSE).
