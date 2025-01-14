---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/sound/atmel/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
menu "Atmel devices (AT91)"
	depends on ARCH_AT91

config SND_ATMEL_AC97C
	tristate "Atmel AC97 Controller (AC97C) driver"
	select SND_PCM
	select SND_AC97_CODEC
	depends on ARCH_AT91
	help
	  ALSA sound driver for the Atmel AC97 controller.

endmenu

```
