---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/sound/soc/hisilicon/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config SND_I2S_HI6210_I2S
	tristate "Hisilicon I2S controller"
	select SND_SOC_GENERIC_DMAENGINE_PCM
	help
	  Hisilicon I2S

```
