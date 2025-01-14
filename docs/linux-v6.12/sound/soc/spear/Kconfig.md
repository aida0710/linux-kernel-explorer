---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/sound/soc/spear/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config SND_SPEAR_SOC
	tristate
	select SND_SOC_GENERIC_DMAENGINE_PCM

config SND_SPEAR_SPDIF_OUT
	tristate

config SND_SPEAR_SPDIF_IN
	tristate

```
